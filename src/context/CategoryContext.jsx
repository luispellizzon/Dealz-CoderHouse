import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../data/shopitems-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoryContext = createContext({
  categoriesMap: [],
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState([]);
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategories();
  });

  const value = { categoryMap };

  return (
    <CategoryProvider.Provider value={value}>
      {children}
    </CategoryProvider.Provider>
  );
};
