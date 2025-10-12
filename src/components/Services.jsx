


// // src/components/Services.jsx
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Services data
// const services = [
//   { id: "01", 
//     title: "Long-form Video Editing", 
//     desc: "YouTube strategy, pacing, storytelling & audience retention.", 
//     media: "/assets/img1.jpg" },

//   { id: "02", 
//     title: "Short-form Video Editing", 
//     desc: "Reels, TikTok, YouTube Shorts — motion graphics & punchy cuts.", 
//     media: "/assets/img2.jpg" },

//   { id: "03", 
//     title: "Full Video Production",
//      desc: "End-to-end creative from pre-production to final export.", 
//      media: "/assets/img1.jpg" },


//   { id: "04", title: "Social Media Graphics", desc: "Carousels, promos, product graphics, mockups, brochures.", media: "/assets/img2.jpg" },
//   { id: "05", title: "UGC Creation", desc: "Native, authentic, high-performing user-style content.", media: "/assets/img1.jpg" },
//   { id: "06", title: "Product Shoots", desc: "Clean studio setups & lifestyle visuals that sell.", media: "/assets/img2.jpg" },
//   { id: "07", title: "Web Design & Development", desc: "Fast, responsive, SEO-friendly websites (React, Tailwind).", media: "/assets/img1.jpg" },
//   { id: "08", title: "UI/UX Design", desc: "Wireframes to high-fidelity prototypes that convert users.", media: "/assets/img2.jpg" },
//   { id: "09", title: "Social Media Management", desc: "Planning, posting, analytics & growth strategy.", media: "/assets/img1.jpg" },
//   { id: "10", title: "Logo Design & Animation", desc: "Distinct branding with motion openers and identity design.", media: "/assets/img2.jpg" },
// ];

// export default function Services() {
//   const root = useRef(null);
//   const splitHeading = useRef(null);
//   const splitText = useRef(null);
//   const centerHeading = useRef(null);
//   const centerText = useRef(null);
//   const mediaRefs = useRef({});
//   const activeId = useRef(null);
//   const lastX = useRef({});

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Split layout animations
//       gsap.from(splitHeading.current, {
//         x: -40,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: { trigger: splitHeading.current, start: "top 85%" },
//       });
//       gsap.from(splitText.current, {
//         x: 40,
//         opacity: 0,
//         duration: 1,
//         delay: 0.2,
//         ease: "power3.out",
//         scrollTrigger: { trigger: splitText.current, start: "top 85%" },
//       });

//       // Center heading + text
//       gsap.from(centerHeading.current, {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: { trigger: centerHeading.current, start: "top 85%" },
//       });
//       gsap.from(centerText.current, {
//         y: 30,
//         opacity: 0,
//         duration: 1,
//         delay: 0.2,
//         ease: "power3.out",
//         scrollTrigger: { trigger: centerText.current, start: "top 85%" },
//       });
//     }, root);

//     return () => ctx.revert();
//   }, []);

//   // Media hover functions
//   const handleEnter = (id) => {
//     const newMedia = mediaRefs.current[id];
//     if (!newMedia) return;
//     const tl = gsap.timeline();
//     if (activeId.current && activeId.current !== id) {
//       const prevMedia = mediaRefs.current[activeId.current];
//       if (prevMedia) {
//         gsap.killTweensOf(prevMedia);
//         tl.to(prevMedia, { opacity: 0, scale: 0.8, duration: 0.45, ease: "power2.inOut", onComplete: () => { if (prevMedia.tagName === "VIDEO") prevMedia.pause(); } });
//       }
//     }
//     if (newMedia.tagName === "VIDEO") { newMedia.currentTime = 0; newMedia.play(); }
//     gsap.killTweensOf(newMedia);
//     tl.fromTo(newMedia, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, "+=0.1");
//     activeId.current = id;
//   };

//   const handleLeave = (id) => {
//     const media = mediaRefs.current[id];
//     if (!media) return;
//     gsap.killTweensOf(media);
//     gsap.to(media, { opacity: 0, scale: 0.8, duration: 0.45, ease: "power2.inOut", onComplete: () => { if (media.tagName === "VIDEO") media.pause(); } });
//     activeId.current = null;
//   };

