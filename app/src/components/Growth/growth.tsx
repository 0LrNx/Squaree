"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Graph from "@/public/graph.svg";
import { FaArrowRight } from "react-icons/fa";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

function AnimatedNumber({ target }: { target: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: 2,
                ease: "easeOut",
            });

            const unsubscribe = rounded.on("change", (v) => setDisplay(v));

            return () => {
                controls.stop();
                unsubscribe();
            };
        }
    }, [isInView, target]);

    return <span ref={ref}>{display}%</span>;
}

function Growth() {
    return (
        <motion.div
            className="flex flex-col justify-center items-center pt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
        >
            <motion.h2
                className="text-5xl text-dark font-bold font-dmsans"
                variants={fadeInUp}
            >
                Turn your growth in to Squaree
            </motion.h2>

            <motion.p
                className="text-[#626262] text-lg font-manrope font-semibold w-1/2 text-center pt-6"
                variants={fadeInUp}
            >
                The expectation that productivity should always lead to tangible results
                or accomplishments & notion that certain types of work or activities are
                more valuable or productive than others.
            </motion.p>

            <motion.div
                className="pt-20 pb-20"
                variants={fadeInUp}
            >
                <Image
                    src={Graph}
                    alt="Growth"
                    width={400}
                    height={400}
                />
            </motion.div>

            <motion.div
                className="flex gap-12"
                variants={staggerContainer}
            >
                <motion.div variants={fadeInUp}>
                    <p className="text-[58px] font-bold font-dmsans text-dark">
                        <AnimatedNumber target={200} />
                    </p>
                    <p className="w-2/3 text-base text-dark font-medium font-dmsans text-center opacity-50">
                        Increase in new pipeline generated
                    </p>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <p className="text-[58px] font-bold font-dmsans text-dark">
                        <AnimatedNumber target={70} />
                    </p>
                    <p className="w-2/3 text-base text-dark font-medium font-dmsans text-center opacity-50">
                        Increase in form workforce
                    </p>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <p className="text-[58px] font-bold font-dmsans text-dark">
                        <AnimatedNumber target={40} />
                    </p>
                    <p className="w-2/3 text-base text-dark font-medium font-dmsans text-center opacity-50">
                        Decrease in cost per lead
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                className="pt-10"
                variants={fadeInUp}
            >
                <button
                    className="flex items-center gap-2 font-bold text-white py-3 px-6 rounded-full"
                    style={{ backgroundColor: "#F2B53C" }}
                >
                    Explore our way
                    <FaArrowRight />
                </button>
            </motion.div>
        </motion.div>
    );
}

export default Growth;
