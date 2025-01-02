import { useState, useEffect } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // if no dependency array is provided => useEffect is called on every render
    // if dependency array is provided => useEffect is called on initial render(just onces)
    // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
    useEffect(() => {
        console.log("use effect called");
    }, [btnNameReact]);


    const cartItems = useSelector((store) => store.cart.items);
    // render the header component
    return (
        <div className="sticky top-0 left-0 w-full flex justify-between items-center px-2 py-0 shadow-lg bg-white z-50 ">
            {/* Logo Container */}
            <Link to="/">
                <div className="logo-container">
                    <img className="w-30 md:w-40" src={LOGO} alt="Logo" />
                </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="flex items-center">
                <ul className="flex space-x-14 text-lg font-medium text-gray-700">
                    <li className="flex items-center">
                        Network: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-orange-500 transition-colors "
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="text-gray-700 hover:text-orange-500 transition-colors">
                        <Link to="/cart">
                            <i className="fa-solid fa-cart-shopping text-xl mr-1"></i>
                            Cart ({cartItems.length})
                        </Link>
                    </li>
                </ul>

                {/* Login/Logout Button */}
                <button
                    className="ml-6 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-700 transition duration-300 ease-in-out "
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