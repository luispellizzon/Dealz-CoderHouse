import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutItem from "./CheckoutItem";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
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
            <p className="text-2xl pl-10 ">Total</p>
            <span className="text-2xl">{total}€</span>
          </div>

          <Link
            to="/payment"
            className="py-3 bg-slate-900 text-amber-50 rounded mx-auto w-[75%] active:scale-[99%]"
          >
            Go to Payment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutContainer;
