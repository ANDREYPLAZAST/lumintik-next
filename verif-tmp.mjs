import { chromium } from 'playwright';
import zlib from 'node:zlib';
const BASE='http://localhost:3987';
const UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const browser = await chromium.launch();
const ctx = await browser.newContext({ userAgent: UA });
await ctx.addInitScript(() => { Object.defineProperty(navigator, 'webdriver', { get: () => false }); });
const page = await ctx.newPage();
const seen=[];
page.on('request', r => {
  const u=r.url();
  if(!u.includes('/ingest/')) return;
  const path=u.replace(BASE,'').split('?')[0];
  if(r.method()!=='POST'){ seen.push('GET '+path); return; }
  seen.push('POST '+path);
  let body=''; const b=r.postDataBuffer();
  if(b){ try{ body=zlib.gunzipSync(b).toString('utf8'); }catch{ body=b.toString('utf8'); } }
  if(body.startsWith('data=')){ try{ body=Buffer.from(decodeURIComponent(body.slice(5).replace(/\+/g,'%20')),'base64').toString('utf8'); }catch{} }
  try {
    const j=JSON.parse(body);
    const arr=Array.isArray(j)?j:(j.batch||[j]);
    for(const e of arr){ if(e.event) console.log('   EV', e.event, '| $current_url=', e.properties?.$current_url, '| $pathname=', e.properties?.$pathname); }
  } catch {}
});
for (const p of ['/es','/es/','/es/services/applied-ai/']) {
  console.log('\n##### ' + p);
  await page.goto(BASE+p, { waitUntil:'load' });
  await page.waitForTimeout(10000);
}
console.log('\n=== endpoints /ingest vistos ===');
console.log([...new Set(seen)].join('\n'));
await browser.close();
