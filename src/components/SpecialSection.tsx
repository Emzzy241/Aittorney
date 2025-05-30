"use strict";

import ButtonWide from "@/components/ButtonWide";

const SpecialSection = () => {
    return (
        <div className="mt-20 mt-10 mb-8 text-center bg-[#]">
            <button className="text-[#fff] p-2 rounded bg-[#4d4e54]">Launch Special!</button>
            <br />
            <h1 className="md:text-5xl text-[#fff] mt-8">First 200 signups lock in <span className=" text-[#044FC7] font-bold">30% off forever</span> + free compliance audit.</h1>
            <br />
            <ButtonWide 
                btnText=" Get Early Access "
            />
            <br />
            <br />
            <br />
        </div>
    );
}

export default SpecialSection;