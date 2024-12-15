import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; 
const RestaurantMenu = () => {

    const { resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null) return <Shimmer />;

    const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;

    const  itemCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(" ,")} - {costForTwo}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((category) => (
                    <li key={category.card.card.id}>
                        {category.card.card.title} - {"Rs."}
                        {category.card.card.price || category.card.card.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;