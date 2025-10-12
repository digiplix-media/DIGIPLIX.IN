import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" }, // Added Home only for mobile
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // NAV LINKS LETTER ANIMATION
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      const letters = link.querySelectorAll("span");
      link.dataset.hovered = "false";

      link.addEventListener("mouseenter", () => {
        if (link.dataset.hovered === "true") return;
        link.dataset.hovered = "true";
        gsap.to(letters, {
          rotateX: 360,
          stagger: 0.05,
          duration: 0.4,
          ease: "power2.inOut",
          onStart: () => gsap.to(letters, { color: "#2563EB", duration: 0 }),
          onComplete: () => gsap.set(letters, { rotateX: 0 }),
        });
      });

      link.addEventListener("mouseleave", () => {
        link.dataset.hovered = "false";
        gsap.to(letters, { color: "#4B5563", duration: 0.2 });
      });
    });

    // CTA Button Hover Animation
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
      const letters = ctaButton.querySelectorAll("span");
      ctaButton.dataset.hovered = "false";

      ctaButton.addEventListener("mouseenter", () => {
        if (ctaButton.dataset.hovered === "true") return;
        ctaButton.dataset.hovered = "true";
        gsap.to(letters, {
          rotateX: 360,
          stagger: 0.05,
          duration: 0.4,
          ease: "power2.inOut",
          onStart: () =>
            gsap.to(ctaButton, { backgroundColor: "#2563EB", duration: 0 }),
          onComplete: () => gsap.set(letters, { rotateX: 0 }),
        });
      });

      ctaButton.addEventListener("mouseleave", () => {
        ctaButton.dataset.hovered = "false";
        gsap.to(ctaButton, { backgroundColor: "#000000", duration: 0.2 });
      });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const splitLetters = (word) =>
    word.split("").map((letter, idx) => {
      // Add a small right margin when the letter is a space
      if (letter === " ") {
        return (
          <span
            key={idx}
            className="inline-block w-1" // adjust spacing width
          >
            &nbsp;
          </span>
        );
      }
      return (
        <span key={idx} className="inline-block transform-style-preserve-3d">
          {letter}
        </span>
      );
    });
  

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all font-roboto duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 font-roboto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-extrabold tracking-tight flex items-center group"
          >
            <span className="text-black">Di</span>
            <span className="text-blue-600">g</span>
            <span className="text-black">ipli</span>
            <span className="text-[#155dfc]">x</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block ">
            <div className="ml-10 flex items-center space-x-10">
              {/* Desktop keeps Contact */}
              {["Work", "Services", "About", "Contact"].map((name) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  className="text-gray-900 font-medium cursor-pointer"
                >
                  {splitLetters(name)}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="cta-button bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium transition"
            >
              {splitLetters("Let’s Talk")}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black text-2xl focus:outline-none font-roboto"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 flex justify-center transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div
          className="bg-blue-600 backdrop-blur-lg border border-white/40 rounded-3xl shadow-lg px-10 py-8 text-center space-y-6 w-[90%] sm:w-[70%] md:w-[60%] mt-3 transition-all"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-white hover:text-gray-200 transition"
            >
              {item.name}
            </a>
          ))}

          {/* Keep white Let's Talk button */}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-block bg-white text-black px-6 py-2 rounded-xl text-sm font-medium shadow-sm hover:bg-blue-600 hover:text-white transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
