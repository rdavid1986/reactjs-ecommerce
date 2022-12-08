import "./cartWiget.css";
//importamos el hook de context: useContext(para tarer item a mostrar en el carrito)
import React, { useContext } from "react";
//importamos el context que queremos utilizar
import { cartContext } from "../../../context/cartContext";

import { Link } from "react-router-dom";

function CardWiget() {
  //inicializamos el contexto deseado
  const {itemsInCart} = useContext(cartContext);
  const cardWigetCount = itemsInCart()

  return (
      <Link to="Cart">
        <img src="img/cartShopping.png" className="cartShopping" alt="Cart" />
        {
          cardWigetCount !== 0 &&
          <span >{cardWigetCount}</span>

        }
      </Link>
  );
}

export default CardWiget;
