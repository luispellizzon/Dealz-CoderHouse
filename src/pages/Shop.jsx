import { Outlet, useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import SHOP_DATA from "../data/shopitems-data";

const Shop = ({addOnCart, isModalOpen, getCurrent}) =>{
    const {categoryName} = useParams();
    return (
    <>
      {!categoryName ? <ItemListContainer products={SHOP_DATA} addOnCart={addOnCart} isModalOpen={isModalOpen} getCurrent={getCurrent}/>  : <Outlet />}
    </>
        
    )

};

export default Shop;