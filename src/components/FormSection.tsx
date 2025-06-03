"use client";

const FormSection = () => {
  return (
    <div className="w-full flex flex-col items-center text-white p-10 md:p-20">
      
      <h2 className="text-3xl font-bold text-center mb-6">Join the Waitlist</h2>
      <p className="text-lg text-gray-400 text-center mb-12">
        500+ startups trusted us pre-launch - claim your spot! Get 30% Off Now.
      </p>

      <form className="w-full max-w-lg bg-[#1A1A1A] p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            placeholder="Enter your company name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="companyStage">
            Company Stage
          </label>
          <select
            id="companyStage"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          >
            <option value="pre-seed">Pre-seed</option>
            <option value="seed">Seed</option>
            <option value="series-a">Series A</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="help">
            I need help with...
          </label>
          <input
            type="text"
            id="help"
            placeholder="Describe your needs"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#044FC7] hover:bg-[#063e97] text-white font-bold py-3 rounded transition-all cursor-pointer"
        >
          Join Waitlist
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-400">
        <a href="#" className="mr-4 hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>

      <div className="mt-4 flex space-x-4">
        <a href="#"><img src="/images/buttons-container.svg" alt="Twitter" className="w-full" /></a>
      </div>

      <p className="mt-4 text-xs text-gray-500">© 2025 AITTORNEY. All rights reserved.</p>
    </div>
  );
};

export default FormSection;
