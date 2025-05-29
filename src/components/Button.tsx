"use client";

interface ButtonSectionProps {
    btnText: string
}

const Button = ({ btnText }: ButtonSectionProps) => {
    return (
        <button className="text-white bg-[blue] p-3 rounded w-32 fs-10 border border-[#044FC7] text-sm cursor-pointer">{ btnText }</button>
    );
}

export default Button;