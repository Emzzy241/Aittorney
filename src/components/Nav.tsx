"use client"; // If App Router is used, this must be a client component

import link from "next/link";

const Nav = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <ul className="flex space-x-4">
                <li><link href="/">Home</link></li>
                <li><link href="/about">About</link></li>
                <li><link href="/contact">Contact</link></li>
            </ul>
        </nav>
    );
}

export default Nav;