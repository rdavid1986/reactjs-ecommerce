import React from "react";
import MyButton from "../MyButton/MyButton.jsx";
import { Link } from "react-router-dom";
import ToggleButton from "../toggleButton/ToggleButton.jsx";

import "./itemList.css";

function Item({ title, imgurl, price, id, stock, discount}) {
  const urlDetail = `/detail/${id}`;
  const stylePrice = { color: discount && "green"};
  return (
      
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

  );
} 

export default Item;
