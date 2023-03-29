import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import CheckoutItem from "./CheckoutItem";
import { createOrderOnFirebase } from "../utils/firebase/firebase.utils";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

const CheckoutContainer = () => {
  const navigate = useNavigate();
  const { cartItems, cleanCart } = useContext(CartContext);
  const { buyer, setOrderItems, setTotalPrice } = useContext(OrderContext);
  const totalPrice = cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const items = cartItems.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    };
  });

  const submitOrder = async () => {
    setOrderItems(items);
    setTotalPrice(totalPrice);
    const order = await createOrder({
      buyer,
      items: items,
      total: totalPrice,
      date: new Date(),
    });
    cleanCart();
    navigate("/checkout/" + order.id);
  };

  const createOrder = async (orderObj) => {
    const orderDetails = { ...orderObj };
    const orderCreated = await createOrderOnFirebase(orderDetails);
    return orderCreated;
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <section id="checkout">
          <div className="container mx-auto flex flex-col items-center text-center py-4">
            <h1 className="text-3xl font-bold uppercase p-4">Checkout</h1>
            <div className="flex flex-col space-y-5 px-4 w-full md:max-w-2xl py-6">
              <ul className="flex flex-col gap-3">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <CheckoutItem key={item.id} item={item} />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
              <hr />
              <div className="flex justify-between pr-6 uppercase font-bold">
                <p className="text-2xl pl-10 ">Total:</p>
                <span className="text-2xl">{totalPrice}€</span>
              </div>
              <hr />
              {buyer && (
                <div>
                  <p className="uppercase font-bold text-2xl text-center ">
                    Your Details
                  </p>
                  <div>
                    <div className="flex justify-between  font-bold mb-2">
                      <p className="text-md md:text-xl  ">Name:</p>
                      <span className="text-md md:text-xl">
                        {buyer.userName}
                      </span>
                    </div>
                    <div className="flex justify-between   font-bold mb-2">
                      <p className="text-md md:text-xl  ">Email:</p>
                      <span className="text-md md:text-xl">{buyer.email}</span>
                    </div>
                    <div className="flex justify-between  font-bold mb-2">
                      <p className="text-md md:text-xl  ">Phone Number:</p>
                      <span className="text-md md:text-xl">
                        {buyer.phoneNumber}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Link
                to="/payment"
                className="py-3 bg-slate-900 hover:bg-slate-700 text-amber-50 rounded mx-auto w-[75%] active:scale-[99%] font-bold"
              >
                {buyer ? "Change Your Details" : "Add Your Details"}
              </Link>
              {buyer && (
                <button
                  className="py-3 bg-green-500 hover:bg-green-400 text-amber-50 rounded mx-auto w-[75%] active:scale-[99%] font-bold"
                  onClick={submitOrder}
                >
                  Confirm Order
                </button>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div className="container mx-auto flex flex-col items-center text-center py-4">
          <p className="text-3xl uppercase font-bold">
            Your cart is empty...
            <span>
              <FaSadCry className="mx-auto text-6xl" />
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutContainer;
