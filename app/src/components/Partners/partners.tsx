import Image from "next/image";

import Bubble from "@/public/featured/Bubble.svg";
import Fluid from "@/public/featured/Fluid.svg";
import Hikkeno from "@/public/featured/Hikkeno.svg";

function Partners() {
    return (
        <div className="flex flex-col justify-center items-center text-dark text-xl font-dmsans font-medium pt-32">
            <h2 className="mb-8">We have the fast paced growing companies with us</h2>
            <div className="flex gap-40">
                <Image
                    src={Fluid}
                    alt="Bubble"
                />

                <Image
                    src={Hikkeno}
                    alt="Fluid"
                />

                <Image
                    src={Bubble}
                    alt="Hikkeno"
                />
            </div>
        </div>
    );
}

export default Partners;
