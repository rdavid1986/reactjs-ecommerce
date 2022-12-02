import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

<<<<<<< HEAD
import Item from "./Item";
import "./itemList.css";
import GetItem from "../../services/mockService.js";
=======
import "./itemList.css";
import  getItems  from "../../services/mockService.js";
import ItemList from "./ItemList"
import Loader from "../Loaders/Loader"
>>>>>>> main

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { idCategory } = useParams();
  
  async function getItemsAsync() {
    let res = await getItems(idCategory);
    setProducts(res);
  }

  useEffect(() => {
    getItemsAsync();
    return() => {
      console.log("Componente desmontado")
    }
  },[idCategory]);

  return (
    <div className="catalogo">
      {products ? <ItemList products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainer;
