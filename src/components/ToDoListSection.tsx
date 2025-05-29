import { LiHTMLAttributes } from "react";

// interface ToDoListSectionProps {
//     heading1: string,
//     paragraph1: string,
//     heading2: string,
//     paragraph2: LiHTMLAttributes<string>,

// }

const ToDoListSection = () => {
    return (
        <div className="steps p-2 grid grid-cols-3">
            <div className="step1 p-10 w-11/12 border-[#262626]">
                <i>
                    <img src="/images/icon.png" alt="" />
                </i>
                <br />
                <h4 className="text-white text-[18px]"> Submit Your Legal Needs </h4>
                <p className="font-bold">AI Chatbot interview (2 mins)</p>
                <div className="pt-4">
                    <ul className="text-[16px]">
                        {/* 
                         
                          


                         */}

                        <li>Tell us what you need: SAFE notes, contracts, <br /> compliance docs</li>
                        <li>Startup-specific questions (e.g., Funding stage, <br /> jurisdiction)</li>
                        <li>Upload Existing Docs (Optional for review / <br /> redlining)</li>
                    </ul>
                </div>
                <br />
                <h4 className="text-white text-[18px]"> Example Topics We Cover:</h4>
                <div>

                    <ul className="text-[16px]">
                        <li>Fundraising (SAFEs, Term Sheets)</li>
                        <li>Hiring (Employment Contracts, NDAs)</li>
                        <li>Compliance (GDPR, Delaware C-Corp)</li>
                    </ul>
                </div>

            </div>
            <div className="step2 p-10">
                <i>
                    <img src="/images/icon.png" alt="" />
                </i>
                <br />
                <h4 className="text-white text-[18px]"> AI Generates Your Documents </h4>
                <p className="font-bold">AI Chatbot interview (2 mins)</p>
                <div className="pt-4">
                    <ul className="text-[16px]">
                        <li>Instant Drafting -  Powered by Claude 3 + Legal <br /> Databases</li>
                        <li>Trained on 10,000+ startup legal templates YC, <br /> Techstars-approved</li>
                        <li>Human Lawyer Review (Optional add-on for <br /> $99/doc)  </li>


                    </ul>
                </div>
                <br />
                <h4 className="text-white text-[18px]"> Output Formats:</h4>
                <div>
                    {/* 
                        
   

                    */}

                    <ul className="text-base">
                        <li>📄 Google Docs</li>
                        <li>📝 PDF</li>
                        <li>⚖️ DocuSign-ready</li>
                    </ul>
                </div>
            </div>
            <div className="step3 p-10">
                <i>
                    <img src="/images/icon.png" alt="" />
                </i>
                <br />
                <h4 className="text-white"> Submit Your Legal Needs </h4>
                <p className="font-bold">AI Chatbot interview (2 mins)</p>
                <div className="pt-4">
                    
                    <ul className="text-[16px]">
                        <li>Editable Templates - Customize clauses in plain <br /> English</li>
                        <li>24/7 Support - AI Legal Assistant (Chat)</li>
                        <li>Priority Lawyer Access (Paid plans)</li>
                    </ul>
                </div>
                <br />
               
            </div>

        </div>
    );
}

export default ToDoListSection;