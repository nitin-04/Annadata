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
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search 🔍</div>
            <div className="rest">
                {
                    resObj.map(rest => 
                        <RestaurantCart
                            resData={rest}
                        />)
                }
                
                {/* <RestaurantCart name="Jai Ganesh Bhojnalaya" rating="9.0" time=" 40-50" />
                <RestaurantCart name="KFC" rating="6.5" time=" 49-59" />
                <RestaurantCart name="Windeze" rating="7.0" time=" 20-30" />
                <RestaurantCart name="Dominoz" rating="8.4" time=" 30-40 " />
                <RestaurantCart name="Pizza Hut's" rating="5.7" time=" 45-55" />
                <RestaurantCart name="Kishaan Farms" rating="9.0" time=" 30-45" /> */}
            </div>
        </div>
    )
}

const resObj = [
    {
        info: {
            id: "1",
            name: " Baskin Robbins ",
            locality: "Kasana",
            cuisines: [
                "North Indian",
                "Biryani",
                "Tandoor"
            ],
            deliveryTime: 25,
            rating: 4.5,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl"
        }
    },
    {
        info: {
            id: "2",
            name: "Raajbagh Restaurant",
            locality: "Knowledge Park 1",
            cuisines: [
                "Bakery",
                "Ice Cream",
                "Snacks",
                "Beverages"
            ],
            deliveryTime: 55,
            rating: 3.5,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg"
        }
    },
    {
        info: {
            id: "3",
            name: "Dominik",
            locality: "Rautha Wada",
            cuisines: [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            deliveryTime: 45,
            rating: 4.0,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/25/33cdb1a8-56e1-40ba-8214-e68b2b472705_962778.jpg"
        }
    },
    {
        info: {
            id: "4",
            name: "Satkar Restaurant",
            locality: "Beta Colony",

            cuisines: [
                "North Indian",
                "South Indian",
                "Indian",
                "Salads",
                "Desserts"
            ],
            deliveryTime: 60,
            rating: 4.25,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/906c0affa7d8ff78a3e4db88b4433cde"
        }
    },
    {
        info: {
            id: "5",
            name: "The Belgian Waffle Co.",
            locality: "Venice  Colony",

            cuisines: [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            deliveryTime: 45,
            rating: 4.3,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n7wbtvlifwbw5y4a7rrv"
        }
    },
    {
        info: {
            id: "6",
            name: "Wendizee Restaurant.",
            locality: "Alpha",
            "cuisines": [
                "Burger",
                "Pizza",
                "Snacks",
                "Beverages"
            ],
            deliveryTime: 55,
            rating: 3.9,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/788d4ff6-5d5b-4956-b136-24159b8799b9_308d4115-d37f-4f09-b679-ae583d59641a.JPG"
        }
    },
]

const RestaurantCart = (props) => {
    const { resData } = props;
    return (
        <div className="cart">
            <img className="cart-img" src={resData.info.img} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.rating}⭐ Rating</h4>
            <h4>{resData.info.time}</h4>
            <h4>{resData.info.deliveryTime} mins</h4>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.locality}</h4>
        </div>
    )
}

const Applayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>);

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);