"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";

const CoreFeaturesSection = () => {
    return (
        <div className="w-full grid md:grid-cols-2 gap-10 p-14 md:h-full w-full md:mb-20 ">
            
            {/* Left Column - Text & Button */}
            <div className="feature1 text-white flex flex-col justify-center items-start px-6">
                {/* Placeholder for Logo */}
                <img src="/images/icon-1.png" alt="Feature Icon" className="w-16 mb-6" />
                
                <h3 className="text-4xl font-bold mb-4">Core Features</h3>

                <p className="text-lg text-gray-400 mb-6 max-w-md">
                    AI-powered legal protection designed for startups and SMEs.
                </p>

                <Button btnText="See Sample Docs" />
            </div>

            {/* Right Column - Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl">
                <Card
                    header="Instant Legal Document Generation"
                    paragraph="Draft founder agreements, SAFE notes, and compliance docs in minutes—not days."
                />
                <Card
                    header="Startup-Specialized AI"
                    paragraph="Trained on YC, Techstars, and 10,000+ startup legal templates."
                />
                <Card
                    header="Human Lawyer Review"
                    paragraph="Add bar-certified attorney review for critical docs at $99/flat."
                />
                <Card
                    header="24/7 Legal Assistant"
                    paragraph="AI-powered support for all legal questions and documents."
                />
            </div>
        </div>
    );
};

export default CoreFeaturesSection;


// 