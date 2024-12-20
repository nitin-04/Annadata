import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Get the quantity of an item in the cart
  const getItemQuantity = (id) => {
    const item = cartItems.find((item) => item.card.info.id === id);
    return item ? item.quantity : 0;
  };

  // Handle adding an item (increment quantity)
  const handleAddItem = (item) => {
    dispatch(addItem(item)); // Dispatch action to add or increment item
  };

  // Handle removing an item (decrement quantity or remove item)
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Dispatch action to decrease or remove item
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start border border-gray-200 rounded-lg shadow-md bg-white p-4 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Left Section: Content */}
          <div className="flex-1 pr-4">
            <h3 className="font-semibold text-lg text-gray-700 mb-1">
              {item.card.info.name}
            </h3>
            <div className="flex items-center mb-4 mt-6">
              <span className="text-lg font-bold text-green-600">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-gray-700 text-sm line-clamp-2">
              {item.card.info.description ||
                "Serves 1 | Herbed onion and green capsicum, juicy sweet corn, and 100% mozzarella cheese with flavorful pan sauce."}
            </p>
          </div>

          {/* Right Section: Image, Quantity and Add Button */}
          <div className="flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-32 h-32 object-cover rounded-lg mb-2"
            />

            {/* Quantity control */}
            <div className="flex items-center mb-2">
              <button
                className="px-2 py-1 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100"
                onClick={() => handleRemoveItem(item)} // Decrease quantity
              >
                -
              </button>
              <span className="mx-2">{getItemQuantity(item.card.info.id) || 0}</span>
              <button
                className="px-2 py-1 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100"
                onClick={() => handleAddItem(item)} // Increase quantity
              >
                +
              </button>
            </div>

            {/* Add button */}
            <button
              className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300"
              onClick={() => handleAddItem(item)} // Add to cart (defaults to quantity 1)
            >
              ADD
            </button>
            <span className="text-xs text-gray-500 mt-1">
              {item.card.info.customizable ? "Customisable" : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
