import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
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

function HomePage() {
  return (
    <Suspense fallback={null}>
      <Gallery />
      <Destinations />
      <Testimonials />
      <FAQ />
      <Contact />
      <About />
      <Footer />
    </Suspense>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useLenis();

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
                <HomePage />
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
