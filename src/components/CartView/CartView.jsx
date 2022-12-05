import React, { useContext } from "react";
import "../CartView/CartView.css";
import { cartContext } from "../../context/cartContext";
import { createOrder, exportArrayToFirestore } from "../../data/firebase"
import CartForm from "./CartForm.jsx"
import { useNavigate } from "react-router-dom"
import MyButton from "../MyButton/MyButton";

function CartView() {
    const { cart, removeItem, } = useContext(cartContext);
    let navigate = useNavigate();

    function handleExport() {
      exportArrayToFirestore();
    }
    if (cart.lenght === 0) return 
    <div className="cart__div">
        <h1>Carrito Vacio</h1>;
    </div>

    async function handleCheckout(event, data) {
        //crear nuestro objeto , "orden de compra"
        const order = {
            buyer: data,
            items: cart,
            total: 0,
            date: new Date(),
        };
        const orderId = await createOrder(order);
            navigate(`/thankyou/${orderId}`)
    }
    return (
        <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} >
        <img src={item.imgurl} alt={item.title} />
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>unidades: {item.count}</h4>
          <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
            X
          </MyButton>
        </div>
      ))}
      <CartForm onSubmit={handleCheckout} />
      <MyButton>Vaciar carrito</MyButton>
      <button onClick={handleExport}>borrenme please</button>
    </div>
    );
}

export default CartView;