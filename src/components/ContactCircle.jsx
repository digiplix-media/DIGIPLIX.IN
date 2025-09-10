// ContactCircle.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactCircle() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        rotation: 360,
        repeat: -1,
        ease: "linear",
        duration: 10, // speed of rotation
      });
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-roboto">
      <a
        href="#contact"
        className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 border-blue-600 border"
      >
        {/* Rotating Text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center text-[30px] font-medium tracking-widest uppercase"
          style={{
            transformOrigin: "center",
            animation: "spin 10s linear infinite",
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text fill="currentColor" fontSize="8" fontWeight="bold">
              <textPath href="#circlePath" startOffset="0%">
                Contact US • Contact US • Contact US •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Icon */}
        <span className="text-2xl">→</span>
      </a>
    </div>
  );
}
