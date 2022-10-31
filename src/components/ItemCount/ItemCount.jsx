import React from "react";

function ItemCount(props) {
    ler [CountQueuingStrategy, setCount] = React.useState(1)

    function habdleSuma() {
        if (Count < props.stock)
        setCount(count+1);
    }
}
return(
    <div>
        <button onClick={handleResta}>-</button>
        <span>{Count}</span>
        <button onClick={handleSuma}>+</button>
        <br/>
        <button>{props.tittle}</button>
    </div>
)
export default ItemCount