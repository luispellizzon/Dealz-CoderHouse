import OrderConfirmation from "../components/OrderConfirmation";
import { Helmet } from "react-helmet";

const OrderProcessed = () => {
  return (
    <>
      <Helmet>
        <title>Order Details | Dealz</title>
      </Helmet>
      <OrderConfirmation />
    </>
  );
};

export default OrderProcessed;
