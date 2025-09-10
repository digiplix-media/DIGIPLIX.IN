// src/lenis.js
import Lenis from "@studio-freight/lenis";

let lenisInstance = null;

export function initLenis(options = {}) {
  if (lenisInstance) return lenisInstance;

  // Detect environments
  const isTouch = typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)")?.matches;
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // Gentler easing than the default easeOutExpo
  // feels “heavier” and more fluid:
  const gentleEase = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

  const defaultOpts = {
    // Smoother + slower feeling:
    duration: 1.6,               // try 1.6–1.8 for even softer
    easing: gentleEase,
    smooth: !prefersReduced,
    smoothTouch: !prefersReduced,

    // Reduce input “speed”
    wheelMultiplier: isTouch ? 1.0 : 0.75, // desktop wheel a bit calmer
    touchMultiplier: isTouch ? 0.9 : 1.0,  // mobile flicks slightly softer

    ...options,
  };

  lenisInstance = new Lenis(defaultOpts);

  // RAF loop to drive Lenis
  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
