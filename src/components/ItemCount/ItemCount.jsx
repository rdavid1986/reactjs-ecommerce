import React, { useState } from "react";
import "./ItemCount.css";
import MyButton from "../MyButton/MyButton"

function ItemCount({ stock, onAddToCart }) {
  let [Count, setCount] = useState(1);

  function handleSuma() {
    if (Count < stock) setCount(Count + 1);
  }
  function handleResta() {
    if (Count > 1) setCount(Count - 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleResta} className="button__count">-</button>
        <span className="count">{Count}</span>
        <button onClick={handleSuma} className="button__count">+</button>
        <br />
      </div>
      <div>
        <MyButton 
        onTouchButton={() => onAddToCart(Count)}>Agregar al carrito</MyButton>
      </div>

    </div>
  );
}
export default ItemCount;
