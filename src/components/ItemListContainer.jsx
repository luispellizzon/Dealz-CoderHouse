import React from "react";
import ItemsList from "./ItemsList";

const ItemListContainer = ({ products = [], isModalOpen, getCurrent }) => {
  return (
    <div className="container mx-auto">
      {products.map((category) => (
        <ItemsList
          key={category.title}
          productCategory={category}
          isModalOpen={isModalOpen}
          getCurrent={getCurrent}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
