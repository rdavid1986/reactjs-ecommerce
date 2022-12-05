import React from "react";
import Item from "./item";


function ItemList({ products}) {
    return (
    <div className="item__list">
        {products.map((product) => {
            return (
                <Item
                key={product.id}
                id={product.id}
                imgurl={product.imgurl}
                title={product.title}
                price={product.price}
                category={product.category}
                color="lightblue"
                stock={product.stock}
                discount={product.discount}
                />
            );
        })}
    </div>
    );

}
export default React.memo(ItemList);