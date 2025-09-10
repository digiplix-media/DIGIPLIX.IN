// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function RollHover({ children, className = "", bgHover, textHover }) {
//   const ref = useRef(null);

//   // Split text into spans for roll effect
//   const splitLetters = (text) =>
//     text.split("").map((letter, idx) => (
//       <span key={idx} className="inline-block transform-style-preserve-3d">
//         {letter}
//       </span>
//     ));

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const letters = el.querySelectorAll("span");
//     el.dataset.hovered = "false";

//     const onMouseEnter = () => {
//       if (el.dataset.hovered === "true") return;
//       el.dataset.hovered = "true";

//       gsap.to(letters, {
//         rotateX: 360,
//         stagger: 0.05,
//         duration: 0.4,
//         ease: "power2.inOut",
//         onStart: () => {
//           if (textHover) gsap.to(letters, { color: textHover, duration: 0 });
//           if (bgHover) gsap.to(el, { backgroundColor: bgHover, duration: 0 });
//         },
//         onComplete: () => gsap.set(letters, { rotateX: 0 }),
//       });
//     };

//     const onMouseLeave = () => {
//       el.dataset.hovered = "false";
//       if (textHover) gsap.to(letters, { color: "", duration: 0.2 });
//       if (bgHover) gsap.to(el, { backgroundColor: "", duration: 0.2 });
//     };

//     el.addEventListener("mouseenter", onMouseEnter);
//     el.addEventListener("mouseleave", onMouseLeave);

//     return () => {
//       el.removeEventListener("mouseenter", onMouseEnter);
//       el.removeEventListener("mouseleave", onMouseLeave);
//     };
//   }, [bgHover, textHover]);

//   return (
//     <span ref={ref} className={`inline-block  ${className}`}>
//       {splitLetters(children)}
//     </span>
//   );
// }



import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RollHover({ children, className = "", bgHover, textHover, onClick }) {
  const ref = useRef(null);

  // Split text into spans for roll effect
  const splitLetters = (text) =>
    text.split("").map((letter, idx) => (
      <span key={idx} className="inline-block transform-style-preserve-3d">
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const letters = el.querySelectorAll("span");
    el.dataset.hovered = "false";

    const onMouseEnter = () => {
      if (el.dataset.hovered === "true") return;
      el.dataset.hovered = "true";

      gsap.to(letters, {
        rotateX: 360,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.inOut",
        onStart: () => {
          if (textHover) gsap.to(letters, { color: textHover, duration: 0 });
          if (bgHover) gsap.to(el, { backgroundColor: bgHover, duration: 0 });
        },
        onComplete: () => gsap.set(letters, { rotateX: 0 }),
      });
    };

    const onMouseLeave = () => {
      el.dataset.hovered = "false";
      if (textHover) gsap.to(letters, { color: "", duration: 0.2 });
      if (bgHover) gsap.to(el, { backgroundColor: "", duration: 0.2 });
    };

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [bgHover, textHover]);

  return (
    <button
      ref={ref}
      className={`inline-block ${className}`}
      onClick={onClick}
      type="button"
    >
      {splitLetters(children)}
    </button>
  );
}

