"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";

const CoreFeaturesSection = () => {
    return (
        <div className="features grid md:grid-cols-2 gap-10 p-14 h-full w-full md:mb-20 mt-5 mb-70">
            {/* Core Features Text Section */}
            <div className="feature1 text-white flex flex-col items-start">
                {/* Placeholder for Logo */}
                <img src="/images/icon-1.png" alt="Feature Icon" className="w-16 mb-4" />
                
                <h3 className="text-3xl font-bold mb-6">Core Features</h3>

                <Button btnText="See Sample Docs" />
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Card
                    header="Instant Legal Document Generation"
                    paragraph="Draft founder agreements, SAFE notes, and compliance docs in minutes--not days."
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
}

export default CoreFeaturesSection;



// // Alright, here I have 2 extra sections under this section
// "use client";

// import Button from "@/components/Button";
// import Card from "@/components/Card";

// const CoreFeaturesSection = () => {
//     return (
//         <div className="features outline-[#fff] width-full grid md:grid-cols-2 gap-60 p-4 h-full w-full mb-20 mt-20">
//             <div className="feature1 border-[#fff] md:pt-40 md:pl-30 w-5/12">
//                 {/* A logo image I will get later*/}
//                 <i>
//                     <img src="/images/icon-1.png" alt="" />
//                 </i>
//                 <br />
//                 <h3 className="text-white text-2xl w-40 mb-5 ">Core Features</h3>
//                 < Button
//                     btnText="See Sample Docs"
//                 />
//             </div>

//             <div className="feature2  cards grid grid-rows-2 grid-cols-2 gap-5 justify-between w-40">
//                 <Card
//                     header="Instant Legal Document Generation"
//                     paragraph="Draft founder agreements, SAFE notes, and compliance docs in minutes--not days."
//                 />
//                 <Card
//                     header="Startup-Specialized AI"
//                     paragraph="Trained on YC, Techstars, and 10,000+ startup legal templates."
//                 />
//                 <Card
//                     header="Human Lawyer Review"
//                     paragraph="Add bar-certified attorney review for critical docs at $99/flat."
//                 />
//                 <Card
//                     header="24/7 Legal Assistant"
//                     paragraph="Draft founder agreements, SAFE notes, and compliance docs in minutes—not days."
//                 />
//             </div>
//         </div>
//     );
// }

// export default CoreFeaturesSection;