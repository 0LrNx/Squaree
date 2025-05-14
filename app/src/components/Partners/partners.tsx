"use client"
import { motion } from "framer-motion";
import Image from "next/image";

import Bubble from "@/public/featured/Bubble.svg";
import Fluid from "@/public/featured/Fluid.svg";
import Hikkeno from "@/public/featured/Hikkeno.svg";

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function Partners() {
    return (
        <div className="flex flex-col justify-center items-center text-dark text-xl font-dmsans font-medium pt-32">
            <h2 className="mb-8">We have the fast paced growing companies with us</h2>
            <div className="flex gap-40">
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div>
                        <Image src={Fluid} alt="Bubble" />
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div>
                        <Image src={Hikkeno} alt="Fluid" />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.div>
                        <Image src={Bubble} alt="Hikkeno" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Partners;
