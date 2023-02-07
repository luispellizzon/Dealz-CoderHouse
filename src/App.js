import {useState} from "react";
import NavBar from "./components/NavBar";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";


function App() {
  const [cart, setCart] = useState([])

  const addCartItem = (cartItems, productToAdd) =>{
    const isCartItem = cartItems.find((item) => item.id === productToAdd.id);
    if (isCartItem) {
      return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };  

  const addOnCart = (productToAdd) => {
    setCart(addCartItem(cart, productToAdd));
  };


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
      <NavBar cart={cart}/>
      {showHomePage()}
      {showShopPage()}
      {showCheckoutPage()}
      {/* /*Waiting for Routes class to implement Shop page */}
      {/* <Shop />  */}
    </>
   
  );
}

export default App;
