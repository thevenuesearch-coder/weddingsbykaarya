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

/*
|--------------------------------------------------------------------------
| Lazy-loaded Components
|--------------------------------------------------------------------------
*/

const Gallery = lazy(() => import("@/components/Gallery"));
const Destinations = lazy(() => import("@/components/Destinations"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const About = lazy(() => import("@/components/About"));
const Footer = lazy(() => import("@/components/Footer"));

/*
|--------------------------------------------------------------------------
| Lazy-loaded Pages
|--------------------------------------------------------------------------
*/

const WeddingJourney = lazy(() =>
  import("@/pages/WeddingJourney")
);

const DestinationDetails = lazy(() =>
  import("@/pages/DestinationDetails")
);

/*
|--------------------------------------------------------------------------
| Luxury Wedding Planner
|
| Supports both:
| export default LuxuryWeddingPlanner
|
| and:
| export { LuxuryWeddingPlanner }
|--------------------------------------------------------------------------
*/

const LuxuryWeddingPlanner = lazy(() =>
  import("@/pages/LuxuryWeddingPlanner").then((module) => ({
    default:
      module.default ||
      module.LuxuryWeddingPlanner,
  }))
);

const DestinationWeddingPlanner = lazy(() =>
  import("@/pages/DestinationWeddingPlanner").then((module) => ({
    default:
      module.default ||
      module.DestinationWeddingPlanner,
  }))
);

/*
|--------------------------------------------------------------------------
| Hyderabad Wedding Planner
|
| Supports both default and named exports.
|--------------------------------------------------------------------------
*/

const WeddingPlannerHyderabad = lazy(() =>
  import("@/pages/WeddingPlannerHyderabad").then((module) => ({
    default:
      module.default ||
      module.WeddingPlannerHyderabad,
  }))
);

/*
|--------------------------------------------------------------------------
| Loading Fallback
|--------------------------------------------------------------------------
*/

function PageLoading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#35151C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#C9A46C",
        fontFamily: "serif",
        fontSize: "18px",
        letterSpacing: "0.15em",
      }}
    >
      LOADING...
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Homepage
|--------------------------------------------------------------------------
*/

function HomePage({ showFooter }) {
  return (
    <Suspense fallback={<PageLoading />}>
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

/*
|--------------------------------------------------------------------------
| Main App
|--------------------------------------------------------------------------
*/

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useLenis();

  /*
  |--------------------------------------------------------------------------
  | Footer visibility
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight;

      setShowFooter(
        scrollPosition >= pageHeight - 500
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <div
      className="App grain"
      data-testid="app-root"
    >
      {/* Scroll position reset */}
      <ScrollToTop />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Initial loader */}
      <Loader
        onDone={() => setLoaded(true)}
      />

      {/* Toast notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#5B2230",
            border:
              "1px solid rgba(201,164,107,0.4)",
            color: "#F8F5EF",
            borderRadius: 0,
          },
        }}
      />

      {/* Global Header */}
      <Header />

      <main
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity .8s ease",
        }}
      >
        <Suspense fallback={<PageLoading />}>
          <Routes>

            {/* =====================================================
                HOME PAGE
            ===================================================== */}

            <Route
              path="/"
              element={
                <>
                  <Hero />

                  <Marquee />

                  <HomePage
                    showFooter={showFooter}
                  />
                </>
              }
            />

            {/* =====================================================
                LUXURY WEDDING PLANNER
                SEO PAGE
            ===================================================== */}

            <Route
              path="/luxury-wedding-planner"
              element={
                <LuxuryWeddingPlanner />
              }
            />

            <Route
              path="/destination-wedding-planner"
              element={
                <DestinationWeddingPlanner />
              }
            />

            {/* =====================================================
                JOURNEY
            ===================================================== */}

            <Route
              path="/journey"
              element={
                <WeddingJourney />
              }
            />

            {/* =====================================================
                LEGACY JOURNEY URL
            ===================================================== */}

            <Route
              path="/wedding-journey"
              element={
                <WeddingJourney />
              }
            />

            {/* =====================================================
                DESTINATION DETAILS
            ===================================================== */}

            <Route
              path="/destination/:slug"
              element={
                <DestinationDetails />
              }
            />

            {/* =====================================================
                HYDERABAD WEDDING PLANNER
                SEO LANDING PAGE
            ===================================================== */}

            <Route
              path="/wedding-planner-hyderabad"
              element={
                <WeddingPlannerHyderabad />
              }
            />

          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;