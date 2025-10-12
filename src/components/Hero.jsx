
import { useEffect, useState } from "react";
import RollHover from "./RollHover";
import "../index.css";
import HeroVideo from "./HeroVideo";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white font-roboto overflow-hidden pt-32 mt- sm:pt-0 md:mt-10 overflow-x-hidden"
    >
      {/* Background blobs (hidden on mobile) */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-blue-600/10 rounded-full blur-xl animate-bounce" />
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-16 h-16 bg-pink-600/10 rounded-full blur-2xl animate-ping" />

      <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div
          className={[
            "max-w-5xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            // ✅ Left align for mobile, center for desktop
            "text-left md:text-center",
          ].join(" ")}
        >
          {/* Main Heading */}
          <h1 className="text-gray-900 mb-4  font-bold leading-tight">
            {/* Desktop version (unchanged) */}
            <span className="hidden md:block">
              <span className="block text-[51px]  sm:text-5xl lg:text-7xl xl:text-7xl font-bold">
                We craft <span className="text-blue-600">video stories</span>
              </span>
              <span className="mt-2 block text-[51px]  sm:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-bold">
                and <span className="text-blue-600">digital experiences</span>
              </span>
            </span>

            {/* ✅ Mobile version (Left aligned, multiline for balance) */}
            <span className=" block md:hidden text-[51px] leading-[1.15] font-bold">
              <span className="block">We craft</span>
              <span className="block text-blue-600">video stories </span>
              <span className="block">and  <span className="">digital</span></span> 
              

              <span className="block text-blue-600">experiences</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="hidden sm:block text-[27px] sm:text-lg md:text-xl text-gray-800 mb-6 md:mb-10 md:max-w-2xl md:mx-auto leading-relaxed md:text-center font-medium pt-2">
            We elevate your brand with video, design, and web solutions.
          </p>
          {/* Subtext */}
          <p className="sm:hidden text-[23px] sm:text-lg md:text-xl text-gray-800 mb-6 md:mb-10 md:max-w-2xl md:mx-auto leading-relaxed md:text-center pt-4">
          From cinematic videos to web and graphics, we create digital assets that engage audiences and elevate your brand.</p>

          {/* Button (Left aligned on mobile, center on desktop) */}
          <div className="flex gap-4 items-center mb-8 md:mb-14 justify-start md:justify-center">
            <RollHover
              bgHover="#2563EB"
              className="border border-blue-600 px-8 py-3 rounded-full bg-blue-600 sm:bg-white text-white sm:text-gray-800 text-xl font-medium shadow-sm hover:bg-gray-50 inline-block hover:text-white cursor-pointer "
              onClick={() => {
                const workSection = document.getElementById("work");
                if (workSection) workSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Watch Our Work
            </RollHover>
          </div>

          {/* ✅ Video (centered always) */}
          <div className="flex justify-center md:hidden  ">
            <HeroVideo mode="block" widthClass="w-full max-w-[420px]" radiusClass="rounded-[20px]" />
          </div>
        </div>

        {/* Small spacer */}
        <div className="h-4 md:h-6 " />
      </div>
    </section>
  );
}










{/* 🌀 Scrolling text inside same container */}
{/* <div className="-mx-6 lg:-mx-12 mt-10 transform translate-y-7">
  <AutoScroll />
  </div> */}
  
  {/* <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-3 font-light text-gray-800"> */}
  {/* and <span className="text-blue-600">digital experiences</span> */}
  {/* </span> */}

  
  {/* <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse"></div> */}