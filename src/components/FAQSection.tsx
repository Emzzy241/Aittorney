"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What types of legal documents can AIttorney generate?",
    answer: "AIttorney can draft founder agreements, SAFE notes, employment contracts, NDAs, and more—all tailored for startups and SMEs.",
  },
  {
    question: "How does AIttorney ensure legal accuracy?",
    answer: "Our AI is trained on thousands of startup legal templates and reviewed by bar-certified attorneys to ensure compliance and accuracy.",
  },
  {
    question: "Can I customize the documents?",
    answer: "Yes! AIttorney allows you to modify key terms and clauses to fit your specific needs before finalizing the document.",
  },
  {
    question: "Is AIttorney suitable for early-stage startups?",
    answer: "Absolutely! AIttorney is designed to help startups at all stages, from pre-seed to Series A and beyond.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section w-full max-w-4xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-4 bg-[#1A1A1A]">
            <button
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
