import React from "react";
import ItemsList from "./ItemsList";
import SHOP_DATA from "../data/shopitems-data";


const ItemListContainer = ({addOnCart}) =>{
  let itemAdded = 0;
    return(
        <div className="container mx-auto">
        {SHOP_DATA.map((category) => (
          <ItemsList  addOnCart={addOnCart} key={category.title} productCategory={category} />
        ))}
      </div>
        
    )
}

export default ItemListContainer;