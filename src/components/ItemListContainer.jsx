import { useContext } from "react";
import { CategoryContext, ProductContext } from "../context/CategoryContext";
import ItemsList from "./ItemsList";

const ItemListContainer = ({ isModalOpen, getCurrent }) => {
  const { categoryMap } = useContext(CategoryContext);

  return (
    <div className="container mx-auto">
      {categoryMap.map((category) => (
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
