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
    <section className="relative z-10 py-6 bg-white overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>

      {/* Right fade */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

      {/* Scrolling text */}
      <div className="inline-block whitespace-nowrap animation-scroll text-xl md:text-3xl font-roboto font-medium tracking-tight">
        {items.concat(items).map((item, i) => (
          <span
            key={i}
            className="inline-block mr-14 text-gray-700 transition-all duration-500 hover:scale-110 hover:text-blue-600 cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
