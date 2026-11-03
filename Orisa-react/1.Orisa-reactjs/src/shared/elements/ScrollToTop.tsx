import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop ensures the window and smooth scroller always reset
 * to the very top (0, 0) whenever the route pathname or search changes.
 */
export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // 1. Standard browser window scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. Smooth-wrapper and smooth-content if present
    const smoothWrapper = document.getElementById("smooth-wrapper");
    if (smoothWrapper) {
      smoothWrapper.scrollTop = 0;
    }

    // 3. ScrollSmoother instance if registered on GSAP / ScrollTrigger
    // Also try multiple frames in case page components render asynchronously
    let frameId: number;
    let attempts = 0;

    const resetSmoother = () => {
      // @ts-expect-error ScrollSmoother may be available on window or ScrollTrigger
      const ScrollSmoother = window?.ScrollSmoother;
      if (ScrollSmoother && typeof ScrollSmoother.get === "function") {
        const smoother = ScrollSmoother.get();
        if (smoother) {
          if (typeof smoother.scrollTo === "function") {
            smoother.scrollTo(0, false);
          } else if (typeof smoother.scrollTop === "function") {
            smoother.scrollTop(0);
          }
        }
      }

      window.scrollTo(0, 0);

      if (++attempts < 5) {
        frameId = requestAnimationFrame(resetSmoother);
      }
    };

    frameId = requestAnimationFrame(resetSmoother);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [pathname, search]);

  return null;
}

