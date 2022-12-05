import "./cartWiget.css";
//importamos el hook de context: useContext
import React, { useContext } from "react";
//importamos el context que queremos utilizar
import { cartContext } from "../../context/cartContext";

function CardWiget() {
  //inicializamos el contexto deseado
  const miContext = useContext(cartContext);

  return (
    <>
      <img src="img/cartShopping.png" className="cartShopping" alt="Cart" />
      <span style={{ color: "red" }}>{miContext.itemsInCart()}</span>
    </>
  );
}

export default CardWiget;
