import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Native scroll reset
    window.scrollTo(0, 0);

    // Lenis scroll reset
    if (window.__lenis) {
      window.__lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });
    }
  }, [pathname]);

  return null;
}