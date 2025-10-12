// components/ScrollingText.jsx
import "../index.css"; // custom scroll animation

export default function ScrollingText() {
  const items = [
    "Creative Editing",
    "Content Strategy",
    "Brand Growth",
    "Social Media Management",
    "Video Production",
    "Motion Graphics",
    "Digital Marketing",
  ];

  return (
    <section className="relative z-10  bg-transparent -mx-4.5 overflow-hidden">
      {/* Left fade */}
      {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-20"></div> */}

      {/* Right fade */}
      {/* <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradieant-to-l from-white via-white/70 to-transparent z-20"></div> */}

      {/* Scrolling text */}
      <div className="relative z-10">
        <div className="inline-block whitespace-nowrap animation-scroll text-xl md:text-3xl font-roboto font-medium tracking-tight">
          {items.concat(items).map((item, i) => (
            <span
              key={i}
              className="inline-block mr-16 md:mr-20 text-gray-700 transition-transform duration-500 hover:scale-110 hover:text-blue-600 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
