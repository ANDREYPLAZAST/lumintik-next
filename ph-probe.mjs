import { chromium } from 'playwright';

const BASE = 'http://localhost:3987';
const captured = [];
const netlog = [];

function decodeBody(req) {
  try {
    const pd = req.postData();
    if (!pd) return null;
    return pd;
  } catch { return null; }
}

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();

await page.route('**/ingest/**', async (route) => {
  const req = route.request();
  const url = req.url();
  const method = req.method();
  netlog.push(`${method} ${url.replace(BASE, '')}`);
  if (method === 'POST') {
    const body = decodeBody(req);
    let events = [];
    if (body) {
      // body may be url-encoded "data=<base64|json>" or raw json
      let raw = body;
      const m = /(^|&)data=([^&]*)/.exec(body);
      if (m) raw = decodeURIComponent(m[2]);
      try {
        let json = JSON.parse(raw);
        events = Array.isArray(json) ? json : (json.batch ?? [json]);
      } catch {
        try {
          const dec = Buffer.from(raw, 'base64').toString('utf8');
          let json = JSON.parse(dec);
          events = Array.isArray(json) ? json : (json.batch ?? [json]);
        } catch { events = [{ event: '<unparsed>', raw: raw.slice(0, 200) }]; }
      }
    }
    for (const e of events) {
      captured.push({
        event: e.event,
        url: e?.properties?.$current_url,
        pathname: e?.properties?.$pathname,
        locale: e?.properties?.locale,
        pv: e?.properties?.$pageview_id,
        prev: e?.properties?.$prev_pageview_id,
      });
    }
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"status":1}' });
    return;
  }
  await route.continue();
});

page.on('response', async (r) => {
  const u = r.url();
  if (u.includes('/ingest/') && r.request().method() === 'GET') {
    netlog.push(`  -> ${r.status()} ${u.replace(BASE, '')}`);
  }
});

function dump(label) {
  console.log(`\n===== ${label} =====`);
  for (const c of captured) console.log(JSON.stringify(c));
  captured.length = 0;
}

await page.goto(`${BASE}/es`, { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);
dump('1. carga inicial /es');

// navegacion cliente a una pagina de servicio (Link)
await page.goto(`${BASE}/es`, { waitUntil: 'networkidle' });
captured.length = 0;
const serviceLink = page.locator('a[href^="/es/services/"]').first();
if (await serviceLink.count()) {
  await serviceLink.click();
  await page.waitForTimeout(2500);
  dump('2. click <Link> a /es/services/*  (url=' + page.url() + ')');
} else {
  console.log('no service link found');
}

// cambio de idioma es -> en
captured.length = 0;
await page.goto(`${BASE}/es`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
captured.length = 0;
const enLink = page.locator('a[hreflang="en-US"], a[hreflang="en"]').first();
if (await enLink.count()) {
  await enLink.click();
  await page.waitForTimeout(2500);
  dump('3. LanguageSwitcher es -> en (url=' + page.url() + ')');
} else {
  console.log('no language link found; hrefs:', await page.locator('a').evaluateAll(as => as.map(a => a.getAttribute('href')).slice(0, 40)));
}

// ancla en la misma pagina
captured.length = 0;
await page.goto(`${BASE}/es`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
captured.length = 0;
await page.evaluate(() => { window.location.hash = '#contact'; });
await page.waitForTimeout(1500);
await page.goBack();
await page.waitForTimeout(1500);
dump('4. hash #contact + back (url=' + page.url() + ')');

// query string
captured.length = 0;
await page.goto(`${BASE}/es?utm_campaign=verano%20rebajas&utm_source=x`, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
dump('5. carga con query utm_campaign=verano%20rebajas');

// trailing slash
captured.length = 0;
await page.goto(`${BASE}/es/services/applied-ai/`, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
dump('6. carga /es/services/applied-ai/ (con barra final)');

console.log('\n===== peticiones /ingest =====');
console.log([...new Set(netlog)].join('\n'));

await browser.close();
