import { createContext, useState, useEffect } from "react";


export const CartContext = createContext({

})

export const CartProvider = ({children}) =>{

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}