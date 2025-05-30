"use client";

const PricingSection = () => {
  return (
    <div className="pricing-table w-full flex flex-col items-center p-10 md:p-20">
      <table className="w-full max-w-6xl border-collapse border border-gray-700 text-white">
        <thead>
          <tr className="bg-[#252525] text-lg">
            <th className="p-4 border border-gray-700">Plans</th>
            <th className="p-4 border border-gray-700">Price</th>
            <th className="p-4 border border-gray-700">Perfect For</th>
            <th className="p-4 border border-gray-700">Savings*</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-4 border border-gray-700">Pay-Per-Doc</td>
            <td className="p-4 border border-gray-700">$99-$249 per doc</td>
            <td className="p-4 border border-gray-700">Founders with one-time needs</td>
            <td className="p-4 border border-gray-700">80% vs. law firms</td>
          </tr>
          <tr className="text-center bg-[#1A1A1A]">
            <td className="p-4 border border-gray-700">Legal Shield (Subscription)</td>
            <td className="p-4 border border-gray-700">$179 per month</td>
            <td className="p-4 border border-gray-700">Startups with monthly legal needs</td>
            <td className="p-4 border border-gray-700">Unlimited basic docs + 1 premium review</td>
          </tr>
          <tr className="text-center">
            <td className="p-4 border border-gray-700">Human Lawyer Review</td>
            <td className="p-4 border border-gray-700">$99 per doc</td>
            <td className="p-4 border border-gray-700">Critical contracts (investor docs, etc.)</td>
            <td className="p-4 border border-gray-700">75% discount</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingSection;
