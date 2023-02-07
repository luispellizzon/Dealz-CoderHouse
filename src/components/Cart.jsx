import { useState, useEffect, useRef } from "react";
import { BsBag } from "react-icons/bs";

import { motion } from "framer-motion";
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeDropDown, { capture: true });

    return () => document.removeEventListener("click", closeDropDown, { capture: true });
  }, []);



  return (
    <div ref={cartRef} className="relative cursor-pointer">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <BsBag className="text-3xl" />
        <div className="absolute top-0 w-full h-full flex items-center">
          <p className="text-sm font-bold w-full">0</p>
        </div>
      </button>
    </div>
  );
};

export default Cart;