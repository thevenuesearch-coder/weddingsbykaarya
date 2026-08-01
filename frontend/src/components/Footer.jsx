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
      className="relative pt-12 pb-10 px-6 md:px-10"
      style={{
        backgroundColor: "#5B2230",
        borderTop: "1px solid rgba(201,164,107,0.18)",
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
            onClick={() => go("contact")}
            className="px-10 py-4 uppercase tracking-[0.32em] text-xs transition-all duration-500 hover:tracking-[0.4em]"
            style={{
              border: "1px solid #C9A46B",
              color: "#C9A46B",
            }}
          >
            Book a Free Call
          </button>

        </div>

       
      </div>
    </footer>
  );
}