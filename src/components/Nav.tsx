"use client"; // If App Router is used, this must be a client component

const Nav = () => {
    return (
        <nav className="items-center bg-gray-900 text-white p-6 text-center flex space-x-8 rounded-full  ml-60 mr-60 mt-4">
            <div className="logo ml-30">
                {/* <img src="../../public/file.svg" alt="" /> */}
                <p>AITTORNEY</p>
            </div>
            <ul className="flex space-x-10 text-center ml-40">
                <li>How it Works</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>
            <button className="btn bg-[blue] p-1 rounded w-22 fs-10 border border-[#4f66d5] ml-40">Login</button>
        </nav>
    );
}

export default Nav;