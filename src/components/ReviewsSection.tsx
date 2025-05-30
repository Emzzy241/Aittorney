"use strict";

const ReviewsSection = () => {
    return (
        <div className="reviews w-full grid grid-cols-3 gap-10 p-3 mb-24">
            <div className="review ">
                    <img src="" alt="" />
                    <div className="text-container p-4 ml-24">
                        <h4>Mark R.</h4>
                        <p>Founder, Seed AI (YC S25)</p>
                    </div>
                <div className="content text-[#fff] md:w-90 md:h-40 bg-[#1A1A1A] border-[#262626] rounded p-8">
                    <p>AIttorney drafted our SAFE note in 20 minutes—identical to what our $15k lawyer delivered last round. Just added a few custom terms and sent to investors."</p>
                </div>
            </div>
            <div className="review ">
                <img src="" alt="" />
                <div className="text-container p-4 ml-24">
                    <h4>Mark R.</h4>
                    <p>CEO, RemoteLabs</p>
                </div>
                <div className="content text-[#fff] md:w-90 md:h-40 bg-[#1A1A1A] border-[#262626] rounded p-8">
                    <p>Hired 5 engineers across 3 countries using AIttorney's employment contracts. Zero legal back-and-forth, just plug-and-play compliance.</p>
                </div>

            </div>
            <div className="review ">
                <img src="" alt="" />
                <div className="text-container p-4 ml-24">
                    <h4>Mark R.</h4>
                    <p>CTO, DeepRender</p>
                </div>
                <div className="content text-[#fff] md:w-90 md:h-40 bg-[#1A1A1A] border-[#262626] rounded p-8">
                    <p>Used the $99 lawyer review add-on for our Series A term sheet. Spotted 3 risky clauses our own counsel missed!</p>
                </div>

            </div>
        </div>
    );
}

export default ReviewsSection