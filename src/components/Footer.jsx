// src/components/Footer.jsx #004ff9
// src/components/Footer.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Instagram, Youtube } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;

    gsap.fromTo(
      el,
      { backgroundColor: "#ffffff", color: "#000000" },
      {
        backgroundColor: "#004ff9", // indigo blue
        color: "#ffffff",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-20 md:py-28  transition-colors duration-700 font-roboto"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Big Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
          Let&apos;s Create Something
        </h2>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
          That Lasts
        </h2>

        {/* Contact / Visit / Social */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-lg font-medium mt-16">
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-2">Contact Us</h4>
            <p className="hover:underline cursor-pointer">
            Connect@digiplix.com
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide mb-2">Visit Us</h4>
            <p>
              Indore, India <br />
              MP 462016
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide mb-2">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/digiplix.in/" target="_blank"
                className="p-2 rounded-full border hover:bg-white hover:text-black transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"target="_blank"
                className="p-2 rounded-full border hover:bg-white hover:text-black transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"target="_blank"
                className="p-2 rounded-full border hover:bg-white hover:text-black transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Big Brand Name */}
        <div className="mt-24">
          <h1 className="text-7xl sm:text-8xl md:text-[14rem] font-extrabold tracking-tight uppercase">
            digiplix
            
          </h1>
          
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-sm opacity-80">
          © {new Date().getFullYear()} Digiplix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
