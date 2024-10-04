import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-img" src="https://www.logomaker.com/api/main/images/1j_ojFVGOMkX9W_reBe4hGfY0Kfe_EYLyQiR1TN9Nmkd_AlkkCAuhftr...Ot7c0kN4UdV1lMCc9B41n06FNUYjR1n9z_OP41BXWgokWhXAoZRRC5tfhbVHeDY6hwsne9pxtBGgkzISzWwGz...uccQ_NIPX56h0EYYy1z_ZJyMs8H5iGrlXJYbOBYMuyo6uVfpD83bEFuZScr3hFYCyEjNDkCUhKrMZ_Io-" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contat</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Applayout = () => {
    return (<div className="app">
        <Header />
    </div>);

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);