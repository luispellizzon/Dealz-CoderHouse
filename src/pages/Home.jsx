import { Helmet } from "react-helmet";
import CategoryListContainer from "../components/CategoryListContainer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dealz | Home</title>
      </Helmet>
      <div className="mt-4 flex items-center">
        <CategoryListContainer />
      </div>
    </>
  );
};

export default Home;
