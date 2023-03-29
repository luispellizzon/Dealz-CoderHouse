import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  /* Close and open menu mobile */
  useEffect(() => {
    const closeDropDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeDropDown, { capture: true });

    return () =>
      document.removeEventListener("click", closeDropDown, { capture: true });
  }, []);

  return (
    <nav className="container flex justify-between items-center px-10 pt-10 pb-5 mx-auto border-b-2 border-black min-w-full md:min-w-max">
      <div className="translate-x-[-1rem]">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-5">
        {/* Desktop menu */}
        <div className="hidden sm:block">
          <ul className="relative overflow-visible flex gap-5 items-center pt-1 text-lg uppercase">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {/* Burguer Menu */}
        <div
          ref={menuRef}
          className="relative flex gap-4 items-center sm:hidden "
        >
          <button
            id="menu-btn"
            className={`${isMenuOpen ? "open" : ""} block hamburger px-3 py-3`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-mid"></span>
            <span className="hamburger-bot"></span>
          </button>

          {/* Check if Menu is opened */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="menu-mobile absolute top-10 right-0 bg-white border-black border-[1px] rounded z-30"
            >
              <ul className="flex flex-col text-center uppercase font-bold">
                <li className="border-b-black border-b-[0.5px]">
                  <Link
                    to="/shop"
                    className="p-4 block hover:bg-amber-100 rounded"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/checkout"
                    className="p-4 block hover:bg-amber-100 rounded"
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
        {/* <Cart /> */}
        <Cart />
      </div>
    </nav>
  );
};

export default NavBar;
