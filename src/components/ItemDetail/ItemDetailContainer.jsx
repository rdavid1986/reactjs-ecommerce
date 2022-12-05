import { useState, useEffect } from 'react';
import { getSingleItem } from "../../services/mockService.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { idItem } = useParams();

    async function getItemAsync() {
        getSingleItem(idItem).then( res => {
            setProduct(res);
            setIsLoading(false);
        })
    }
    //if
    useEffect(() => {
        getItemAsync();
    });
    
    if(isLoading)
    return (
        <Loader/>
    );

    return (
        <ItemDetail product={product} />
    )

}

export default ItemDetailContainer;