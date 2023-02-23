import {useState, useContext} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet} from "react-router-dom";
import SHOP_DATA from "./data/shopitems-data";
import NavBar from "./components/NavBar";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Modal from "./components/Modal"
import { CartContext } from "./context/CartContext";

const Root = ({showModal, isModalOpen, showCurrentItem}) =>{
  return(
    <>
      {showModal ? <Modal isModalOpen={isModalOpen} showCurrentItem={showCurrentItem} /> : null}
      <NavBar />
      <Outlet />
    </>
  )
}

function App() {
 
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
        <Route path="/" element={<Root  showModal={showModal} isModalOpen={isModalOpen} showCurrentItem={showCurrent}/>}>
          <Route index element={<Home />} />
          <Route  path="/shop" element={<Shop isModalOpen={isModalOpen} getCurrent={getCurrent}/>}>
            <Route path=":categoryName" element={<Category products={SHOP_DATA} isModalOpen={isModalOpen} getCurrent={getCurrent}/>} />
          </Route>
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
