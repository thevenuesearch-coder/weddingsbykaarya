import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Users } from "lucide-react";

export default function VenueModal({
    venue,
    open,
    onClose,
}) {

    return (

        <AnimatePresence>

            {open && venue && (

                <motion.div

                    initial={{opacity:0}}

                    animate={{opacity:1}}

                    exit={{opacity:0}}

                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-8"

                    onClick={onClose}

                >

                    <motion.div

                        initial={{
                            y:60,
                            opacity:0,
                            scale:.96
                        }}

                        animate={{
                            y:0,
                            opacity:1,
                            scale:1
                        }}

                        exit={{
                            y:60,
                            opacity:0
                        }}

                        transition={{
                            duration:.45
                        }}

                        onClick={(e)=>e.stopPropagation()}

                        className="w-full max-w-6xl overflow-hidden rounded-[34px]"

                        style={{
                            background:"#552230"
                        }}

                    >

                        <div className="grid lg:grid-cols-2">

                            <img

                                src={venue.image}

                                alt={venue.name}

                                className="w-full h-full object-cover min-h-[650px]"

                            />

                            <div className="p-16">

                                <button

                                    onClick={onClose}

                                    className="ml-auto mb-12 block"

                                >

                                    <X color="#C9A46B"/>

                                </button>

                                <p

                                    className="uppercase tracking-[.35em] text-xs"

                                    style={{
                                        color:"#C9A46B"
                                    }}

                                >

                                    {venue.type}

                                </p>

                                <h2

                                    className="font-serif-display text-5xl mt-4"

                                    style={{
                                        color:"#F8F5EF"
                                    }}

                                >

                                    {venue.name}

                                </h2>

                                <p

                                    className="mt-8 leading-8"

                                    style={{
                                        color:"#E8DAC8"
                                    }}

                                >

                                    {venue.description}

                                </p>

                                <div className="space-y-5 mt-12">

                                    <div className="flex gap-3 items-center">

                                        <MapPin color="#C9A46B"/>

                                        <span style={{color:"#E8DAC8"}}>

                                            {venue.location}

                                        </span>

                                    </div>

                                    <div className="flex gap-3 items-center">

                                        <Users color="#C9A46B"/>

                                        <span style={{color:"#E8DAC8"}}>

                                            {venue.capacity}

                                        </span>

                                    </div>

                                </div>

                                <button

                                    className="mt-14 px-10 py-4 uppercase tracking-[.3em]"

                                    style={{
                                        border:"1px solid #C9A46B",
                                        color:"#C9A46B"
                                    }}

                                >

                                    Book this Venue

                                </button>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );

}