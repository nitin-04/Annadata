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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "🟢": "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li >Cart  </li><i class="fa-solid fa-cart-shopping"></i>
                    <button className="login"
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}
                    >{btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;