import UserDetailsForm from "../components/UserDetailsForm";
import { Helmet } from "react-helmet";

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Order Details | Dealz</title>
      </Helmet>
      <UserDetailsForm />
    </>
  );
};

export default Payment;
