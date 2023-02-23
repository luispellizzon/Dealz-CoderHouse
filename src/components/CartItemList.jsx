import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartItemList = () => {
    const {cartItems} = useContext(CartContext);

  return (
    <div className="w-full h-72 overflow-y-auto">
      <ul>
        {cartItems.map((item, index) => (
          <CartItem key={index} cartItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;