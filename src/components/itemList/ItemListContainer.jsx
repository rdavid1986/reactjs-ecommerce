import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./itemList.css";
import getItems from "../../services/mockService";
/* import getItems, { getItemByCategory } from "../../data/firebase"; */
import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    if (!idCategory) {
      let resp = await getItems();
      setProducts(resp);
    } else {
       /* let resp = await getItemByCategory(idCategory); */
      let resp = await getItems(idCategory);
      setProducts(resp);
    }
  }
  useEffect(
    () => {
      getItemsAsync();
    } /* , [idCategory] */
  );

  return (
    <div className="catalogo">
      {products ? <ItemList products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainer;
