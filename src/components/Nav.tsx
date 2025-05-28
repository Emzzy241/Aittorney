"use client"; // If App Router is used, this must be a client component

import Button from "./Button";

const Nav = () => {
    return (
        <nav className="items-center bg-gray-900 text-white p-6 text-center flex space-x-8 rounded-full  ml-60 mr-60 mt-4">
            <div className="logo ml-30">
                {/* <img src="../../public/file.svg" alt="" /> */}
                <p>AITTORNEY</p>
            </div>
            <ul className="flex space-x-10 text-center ml-40 mr-40">
                <li>How it Works</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>
            <Button 
                btnText = "Login"
            />
        </nav>
    );
}

export default Nav;