import { useState } from "react";
import "@/App.css";
import { Toaster } from "sonner";
import useLenis from "@/hooks/useLenis";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Destinations from "@/components/Destinations";
import Gallery from "@/components/Gallery";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import Instagram from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <div className="App grain" data-testid="app-root">
      <CustomCursor />
      <Loader onDone={() => setLoaded(true)} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: "#5B2230", border: "1px solid rgba(201,164,107,0.4)", color: "#F8F5EF", borderRadius: 0 },
        }}
      />
      <Header />
      <main style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <Hero />
        <About />
        <Marquee />
        <Destinations />
        <Gallery />
        <Journey />
        <Testimonials />
        <Instagram />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
