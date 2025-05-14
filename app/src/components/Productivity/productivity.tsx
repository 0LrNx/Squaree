"use client"
import { motion } from "framer-motion";
import Image from "next/image";

import FeaturesCard from "@/public/features-card.svg";

function Productivity() {
    return (
        <div className="pt-32">
            <div className="flex flex-row justify-center items-center text-dark text-xl font-dmsans font-medium">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="text-5xl text-dark font-bold font-dmsans">
                Know your productivity <br /> by squaree
                </h2>
                <p className="text-[#626262] text-lg font-manrope text-left pt-6 w-3/4">
                The expectation that productivity should always lead to tangible results or accomplishments.
                </p>
            </motion.div>
            <motion.div
                className="flex gap-40"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <Image
                src={FeaturesCard}
                alt="FeaturesCard"
                />
            </motion.div>
            </div>
        </div>
    );
}

export default Productivity;
