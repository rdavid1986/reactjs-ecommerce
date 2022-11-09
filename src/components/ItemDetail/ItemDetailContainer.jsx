import { useState, useEffect } from 'react';
import { getSingleItem } from "../../services/mockService.js";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    async function getItemAsync() {
        let respuesta = await getSingleItem(product);
        setProduct(respuesta);
    }

    useEffect(() => {
        getItemAsync();
    }, []);

    return (
        <div className="item__list">
            <h3>{product.title}</h3>
            <img src={product.imgurl} />
        </div>
    );
}

export default ItemDetailContainer;