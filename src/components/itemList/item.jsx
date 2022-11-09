import React from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'

import "./itemList.css"

function item(props) {
  return (
    <div>
      <img src={props.imgurl}></img>
      <h3>{props.title}</h3>  
      <p>{props.price}</p>
      <p>{props.category}</p>
    <ItemCount stock={5} tittle="Agregar al carrito"/>
    </div>
  )
}

export default item