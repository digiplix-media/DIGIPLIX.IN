import { useEffect, useState } from "react";
import RollHover from "./RollHover";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-roboto bg-white mt-5"
    >
      {/* Subtle animated background shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-600/10 rounded-full blur-2xl animate-ping"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Main Heading */}
          <h1 className="font-extrabold text-gray-900 leading-tight mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
              We craft <span className="text-blue-600">video stories</span>
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-3 font-light text-gray-800">
              and <span className="text-blue-600">digital experiences</span>
            </span>
          </h1>

          {/* Subcontent */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            From cinematic videos to web and graphics — we create digital assets that
            engage audiences and elevate your brand.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Button 1 */}
            <RollHover
              bgHover="#2563EB"
              className="border border-blue-600 px-8 py-3 rounded-full bg-white text-gray-800 font-medium shadow-sm hover:bg-gray-50 inline-block hover:text-white cursor-pointer"
              onClick={() => {
                const workSection = document.getElementById("work");
                if (workSection) {
                  workSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Watch Our Work
            </RollHover>


            {/* Button 2 */}
            {/* <RollHover
              bgHover="#111111"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 inline-block cursor-pointer"
            >
              Let’s Talk
            </RollHover> */}
          </div>
        </div>
      </div>
    </section>
  );
}
