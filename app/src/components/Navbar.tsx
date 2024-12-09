import { SquareLogo } from "@/public/square-logo";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
    return (
        <div className="flex justify-center mt-5 items-center">
            <div className="bg-red-[#D8D8D8] w-2/4 p-8 h-[75px] rounded-[20px] flex items-center justify-between shadow-lg" style={{ boxShadow: '0px 0px 22px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center">
                    <SquareLogo width={30} height={31} />
                    <p className="ml-4 text-dark font-dmsans font-bold text-base">Squaree</p>
                </div>
                <div>
                    <ul className="flex text-dark text-base font-manrope font-semibold">
                        <li className="flex items-center mr-6">
                            <a href="#" className="px-[14px]">Features</a>
                            <FaAngleDown className="-ml-2 w-3 h-3"/>
                        </li>
                        <li className="flex items-center mr-6">
                            <a href="#" className="px-[14px]">Resources</a>
                            <FaAngleDown className="-ml-2 w-3 h-3"/>
                        </li>
                        <li className="flex items-center mr-6">
                            <a href="#" className="px-[14px]">Company</a>
                            <FaAngleDown className="-ml-2 w-3 h-3"/>
                        </li>
                        <li>
                            <a href="#" className="px-[14px]">Contact Sales</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CiSearch className="w-6 h-6"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
