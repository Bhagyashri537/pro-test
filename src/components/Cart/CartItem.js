import React from "react";




const CartItem=(props)=>{
    const prices=props.price*(props.quantity)

return (

    <div>

        <div>{props.name}</div>
        <div>{props.description}</div>
        <div> {props.quantity}</div>

        <div>{prices}</div>

    </div>

)

}

export default CartItem;