"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/app/src/utils/utils";
import { PricingSwitch } from "@/components/pricing/PricingSwitch";


type BilledType = "monthly" | "annually";

const pricingData: OfferCardProps[] = [
    {
        title: "Free",
        description: "Description of the tier list will go here, copy should be concise and impactful.",
        price: {
            monthly: 0,
            annually: 0,
        },
        infos: ["Access to All Features", "20% discount on backorders", "Domain Name Appraisal ", "10 Social Profiles"],
    },
    {
        title: "Pro",
        description: "Description of the tier list will go here, copy should be concise and impactful.",
        price: {
            monthly: 12,
            annually: 120,
        },
        infos: ["Access to All Features", "20% discount on backorders", "Domain Name Appraisal ", "10 Social Profiles", "Calendar View", "24/7 Support"],
        isBestValue: true,
    }
];

export default function Pricing() {
    const [selectedBilledType, setSelectedBilledType] = useState<BilledType>("monthly");

    function handleSwitchTab(tab: BilledType) {
        setSelectedBilledType(tab);
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="flex flex-col items-center gap-12 py-24">
            <PricingSwitch
                handleSwitchTab={handleSwitchTab}
                selectedBilledType={selectedBilledType}
            />

            <motion.div
                className="flex flex-row gap-12 justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {pricingData.map((offer, index) => (
                    <motion.div
                        key={offer.title}
                        variants={cardVariants}
                    >
                        <OfferCard
                            {...offer}
                            selectedBilledType={selectedBilledType}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}


type OfferCardProps = {
    title: string;
    description: string;
    price: {
        monthly: number;
        annually: number;
    };
    infos?: string[];
    isBestValue?: boolean;
};

const OfferCard = ({
    title,
    description,
    price,
    infos,
    isBestValue,
    selectedBilledType,
}: OfferCardProps & {
    selectedBilledType: BilledType;
}) => {
    return (
        <div
            className={cn(
            "hover:-translate-y-1 h-full transform-gpu overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-gray-100",
            "text-gray-800 w-[500px] shadow-2xl",
            isBestValue ? "border-yellow-500 border-2 shadow-[#FFF7E7]" : "border-gray-300 border-opacity-15 border-2 shadow-white",
            )}
        >
            <div
            className={cn("p-6")}
            >
            <div className="text-dark text-4xl font-dmsans font-bold">{title}</div>
            
            <div className="mt-4">
                <div className="text-dark text-5xl font-dmsans font-bold">
                ${price[selectedBilledType]}
                {isBestValue && (
                    <span className="text-sm text-dark font-normal">/{selectedBilledType}</span>
                )}
                </div>
            </div>

            <div className="mt-2 text-[#242424] text-lg">{description}</div>

            {infos && (
                <>
                <div className="my-6 h-px bg-neutral-600" />
                { isBestValue && (
                    <div className="flex items-center gap-2">
                    <p className="text-[#7D7D82] text-lg font-manrope font-normal mb-6">Everything in the Free plan, plus</p>
                    </div>
                )}

                <ul className="space-y-6">
                    {infos.map((feature) => (
                    <li className="flex items-center gap-2" key={feature}>
                        <div className="size-1.5 rounded-full bg-neutral-500" />
                        <div className=" text-sm">{feature}</div>
                    </li>
                    ))}
                </ul>
                </>
            )}
            <button
                className={cn(
                "my-12 inline-flex w-full transform-gpu items-center justify-center rounded-full px-12 py-2.5 font-semibold text-neutral-50 tracking-tight transition-all hover:scale-105 bg-[#F2B53C] hover:bg-[#F2B53C]/80",
                )}
                type="button"
            >
                { isBestValue ?  "Subscribe Now" : "Try for free" }
            </button>
            </div>
        </div>
    );
};

export function SelectOfferTab({
    handleSwitchTab,
    selectedBilledType,
}: Readonly<{
    handleSwitchTab: (tab: BilledType) => void;
    selectedBilledType: BilledType;
}>) {
    const OfferList = ["monthly", "annually"] as const;
    return (
        <nav className="flex flex-col sm:flex-row">
            {OfferList.map((button, _index) => (
                <button
                    className={cn(
                        " relative inline-flex w-fit transform-gpu whitespace-nowrap px-6 py-2.5 font-semibold text-lg capitalize tracking-tight transition-colors",
                        selectedBilledType === button
                            ? "text-neutral-700 dark:text-neutral-50"
                            : "text-neutral-800 hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-300 ",
                    )}
                    key={button}
                    onClick={() => handleSwitchTab(button)}
                    type="button"
                >
                    {button}
                    {selectedBilledType === button && (
                        <motion.div
                            animate={{ opacity: 1, scale: 1 }}
                            className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-full bg-neutral-200 dark:bg-neutral-800 "
                            exit={{ opacity: 0, scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            layout={true}
                            layoutId="pricing-focused-element"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className=" size-full rounded-full" />
                        </motion.div>
                    )}
                </button>
            ))}
        </nav>
    );
}
