"use client";

interface ButtonSectionProps {
    btnText: string
}

const Button = ({ btnText }: ButtonSectionProps) => {
    return (
        <button className="text-white bg-[blue] p-1 rounded w-22 fs-10 border border-[#4f66d5]">{ btnText }</button>
    );
}

export default Button;