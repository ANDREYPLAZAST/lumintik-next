/**
 * Blue radial + conic light gradient that lives only behind the hero area.
 * Pure presentational component — fully static, server-rendered.
 */
export function HeroLights() {
  return (
    <div
      aria-hidden
      className="absolute h-[1000px] w-full z-[1] left-0 top-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(59,130,246,0.45) 0%, rgba(96,165,250,0.25) 25%, rgba(255,255,255,0) 60%)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 200deg at 50% -5%, rgba(255,255,255,0) 0deg, rgba(96,165,250,0.55) 30deg, rgba(255,255,255,0) 60deg, rgba(59,130,246,0.5) 95deg, rgba(255,255,255,0) 130deg, rgba(147,197,253,0.55) 175deg, rgba(255,255,255,0) 215deg, rgba(59,130,246,0.45) 260deg, rgba(255,255,255,0) 300deg, rgba(96,165,250,0.5) 340deg, rgba(255,255,255,0) 360deg)",
          filter: "blur(28px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(255,255,255,1) 100%)",
        }}
      />
    </div>
  );
}
