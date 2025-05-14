import Link from "next/link"
import { SquareLogo } from "@/public/square-logo";

function Footer() {
    return (
        <footer className="w-full bg-[#F7F7F7] py-12 px-4 md:px-6 lg:px-8 border-t border-gray-100 mt-20 h-96">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 bg-amber-100 flex items-center justify-center rounded-sm">
                                <SquareLogo width={30} height={31} />
                            </div>
                            <span className="font-bold text-gray-900 font-dmsans text-base ml-2">Squaree</span>
                        </div>
                        <p className="text-sm text-[#111114] max-w-[200px] font-medium">What matters is productivity with fun culture</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-900 font-dmsans text-base mb-6">About</h3>
                        <nav className="flex flex-col space-y-8 font-manrope">
                            <Link href="#" className="text-base font-bold text-gray-600 hover:text-gray-900">
                                Contact
                            </Link>
                            <Link href="#" className="text-base font-bold text-gray-600 hover:text-gray-900">
                                Blog
                            </Link>
                            <Link href="#" className="text-base font-bold text-gray-600 hover:text-gray-900">
                                Story
                            </Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-900 font-dmsans text-base mb-6">Company</h3>
                        <nav className="flex flex-col space-y-8 font-manrope">
                            <Link href="#" className="text-base font-bold text-gray-600 hover:text-gray-900">
                                Product
                            </Link>
                            <Link href="#" className="text-base font-bold text-gray-600 hover:text-gray-900">
                                Press
                            </Link>
                            <Link href="#" className="text-base font-bold text-gray-600 hover:text-gray-900">
                                More
                            </Link>
                        </nav>
                    </div>



                    <div className="bg-white p-4 w-[405px] h-[108px] rounded-lg shadow-[0px_4px_186px_0px_#F6F8FF] border border-[#DDDDDD] flex justify-between items-center">
                        <div>
                            <h3 className="text-[#1A1A1F] text-2xl font-semibold">Follow us on twitter</h3>
                            <p className="text-sm text-gray-500">notion.com</p>
                        </div>
                        <button className="bg-amber-400 hover:bg-amber-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer