import "./ItemDetail.css"

function ItemDetail({product}) {
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
        </div>
    )
}

export default ItemDetail