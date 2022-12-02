import React from "react";
<<<<<<< HEAD
import ItemCount from "../ItemCount/ItemCount.jsx";
import toggleButton from "../toggleButton/toggleButton.jsx";
=======
import MyButton from "../MyButton/MyButton.jsx";
import { Link } from "react-router-dom";
import ToggleButton from "../toggleButton/ToggleButton.jsx";

>>>>>>> main
import "./itemList.css";

function Item({ title, imgurl, price, id, stock, discount}) {
  const urlDetail = `/detail/${id}`;
  const stylePrice = { color: discount && "green"};
  return (
<<<<<<< HEAD
    <div className="card__div">
      <toggleButton />
      <img src={props.imgurl} className="card__img"></img>
      <h3 className="card__title">{props.title}</h3>
      <p className="card__price">{props.price}</p>
      <p className="card__category">{props.category}</p>
      <ItemCount stock={5} tittle="Agregar al carrito" />
    </div>
=======
      
      <Link to={urlDetail}>
        <div className="card__div">
        <ToggleButton icon="♥️" />
          
          <img src={imgurl} alt={title}className="card__img" />
          <h3 className="card__title">{title}</h3>
          <p className="card__price" style={stylePrice}>$ {price}</p>
          {discount && <p>Descuento: {discount}</p>}
          {stock <= 0 && <p>No tenemos stock</p>}
            <MyButton text="" onTouchButton={() => console.log("click")} colorBtn={stock <= 0 && "red"}>ver mas</MyButton>
        </div>
      </Link>

>>>>>>> main
  );
} 

export default Item;