//   const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
//   const handleMove = (id, e) => {
//     const media = mediaRefs.current[id];
//     if (!media) return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     const relX = e.clientX - rect.left;
//     const relY = e.clientY - rect.top;
//     const prev = lastX.current[id] ?? e.clientX;
//     const diff = e.clientX - prev;
//     lastX.current[id] = e.clientX;
//     const rot = clamp(diff * 0.25, -15, 15);
//     gsap.to(media, { duration: 0.35, ease: "power3.out", left: relX, top: relY, rotate: rot });
//   };

//   return (
//     <section ref={root} id="services" className="relative bg-white text-black py-16 px-6 font-roboto overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Split layout intro */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//           <div className="lg:col-span-7">
//             <h1 ref={splitHeading} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
//               Our <span className="text-blue-600"> Creative</span> Services <br />That Drive <span className="text-blue-600"> Results</span>
//             </h1>
//           </div>
//           <div className="lg:col-span-5 pt-4">
//             <p ref={splitText} className="text-xl sm:text-lg md:text-xl lg:text-lg text-gray-800 leading-relaxed">
          
//                At <span className="font-semibold text-black">
//             <span className="text-black">Di</span>
//              <span className="text-blue-600">g</span>
//              <span className="text-black">ipli</span>
//             <span className="text-blue-600">x</span></span>, We offer a full suite of <span className="font-semibold text-black">video, design, and digital</span> services tailored to amplify your brand’s story, boost engagement, and convert audiences into loyal customers.
//             </p>
//           </div>
//         </div>

//         {/* Center highlight */}
//         {/* <div className="mt-24 text-center max-w-4xl mx-auto">
//           <h2 ref={centerHeading} className="text-4xl md:text-6xl font-extrabold mb-6">
//             We’re <span className="text-black">Di</span><span className="text-blue-600">g</span><span className="text-black">ipli</span><span className="text-blue-600">x</span>
//           </h2>
//           <p ref={centerText} className="text-lg md:text-xl leading-relaxed text-gray-700">
//             From <span className="font-semibold text-blue-600">video editing</span> to <span className="font-semibold text-blue-600">UI/UX design</span> and <span className="font-semibold text-blue-600">web development</span>, we craft experiences that captivate, inspire, and drive measurable impact.
//           </p>
//         </div> */}

//         {/* Services list */}
//         <div className="max-w-6xl mx-auto px-6 mt-20">
//           <ul className="relative">
//             {services.map((s, i) => (
//               <li key={s.id} className={`relative border-t border-gray-200 ${i === services.length - 1 ? "border-b" : ""}`}>
//                 <div
//                   onMouseEnter={() => handleEnter(s.id)}
//                   onMouseLeave={() => handleLeave(s.id)}
//                   onMouseMove={(e) => handleMove(s.id, e)}
//                   className="group relative cursor-pointer py-10 px-2"
//                 >
//                   {String(s.media).endsWith(".mp4") ? (
//                     <video ref={el => mediaRefs.current[s.id] = el} src={s.media} muted loop playsInline preload="metadata"
//                       className="pointer-events-none absolute z-20 h-[200%] w-auto rounded-2xl shadow-lg opacity-0 -translate-x-1/2 -translate-y-1/2"
//                       style={{ left: "50%", top: "50%", transformOrigin: "center" }}
//                     />
//                   ) : (
//                     <img ref={el => mediaRefs.current[s.id] = el} src={s.media} alt={s.title}
//                       className="pointer-events-none absolute z-20 h-[200%] w-auto rounded-2xl shadow-lg opacity-0 -translate-x-1/2 -translate-y-1/2"
//                       style={{ left: "50%", top: "50%", transformOrigin: "center" }}
//                     />
//                   )}

