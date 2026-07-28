import "./OrderArchitecture.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    day: "Day 01",
    title: "Nischitartham",
    subtitle: "Engagement & ring ceremony",
    description:
      "Guest arrivals, welcome lunch, room allocation and the first pooja. Usually the calmest evening — we keep it that way on purpose.",
  },
  {
    day: "Day 02",
    title: "Mehendi & Sangeet",
    subtitle: "Henna, music, choreography",
    description:
      "Daytime henna under shade sails, evening sangeet with a live band, choreographed family sets and a show-called running order.",
  },
  {
    day: "Day 03",
    title: "Pellikuthuru & Haldi",
    subtitle: "Mangala snanam, turmeric",
    description:
      "Sunrise ritual bathing, turmeric ceremony, nadaswaram ensemble and the family's own kalash and pasupu traditions honoured exactly.",
  },
  {
    day: "Day 04",
    title: "Kalyanam",
    subtitle: "Kanyadanam · Jeelakarra Bellam · Talambralu",
    description:
      "The muhurtham drives the entire day. Mandap build overnight, guests seated 40 minutes early, banana-leaf meal served in two sittings.",
  },
  {
    day: "Day 05",
    title: "Reception",
    subtitle: "Grand Finale & Send-off",
    description:
      "Stage design, receiving line management, headline performance, cake and a departure that does not collapse into chaos at midnight.",
  },
];

export default function OrderArchitecture() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".timeline-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 120,
          scale: 0.9,
          rotateX: 10,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".order-left",
      pinSpacing: false,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="order-section" ref={sectionRef}>
      <div className="blur-circle"></div>

      <div className="order-container">
        {/* LEFT */}

        <div className="order-left">
          <p className="order-subtitle"></p>

          <h2 className="order-title">
            The order is the <span>architecture.</span>
          </h2>

          <p className="order-description">
            Rituals are sequenced by your family purohit and the muhurtham —
            never by our convenience.
            <br />
            <br />
            Here is how a South Indian destination wedding typically lands.
          </p>
        </div>

        {/* RIGHT */}

        <div className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="day">{item.day}</div>

              <h3>{item.title}</h3>

              <h4>{item.subtitle}</h4>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
