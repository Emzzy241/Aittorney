"use client";

import Image from 'next/image';

const ToDoListSection = () => {
    return (
        <div className="steps w-full grid md:grid-cols-3 gap-8 p-10 md:p-16 text-white">

            <div className="step1 bg-[#1A1A1A] border border-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-start">
                <Image src="/images/icon-2.svg" alt="Icon" className="w-12 mb-4" width={48} height={48}  />
                <h4 className="text-2xl font-bold mb-2">Submit Your Legal Needs</h4>
                <p className="text-lg font-semibold text-gray-300">AI Chatbot Interview (2 mins)</p>
                

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                    <li>Tell us what you need: SAFE notes, contracts, compliance docs</li>
                    <li>Startup-specific questions (e.g., Funding stage, jurisdiction)</li>
                    <li>Upload Existing Docs (Optional for review/redlining)</li>
                </ul>

                <h4 className="text-xl font-bold mt-6">Example Topics We Cover:</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-400">
                    <li>Fundraising (SAFEs, Term Sheets)</li>
                    <li>Hiring (Employment Contracts, NDAs)</li>
                    <li>Compliance (GDPR, Delaware C-Corp)</li>
                </ul>
            </div>


            <div className="step2 bg-[#1A1A1A] border border-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-start">
                <Image src="/images/icon-2.svg" alt="Icon" className="w-12 h-12 mb-4" width={48} height={48} />
                <h4 className="text-2xl font-bold mb-2">AI Generates Your Documents</h4>
                <p className="text-lg font-semibold text-gray-300">AI Chatbot Interview (2 mins)</p>
                

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                    <li>Instant Drafting - Powered by Claude 3 + Legal Databases</li>
                    <li>Trained on 10,000+ startup legal templates YC, Techstars-approved</li>
                    <li>Human Lawyer Review (Optional add-on for $99/doc)</li>
                </ul>

                <h4 className="text-xl font-bold mt-6">Output Formats:</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-400">
                    <li>📄 Google Docs</li>
                    <li>📝 PDF</li>
                    <li>⚖️ DocuSign-ready</li>
                </ul>
            </div>


            <div className="step3 bg-[#1A1A1A] border border-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-start">
                <Image src="/images/icon-2.svg" alt="Icon" className="w-12 mb-4" width={48} height={48} />
                <h4 className="text-2xl font-bold mb-2">Customize & Support</h4>
                <p className="text-lg font-semibold text-gray-300">AI Chatbot Interview (2 mins)</p>
                
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                    <li>Editable Templates - Customize clauses in plain English</li>
                    <li>24/7 Support - AI Legal Assistant (Chat)</li>
                    <li>Priority Lawyer Access (Paid plans)</li>
                </ul>
            </div>
        </div>
    );
};

export default ToDoListSection;
