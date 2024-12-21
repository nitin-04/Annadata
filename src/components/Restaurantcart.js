import { CDN_URL } from "../utils/constants";

const RestaurantCart = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRating, cuisines, locality } = resData?.info;

    return (
        <div className="m-4 p-1  w-[300px] bg-white shadow-md rounded-xl hover:shadow-lg hover:bg-gray-100 transition duration-300">
            {/* Image Section */}
            <img
                className="rounded-lg w-full h-[300px] object-cover"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />

            {/* Content Section */}
            <div className="mt-4 h-[120px] flex flex-col justify-between">
                <h3 className="font-bold text-gray-800 text-lg truncate">{name}</h3>
                <h4 className="text-gray-600 text-sm">{avgRating} ⭐ Rating</h4>
                <h4 className="text-gray-500 text-sm truncate">{cuisines.join(", ")}</h4>
                <h4 className="text-gray-400 text-sm mt-1 truncate">{locality}</h4>
            </div>
        </div>

    )
}

export default RestaurantCart;