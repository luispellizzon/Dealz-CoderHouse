import { createContext, useState, useEffect } from "react";

 /* Check If Item Already Exist on Cart, If So Increment Quantity or Add NEW Item*/
 const addCartItem = (cartItems, productToAdd) =>{
    const isCartItem = cartItems.find((item) => item.id === productToAdd.id);
    
    if (isCartItem) {
      return cartItems.map((item) =>{
        /*Check if product quantity is not more than in stock*/
        if(item.id === productToAdd.id && isCartItem.quantity < isCartItem.stock){
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      }
    );
    }
    console.log([...cartItems, { ...productToAdd, quantity: 1 }])
    /* Return an Array to be added on SetCart*/
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };  

  /* Decrement quantity from a product */
  const deleteQuantityFromItem = (cartItems, productToRemove) => {
    const { quantity } = productToRemove;
    if (quantity === 1) {
      const userConfirmation = window.confirm("Would you like to remove this item?");
      if (userConfirmation) {
        const newBasketWithoutItem = cartItems.filter((item) => item.id !== productToRemove.id);
        return [...newBasketWithoutItem];
      } else{
        return [...cartItems]
      }
    } else {
      return cartItems.map((item) =>
        item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  };

  const calculateTotal = (cartItems) => cartItems.reduce((acc, item)=> acc + item.quantity * item.price,0);



export const CartContext = createContext({
    cartItems:[],
    quantityItems:null,
    totalPrice:0,
    addOnCart:() => {},
    decreaseQuantity:()=>{},
    setQuantityItems: () => {},
    setTotalPrice: () => {},
    setCartItems: () =>{},
})

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems]=useState([]);
    const [quantityItems, setQuantityItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCount = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
        setQuantityItems(newCount);
        setTotalPrice(calculateTotal(cartItems));
        console.log(quantityItems)
      }, [cartItems]);


    /*Function to Add a Product to Cart, But First Check If Item Exist (returning an array) and SET CART*/
    const addOnCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        console.log("added")
    };


  
    /*Function to Decrease Quantity of a Product*/
    const decreaseQuantity = (productToDecrease) =>{
        setCartItems(deleteQuantityFromItem(cartItems, productToDecrease));
    }

    const value = {
        cartItems,
        quantityItems,
        totalPrice,
        addOnCart,
        decreaseQuantity,
        calculateTotal,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}