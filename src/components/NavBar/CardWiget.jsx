import "./cartWiget.css";
//importamos el hook de context: useContext
import React, { useContext } from "react";
//importamos el context que queremos utilizar
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

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
