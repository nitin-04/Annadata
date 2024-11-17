import { CDN_URL } from "../utils/constants";

const RestaurantCart = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRating, cuisines, locality } = resData?.info;
    return (
        <div className="cart">
            <img className="cart-img" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{avgRating}⭐ Rating</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default RestaurantCart;