import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function WeddingJourney() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#4E1E27" }}
    >
      <Journey />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}