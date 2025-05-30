"use client";

interface ButtonSectionProps {
    btnText: string
}

const ButtonWide = ({ btnText }: ButtonSectionProps) => {
    return (
        <button className="text-white md:w-80 bg-[#044FC7] p-1 pt-2 pb-2 rounded w-32 border border-[#044FC7] text-sm cursor-pointer">{ btnText }</button>
    );
}

export default ButtonWide;