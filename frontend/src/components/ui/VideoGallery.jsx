import { useLayoutEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { LotusDivider } from "./Motifs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sample videos (replace with your own later)
const videos = [
  {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Royal Celebration",
    location: "Udaipur",
  },
  {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Luxury Destination",
    location: "Jaipur",
  },
  {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Elegant Moments",
    location: "Hyderabad",
  },
  {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Palace Wedding",
    location: "Jodhpur",
  },
  {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Forever Begins",
    location: "Goa",
  },
  {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Timeless Love",
    location: "Kerala",
  },
];

export default function VideoGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const totalMove =
        trackRef.current.scrollWidth - window.innerWidth + 150;

      gsap.to(trackRef.current, {
        x: -totalMove,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalMove}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="relative bg-[#4E1E27] py-28 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <Reveal>
          <p className="uppercase tracking-[0.4em] text-xs text-[#C9A46B]">
            Cinematic Stories
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-6xl font-serif-display font-light text-[#F8F5EF]">
            Weddings in Motion
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-2xl mx-auto mt-6 text-[#E8DAC8] text-base leading-8">
            Every celebration tells a story. Relive unforgettable moments
            crafted with elegance, emotion and timeless luxury.
          </p>
        </Reveal>

        <LotusDivider className="my-12" />
      </div>

      {/* Horizontal Video Track */}
      <div
        ref={trackRef}
        className="flex gap-10 pl-[8vw] pr-[8vw] w-max"
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="group relative w-[340px] h-[620px] rounded-[28px] overflow-hidden border border-[#C9A46B]/30 flex-shrink-0 shadow-2xl"
          >
            {/* Video */}
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Gold Border Animation */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A46B] transition-all duration-500 rounded-[28px]" />

            {/* Text */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="uppercase tracking-[0.3em] text-[#C9A46B] text-xs">
                {video.location}
              </p>

              <h3 className="mt-3 text-white text-3xl font-serif-display">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <p className="uppercase tracking-[0.3em] text-xs text-[#C9A46B]/70 animate-pulse">
          Scroll to Explore →
        </p>
      </div>
    </section>
  );
}
