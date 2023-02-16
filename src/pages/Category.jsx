import { useParams } from "react-router-dom";
import ItemsList from "../components/ItemsList";

const Category = ({products = [], addOnCart, isModalOpen, getCurrent}) => {
    const { categoryName } = useParams();
    
    const category = products.filter((category) => category.title === categoryName)[0];

    return (
      <>
        <section id={category.title}>
          <h1 className="text-center text-slate-900 text-3xl font-bold uppercase p-4">
            {category.title} Products
          </h1>
          <div className="container mx-auto pb-4">
            <hr className="border" />
          </div>
          <ItemsList productCategory={category} addOnCart={addOnCart} isModalOpen={isModalOpen} getCurrent={getCurrent}/>
        </section>
      </>
    );
  };
export default Category ;