"use client";

import { useState } from "react";
import Button from "./Button";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="md:h-20 absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-6 flex items-center justify-between w-[80%] max-w-4xl rounded-full z-50 shadow-lg">
            <div className="logo text-lg font-bold pl-6 flex justify-start">
                <img src="/images/aittorney-logo-image.png" alt="" className="mr-4" />
                AITTORNEY
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-10 text-center">
                <li className="hover:text-gray-400 cursor-pointer">How it Works</li>
                <li className="hover:text-gray-400 cursor-pointer">Resources</li>
                <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-white focus:outline-none pr-6 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✖" : "☰"}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-4 rounded-lg w-[80%] flex flex-col items-center gap-4 shadow-md md:hidden">
                    <li className="hover:text-gray-400 cursor-pointer">How it Works</li>
                    <li className="hover:text-gray-400 cursor-pointer">Resources</li>
                    <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
                    <Button btnText="Login" />
                </ul>
            )}

            {/* Desktop Button */}
            <div className="hidden md:block pr-6">
                <Button btnText="Login" />
            </div>
        </nav>
    );
}

export default Nav;
