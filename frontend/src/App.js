import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import { Toaster } from "sonner";

import useLenis from "@/hooks/useLenis";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

const Gallery = lazy(() => import("@/components/Gallery"));
const Destinations = lazy(() => import("@/components/Destinations"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const About = lazy(() => import("@/components/About"));
const Footer = lazy(() => import("@/components/Footer"));

const WeddingJourney = lazy(() => import("@/pages/WeddingJourney"));
const DestinationDetails = lazy(() => import("@/pages/DestinationDetails"));

function HomePage({ showFooter }) {
  return (
    <Suspense fallback={null}>
      <About />
      <Gallery />
      <Destinations />
      <Testimonials />
      <FAQ />
      <Contact />
      {/* About / The Studio — placed below the main homepage content */}
    

      <AnimatePresence>{showFooter && <Footer />}</AnimatePresence>
    </Suspense>
  );
}

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useLenis();

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const hero = document.getElementById("hero");
        if (!hero) return;

        const heroBottom = hero.offsetTop + hero.offsetHeight;
        setShowFooter(window.scrollY > heroBottom + 180);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
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

      <main
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity .8s ease",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Marquee />
                <HomePage showFooter={showFooter} />
              </>
            }
          />
          <Route path="/journey" element={<WeddingJourney />} />
          <Route path="/wedding-journey" element={<WeddingJourney />} />
          <Route path="/destination/:slug" element={<DestinationDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
