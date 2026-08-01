import { useNavigate, useLocation } from "react-router-dom";
import { scrollToId } from "../hooks/useLenis";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const go = (id) => {
    if (location.pathname === "/") {
      scrollToId(id);
    } else {
      navigate("/", {
        state: {
          scrollTo: id,
        },
      });
    }
  };

  return (
    <footer
  data-testid="site-footer"
  className="sticky bottom-0 z-30 pt-4 pb-4 px-4 md:px-5"
  style={{
    backgroundColor: "rgba(91,34,48,0.98)",
    backdropFilter: "blur(18px)",
    borderTop: "1px solid rgba(201,164,107,.18)",
  }}
>
      <div className="mx-auto max-w-[1400px]">

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <p
            className="text-lg font-light"
            style={{
              color: "#E8DAC8",
            }}
          >
            Accepting inquiries for{" "}
            <span style={{ color: "#C9A46B" }}>
              2026 · 2027
            </span>
            . Response within{" "}
            <span style={{ color: "#C9A46B" }}>
              24 hours.
            </span>
          </p>

          <button
  onClick={() =>
    window.open(
      "https://calendly.com/weddingsbykaarya/weddingsbykaarya-consultation-call",
      "_blank"
    )
  }
  className="px-10 py-4 uppercase tracking-[0.32em] text-xs transition-all duration-500 hover:tracking-[0.4em]"
  style={{
    border: "1px solid #C9A46B",
    color: "#C9A46B",
  }}
>
  Book a Discovery Free Call
</button>

        </div>

       
      </div>
    </footer>
  );
}