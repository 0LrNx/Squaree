import { SquareLogo } from "@/public/square-logo";

export function Logo() {
    return (
        <div className="flex items-center">
            <SquareLogo width={30} height={31} />
            <p className="ml-4 text-dark font-dmsans font-bold text-base">Squaree</p>
        </div>
    );
}
