import React from "react";
import ItemsList from "./ItemsList";
import SHOP_DATA from "../shopitems-data"


const ItemListContainer = () =>{
    return(
        <div className="container mx-auto">
        {SHOP_DATA.map((category) => (
          <ItemsList  key={category.title} productCategory={category} />
        ))}
      </div>
        
    )
}

export default ItemListContainer;