import { createContext, useState } from "react";

export const OrderContext = createContext({
  buyer: null,
  items: [],
  total: 0,
  setOrderBuyer: () => {},
  setOrderItems: () => {},
  setTotalPrice: () => {},
});

export const OrderProvider = ({ children }) => {
  const [buyer, setBuyer] = useState(null);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const setOrderBuyer = (buyerDetails) => {
    setBuyer({ ...buyerDetails });
  };

  const setOrderItems = (items) => {
    setItems([...items]);
  };

  const setTotalPrice = (price) => {
    setTotal(price);
  };

  const value = {
    buyer,
    items,
    total,
    setOrderBuyer,
    setOrderItems,
    setTotalPrice,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
