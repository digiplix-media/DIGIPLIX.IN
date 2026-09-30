import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectsData from "../data/projects.json";
import { getLenis } from "../lenis";

const isPlaceholder = (project) =>
   String(project?.title || "").trim().toLowerCase() === "coming soon";

 // Later entries in projects.json are newer. Show those first in All and
 // every category. Keep "Coming Soon" cards at the end of each list.
 const projectsNewestFirst = [...projectsData]
   .map((project, index) => ({ project, index }))
   .sort((a, b) => {
     const aPlaceholder = isPlaceholder(a.project);
     const bPlaceholder = isPlaceholder(b.project);
     if (aPlaceholder !== bPlaceholder) return aPlaceholder ? 1 : -1;
     return b.index - a.index;
   })
   .map(({ project }) => project);

export default function Work() {
  const rootRef = useRef(null);
  const scrollRef = useRef(null);
  const gridBoxRef = useRef(null);
  const splitHeading = useRef(null);
  const splitText = useRef(null);
  const projects = projectsNewestFirst;

  // -------------- HARD-CODED FILTER BUTTONS (exact UI order / labels)
  const FILTERS = [
    "All",
    "Long-form Video Editing",
    "Short-form Video Editing",
    "Social Media Videos",
    "Social Media Graphics",
    "UGC Creation",
    "Product Shoots",
    "Web Design",
    "Web Development",
    "UI/UX Design",
    "Social Media Management",
    "Logo Design and Animation",
  ];

  // normalize for case-insensitive strict compare
  const normalize = (s) =>
    String(s || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

  // helper: extract categories/tags safely
  const getProjectTags = (p) => {
    if (!p) return [];
    if (Array.isArray(p.categories)) return p.categories.map(String);
    if (Array.isArray(p.category)) return p.category.map(String);
    if (typeof p.category === "string") return [p.category];
    if (Array.isArray(p.tags)) return p.tags.map(String);
    if (typeof p.tags === "string") return [p.tags];
    return [];
  };

  // strict match only
  const projectMatchesFilter = (project, filterLabel) => {
    if (!project) return false;
    if (!filterLabel || filterLabel === "All") return true;

    const target = normalize(filterLabel);
    const tags = getProjectTags(project).map(normalize);

    return tags.includes(target);
  };

  // states
  const [activeFilter, setActiveFilter] = useState("All");
  const [filtered, setFiltered] = useState(projects);
  const [visibleCount, setVisibleCount] = useState(9);
  const [modal, setModal] = useState({ open: false, project: null });

  // reset scroll to left on mount
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, []);


 useEffect(() => {
   const isComingSoon = (project) =>
     String(project?.title || "").trim().toLowerCase() === "coming soon";

   if (activeFilter === "All") {
     setFiltered(projects.filter((p) => !isComingSoon(p)));
     } else {
      setFiltered(projects.filter((p) => projectMatchesFilter(p, activeFilter)));
  }
  setVisibleCount(9);
}, [activeFilter, projects]);

  // GSAP animation

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


      gsap.fromTo(
        ".work-card",
        { y: 20, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.05 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, [filtered, activeFilter, visibleCount]);

  // Pause Lenis when scrolling inside the grid box
  useEffect(() => {
    const box = gridBoxRef.current;
    if (!box) return;

    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      box.scrollTop += e.deltaY;
    };

    box.addEventListener("wheel", handleWheel, { passive: false });
    return () => box.removeEventListener("wheel", handleWheel);
  }, []);

  // modal handlers
  const openModal = (p) => setModal({ open: true, project: p });
  const closeModal = () => setModal({ open: false, project: null });

  // scroll helpers
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });

  // build embed URLs for Instagram when project stores an ID
  const buildInstagramSrc = (p) => {
    if (!p) return "";
    if (String(p.media || "").startsWith("http")) return p.media;
    return `https://www.instagram.com/reel/${p.media}/embed`;
  };

  return (
    <section id="work" ref={rootRef} className="pt-20  bg-white text-black font-roboto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            {/* text-4xl md:text-6xl lg:text-7xl */}
            <h2 ref={splitHeading} className="text-[38px] md:text-6xl lg:text-7xl font-extrabold leading-tight sm:tracking-tight text-black">
              Selected <span className="text-blue-600"> Work</span> <br /> That <span className="text-blue-600"> Inspires</span>
            </h2>
          </div>
          <div className="lg:col-span-5 sm:pt-3">
          
            <p ref={splitText} className="text-xl sm:text-lg md:text-xl lg:text-lg  text-gray-800 leading-relaxed">
          {/* text-xl sm:text-lg md:text-xl lg:text-lg */}
               At <span className="font-semibold text-black">
            <span className="text-black">Di</span>
             <span className="text-blue-600">g</span>
             <span className="text-black">ipli</span>
            <span className="text-blue-600">x</span></span>, we craft creative projects that inspire and deliver results.From <span className="font-semibold text-black"> video and design to web experiences,</span> explore our curated portfolio that engages audiences, drives conversions, and leaves a lasting impact. Hover for details or click to preview.
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div className="mb-6">
          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:justify-center gap-3 px-1 scrollbar-hide scroll-smooth"
          >
            {FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-md sm:text-sm font-medium whitespace-nowrap min-w-max transition ${
                  activeFilter === cat ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="sm:hidden flex items-center justify-center gap-2 text-blue-700 text-md mt-2">
            <button onClick={scrollLeft} className="p-1 rounded hover:bg-gray-100">
              <ChevronLeft size={14} />
            </button>
            <span >Scroll →</span>
            <button onClick={scrollRight} className="p-1 rounded hover:bg-gray-100">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Work grid — scrollable box with top/bottom buttons */}
        <div className="relative">
          {/* Scroll Up button */}
          <button
            onClick={() => gridBoxRef.current?.scrollBy({ top: -300, behavior: "smooth" })}
            className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition"
          >
            <ChevronLeft size={16} className="rotate-90" />
          </button>
          <div
            ref={gridBoxRef}
            className="h-[780px] overflow-y-scroll rounded-2xl border border-gray-200 p-4 shadow-inner bg-gray-50"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#2563eb #e0e7ff" }}
          >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article
                key={p.id}
                onClick={() => openModal(p)}
                className="work-card relative overflow-hidden rounded-xl bg-white shadow-sm cursor-pointer group"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <span className="block text-[11px] font-medium text-blue-600 uppercase tracking-wide leading-tight mb-1">
                    {getProjectTags(p)[0] || ""}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug break-words">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          </div>

          {/* Scroll Down button */}
          <button
            onClick={() => gridBoxRef.current?.scrollBy({ top: 300, behavior: "smooth" })}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition"
          >
            <ChevronRight size={16} className="rotate-90" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6" onClick={closeModal}>
          <div
            className={`w-full bg-white rounded-xl overflow-hidden shadow-2xl ${
              (modal.project?.mediaType === "instagram" || String(modal.project?.media || "").includes("instagram.com"))
                ? "max-w-[400px]"
                : "max-w-4xl"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              {/* VIDEO / IMAGE Rendering */}
              {modal.project?.mediaType === "youtube" || String(modal.project?.media || "").includes("youtube.com") ? (
                <iframe
                  src={modal.project.media}
                  className="w-full h-[70vh]"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={modal.project.title}
                />
              ) : modal.project?.mediaType === "instagram" || String(modal.project?.media || "").includes("instagram.com") ? (
                <div className="relative w-full" style={{ marginTop:"16%", paddingTop: "170%" }}>
                  <iframe
                    src={buildInstagramSrc(modal.project)}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    title={modal.project.title}
                  />
                </div>
              ) : modal.project?.mediaType === "video" && modal.project.media && modal.project.media.startsWith("/") ? (
                <video src={modal.project.media} controls className="w-full max-h-[70vh] object-contain bg-black" />
              ) : modal.project?.mediaType === "image" || (modal.project?.media && /\.(jpe?g|png|webp|avif|gif)$/i.test(modal.project.media)) ? (
                <div className="flex items-center justify-center bg-black">
                  <img src={modal.project.media} alt={modal.project.title} className="max-h-[70vh] object-contain" />
                </div>
              ) : (
                <video src={modal.project?.media} controls className="w-full max-h-[70vh] object-contain bg-black" />
              )}

              <button onClick={closeModal} className="absolute top-3 right-3 bg-white/80 rounded-full p-2 text-gray-800 shadow">
                ✕
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{modal.project?.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{modal.project?.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
