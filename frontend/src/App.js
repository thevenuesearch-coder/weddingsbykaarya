import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import { Toaster } from "sonner";

import useLenis from "@/hooks/useLenis";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Destinations from "@/components/Destinations";
import Gallery from "@/components/Gallery";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import WeddingJourney from "@/pages/WeddingJourney";
import DestinationDetails from "@/pages/DestinationDetails";
import WeddingPlannerHyderabad from "@/pages/WeddingPlannerHyderabad";

function HomePage({ showFooter }) {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <Gallery />
      <Testimonials />
      <Destinations />
      <FAQ />
      <Contact />

      <AnimatePresence>
        {showFooter && <Footer />}
      </AnimatePresence>
    </>
  );
}

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;

      setShowFooter(window.scrollY > heroBottom + 180);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App grain" data-testid="app-root">
      <ScrollToTop />
      <CustomCursor />

      <Loader onDone={() => setLoaded(true)} />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#5B2230",
            border: "1px solid rgba(201,164,107,0.4)",
            color: "#F8F5EF",
            borderRadius: 0,
          },
        }}
      />

      <Header />

      {/* Automatically scrolls to top on every route change */}
      <ScrollToTop />

      <main
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity .8s ease",
        }}
      >
        <Routes>

          {/* Homepage */}
          <Route
            path="/"
            element={<HomePage showFooter={showFooter} />}
          />

          {/* Main Journey page */}
          <Route
            path="/journey"
            element={<WeddingJourney />}
          />

          {/* Legacy / alternate Journey URL */}
          <Route
            path="/wedding-journey"
            element={<WeddingJourney />}
          />

          {/* Destination detail pages */}
          <Route
            path="/destination/:slug"
            element={<DestinationDetails />}
          />

          {/* SEO Landing Page — Hyderabad Wedding Planner */}
          <Route
            path="/wedding-planner-hyderabad"
            element={<WeddingPlannerHyderabad />}
          />

        </Routes>
      </main>
    </div>
  );
}

export default App;