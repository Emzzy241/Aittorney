"use client"

import Button from "./Button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="hero">

            <div className="rounded-full bg-[#181818] w-[500px]">
            <Image
              src="/images/goal.jpg"
              alt="hero image"
              className=""
              width={300}
              height={300}
            />
          </div>

            <div className="content text-center text-white mt-0">
                <h1 className="text-center fs-40 mb-4 text-6xl">Legal Docs for Startups & SMEs, <br /> Drafted by AI in Minutes</h1>
                <p className="mb-4 text-[1rem]">Join us on this visionary expedition into the heart of AI.</p>
                <h5 className="font-bold text-[1.2rem]">Get startup-friendly contracts, SAFE notes, and compliance docs--AI-generated, <br /> lawyer-reviewed, at 80% lower cost.</h5>

                <input className="border p-3 mt-12 w-80 mr-10 rounded" type="email" name="" id="" placeholder="Enter email" />
                <Button />
                <p className="mt-2 md:ml-[-230]">First 50 Get Free Doc Review</p>
            </div>

        </div>
    );
}

export default HeroSection;