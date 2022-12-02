import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";

function ItemDetail({product}) {
    const { addToCart } = useContext(cartContext);

    const [isInCart, setIsInCart] = useState(false);

    function onAddToCart(count){
        addToCart(product, count);
        setIsInCart(count);
    }
    return (
        <div className="card__detail">
            <div className="card__detail__img">
                <img src={product.imgurl} alt="Product img" />
            </div>
            <div className="card__detail__description">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4 className="price">$ {product.price}</h4>
            </div>
            {isInCart? (
                <Link to="/cart">
                    <MyButton text="Ir al carrito"></MyButton>
                </Link>
            ) : (
                <ItemCount onAddToCart={onAddToCart} stock={product.stock}  />
            )}
        </div>
    )
}

export default ItemDetail