"use client";

interface CardProps {
  iconSrc?: string;
  header: string;
  paragraph: string;
}

const Card = ({ iconSrc, header, paragraph }: CardProps) => {
  return (
    <div className="w-full bg-[#252525] text-white p-8  rounded-xl border border-gray-700 shadow-lg flex flex-col text-left transition-transform hover:scale-105">
      {/* Header */}
      <h3 className="text-lg font-bol">{header}</h3>
        <br />
      {/* Paragraph */} 
      <p className="text-sm text-gray-300">{paragraph}</p>
    </div>
  );
};

export default Card;



// "use client";

// interface CardProps {
//     header: string,
//     paragraph: string
// }

// const Card = ( {header, paragraph}: CardProps ) => {
//     return (
//         <div className="card w-64 border rounded p-7 text-left border-[#262626] bg-[#1A1A1A] text-[#fff]">
//             <h4 className="text-base">{ header }</h4>
//             <p className="text-sm text-gray md:mt-7">{ paragraph }</p>
//         </div>
//     );
// }

// export default Card;