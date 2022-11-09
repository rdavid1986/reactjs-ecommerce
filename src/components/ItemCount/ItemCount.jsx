import React from "react";
import "./ItemCount.css";

function ItemCount(props) {
  let [Count, setCount] = React.useState(1);

  function handleSuma() {
    if (Count < props.stock) setCount(Count+1);
  }
  function handleResta() {
    if (Count > 1) setCount(Count-1);
  }

  return (
    <div>
      <button onClick={handleResta} className="butoon__count">-</button>
      <span>{Count}</span>
      <button onClick={handleSuma} className="butoon__count">+</button>
      <br />
      <button>{props.tittle}</button>
    </div>
  );
}
export default ItemCount;
