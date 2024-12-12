import Image from "next/image";

import Tile1 from "@/public/hero/Tile1.svg";
import Tile2 from "@/public/hero/Tile2.svg";
import Tile3 from "@/public/hero/Tile3.svg";
import Tile4 from "@/public/hero/Tile4.svg";
import Tile5 from "@/public/hero/Tile5.svg";

function imgHero() {
    return (
        <div className="flex flex-row items-start w-full justify-center gap-8 pt-20">
            <div className="mt-8">
                <Image
                    src={Tile1}
                    alt="Hero Card 1"
                />
            </div>
            <div className="mt-24">
                <Image
                    src={Tile2}
                    alt="Hero Card 2"
                />
            </div>
            <div className="flex flex-col gap-12">
                <Image
                    className="mt-16"
                    src={Tile3}
                    alt="Hero Card 3"
                />
                <Image
                    src={Tile4}
                    alt="Hero Card 4"
                />
            </div>
            <div className="mt-72 -ml-12">
                <Image
                    src={Tile5}
                    alt="Hero Card 5"
                />
            </div>
        </div>
    )
}

export default imgHero;