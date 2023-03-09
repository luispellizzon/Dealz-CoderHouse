import { Outlet, useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

const Shop = ({ isModalOpen, getCurrent }) => {
  const { categoryName } = useParams();
  return (
    <>
      {!categoryName ? (
        <ItemListContainer isModalOpen={isModalOpen} getCurrent={getCurrent} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Shop;
