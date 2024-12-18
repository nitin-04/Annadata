import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {items.map((item) => (
    <div
      key={item.card.info.id}
      className="border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden rounded-t-lg">
        <img
          src={CDN_URL + item.card.info.imageId}
          alt={item.card.info.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name and Price */}
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg text-gray-800">
            {item.card.info.name}
          </span>
          <span className="text-sm text-gray-600">
            ₹
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {item.card.info.description}
        </p>

        {/* Add Button */}
        <button className="block w-full text-center py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
          Add +
        </button>
      </div>
    </div>
  ))}
</div>

    )

};

export default ItemList;