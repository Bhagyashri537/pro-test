import CartContext from "../Store/cart-context";
import { useContext } from "react";
import TabItem from "./TabItem";
import React from "react";

const Tab=()=>{
    const crtContxt=useContext(CartContext);
 
    const changeHandler = (id) => {


        crtContxt.addToCart(id);
    }
 
 const menuOfTabs=crtContxt.menuItems.map((item)=>(
     <TabItem 
     key={item.id}
     name={item.name}
     description={item.description}
     price={item.price}
     quantity={item.quantity}
     
     onAdd={changeHandler.bind(null,item)}/>
 ));
 
 return(
     <React.Fragment>
         {menuOfTabs}
     </React.Fragment>
 
 )
 }
 
 export default Tab;