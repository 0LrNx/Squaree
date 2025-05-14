import Image from "next/image";

import IntegrationImg from "@/public/integrations.svg";

function Integration() {
    return (
        <div>
            <div className="flex flex-row justify-center items-center text-dark text-xl font-dmsans font-medium pt-32 gap-48">
                <div className="flex -ml-72">
                    <Image
                        src={IntegrationImg}
                        alt="FeaturesCard"
                    />
                </div>
                <div className="">
                    <h2 className="text-5xl text-dark font-bold font-dmsans w-3/4">Seamless integration <br/> with best apps</h2>
                    <p className="text-[#626262] text-lg font-manrope text-left pt-6">What ever you use, we integrate with the best of best</p>
                </div>
            </div>
        </div>
    );
}

export default Integration;