//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//                     <div className="flex items-center gap-6 min-w-[40%]">
//                       <span className="text-gray-400 text-sm font-medium">{s.id}</span>
//                       <h3 className="text-2xl md:text-5xl font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition">{s.title}</h3>
//                     </div>
//                     <p className="text-sm md:text-base text-gray-500 md:text-right max-w-xl">{s.desc}</p>
//                   </div>
//                   <span className="absolute left-0 bottom-0 h-px w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/Services.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Long-form Video Editing", desc: "YouTube strategy, pacing, storytelling & audience retention." },
  { id: "02", title: "Short-form Video Editing", desc: "Reels, TikTok, YouTube Shorts — motion graphics & punchy cuts." },
  { id: "03", title: "Full Video Production", desc: "End-to-end creative from pre-production to final export." },
  { id: "04", title: "Social Media Graphics", desc: "Carousels, promos, product graphics, mockups, brochures." },
  { id: "05", title: "UGC Creation", desc: "Native, authentic, high-performing user-style content." },
  { id: "06", title: "Product Shoots", desc: "Clean studio setups & lifestyle visuals that sell." },
  { id: "07", title: "Web Design & Development", desc: "Fast, responsive, SEO-friendly websites (React, Tailwind)." },
  { id: "08", title: "UI/UX Design", desc: "Wireframes to high-fidelity prototypes that convert users." },
  { id: "09", title: "Social Media Management", desc: "Planning, posting, analytics & growth strategy." },
  { id: "10", title: "Logo Design & Animation", desc: "Distinct branding with motion openers and identity design." },
];

export default function Services() {
  const root = useRef(null);
  const splitHeading = useRef(null);
  const splitText = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(splitHeading.current, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: splitHeading.current, start: "top 85%" },
      });

      gsap.from(splitText.current, {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: splitText.current, start: "top 85%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="services"
      className="relative bg-white text-black pt-20 px-6 font-roboto overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px- lg:px-8">
        {/* Split layout intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h1
              ref={splitHeading}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:tracking-tight"
            >
              Our <span className="text-blue-600">Creative</span> Services <br />
              That Drive <span className="text-blue-600">Results</span>
            </h1>
          </div>
          <div className="lg:col-span-5 sm:pt-4">
            <p
              ref={splitText}
              className="text-xl sm:text-lg md:text-xl text-gray-800 leading-relaxed"
            >
              {/* text-xl sm:text-lg md:text-xl lg:text-lg */}
              At{" "}
              <span className="font-semibold text-black">
                <span className="text-black">Di</span>
                <span className="text-blue-600">g</span>
                <span className="text-black">ipli</span>
                <span className="text-blue-600">x</span>
              </span>
              , we offer a full suite of{" "}
              <span className="font-semibold text-black">video, design, and digital</span> services
              tailored to amplify your brand’s story, boost engagement, and convert audiences into
              loyal customers.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="max-w-6xl mx-auto px-4 mt-20">
          <ul className="relative">
            {services.map((s, i) => (
              <li
                key={s.id}
                className={`relative border-t border-gray-200 ${
                  i === services.length - 1 ? "border-b" : ""
                } transition-all duration-300 ${
                  hoveredId && hoveredId !== s.id ? "blur-[2px] opacity-60" : "opacity-100"
                }`}
              >
                <div
                  onMouseEnter={() => setHoveredId(s.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative cursor-pointer py-8 sm:py-10 px-2 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* ID + Title */}
                    <div className="flex items-center gap-6 min-w-[40%]">
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          hoveredId === s.id ? "text-blue-600" : "text-gray-400"
                        }`}
                      >
                        {s.id}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight transition-colors duration-300 ${
                          hoveredId === s.id ? "text-blue-600" : "text-gray-900"
                        }`}
                      >
                        {s.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className={`font-medium text-sm md:text-base md:text-right max-w-xl transition-colors duration-300 ${
                        hoveredId === s.id ? "text-blue-600" : "text-gray-800"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>

                  {/* Blue underline animation */}
                  <span
                    className={`absolute left-0 bottom-0 h-px bg-blue-600 transition-all duration-500 ${
                      hoveredId === s.id ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
