"use client"
import { motion } from "motion/react"

function TextHero() {
    return (
        <div 
            className="flex flex-col justify-center items-center mt-32"
        >
            <motion.h1 
                className="text-[78px] font-dmsans font-bold text-dark text-center leading-tight mb-[23px]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Predictable <br/> growth starts here
            </motion.h1>
            <motion.p 
                className="text-center font-medium text-sm w-1/3"
                initial={{ opacity: -100, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                Squaree helps users to go from Zero to Hero with Pockets flow’s
                simple platform that helps creators like you sell their digital
                products online.
            </motion.p>
        </div>
    );
}

export default TextHero;