export default function Marquee() {
  const words = ["Dream", "Design", "Deliver"];
  const line = (
    <span className="flex items-center shrink-0">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="font-serif-display text-6xl md:text-8xl lg:text-9xl px-8 md:px-14" style={{ color: "#F8F5EF" }}>{w}</span>
          <span className="font-serif-display text-6xl md:text-8xl lg:text-9xl text-outline-gold px-8 md:px-14">Kaarya</span>
        </span>
      ))}
    </span>
  );
  return (
    <section data-testid="marquee-section" className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#5B2230", borderTop: "1px solid rgba(201,164,107,0.2)", borderBottom: "1px solid rgba(201,164,107,0.2)" }}>
      <div className="flex whitespace-nowrap animate-marquee">
        {line}
        {line}
      </div>
    </section>
  );
}
