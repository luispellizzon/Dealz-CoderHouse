import { TbListDetails } from 'react-icons/tb';

const Item = ({ item, addOnCart }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <div className="rounded flex flex-col h-80" id={id}>
      <div className="w-full min-h-[70%] relative group">
        <img src={imageUrl} alt="" className="w-full h-full rounded-t  " />
        <div className="hidden w-full h-full absolute top-0 left-0 group-hover:flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-60">
          <button type="button"
          className="w-[70%] text-lg' bg-amber-50 px-2 py-1 rounded text-slate-900 font-bold active:scale-95 cursor-pointer flex items-center justify-center gap-1"> <TbListDetails className=' font-bold bg-slate-900 text-amber-50 rounded'/> Ver Detalhes
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
          onClick={()=> addOnCart(item)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Item;


