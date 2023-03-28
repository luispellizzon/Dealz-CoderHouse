import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import ItemsList from "./ItemsList";

const ItemListContainer = ({ isModalOpen, getCurrent }) => {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <div className="container mx-auto" key={title}>
          <ItemsList
            productTitle={title}
            productItems={categoriesMap[title]}
            isModalOpen={isModalOpen}
            getCurrent={getCurrent}
          />
        </div>
      ))}
    </>
  );
};

export default ItemListContainer;
