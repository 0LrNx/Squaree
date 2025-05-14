import Image from "next/image";

import FeaturesCard from "@/public/features-card.svg";

function Productivity() {
    return (
        <div>
            <div className="flex flex-row justify-center items-center text-dark text-xl font-dmsans font-medium pt-32">
                <div>
                    <h2 className="text-5xl text-dark font-bold font-dmsans">Know your productivity <br/> by squaree</h2>
                    <p className="text-[#626262] text-lg font-manrope font-semibold text-left pt-6 w-3/4">The expectation that productivity should always lead to tangible results or accomplishments.</p>
                </div>
                <div className="flex gap-40">
                    <Image
                        src={FeaturesCard}
                        alt="FeaturesCard"
                    />
                </div>
            </div>
        </div>
    );
}

export default Productivity;
