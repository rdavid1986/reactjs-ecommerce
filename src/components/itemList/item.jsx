import React from "react";
import MyButton from "../MyButton/MyButton.jsx";
import { Link } from "react-router-dom";
import "./itemList.css";

function Item({ title, imgurl, price, id}) {
  const urlDetail = `/detail/${id}`;
  return (

      <Link to={urlDetail}>
        <div className="card__div">
          <img src={imgurl} alt={title}className="card__img" />
          <h3 className="card__title">{title}</h3>
          <p className="card__price">$ {price}</p>
            <MyButton text="ver mas"/>
        </div>
      </Link>

  );
} 

export default Item;
