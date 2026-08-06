import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";

import { useRef, useState } from "react";
import { MapPin, Users, ArrowRight } from "lucide-react";
import VenueModal from "./VenueModal";

export default function SignatureVenues({ venues = [] }) {

    const [selectedVenue, setSelectedVenue] = useState(null);

    const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 30%"],
});

const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    [18, 0]
);

const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [-8, 0]
);

const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.88, 1]
);

const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
);

const y = useTransform(
    scrollYProgress,
    [0, 1],
    [40, 0]
);

    return (

        <>
        
        <section
        ref={sectionRef}
    className="hidden lg:block pt-20 pb-24"
    style={{
        background: "#552230",
    }}
>
  <div className="max-w-[1500px] mx-auto px-10">



<motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12"
>

    <p
        className="uppercase tracking-[0.45em] text-xs"
        style={{
            color: "#C9A46B",
        }}
    >
        CURATED VENUES
    </p>

    <h2
        className="font-serif-display text-6xl mt-5"
        style={{
            color: "#F8F5EF",
        }}
    >
        Discover Extraordinary Venues
    </h2>

    <p
        className="max-w-3xl mx-auto mt-8 text-xl leading-9"
        style={{
            color: "#E8DAC8",
        }}
    >
        Every venue has been handpicked by Kaarya to create unforgettable destination weddings.
    </p>

</motion.div>

<motion.div
    className="grid grid-cols-3 gap-10 items-start"
    style={{
        y,
        scale,
        rotateX,
        rotateY,
        transformPerspective: 2000,
    }}
>
 

{venues.map((venue, index) => (

    <motion.div

    key={venue.name}

    initial={{
        opacity: 0,
        y: 40,
    }}

    whileInView={{
        opacity: 1,
        y: 0,
    }}

    viewport={{
        once: true,
    }}

    transition={{
        delay: index * 0.08,
        duration: 0.6,
    }}

   whileHover={{
    y: -25,
    scale: 1.04,
    rotateX: -4,
    rotateY: 5,
}}

    className="group cursor-pointer"

    onClick={() => setSelectedVenue(venue)}

>

 <div
    className="overflow-hidden rounded-[24px]"
    style={{
        border: "1px solid rgba(201,164,107,.15)",
    }}
>
    <img
        src={venue.image}
        alt={venue.name}
        className="
            w-full
            h-[260px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
        "
    />
</div>   


<div className="pt-8">

<p
    className="uppercase tracking-[0.35em] text-xs"
    style={{
        color: "#C9A46B",
    }}
>
    {venue.type}
</p>

<h3
    className="font-serif-display text-4xl mt-3"
    style={{
        color: "#F8F5EF",
    }}
>
    {venue.name}
</h3>

<p
    className="mt-5 leading-8"
    style={{
        color: "#E8DAC8",
    }}
>
    {venue.description}
</p>

</div>

<div className="flex justify-between mt-8">

    <div className="flex items-center gap-2">

        <MapPin
            size={18}
            color="#C9A46B"
        />

        <span
            style={{
                color: "#E8DAC8",
            }}
        >
            {venue.location}
        </span>

    </div>

    <div className="flex items-center gap-2">

        <Users
            size={18}
            color="#C9A46B"
        />

        <span
            style={{
                color: "#E8DAC8",
            }}
        >
            {venue.capacity}
        </span>

    </div>

</div>

<div
    className="flex items-center gap-2 mt-8"
    style={{
        color: "#C9A46B",
    }}
>

    <span
        className="uppercase tracking-[0.3em] text-xs"
    >
        View Venue
    </span>

    <ArrowRight size={16} />

</div>

</motion.div>


))}


</motion.div>

</div>

</section>

<VenueModal
    venue={selectedVenue}
    open={selectedVenue !== null}
    onClose={() => setSelectedVenue(null)}
/>


        </>

    );

}