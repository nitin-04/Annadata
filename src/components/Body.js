import RestaurantCart from "./Restaurantcart";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [ListofRestaurant, setListofRestaurant] = useState(resObj);

    return (
        <div className="body">
            <div className="bar">
                <div className="search">
                    <h4>Search</h4>
                    <h4>🔍</h4>
                </div>
                <div className="filter">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            const filterList = ListofRestaurant.filter(
                                (res) => res.info.rating > 4
                            );
                            setListofRestaurant(filterList);
                        }}
                    >Filter</button>
                </div >
            </div>



            <div className="rest">
                {
                    ListofRestaurant.map(rest =>
                        <RestaurantCart key={rest.info.id}
                            resData={rest} />
                    )
                }

                {/* <RestaurantCart name="Jai Ganesh Bhojnalaya" rating="9.0" time=" 40-50" />
                <RestaurantCart name="KFC" rating="6.5" time=" 49-59" />
                <RestaurantCart name="Windeze" rating="7.0" time=" 20-30" />
                <RestaurantCart name="Dominoz" rating="8.4" time=" 30-40 " />
                <RestaurantCart name="Pizza Hut's" rating="5.7" time=" 45-55" />
                <RestaurantCart name="Kishaan Farms" rating="9.0" time=" 30-45" /> */}
            </div>
        </div >
    )
}

export default Body;
