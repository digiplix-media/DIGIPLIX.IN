import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Instagram, Youtube } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;

    // Smoothly transition bg color as user scrolls into footer
    gsap.to(el, {
      backgroundColor: "#155dfc", // Tailwind blue-600
      color: "#ffffff",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Ensure background stays blue when user reaches bottom
    ScrollTrigger.create({
      trigger: el,
      start: "bottom bottom",
      onEnter: () => gsap.set(el, { backgroundColor: "#155dfc", color: "#ffffff" }),
      onLeaveBack: () => gsap.set(el, { backgroundColor: "#ffffff", color: "#000000" }),
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="flex flex-col justify-between py-12  md:py-16 px-4 md:px-12 font-roboto min-h-[auto] md:min-h-screen "
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center sm:text-left">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold sm:tracking-tight leading-tight">
            Let&apos;s Create Something
          </h2>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold sm:tracking-tight leading-tight">
            That Lasts
          </h2>
        </div>

        <div className="hidden  sm:grid grid-cols-3 sm:grid-cols-3 gap-8 sm:gap-10 text-base md:text-lg font-medium mt-8 sm:mt-20">
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-1 sm:mb-2 opacity-80">Contact Us</h4>
            <p className="hover:underline cursor-pointer text-sm sm:text-base">connect@digiplix.com</p>
          </div>
          <div>
            <h4 className="text-sm uppercase ml-3 sm:ml-0 tracking-wide mb-1 sm:mb-2 opacity-80">Visit Us</h4>
            <p className="text-sm sm:text-base ml-3 sm:ml-0">Indore, India <br /> MP 462016</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-1 sm:mb-2 opacity-80">Follow Us</h4>
            <div className=" flex gap-3 sm:gap-4 mt-2 sm:mt-3">
              <a href="https://www.instagram.com/digiplix.in/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-blue-600 transition">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-blue-600 transition">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-blue-600 transition">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 sm:mt-20 text-center sm:text-left">
        <p className="text-md sm:text-sm opacity-80 tracking-wide">
          © {new Date().getFullYear()} Digiplix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
