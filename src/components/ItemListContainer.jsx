import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ItemsList from "./ItemsList";

const ItemListContainer = ({ isModalOpen, getCurrent }) => {
  const { products } = useContext(ProductContext);

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
