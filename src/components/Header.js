import { LOGO } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;