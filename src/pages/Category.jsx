import { useParams } from "react-router-dom";
import { useContext } from "react";
import ItemsList from "../components/ItemsList";
import { CategoryContext } from "../context/CategoryContext";

const Category = ({ addOnCart, isModalOpen, getCurrent }) => {
  const { categoryName } = useParams();
  const { categoriesMap } = useContext(CategoryContext);

  return (
    <>
      <section id={categoryName}>
        <h1 className="text-center text-slate-900 text-3xl font-bold uppercase p-4">
          {categoryName} Products
        </h1>
        <div className="container mx-auto pb-4">
          <hr className="border" />
        </div>
        <ItemsList
          productTitle={categoryName}
          productItems={categoriesMap[categoryName]}
          isModalOpen={isModalOpen}
          getCurrent={getCurrent}
        />
      </section>
    </>
  );
};
export default Category;
