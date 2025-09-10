// src/SmoothScroll.jsx

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

const SmoothScroll = () => {
  useEffect(() => {
    let scrollAmount = 0; // Track scroll position
    let isScrolling = false; // Prevent multiple scroll events firing too fast

    // Adjust this for faster/slower scrolling
    const scrollSpeed = 0.3;  // Increase this value for faster scroll (default was 0.1)

    // This will handle the mouse wheel event
    const handleWheel = (e) => {
      e.preventDefault(); // Prevent default scrolling behavior

      // Adjust scroll amount based on the wheel delta and the scroll speed factor
      scrollAmount += e.deltaY * scrollSpeed;

      if (!isScrolling) {
        isScrolling = true;

        // Use GSAP to animate the scroll position to a smooth position
        gsap.to(window, {
          duration: 0.1, // Decrease this value for faster scroll (default was 1)
          scrollTo: scrollAmount, // Target scroll position
          ease: 'power2.out', // Smooth ease-out effect
          onComplete: () => {
            isScrolling = false; // Allow scroll events again
          },
        });
      }
    };

    // Attach wheel event listener
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return null; // No UI is required for this component, just the logic
};

export default SmoothScroll;
