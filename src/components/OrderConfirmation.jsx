import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiGlassCelebration } from "react-icons/gi";

const OrderConfirmation = () => {
  const [userName, setUsername] = useState(null);
  const { orderId } = useParams();
  const { buyer, resetOrderDetails } = useContext(OrderContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (buyer) {
      setUsername(buyer.userName);
    } else {
      navigate("/");
    }
    return () => {
      resetOrderDetails();
    };
  }, [buyer]);

  return (
    <section id="order">
      <div className="container mx-auto mt-16 flex justify-center">
        <div className=" flex flex-col gap-3 mx-2 rounded-lg  bg-slate-900 text-center text-white p-6">
          <GiGlassCelebration className="mx-auto text-6xl" />
          <p className="font-bold">Hey {userName}</p>
          <h1 className="font-bold text-3xl text-amber-300">
            Your Order is Confirmed!
          </h1>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <p className="text-gray-400">
              Thanks for placing order{" "}
              <span className="underline text-amber-200">{orderId}</span>
            </p>
            <p className="text-gray-400">
              We will send you a notification about our payment platform and you
              have 5 days to complete it.
            </p>
          </div>
          <Link
            to="/"
            className="py-3 my-2 bg-amber-50 hover:bg-amber-300 text-slate-900 rounded mx-auto px-3 active:scale-[99%] font-bold"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;
