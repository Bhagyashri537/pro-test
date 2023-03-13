import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

const Cart=(props)=>{
const crtContxt=useContext(CartContext);

const carttab=crtContxt.cartItems.map((item)=>(
    <CartItem 
    key={item.id}
    name={item.name}
    price={item.price}
    quantity={item.quantity}
   />
))
return (
    <Modal onClose={props.onClose}>
        {carttab}
        <div>Total Amount</div>
        <div>{crtContxt.finalPrice}</div>
      <button onClick={props.onClose}>
                    Close
                </button>
                <button >Order</button>
    </Modal>
)
}
export default Cart;