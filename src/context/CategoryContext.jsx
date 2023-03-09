import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../data/shopitems-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoryContext = createContext({
  categoriesMap: [],
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategories();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
