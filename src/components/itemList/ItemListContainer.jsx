import { useState, useEffect } from "react";

import Item from "./Item";
import "./itemList.css";
import GetItem from "../../services/mockService.js";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  async function getItemAsync() {
    let respuesta = await GetItem();
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemAsync();
  }, []);

  return (
    <div className="item__list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
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
