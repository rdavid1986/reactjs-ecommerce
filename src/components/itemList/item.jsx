import React from "react";
import MyButton from "../MyButton/MyButton.jsx";
import { Link } from "react-router-dom";
import ToggleButton from "../toggleButton/toggleButton.jsx";

import "./itemList.css";

function Item({ title, imgurl, price, id, stock, discount }) {
  const urlDetail = `/detail/${id}`;
  const stylePrice = { color: discount && "green" };
  return (
    <div className="card__div">
      <ToggleButton icon="♥️" />
      <div className="card__body">
        <img src={imgurl} alt={title} className="card__img" />
        <h3 className="card__title">{title}</h3>
        <p className="card__price" style={stylePrice}>
          $ {price}
        </p>
        {discount && <p>Descuento: {discount}</p>}
        {stock <= 0 && <p>No tenemos stock</p>}
        <Link to={urlDetail}>
          <MyButton
            text=""
            onTouchButton={() => console.log("click")}
            colorBtn={stock <= 0 && "red"}>
            ver mas
          </MyButton>
        </Link>
      </div>
    </div>
  );
}

export default Item;