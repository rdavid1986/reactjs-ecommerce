import React, { useState } from "react";
import "./ItemCount.css";
import MyButton from "../MyButton/MyButton"

function ItemCount({ stock, onAddToCart }) {
  const [Count, setCount] = useState(1);

  function handleAdition() {
    if (Count < stock) setCount(Count + 1);
  }
  function handleSubtraction() {
    if (Count > 1) setCount(Count - 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleSubtraction} className="button__count">-</button>
        <span className="count">{Count}</span>
        <button onClick={handleAdition} className="button__count">+</button>
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
