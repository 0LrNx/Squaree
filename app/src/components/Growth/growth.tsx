import Image from "next/image";
import Graph from "@/public/graph.svg";
import { FaArrowRight } from "react-icons/fa";


function Growth() {
    return (
        <div className="flex flex-col justify-center items-center pt-32">
            <h2 className="text-5xl text-dark font-bold font-dmsans">Turn your growth in to Squaree</h2>
            <p className="text-[#626262] text-lg font-manrope font-semibold w-1/2 text-center pt-6">
                The expectation that productivity should always lead to tangible results
                or accomplishments & notion that certain types of work or activities are
                more valuable or productive than others.
            </p>
            <Image
                className="pt-20 pb-20"
                src={Graph}
                alt="Growth"
                width={400}
                height={400}
            />
            <div className="flex gap-12">
                <div>
                    <p className="text-[58px] font-bold font-dmsans text-dark">200%</p>
                    <p className="w-2/3 text-base text-dark font-medium font-dmsans text-center opacity-50">Increase in new pipeline generated</p>
                </div>

                <div>
                    <p className="text-[58px] font-bold font-dmsans text-dark">70%</p>
                    <p className="w-2/3 text-base text-dark font-medium font-dmsans text-center opacity-50">Increase in form workforce</p>
                </div>

                <div>
                    <p className="text-[58px] font-bold font-dmsans text-dark">40%</p>
                    <p className="w-2/3 text-base text-dark font-medium font-dmsans text-center opacity-50">Decrease in cost per lead</p>
                </div>
            </div>
            <div className="pt-10">
                <button 
                    className="flex items-center gap-2 font-bold text-white py-3 px-6 rounded-full" style={{ backgroundColor: "#F2B53C" }}>
                    Explore our way
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Growth;
