"use client"
import { cn } from "@/app/src/utils/utils"
import { motion } from "motion/react"

type BilledType = "monthly" | "annually"

interface PricingSwitchProps {
    selectedBilledType: BilledType
    handleSwitchTab: (tab: BilledType) => void
}

export function PricingSwitch({ selectedBilledType, handleSwitchTab }: PricingSwitchProps) {
    const isYearly = selectedBilledType === "annually"

    return (
        <div className="flex items-center justify-center gap-3 mb-8 font-manrope">
            <motion.span
                className={cn("", isYearly ? "text-[#242424]" : "text-gray-900 font-bold")}
                animate={{ fontSize: isYearly ? "1.5rem" : "2.5rem" }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.3,
                }}
            >
                Billed Monthly
            </motion.span>
            <button
                onClick={() => handleSwitchTab(isYearly ? "monthly" : "annually")}
                className="relative h-7 w-14 rounded-full bg-[#F2B53C] p-1 transition-colors duration-200 focus:outline-none"
                aria-pressed={isYearly}
                aria-label="Toggle billing period"
            >
                <motion.div
                    className="h-5 w-5 rounded-full bg-white"
                    animate={{ x: isYearly ? 28 : 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 0.3,
                    }}
                />
            </button>
            <motion.span
                className={cn("", !isYearly ? "text-[#242424]" : "text-gray-900 font-bold")}
                animate={{ fontSize: !isYearly ? "1.25rem" : "3rem" }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    mass: 0.5,
                }}
            >
                Billed Yearly
                <span className="text-sm font-medium text-[#F2B53C]">(save 15%)</span>
            </motion.span>
        </div>
    )
}
