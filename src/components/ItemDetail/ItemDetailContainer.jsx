import { useState, useEffect } from 'react';
import { getSingleItem } from "../../services/mockService.js";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    const { idItem } = useParams();
    console.log(useParams());

    async function getItemAsync() {
        let respuesta = await getSingleItem(idItem);
        setProduct(respuesta);
    }

    useEffect(() => {
        getItemAsync();
    }, []);

    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;