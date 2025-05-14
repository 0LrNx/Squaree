"use client"
import Image from "next/image";
import { motion } from "motion/react"

import Tile1 from "@/public/hero/Tile1.svg";
import Tile2 from "@/public/hero/Tile2.svg";
import Tile3 from "@/public/hero/Tile3.svg";
import Tile4 from "@/public/hero/Tile4.svg";
import Tile5 from "@/public/hero/Tile5.svg";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const tileVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const floatVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

function ImageHero() {
    return (
        <motion.div
            className="flex flex-row items-start w-full justify-center gap-8 pt-20"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={tileVariants}>
                <motion.div variants={floatVariants} animate="animate" className="mt-8">
                    <Image src={Tile1} alt="Hero Card 1" />
                </motion.div>
            </motion.div>

            <motion.div variants={tileVariants}>
                <motion.div variants={floatVariants} animate="animate" className="mt-24">
                    <Image src={Tile2} alt="Hero Card 2" />
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col gap-12"
                variants={tileVariants}
            >
                <motion.div variants={floatVariants} animate="animate" className="mt-16">
                    <Image src={Tile3} alt="Hero Card 3" />
                </motion.div>
                <motion.div variants={floatVariants} animate="animate">
                    <Image src={Tile4} alt="Hero Card 4" />
                </motion.div>
            </motion.div>

            <motion.div variants={tileVariants}>
                <motion.div variants={floatVariants} animate="animate" className="mt-72 -ml-12">
                    <Image src={Tile5} alt="Hero Card 5" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default ImageHero;