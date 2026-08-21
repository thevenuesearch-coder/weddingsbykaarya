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

// Lazy-loaded components
const Gallery = lazy(() => import("@/components/Gallery"));
const Destinations = lazy(() => import("@/components/Destinations"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const About = lazy(() => import("@/components/About"));
const Footer = lazy(() => import("@/components/Footer"));

// Lazy-loaded pages
const WeddingJourney = lazy(() => import("@/pages/WeddingJourney"));
const DestinationDetails = lazy(
  () => import("@/pages/DestinationDetails")
);
const WeddingPlannerHyderabad = lazy(
  () => import("@/pages/WeddingPlannerHyderabad")
);

function HomePage({ showFooter }) {
  return (
    <Suspense fallback={null}>
      <About />
      <Gallery />
      <Destinations />
      <Testimonials />
      <FAQ />
      <Contact />

      <AnimatePresence>
        {showFooter && <Footer />}
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight;

      // Show footer when user reaches near the bottom
      setShowFooter(scrollPosition >= pageHeight - 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          {/* Homepage */}
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