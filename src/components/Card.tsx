"use client";

interface CardProps {
  header: string;
  paragraph: string;
}

const Card = ({ header, paragraph }: CardProps) => {
  return (
    <div className="w-full bg-[#252525] text-white p-8  rounded-xl border border-gray-700 shadow-lg md:flex md:flex-col text-left transition-transform hover:scale-105">
      {/* Header */}
      <h3 className="text-lg font-bol">{header}</h3>
        <br />
      {/* Paragraph */} 
      <p className="text-sm text-gray-300">{paragraph}</p>
    </div>
  );
};

export default Card;