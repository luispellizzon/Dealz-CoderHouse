import { Outlet, useParams } from "react-router-dom";
import CheckoutContainer from "../components/CheckoutContainer";

const Checkout = () => {
  const { orderId } = useParams();

  return <>{orderId ? <Outlet /> : <CheckoutContainer />}</>;
};

export default Checkout;
