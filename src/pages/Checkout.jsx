import { Outlet, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import CheckoutContainer from "../components/CheckoutContainer";

const Checkout = () => {
  const { orderId } = useParams();

  return (
    <>
      <Helmet>
        <title>Checkout | Dealz</title>
      </Helmet>

      {orderId ? <Outlet /> : <CheckoutContainer />}
    </>
  );
};

export default Checkout;
