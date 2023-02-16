import React from "react";
import ItemsList from "./ItemsList";


const ItemListContainer = ({products = [], addOnCart, isModalOpen, getCurrent}) =>{
  let itemAdded = 0;
    return(
      
        <div className="container mx-auto">
        {products.map((category) => (
          <ItemsList  
          addOnCart={addOnCart} 
          key={category.title} 
          productCategory={category} 
          isModalOpen={isModalOpen}
          getCurrent={getCurrent}/>
        ))}
      </div>

    )
}

export default ItemListContainer;