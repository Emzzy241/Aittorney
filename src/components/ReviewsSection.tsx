"use client";

const reviews = [
  {
    name: "Mark R.",
    title: "Founder, Seed AI (YC S25)",
    content:
      "AIttorney drafted our SAFE note in 20 minutes—identical to what our $15k lawyer delivered last round. Just added a few custom terms and sent to investors.",
    iconSrc: "/images/profile.png",
  },
  {
    name: "Emily T.",
    title: "CEO, RemoteLabs",
    content:
      "Hired 5 engineers across 3 countries using AIttorney's employment contracts. Zero legal back-and-forth, just plug-and-play compliance.",
    iconSrc: "/images/profile-1.png",
  },
  {
    name: "James L.",
    title: "CTO, DeepRender",
    content:
      "Used the $99 lawyer review add-on for our Series A term sheet. Spotted 3 risky clauses our own counsel missed!",
    iconSrc: "/images/profile-2.png",
  },
];

const ReviewsSection = () => {
  return (
    <div className="reviews w-full flex flex-col items-center p-6 md:grid md:grid-cols-3 gap-8 mb-24">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="review bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform hover:scale-105"
        >
          <div className="flex items-center space-x-4 mb-4">
            {review.iconSrc && (
              <img src={review.iconSrc} alt="Reviewer Icon" className="w-12 h-12" />
            )}
            <div className="text-container text-center text-white">
              <h4 className="text-lg font-bold">{review.name}</h4>
              <p className="text-sm text-gray-400">{review.title}</p>
            </div>
          </div>

          <div className="content text-white text-sm text-center bg-[#252525] p-6 rounded-md">
            <p>{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
