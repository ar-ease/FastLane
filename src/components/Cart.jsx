import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";

import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // cartItems.

  // console.log(cartItems);
  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button className="bg-teal-300 p-2 m-5" onClick={() => handleClearCart()}>
        Clear
      </button>
      <div className="flex">
        {cartItems.map((item) => {
          return <FoodItem {...item?.card?.info} />;
        })}
      </div>
    </div>
  );
};
export default Cart;
