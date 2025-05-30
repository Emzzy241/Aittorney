"use client";

interface CardProps {
    header: string,
    paragraph: string
}

const Card = ( {header, paragraph}: CardProps ) => {
    return (
        <div className="card w-64 border rounded p-7 text-left border-[#262626] bg-[#1A1A1A] text-[#fff]">
            <h4 className="text-base">{ header }</h4>
            <p className="text-sm text-gray md:mt-7">{ paragraph }</p>
        </div>
    );
}

export default Card;