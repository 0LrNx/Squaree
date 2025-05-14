interface CardTestimonialsProps {
    title: string;
    description?: string;
    img: string;
    name: string;
    position: string;
    className?: string;
}

function CardTestimonials({ title, description, img, name, position, className }: CardTestimonialsProps) {
    return (
        <div className={`bg-gradient-to-b from-white to-[#F6F6F6] rounded-lg p-[30px] border border-[#3E3E3E] border-opacity-15 ${className}`}>
            <h3 className="text-2xl font-bold font-manrope">{title}</h3>
            <p className="text-[#0D0D10] font-manrope font-medium text-base pt-6">{description}</p>
            <div className="flex items-center mt-4">
                <img src={img} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                <div>
                    <h4 className="text-[#0D0D10] font-manrope font-medium text-base">{name}</h4>
                    <p className="text-[#0C0D0F] font-manrope font-medium text-sm">{position}</p>
                </div>
            </div>
        </div>
    );
}

export default CardTestimonials;
