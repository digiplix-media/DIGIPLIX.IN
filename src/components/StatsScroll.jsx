// src/components/WordScroll.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WordScroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".scroll-word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      words.forEach((word, i) => {
        // Animate IN
        tl.fromTo(
          word,
          { opacity: 0, scale: 0.9, filter: "blur(8px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          }
        );

        // Animate OUT (skip last word)
        if (i !== words.length - 1) {
          tl.to(word, {
            opacity: 0,
            scale: 1.15,
            filter: "blur(8px)",
            duration: 1,
            ease: "power3.in",
          });
        } else {
          // keep the last word visible a bit longer
          tl.to(word, {
            opacity: 1,
            duration: 1,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white h-screen flex items-center justify-center font-roboto"
    >
      <div className="relative w-full flex items-center justify-center">
        {[
          "We Build Stories",
          "We Create Experiences",
          "We Scale Brands",
          "We’re Digiplix",
        ].map((text, i) => (
          <h1
            key={i}
            className="scroll-word absolute text-center font-extrabold leading-tight 
            text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
            text-gray-900 tracking-tight"
            style={{ opacity: 0, transform: "scale(0.9)" }}
          >
            {text.includes("Digiplix") ? (
              <>
                We’re{" "}
                <span className="text-black">Di</span>
                <span className="text-blue-600">g</span>
                <span className="text-black">ipli</span>
                <span className="text-blue-600">x</span>
              </>
            ) : (
              text
            )}
          </h1>
        ))}
      </div>
    </section>
  );
}
