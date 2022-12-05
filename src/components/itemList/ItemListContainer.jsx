import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./itemList.css";
import  getItems, { getItemByCategory}  from "../../data/firebase";
import ItemList from "./ItemList"
import Loader from "../Loaders/Loader"

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { idCategory } = useParams();
  
  async function getItemsAsync() {
      if (!idCategory) {
        let resp = getItems();
        setProducts(resp);
      
    } else {
      let resp = await getItemByCategory(idCategory);
      setProducts(resp);
    }
  }
  useEffect(() => {
    getItemsAsync();
    
  });

  return (
    <div className="catalogo">
      {products ? <ItemList products={products} /> : <Loader />}
    </div>
  );

}

export default ItemListContainer;
