import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Instagram as IgIcon, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { LotusDivider, Elephant } from "./Motifs";
import { CONTACT } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
  { name: "wedding_date", label: "Preferred Wedding Date", type: "date", required: false },
  { name: "location", label: "Preferred Destination", type: "text", required: false },
  { name: "guest_count", label: "Approx. Guest Count", type: "text", required: false },
];

const emptyForm = { name: "", email: "", phone: "", wedding_date: "", location: "", guest_count: "", services: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  useEffect(() => {
    const onEnquire = (e) => {
      const loc = e.detail && e.detail.location;
      if (!loc) return;
      setForm((f) => ({ ...f, location: loc, services: f.services || "Full Destination Wedding Planning" }));
      setHighlight(true);
      toast.success(`Let's plan your ${loc} celebration — tell us a little more.`);
      setTimeout(() => setHighlight(false), 2600);
    };
    window.addEventListener("kaarya:enquire", onEnquire);
    return () => window.removeEventListener("kaarya:enquire", onEnquire);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please share your name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      toast.success("Thank you. Our atelier will be in touch shortly.");
      setForm(emptyForm);
    } catch (err) {
      toast.error("Something went wrong. Please try again or reach us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = { backgroundColor: "#4E1E27", borderColor: "rgba(201,164,107,0.3)", color: "#F8F5EF" };

  const details = [
    { icon: Phone, label: "Call", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, testid: "contact-phone" },
    { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp, href: CONTACT.whatsappLink, testid: "contact-whatsapp" },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, testid: "contact-email" },
    { icon: IgIcon, label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramLink, testid: "contact-instagram" },
    { icon: MapPin, label: "Visit", value: CONTACT.city, href: CONTACT.mapsLink, testid: "contact-maps" },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="relative py-28 md:py-44 px-6 md:px-10" style={{ backgroundColor: "#4E1E27" }}>
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
          <Elephant className="w-14 h-12 mx-auto mb-6" />
          <Reveal><p className="text-xs tracking-[0.4em] uppercase" style={{ color: "#C9A46B" }}>Begin Your Wedding Journey</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif-display font-light text-4xl md:text-6xl" style={{ color: "#F8F5EF" }}>Tell us the date.</h2>
          </Reveal>
          <LotusDivider className="my-12" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} data-testid="inquiry-form" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {FIELDS.map((f) => (
                  <div key={f.name} className={f.name === "name" ? "sm:col-span-2" : ""}>
                    <label className="block text-[0.65rem] tracking-[0.25em] uppercase mb-2" style={{ color: "#E8DAC8" }}>
                      {f.label}{f.required ? " *" : ""}
                    </label>
                    <input
                      data-testid={`input-${f.name}`}
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={update}
                      required={f.required}
                      className="w-full px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-[#C9A46B]"
                      style={{ ...inputStyle, border: `1px solid ${highlight && f.name === "location" ? "#C9A46B" : "rgba(201,164,107,0.3)"}` }}
                    />
                  </div>
                ))}
              </div>

             

              <div>
                <label className="block text-[0.65rem] tracking-[0.25em] uppercase mb-2" style={{ color: "#E8DAC8" }}>Tell Us Your Vision</label>
                <textarea
                  data-testid="input-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={update}
                  className="w-full px-4 py-3 text-sm outline-none resize-none transition-colors duration-300 focus:border-[#C9A46B]"
                  style={{ ...inputStyle, border: "1px solid rgba(201,164,107,0.3)" }}
                />
              </div>

              <button
                type="submit"
                data-testid="submit-inquiry"
                disabled={loading}
                className="inline-flex items-center gap-3 px-10 py-4 text-xs tracking-[0.22em] uppercase transition-all duration-500 hover:tracking-[0.3em] disabled:opacity-60"
                style={{ backgroundColor: "#C9A46B", color: "#4E1E27" }}
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {loading ? "Sending…" : "Send Your Enquiry"}
              </button>
            </form>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="p-8 md:p-10 h-full" style={{ backgroundColor: "#5B2230", border: "1px solid rgba(201,164,107,0.25)" }}>
              <h3 className="font-serif-display text-2xl md:text-3xl mb-8" style={{ color: "#F8F5EF" }}>Reach the Atelier</h3>
              <div className="space-y-6">
                {details.map((d) => (
                  <a
                    key={d.label}
                    data-testid={d.testid}
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <span className="flex items-center justify-center w-11 h-11 shrink-0 transition-colors duration-500 group-hover:bg-[#C9A46B]/10" style={{ border: "1px solid rgba(201,164,107,0.4)" }}>
                      <d.icon size={18} color="#C9A46B" strokeWidth={1.4} />
                    </span>
                    <span>
                      <span className="block text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: "#C9A46B" }}>{d.label}</span>
                      <span className="block text-sm mt-0.5 transition-colors duration-300 group-hover:text-[#C9A46B]" style={{ color: "#F8F5EF" }}>{d.value}</span>
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(201,164,107,0.2)" }}>
                <p className="font-serif-display italic text-lg" style={{ color: "#E8DAC8" }}>Dream. Design. Deliver.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
