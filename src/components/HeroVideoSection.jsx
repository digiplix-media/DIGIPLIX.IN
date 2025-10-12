// src/components/VideoSection.jsx
// import HeroVideo from "./HeroVideo";

// export default function VideoSection() {
//   return (
//     <section className="relative">
      {/* overlap hero by ~160px on desktop; adjust per design */}
      {/* <div className="-mt-[120px] md:-mt-[140px] lg:-mt-[160px]">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <HeroVideo
            mode="block"
            widthClass="w-[min(1060px,94vw)]"
            radiusClass="rounded-[36px] md:rounded-[40px]"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
} */}

// VideoSection.jsx
import HeroVideo from "./HeroVideo";
export default function VideoSection() {
  return (
    <section className="relative hidden md:block ">
      <div className="-mt-[140px] lg:-mt-[160px]">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <HeroVideo mode="block"  widthClass="w-[min(880px,90vw)]"  radiusClass="rounded-[36px] md:rounded-[40px]" />
        </div>
      </div>
    </section>
  );
}
