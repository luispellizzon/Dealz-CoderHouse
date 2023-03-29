import { Outlet, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ItemListContainer from "../components/ItemListContainer";

const Shop = ({ isModalOpen, getCurrent }) => {
  const { categoryName } = useParams();
  return (
    <>
      <Helmet>
        <title>Shop | Dealz </title>
      </Helmet>
      {!categoryName ? (
        <ItemListContainer isModalOpen={isModalOpen} getCurrent={getCurrent} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Shop;
