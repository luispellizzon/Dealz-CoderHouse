import { useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartItem = ({cartItem}) => {
    const { name, price, imageUrl, quantity } = cartItem;
    const {addOnCart, decreaseQuantity} = useContext(CartContext);
    const addQuantity = () => addOnCart(cartItem);
    const removeQuantity = () => decreaseQuantity(cartItem)

  
    return (
      <li className="flex my-3 gap-3 items-center">
        <div className="h-20 w-16">
          <img src={imageUrl} alt={name} className="rounded h-full w-full" />
        </div>
        <div>
          <h2>{name}</h2>
          <span className="flex items-center"> 
            <div className="flex items-center">
              <button className="active:scale-75"
              onClick={removeQuantity}
              >
                <FaChevronLeft/>
              </button>
              <p className="text-lg"> {quantity}</p>
              <button className={quantity === 5 ? "text-gray-400" : "active:scale-75"} 
              onClick={addQuantity}
              >
                <FaChevronRight />
              </button>
            </div>
           X {price}€
          </span>
        </div>
      </li>
    );
  };
  
  export default CartItem;