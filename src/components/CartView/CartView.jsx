import React, { useContext } from "react";
import "../CartView/CartView.css";
import { cartContext } from "../../context/cartContext";
/* import { createOrder } from "../../data/firebase"; */

/* import CartForm from "./CartForm.jsx"; */
/* import { useNavigate } from "react-router-dom"; */
import MyButton from "../MyButton/MyButton";

function CartView() {
  const { cart, removeItem, removeCart, precioTotalPorItem } = useContext(cartContext);
  /* let navigate = useNavigate(); */

  /* function handleExport() {
      exportArrayToFirestore();
    } */
  if (cart.lenght === 0) return;
  <div className="cart__div">
    <h1>Carrito Vacio</h1>;
  </div>;

  /* async function handleCheckout(event, data) {
    //crear nuestro objeto , "orden de compra"
    const order = {
      buyer: data,
      items: cart,
      total: 0,
      date: new Date(),
    }; */
  /* const orderId = await createOrder(order);
    navigate(`/thankyou/${orderId}`); 
  }*/
  return (
    <div className="cart-container">
      {
      cart.length === 0
        ? <h5>No hay productos en el carrito</h5>
        :cart.map((item) => (
        <div key={item.id}>
          <img src={item.imgurl} alt={item.title} />
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <p>unidades: {item.count}</p>
          <p>Precio total de unidades: $ {precioTotalPorItem(item.id)}</p>

          <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
            X
          </MyButton>
        </div>
      ))}
      
      {/* <CartForm onSubmit={handleCheckout} /> */}
      <MyButton onTouchButton={() => removeCart()}>Vaciar carrito</MyButton>
      <div>
        {
        cart.length === 0 ? <h2>tiene que comprar</h2> : <h1>Resumen de compra</h1> 
        } 
      </div>
    </div>
  );
}

export default CartView;
