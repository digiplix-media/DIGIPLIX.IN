// components/Clients.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../index.css";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
  const rootRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  const clientLogos = [
    { name: "IIHCA", logo: "/logo/IIHCA-LOGO.png" },
    { name: "Excellance Education", logo: "/logo/excellanceeducation.jpg" },
    { name: "Indori Official", logo: "/logo/indori.jpg" },
    { name: "Starbucks", logo: "/logo/Starbucks.png" },
    { name: "Madhya Pradesh", logo: "/logo/mp.jpg" },
  ];

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      gsap.from(textRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="pt-16 md:py-24 bg-white font-roboto">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6">
        
        {/* Header Section - Left heading, Right paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 md:mb-24 items-start">
          {/* Left Heading */}
          <div>
            <h2
              ref={headingRef}
              className="text-4xl md:text-6xl lg:text-7xl  font-extrabold sm:leading-[0.9] text-black sm:tracking-tight "
            >
              {/* text-4xl md:text-6xl lg:text-7xl  */}
              <span className="text-blue-600"> Brands</span> We’ve <br /> Partnered With
            </h2>
          </div>

          {/* Right Paragraph */}
          <div className="lg:pt-4">
            <p
              ref={textRef}
              className="text-xl sm:text-lg md:text-xl lg:text-lg text-gray-800 leading-relaxed "
            >
              {/* text-xl sm:text-lg md:text-xl lg:text-lg */}
               At <span className="font-semibold text-black">
            <span className="text-black">Di</span>
             <span className="text-blue-600">g</span>
             <span className="text-black">ipli</span>
            <span className="text-blue-600">x</span></span>, we’ve collaborated with 
              ambitious startups and global enterprises alike. Every project is a partnership, and these 
              logos represent just a few of the amazing brands we’ve worked with.
            </p>
          </div>
        </div>

        {/* Client Logos - Infinite Scroll */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-20"></div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-20"></div>

          {/* Scrolling logos */}
          <div className="inline-block whitespace-nowrap animate-scroll">
            {clientLogos.concat(clientLogos).map((client, i) => (
              <div
                key={i}
                className="inline-block mr-12 md:mr-20 transition-transform duration-500 hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-14 md:h-16 w-auto     transition duration-300"
                  // className="h-14 md:h-16 w-auto opacity-70 hover:opacity-100 filter grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
