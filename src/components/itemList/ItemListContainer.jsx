import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./itemList.css";
import getItems, { getItemByCategory } from "../../services/mockService";
import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  // Define la función de forma que use el valor de idCategory
  async function getItemsAsync() {
    try {
      console.log(idCategory)
      if (!idCategory) {
        let resp = await getItems();
        setProducts(resp);
      } else {
        let resp = await getItemByCategory(idCategory);
        setProducts(resp);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  // Solo vuelve a ejecutar el efecto cuando idCategory cambie
  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="catalogo">
      {products.length > 0 ? <ItemList products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainer;
