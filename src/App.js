import {useState} from "react";
import SHOP_DATA from "./data/shopitems-data";
import NavBar from "./components/NavBar";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";


function App() {

  /* Cart State*/
  const [cart, setCart] = useState([])

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

    /* Return an Array to be added on SetCart*/
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };  

  const deleteQuantityFromCart = (cartItems, productToRemove) => {
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

  /*Function to Add a Product to Cart, But First Check If Item Exist (returning an array) and SET CART*/
  const addOnCart = (productToAdd) => {
    setCart(addCartItem(cart, productToAdd));
  };

  const decreaseQuantity = (productToDecrease) =>{
    setCart(deleteQuantityFromCart(cart, productToDecrease));
  }


  console.log(cart)
  

  const showHomePage = () =>{
    if (window.location.pathname === "/") {
      return <Home />
    }
  }
  
  const showShopPage = () =>{
    if (window.location.pathname === "/shop") {
      return <Shop addOnCart={addOnCart}/>
    }
  }
  
  const showCheckoutPage = () =>{
    if (window.location.pathname === "/shop") {
      return <Checkout />
    }
  }

  return (
    <>
      <NavBar cart={cart} decrease={decreaseQuantity} increase={addOnCart}/>
      {showHomePage()}
      {showShopPage()}
      {showCheckoutPage()}
      {/* /*Waiting for Routes class to implement Shop page */}
      {/* <Shop />  */}
    </>
   
  );
}

export default App;
