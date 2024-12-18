import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; 
import RestaurantCategory from "./RestaurantCategory.js";
const RestaurantMenu = () => {

    const { resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null) return <Shimmer />;

    const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;

    const  itemCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(" ,")} - {costForTwo}
            </p>
            {categories.map((category) => (
                <RestaurantCategory data={category?.card?.card} />
                ))};

        </div>
    );
};

export default RestaurantMenu;