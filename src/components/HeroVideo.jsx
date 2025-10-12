// src/components/HeroVideo.jsx
import { useEffect, useRef } from "react";

export default function HeroVideo({
  src = "/herovideo.mp4",
  mode = "block",                          // "peek" | "block"
  widthClass = "w-[min(900px,90vw)]",
  peekHeightClass = "h-[140px] md:h-[160px] lg:h-[180px]",
  radiusClass = "rounded-[28px] md:rounded-[32px]",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const playSafe = () => v.play().catch(() => {});
    v.addEventListener("canplay", playSafe);
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => {
      v.removeEventListener("canplay", playSafe);
      io.disconnect();
    };
  }, []);

  const size =
    mode === "peek"
      ? `${widthClass} ${peekHeightClass}`
      : `${widthClass} aspect-[16/9] h-auto`;

  const fit = mode === "peek" ? "object-cover" : "object-cover";

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div
        className={[
          "relative  overflow-hidden",
          size,
          radiusClass,
          "[mask-image:radial-gradient(white,white)]",
          "will-change-transform",
        ].join(" ")}
      >
        <video
          ref={ref}
          className={`absolute inset-0 h-full w-full ${fit}`}
          src={src}
          muted
          loop
          autoPlay
          playsInline
          controls={false}
          preload="auto"
        />
      </div>
    </div>
  );
}
