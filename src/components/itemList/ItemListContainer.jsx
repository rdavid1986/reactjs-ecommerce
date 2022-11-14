import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./itemList.css";
import Item from "./Item";
import  GetItems  from "../../services/mockService.js";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  
  async function getItemsAsync() {
    let respuesta = await GetItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  },[idCategory]);

  return (
    <div className="item__list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;
