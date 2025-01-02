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

    const onlineStatus = useOnlineStatus();

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
        <div className="body  bg-gray-50 min-h-screen">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md rounded-lg mx-4 mb-6">
                {/* Search Section */}
                <div className="search flex items-center gap-4 m-4">
                    <input
                        type="text"
                        className="w-full px-8 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Search for restaurants..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        onClick={() => {
                            const filteredRestaurant = ListofRestaurant.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurat(filteredRestaurant);
                        }}
                    >
                         Search
                    </button>
                </div>

                {/* Filter Section */}
                <div className="filter m-4">
                    <button
                        className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                        onClick={() => {
                            const filterList = ListofRestaurant.filter(
                                (res) => res.info.avgRating > 4.0
                            );
                            setListofRestaurant(filterList);
                            setFilteredRestaurat(filterList);
                        }}
                    >
                        ⭐ Filter Top Rated
                    </button>
                </div>
            </div>

            {/* Restaurant Cards Section */}
            <div className=" restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center px-4 w-full">
                {filteredRestaurant.length > 0 ? (
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}
                            className="hover:scale-105 transition-transform duration-300"
                        >
                            <RestaurantCart resData={restaurant} />
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-600">
                        <h2>No restaurants match your search criteria.</h2>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Body;
