import { useState, useEffect } from "react";
import { LOGO } from "../utils/constants";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
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