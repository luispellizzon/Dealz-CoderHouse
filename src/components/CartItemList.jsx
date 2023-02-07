import CartItem from "./CartItem";

const CartItemList = ({cartItems, increase, decrease}) => {
  return (
    <div className="w-full h-72 overflow-scroll">
      <ul>
        {cartItems.map((item, index) => (
          <CartItem decrease={decrease} increase={increase} key={index} cartItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;