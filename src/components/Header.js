import { useState, useEffect } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // if no dependency array is provided => useEffect is called on every render
    // if dependency array is provided => useEffect is called on initial render(just onces)
    // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
    useEffect(() => {
        console.log("use effect called");
    }, [btnNameReact]);

    // render the header component
    return (
        <div className="sticky top-0 left-0 w-full flex justify-between items-center px-2 py-0 shadow-lg bg-white z-50">
            {/* Logo Container */}
            <div className="logo-container">
                <img className="w-24 md:w-48" src={LOGO} alt="Logo" />
            </div>

            {/* Navigation Menu */}
            <nav className="flex items-center">
                <ul className="flex space-x-14 text-lg font-medium text-gray-700">
                    <li className="flex items-center">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="hover:text-blue-500 transition duration-300 ease-in-out"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-blue-500 transition duration-300 ease-in-out"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-blue-500 transition duration-300 ease-in-out"
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <i className="fa-solid fa-cart-shopping text-xl mr-1"></i>
                        Cart 
                    </li>
                </ul>

                {/* Login/Logout Button */}
                <button
                    className="ml-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out"
                    onClick={() => {
                        btnNameReact === "Login"
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login");
                    }}
                >
                    {btnNameReact}
                </button>
            </nav>
        </div>

    );
};

export default Header;