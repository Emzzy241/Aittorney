"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Nav from "@/components/Nav";

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen bg-[#181818] flex flex-col items-center justify-center text-white">
            <Nav />
            <div className="absolute inset-0 w-full h-full overflow-hidden brightness-28">
                <Image
                    src="/images/BG.png"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80"
                />
            </div>

            <div className="relative z-10 text-center p-6 max-w-3xl mt-60 mb-20">
                <h1 className="text-5xl leading-tight">
                    Legal Docs for Startups & SMEs, <br /> Drafted by AI in Minutes
                </h1>
                <p className="mt-4 md:text-base">
                    Join us on this visionary expedition into the heart of  AI.
                </p>
                <h5 className="font-bold md:text-base mt-4">
                    Get startup-friendly contracts, SAFE notes, and compliance docs—AI-generated, <br />
                    lawyer-reviewed, at 80% lower cost.
                </h5>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input 
                        className="border-[#fff] p-3 w-80 rounded text-white border-white focus:outline-white"
                        type="email" 
                        placeholder="Enter email" 
                    />
                    <Button btnText="Join Waitlist" />
                </div>

                <p className="mt-2 md:mr-70 text-sm">First 50 Get Free Doc Review</p>
            </div>
        </div>
    );
}

export default HeroSection;
