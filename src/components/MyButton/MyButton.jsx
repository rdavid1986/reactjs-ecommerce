import React, { useState } from "react";
import "./MyButton.css";

function MyButton (props) {
    let[colorBtn, setColorBtn] = useState(props.colorBtn)

       function handdleClick() {
        setColorBtn("#444");
          //props.onTocuhButton && props.onTouchButton();  
      }  

      return (
        <button onClick={props.onTouchButton} 
        style={{ backgroundColor: colorBtn}} 
        className="btn" >
          {props.children}
        </button>
      );
  }
 
  export default MyButton;