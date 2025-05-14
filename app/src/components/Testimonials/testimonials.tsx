"use client";
import { motion } from "framer-motion";
import CardTestimonials from "@/components/cards/CardsTestimonials";

function Testimonials() {
    return (
        <motion.section
            className="container mx-auto px-4 py-16 w-4/6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-dark font-bold font-dmsans mb-2">
                    What squaree users say
                </h2>
                <p className="text-gray-600 text-lg font-manrope">
                    Here is how homely can help you
                </p>
            </div>

            <div className="flex h-full w-full items-center justify-center">
                <div className="grid h-full w-full gap-4 p-2 grid-cols-3 grid-rows-2">
                    <CardTestimonials
                        className="col-span-1 row-span-1"
                        title="Brilliant houses to rent"
                        description="All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer."
                        img="/testimonials/profile1.png"
                        name="John Master"
                        position="Director, Blue"
                    />

                    <CardTestimonials
                        className="col-span-2 row-span-1"
                        title="Convenient for searching apartments"
                        description="Cycle makes it easy to contact the most relevant users whenever I need feedback on a new product initiative. It helps me capture all the necessary customer context without friction."
                        img="/testimonials/profile2.png"
                        name="John Master"
                        position="CEO, Jinx"
                    />

                    <CardTestimonials
                        className="col-span-2 row-span-1"
                        title="It feels much more safe"
                        description="As a company with a strong Slack culture, it's important that we find ways to meet our champions where they are, and Channeled allows us to do just that."
                        img="/testimonials/profile3.png"
                        name="John Master"
                        position="Director, Fyrx"
                    />

                    <CardTestimonials
                        className="col-span-1 row-span-1"
                        title="Secure search for all"
                        description="All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer."
                        img="/testimonials/profile4.png"
                        name="John Master"
                        position="CEO, Whyle"
                    />
                </div>
            </div>
        </motion.section>
    );
}

export default Testimonials;
