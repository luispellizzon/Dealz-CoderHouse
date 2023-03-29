import { TbListDetails } from "react-icons/tb";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = ({ item, isModalOpen, getCurrent }) => {
  const { id, name, price, imageUrl } = item;
  const { addOnCart } = useContext(CartContext);
  const addProduct = () => addOnCart(item);

  const showItem = () => {
    isModalOpen();
    getCurrent(item);
  };

  return (
    <div className="rounded flex flex-col h-80" id={id}>
      <div className="w-full min-h-[70%] relative group">
        <img src={imageUrl} alt="" className="w-full h-full rounded-t  " />
        <div className="hidden w-full h-full absolute top-0 left-0 group-hover:flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-60">
          <button
            className="w-[70%] text-lg' bg-amber-50 p-1 rounded text-slate-900 font-bold active:scale-95 cursor-pointer flex items-center justify-center gap-1"
            type="button"
            onClick={() => showItem()}
          >
            <TbListDetails className=" font-bold bg-slate-900 text-amber-50 rounded" />{" "}
            Description
          </button>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between text-center">
        <div className="pt-2">
          <h1>{name}</h1>
          <p className="text-lg font-bold">{price}€</p>
        </div>
        <button
          type="button"
          className="w-full bg-slate-900 px-2 py-1 rounded text-amber-50"
          onClick={addProduct}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Item;
