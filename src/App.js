import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";


const showHomePage = () =>{
  if (window.location.pathname === "/") {
    return <Home />
  }
}

const showShopPage = () =>{
  if (window.location.pathname === "/shop") {
    return <Shop />
  }
}

function App() {
  return (
    <>
      <NavBar />
      {showHomePage()}
      {showShopPage()}
      {/* /*Waiting for Routes class to implement Shop page */}
      {/* <Shop />  */}
    </>
   
  );
}

export default App;
