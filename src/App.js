
import React,{useState} from 'react';
import CartProvider from "./components/Store/CartProvider";
import './App.css';
import Tab from "./components/Menu/Tab";
import Heading from "./components/Modal/Heading";
import Cart from "./components/Cart/Cart"
import TabForm from './components/Menu/TabForm';

function App() {
const [showCart,setShowCart]=useState(false);

const cartOpenHandler=(event)=>{
  event.preventDefault();
  setShowCart(true);
}

const closeHandler=(event)=>{
  event.preventDefault();
  setShowCart(false);
}

  return (
   <CartProvider>
    <Heading onClick={cartOpenHandler}></Heading>
    <TabForm/>
    {showCart && <Cart onClose={closeHandler}/>}

    <Tab></Tab>
   </CartProvider>
  );
}

export default App;