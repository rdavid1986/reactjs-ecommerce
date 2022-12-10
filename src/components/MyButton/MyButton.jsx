import React, { useState } from "react";
import "./MyButton.css";

function MyButton (props) {
    let[colorBtn] = useState(props.colorBtn)


      return (
        <button onClick={props.onTouchButton} 
        style={{ backgroundColor: colorBtn}} 
        className="btn" >
          {props.children}
        </button>
      );
  }
 
  export default MyButton;