import CartItem from "./CartItem";

const CartItemList = ({cartItems}) => {
console.log(cartItems[1])
  return (
    <div className="w-full h-72 overflow-scroll">
      <ul>
        {cartItems.map((item, index) => (
          <CartItem key={index} cartItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;