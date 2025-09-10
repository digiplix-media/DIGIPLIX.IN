// src/components/About.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const root = useRef(null);
  const splitHeading = useRef(null);
  const splitText = useRef(null);
  const centerHeading = useRef(null);
  const centerText = useRef(null);
  const stats = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split layout animations
      gsap.from(splitHeading.current, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: splitHeading.current,
          start: "top 85%",
        },
      });

      gsap.from(splitText.current, {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: splitText.current,
          start: "top 85%",
        },
      });

      // Center heading + text
      gsap.from(centerHeading.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: centerHeading.current,
          start: "top 85%",
        },
      });

      gsap.from(centerText.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: centerText.current,
          start: "top 85%",
        },
      });

      // Stats counters
      stats.current.forEach((el) => {
        const target = Number(el.dataset.target) || 0;
        const suffix = el.dataset.suffix || "";

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power1.out",
          onUpdate: () => {
            el.textContent = `${Math.floor(obj.val)}${suffix}`;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const setStatRef = (el, i) => (stats.current[i] = el);

  return (
    <section
      id="about"
      ref={root}
      className="relative bg-white text-black py-24 md:py-32 font-roboto overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h1
              ref={splitHeading}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              The ideas shaping the <br /> <span className="text-blue-600">future</span> of digital brands
            </h1>
          </div>
          <div className="lg:col-span-5 pt-4">
            <p
              ref={splitText}
              className="text-base md:text-lg text-gray-600 leading-relaxed"
            >
              At <span className="font-semibold text-black">
                <span className="text-black">Di</span>
                <span className="text-blue-600">g</span>
                <span className="text-black">ipli</span>
                <span className="text-blue-600">x</span></span>, we
              believe design is more than aesthetics — it’s how brands grow,
              connect, and stand out in a noisy world. We craft strategies,
              visuals, and experiences that spark engagement and drive results.
            </p>
          </div>
        </div>

        {/* Centered identity section */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h2
            ref={centerHeading}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            We’re <span className="text-black">Di</span>
                <span className="text-blue-600">g</span>
                <span className="text-black">ipli</span>
                <span className="text-blue-600">x</span>
          </h2>
          <p
            ref={centerText}
            className="text-lg md:text-xl leading-relaxed text-gray-700"
          >
            A creative agency built for brands that dare to be bold. From{" "}
            <span className="font-semibold text-blue-600">content strategy</span> to{" "}
            <span className="font-semibold text-blue-600">video-first campaigns</span>,
            we partner with businesses to create work that inspires, informs,
            and leaves a lasting mark in culture.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <div
              ref={(el) => setStatRef(el, 0)}
              data-target="50"
              data-suffix="+"
              className="text-4xl md:text-5xl font-extrabold text-blue-600"
            >
              0+
            </div>
            <p className="text-base text-gray-600 mt-1">Clients</p>
          </div>
          <div>
            <div
              ref={(el) => setStatRef(el, 1)}
              data-target="5"
              data-suffix="+"
              className="text-4xl md:text-5xl font-extrabold text-blue-600"
            >
              0+
            </div>
            <p className="text-base text-gray-600 mt-1">Years Experience</p>
          </div>
          <div>
            <div
              ref={(el) => setStatRef(el, 2)}
              data-target="1200"
              data-suffix="+"
              className="text-4xl md:text-5xl font-extrabold text-blue-600"
            >
              0+
            </div>
            <p className="text-base text-gray-600 mt-1">Projects</p>
          </div>
          <div>
            <div
              ref={(el) => setStatRef(el, 3)}
              data-target="15"
              data-suffix="+"
              className="text-4xl md:text-5xl font-extrabold text-blue-600"
            >
              0+
            </div>
            <p className="text-base text-gray-600 mt-1">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
