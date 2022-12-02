import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";

function CartView() {
    const { cart, removeItem, clear, priceInCart } = useContext(cartContext);

    if (cart.lenght === 0) return <h1>Carrito Vacio</h1>;

    return (
        <div className="cart-container">
      {cart.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>unidades: {item.count}</h4>
          <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
            X
          </MyButton>
        </div>
      ))}
      <MyButton>Vaciar carrito</MyButton>
    </div>
    );
}

export default CartView;