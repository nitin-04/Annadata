import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

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