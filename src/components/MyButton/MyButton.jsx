import React, { useState } from "react";
import "./MyButton.css";

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.colorBtn);

  function handdleClick() {
    setColorBtn("#555");
    //props.onTocuhButton && props.onTouchButton();
  }

  return (
    <button
      onClick={handdleClick}
      style={{ backgroundColor: colorBtn }}
      className="btn">
      {props.children}
    </button>
  );
}

export default MyButton;
