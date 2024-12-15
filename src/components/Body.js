import RestaurantCart from "./Restaurantcart";  
import { useState, useEffect } from "react";               
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// The Body component renders the list of restaurants and provides a filter functionality
const Body = () => {
    // useState hook to manage the list of restaurants (initially set to mock data)
    const [ListofRestaurant, setListofRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurat] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        
        //Optional Chaining
        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurat(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus= useOnlineStatus();

    if (onlineStatus == false)
        return (
            <h1>
                No Internet Connection. Please check your internet connection and try again.
            </h1>
    );

    //Conditional Rendering
    // if(ListofRestaurant.length === 0){
    //     console.log("A");
    //     return <Shimmer />
    // }


    return ListofRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="bar">
                <div className="search">
                    <input type="text" className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />

                    <button
                        onClick={() => {
                            const filteredRestaurant = ListofRestaurant.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurat(filteredRestaurant);
                        }}
                    >
                        <h4>Search</h4>
                        <h4>🔍</h4></button>  {/* Placeholder search icon, no functionality implemented */}

                </div>

                {/* Filter button that filters restaurants with a rating > 4 */}
                <div className="filter">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            const filterList = ListofRestaurant.filter(
                                (res) => res.info.avgRating > 4.0
                            );
                            setListofRestaurant(filterList);
                            setFilteredRestaurat(filterList);
                        }}
                    >
                        Filter
                    </button>
                </div>
            </div>

            {/* The restaurant list rendered using the RestaurantCart component */}
            <div className="rest">
                {
                    // Map over ListofRestaurant to create a RestaurantCart for each restaurant
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCart
                                resData={restaurant}
                            /></Link>

                    ))
                }

                {/* 
                Example hard-coded RestaurantCart instances, commented out 
                These were likely used for static rendering before dynamic data was introduced

                <RestaurantCart name="Jai Ganesh Bhojnalaya" rating="9.0" time=" 40-50" />
                <RestaurantCart name="KFC" rating="6.5" time=" 49-59" />
                <RestaurantCart name="Windeze" rating="7.0" time=" 20-30" />
                <RestaurantCart name="Dominoz" rating="8.4" time=" 30-40 " />
                <RestaurantCart name="Pizza Hut's" rating="5.7" time=" 45-55" />
                <RestaurantCart name="Kishaan Farms" rating="9.0" time=" 30-45" />
                */}
            </div>
        </div >
    );
}

export default Body;
