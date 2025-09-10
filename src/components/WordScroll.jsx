// src/components/WordScroll.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WordScroll() {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);

  const words = [
    "We Build Stories",
    "We Create Experiences",
    "We Scale Brands",
    "We’re Digiplix"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wordEls = gsap.utils.toArray(".scroll-word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      wordEls.forEach((word, i) => {
        const wordWidth = word.offsetWidth;
        const wordCenter = word.offsetLeft + wordWidth / 2 - containerRef.current.offsetWidth / 2;

        // Animate IN
        tl.fromTo(
          word,
          { opacity: 0, scale: 0.8, filter: "blur(6px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" }
        );

        // Animate spotlight to match word width and center
        tl.to(
          spotlightRef.current,
          {
            width: wordWidth + 60, // padding for spotlight
            x: wordCenter,
            background: "linear-gradient(135deg, #2563EB 0%, #6B21A8 100%)",
            opacity: 0.25,
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        );

        // Animate OUT (skip last word)
        if (i !== wordEls.length - 1) {
          tl.to(word, {
            opacity: 0,
            scale: 1.15,
            filter: "blur(8px)",
            duration: 1,
            ease: "power3.in",
          });
        } else {
          // keep last word visible longer
          tl.to(word, { opacity: 1, duration: 1 });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden font-roboto"
    >
      {/* Dynamic Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute h-32 rounded-3xl pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #2563EB 0%, #6B21A8 100%)",
          transform: "translateX(-50%)",
          opacity: 0.25,
        }}
      />

      {/* Words */}
      <div className="relative flex items-center justify-center w-full px-4">
        {words.map((text, i) => (
          <h1
            key={i}
            className={`scroll-word absolute text-center leading-tight font-extrabold
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`}
            style={{ opacity: 0, transform: "scale(0.8)" }}
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
