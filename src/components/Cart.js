import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemsList";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };


    return (
        <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto shadow-md rounded-lg bg-white p-6">
          {/* Cart Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
            <p className="text-gray-500">Review your order before checkout</p>
          </div>
      
          {/* Clear Cart Button */}
          <div className="flex justify-between items-center mb-6">
            <button
              className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-300"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            {cartItems.length === 0 && (
              <h2 className="text-lg text-gray-500">Your cart is empty</h2>
            )}
          </div>
      
          {/* Cart Items */}
          {cartItems.length > 0 && (
            <div className="divide-y divide-gray-200">
              <ItemList items={cartItems} />
            </div>
          )}
      
          {/* Checkout Section */}
          {cartItems.length > 0 && (
            <div className="mt-6 flex justify-end">
              <button
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
      
    )
};

export default Cart;