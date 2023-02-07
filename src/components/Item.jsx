
const Item = ({ item, addOnCart }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <div className="rounded flex flex-col h-80" id={id}>
      <div className="w-full min-h-[70%]">
        <img src={imageUrl} alt="" className="w-full h-full rounded-t" />
      </div>
      <div className="h-full flex flex-col justify-between text-center">
        <div className="pt-2">
          <h1>{name}</h1>
          <p className="text-lg font-bold">{price}€</p>
        </div>
        <button
          type="button"
          className="w-full bg-slate-900 px-2 py-1 rounded text-amber-50"
          onClick={()=> addOnCart(item)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Item;