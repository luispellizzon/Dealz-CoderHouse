const CartItem = ({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;
  
    return (
      <li className="flex my-3 gap-3 items-center">
        <div className="h-20 w-16">
          <img src={imageUrl} alt={name} className="rounded h-full w-full" />
        </div>
        <div>
          <h2>{name}</h2>
          <span>
            {quantity} X {price}€
          </span>
        </div>
      </li>
    );
  };
  
  export default CartItem;