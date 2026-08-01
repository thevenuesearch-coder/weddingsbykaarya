import { NAV, CONTACT } from "../lib/data";
import { scrollToId } from "../hooks/useLenis";
import { Elephant, LotusDivider } from "./Motifs";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative pt-20 pb-10 px-6 md:px-10" style={{ backgroundColor: "#5B2230", borderTop: "1px solid rgba(201,164,107,0.25)" }}>
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
         <img
  src="/logo.png"
  alt="Kaarya Logo"
  className="w-14 h-14 mx-auto mb-6 object-contain"
/>
          <h3 className="font-serif-display text-3xl md:text-4xl" style={{ color: "#F8F5EF" }}>Weddings by Kaarya</h3>
          <p className="mt-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>Dream. Design. Deliver.</p>
          <LotusDivider className="my-10" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A46B" }}>Explore</p>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button data-testid={`footer-nav-${n.id}`} onClick={() => scrollToId(n.id)} className="text-sm font-light transition-colors duration-300 hover:text-[#C9A46B]" style={{ color: "#E8DAC8" }}>
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A46B" }}>Contact</p>
            <ul className="space-y-2.5 text-sm font-light" style={{ color: "#E8DAC8" }}>
              <li><a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-[#C9A46B] transition-colors">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-[#C9A46B] transition-colors">{CONTACT.email}</a></li>
              <li><a href={CONTACT.instagramLink} target="_blank" rel="noreferrer" className="hover:text-[#C9A46B] transition-colors">{CONTACT.instagram}</a></li>
              <li>{CONTACT.city}</li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A46B" }}>The Promise</p>
            <p className="text-sm font-light leading-relaxed max-w-xs mx-auto md:ml-auto" style={{ color: "#E8DAC8" }}>
              Bespoke, high-end celebrations inspired by India&apos;s traditions — executed with world-class precision.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(201,164,107,0.18)" }}>
          <p className="text-xs font-light" style={{ color: "rgba(232,218,200,0.7)" }}>© {new Date().getFullYear()} Weddings by Kaarya. All rights reserved.</p>
          <p className="text-xs font-light" style={{ color: "rgba(232,218,200,0.7)" }}>Luxury Wedding Planner · Hyderabad · India</p>
        </div>
      </div>
    </footer>
  );
}
