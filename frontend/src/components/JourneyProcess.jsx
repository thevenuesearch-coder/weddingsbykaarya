import { motion } from "framer-motion";

import {
    PhoneCall,
    Palette,
    Building2,
    GlassWater,
    Camera
} from "lucide-react";

const STEPS = [

    {
        number: "01",
        title: "Discovery Call",
        icon: PhoneCall,
        text:
            "We understand your vision, traditions, budget and dream destination."
    },

    {
        number: "02",
        title: "Concept & Design",
        icon: Palette,
        text:
            "Mood boards, colour palettes, venue selection and guest experience."
    },

    {
        number: "03",
        title: "Planning",
        icon: Building2,
        text:
            "Travel, hospitality, décor, vendors and every timeline."
    },

    {
        number: "04",
        title: "Celebrate",
        icon: GlassWater,
        text:
            "Enjoy every moment while Kaarya quietly manages every detail."
    },

    {
        number: "05",
        title: "Memories",
        icon: Camera,
        text:
            "Albums, films and timeless memories that stay forever."
    }

];

export default function JourneyProcess() {

    return (

        <section
            className="relative py-32 overflow-hidden"
            style={{
                background: "#552230"
            }}
        >

            <div className="max-w-[1500px] mx-auto px-10">

                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="text-center"

                >

                    <p
                        className="uppercase tracking-[.45em] text-xs"
                        style={{
                            color:"#C9A46B"
                        }}
                    >
                        HOW KAARYA WORKS
                    </p>

                    <h2
                        className="font-serif-display text-6xl mt-6"
                        style={{
                            color:"#F8F5EF"
                        }}
                    >
                        Every Celebration Begins With A Story
                    </h2>

                    <p
                        className="mt-8 text-lg max-w-3xl mx-auto leading-9"
                        style={{
                            color:"#E8DAC8"
                        }}
                    >
                        From the first conversation to the final farewell,
                        every detail is thoughtfully crafted by our team.
                    </p>

                </motion.div>

                <div className="relative mt-28">

                    {/* Golden Line */}

                    <div

                        className="absolute top-14 left-0 right-0 h-[2px]"

                        style={{
                            background:"rgba(201,164,107,.35)"
                        }}

                    />

                    <div className="grid lg:grid-cols-5 gap-10 relative">

                        {STEPS.map((step,index)=>{

                            const Icon=step.icon;

                            return(

                                <motion.div

                                    key={step.number}

                                    initial={{
                                        opacity:0,
                                        y:70
                                    }}

                                    whileInView={{
                                        opacity:1,
                                        y:0
                                    }}

                                    viewport={{
                                        once:true
                                    }}

                                    transition={{
                                        delay:index*.18,
                                        duration:.8
                                    }}

                                    whileHover={{
                                        y:-14
                                    }}

                                    className="relative text-center"

                                >

                                    <motion.div

                                        whileHover={{
                                            scale:1.1,
                                            rotate:8
                                        }}

                                        className="w-28 h-28 rounded-full mx-auto flex items-center justify-center"

                                        style={{

                                            border:"1px solid rgba(201,164,107,.45)",

                                            background:"rgba(255,255,255,.03)",

                                            backdropFilter:"blur(12px)"

                                        }}

                                    >

                                        <Icon

                                            size={36}

                                            color="#C9A46B"

                                        />

                                    </motion.div>

                                    <h3

                                        className="mt-8 text-5xl font-serif-display"

                                        style={{

                                            color:"#C9A46B"

                                        }}

                                    >

                                        {step.number}

                                    </h3>

                                    <h4

                                        className="mt-3 text-2xl"

                                        style={{

                                            color:"#F8F5EF"

                                        }}

                                    >

                                        {step.title}

                                    </h4>

                                    <p

                                        className="mt-5 leading-8"

                                        style={{

                                            color:"#E8DAC8"

                                        }}

                                    >

                                        {step.text}

                                    </p>

                                </motion.div>

                            )

                        })}

                    </div>

                </div>

            </div>

        </section>

    );

}