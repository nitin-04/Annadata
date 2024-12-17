import { CDN_URL } from "../utils/constants";

const RestaurantCart = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRating, cuisines, locality } = resData?.info;
    return (
        <div className=" m-4 p-4 w-[250px] bg-slate-100 rounded-xl hover:bg-gray-300">
            <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{avgRating}⭐ Rating</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
        </div>
    )
}

export default RestaurantCart;