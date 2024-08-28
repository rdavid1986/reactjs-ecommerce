import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useContext} from "react"
import { cartContext } from "../../context/cartContext";
import swal from "sweetalert";

function ItemDetail({product}) {
     const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {

    swal('Se agrego el producto al carrito', "Vaya al carrito para ver sus productos!", "success");
    /* alert(`Agregaste ${count} items al carrito!`); */
    
    addToCart(product, count);
  }
    return (
        <div className="card__detail">
            <div className="card__detail__img">
                <img className="detail__img"src={product.imgurl} alt="Product img" />
            </div>
            <div className="card__detail__description">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3 className="card__detail__price">$ {product.price}</h3>
                <ItemCount  onAddToCart={onAddToCart} stock={product.stock}  />
            </div>
        </div>
    )
}

export default ItemDetail