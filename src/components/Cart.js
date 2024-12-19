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
    <div className="text-center m-4 p-2">
        <h1 className="text-2xl font-bold">  Cart Page</h1>
        <div className="w-6/12 m-auto">
            <button
            className="p-2 m-2 bg-black text-white"
            onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {cartItems.length === 0 &&(
                <h1> Cart is empty</h1>
            )}
            <ItemList items = {cartItems}/>
        </div>
    </div>
    )
};

export default Cart;