import {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet} from "react-router-dom";
import SHOP_DATA from "./data/shopitems-data";
import NavBar from "./components/NavBar";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Modal from "./components/Modal"

const Root = ({cart, decrease, increase}) =>{
  return(
    <>
      <NavBar cart={cart} decrease={decrease} increase={increase}/>
      <Outlet />
    </>
  )
}

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

  /*Function to Add a Product to Cart, But First Check If Item Exist (returning an array) and SET CART*/
  const addOnCart = (productToAdd) => {
    setCart(addCartItem(cart, productToAdd));
  };

  /*Function to Decrease Quantity of a Product*/
  const decreaseQuantity = (productToDecrease) =>{
    setCart(deleteQuantityFromItem(cart, productToDecrease));
  }

  const [showModal, setShowModal] = useState(false);
  const [showCurrent, setShowCurrent] = useState({});

  const isModalOpen = () =>{
    setShowModal((prev) => !prev);
  }

  const getCurrent = (currentItem) =>{
    setShowCurrent(currentItem)
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root cart={cart} decrease={decreaseQuantity} increase={addOnCart}/>}>
          <Route index element={<Home />} />
          <Route  path="/shop" element={<Shop addOnCart={addOnCart} isModalOpen={isModalOpen} getCurrent={getCurrent}/>} />
          <Route  path="/login" element={<SignIn />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/checkout" element={<Checkout />} />
        </Route>
        </>
    )
  )
  return (
    <>
    <RouterProvider router={router} />
    </>
   
  );
}


export default App;
