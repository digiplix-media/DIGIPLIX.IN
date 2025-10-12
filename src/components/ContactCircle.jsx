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
        duration: 10, // moderate smooth speed
        transformOrigin: "center center",
      });
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 font-roboto">
      <a
        href="#contact"
        className=" relative flex items-center justify-center
                   w-20 h-20 sm:w-22 sm:h-22 rounded-full
                   bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800
                   shadow-[0_0_20px_rgba(37,99,235,0.5)]
                   hover:shadow-[0_0_35px_rgba(37,99,235,0.8)]
                   transition-all duration-300"
      >
        {/* Inner white layer */}
        <div className="absolute inset-[5px]  bg-white rounded-full flex items-center justify-center">
          {/* Rotating Text */}
          <div
            ref={textRef}
            className="absolute inset-0 flex items-center justify-center "
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text
                // fill="#2563EB"
                fill="#2d3748"
                fontSize="8"
                fontWeight="bold"
                letterSpacing="2"
              >
                <textPath href="#circlePath" startOffset="0%">
                  CONTACT •CONTACT •CONTACT •CONTACT •
                </textPath>
              </text>
            </svg>
          </div>

        </div>
          {/* Fixed Center Arrow */}
          <span className="text-xl sm:text-2xl text-blue-600 relative z-10">
            →
          </span>
      </a>
    </div>
  );
}
