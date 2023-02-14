import ItemListContainer from "../components/ItemListContainer";

const Shop = ({addOnCart, isModalOpen, getCurrent}) =>{

    return (
        <ItemListContainer addOnCart={addOnCart} isModalOpen={isModalOpen} getCurrent={getCurrent}/>
    )

};

export default Shop;