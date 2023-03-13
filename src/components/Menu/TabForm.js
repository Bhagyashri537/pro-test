import CartContext from "../Store/cart-context";
import { useContext } from "react";

const TabForm = () => {
    const crtContxt = useContext(CartContext);

    const submitFormHandler = (event) => {
        event.preventDefault();

        const tobeAddProduct = {
            id: Math.random().toString(),
            name: document.getElementById("TabName").value,
            description: document.getElementById("Descr").value,
            price: document.getElementById("Price").value,
            quantity: document.getElementById("quantity").value,
            
        }
        crtContxt.addItem(tobeAddProduct);
    };

    return (
        <form onSubmit={submitFormHandler} style={{ display: "flex" }}>
            <div>
                <label>Tablet Name</label>
                <input id="TabName" type="text"></input>
            </div>

            <div>
                <label>Description</label>
                <input id="Descr" type="text"></input>
            </div>

            <div>
                <label>price</label>
                <input id="Price" type="number"></input>
            </div>

            <div>
                <label>quantity</label>
                <input id="quantity" type="number"></input>
            </div>



            <button type="submit">Add Product</button>
        </form>
    )
};
export default TabForm;
