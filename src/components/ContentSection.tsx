"use strict";

interface ContentSectionProps {
    title: string;
    subtitle: string;
}

const ContentSection = ({ title, subtitle}: ContentSectionProps) => {
    return (
        <div className="text-left p-4 text-[#fff] border md:mt-8 md:mb-5 p-20">
            <h4 className="rounded  p-2 bg-[#4d4e54] w-94 text-sm">{ title }</h4>
            <h2 className="font-bold text-3xl mt-6">{ subtitle }</h2>
            {/* <h4 className="rounded border p-2 bg-[#4d4e54] w-90">AI-Powered Legal Protection at Startup Speed</h4>
            <h2 className="font-bold text-3xl mt-6">Aittorney for Startups & SMEs</h2> */}
        </div>
    );
}

export default ContentSection;