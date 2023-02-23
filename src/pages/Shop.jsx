import { Outlet, useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import SHOP_DATA from "../data/shopitems-data";

const Shop = ({isModalOpen, getCurrent}) =>{
    const {categoryName} = useParams();
    return (
    <>
      {!categoryName ? <ItemListContainer products={SHOP_DATA} isModalOpen={isModalOpen} getCurrent={getCurrent}/>  : <Outlet />}
    </>
        
    )

};

export default Shop;