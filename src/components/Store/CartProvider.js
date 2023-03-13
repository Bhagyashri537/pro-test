import { useState } from "react";
import CartContext from "./cart-context";

// const dummymenu = [
//     {
//         id: "01",
//         name: "Dolo",
//         description: "use for fever",
//         price: 20,
//         quantity : 1
//     },
//     {
//         id: "02",
//         name: "Paracetamol",
//         description: "use for fever and bodypain",
//         price: 25,
//         quantity : 1
//     },
//     {
//         id: "03",
//         name: "dolo 65",
//         description: "use for fever and headache",
//         price: 23,
//         quantity : 1
//     },
//     {
//         id: "04",
//         name: "cetrizine",
//         description: "use for itching",
//         price: 15,
//         quantity : 1
//     }
// ];
const CartProvider = (props) => {
  const [tabArray, setTabArray] = useState([]);
  const [cartItemArray, setCartItemArray] = useState([]);
  const [totalQuant, setTotalQuantity] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const addItemHandler = (item) => {

    setTabArray((prev) => {

        return [...prev, item]
    });

    setFinalPrice((prev)=>{
        return prev+(3*item.price);
    });

  const inTheCart={...item,quantity : 0}

    setCartItemArray((prev)=>{
        return [...prev,inTheCart]
    })

 } ;

 const addToCartHandler=(id,quantity)=>{

    const remIndex=cartItemArray.findIndex((ele)=> ele.id===id);
    const remIndexItem=cartItemArray[remIndex];
    const mIndexItem=tabArray[remIndex];
    
    if(quantity===""){
        setCartItemArray((prev)=>{
            prev[remIndex]={...remIndexItem,
                       quantity: remIndexItem.quantity+1,
                    }
                    return [...prev];
        });
        setTabArray((prev)=>{
            prev[remIndex]={...mIndexItem,
                quantityLarge: mIndexItem.quantity-1,
             }
             return [...prev];
        });
        setTotalQuantity(totalQuant+1);
    }
    
    
    
    
    
    }

  const cartContext = {
    menuItems: tabArray,
    cartItems: cartItemArray,
    totalAmount: totalQuant,
    finalPrice: finalPrice,
    addItem: addItemHandler,
    addtoCart: addToCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
