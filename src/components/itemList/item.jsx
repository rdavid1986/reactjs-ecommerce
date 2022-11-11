import React from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";

import "./ItemList.css";

function Item(props) {
  return (
    <div className="card__div">
      <img src={props.imgurl} className="card__img"></img>
      <h3 className="card__title">{props.title}</h3>
      <p className="card__price">{props.price}</p>
      <p className="card__category">{props.category}</p>
      <ItemCount stock={5} tittle="Agregar al carrito" />
    </div>
  );
} 

export default Item;
