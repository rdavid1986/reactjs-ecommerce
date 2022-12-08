import React, { useContext } from "react";
import "../CartView/CartView.css";
import { cartContext } from "../../context/cartContext";
/* import { createOrder } from "../../data/firebase"; */

/* import CartForm from "./CartForm.jsx"; */
/* import { useNavigate } from "react-router-dom"; */
import MyButton from "../MyButton/MyButton";

function CartView() {
  const { cart, removeItem, removeCart, totalPricePerItems, totalPriceInCart } = useContext(cartContext);
  /* let navigate = useNavigate(); */

  /* function handleExport() {
	  exportArrayToFirestore();
	} */
  

  /* async function handleCheckout(event, data) {
	//crear nuestro objeto , "orden de compra"
	const order = {
	  buyer: data,
	  items: cart,
	  total: 0,
	  date: new Date(),
	}; */
  /* const orderId = await createOrder(order);
	navigate(`/thankyou/${orderId}`); 
  }*/
  return (
		<div className="cart-container">
				<h1>Tu carrito</h1>
			{
				cart.length === 0
					? <h5>No hay productos en tu carrito</h5> 
					: cart.map((item) => (
						<div key={item.id}>
							<img src={item.imgurl} alt={item.title} />
							<h2>{item.title}</h2>
							<h4>${item.price}</h4>
							<p>unidades: {item.count}</p>
							<p>Precio total de unidades: $ {totalPricePerItems(item.id)}</p>

							<MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
							X
							</MyButton>
						</div>
						))
			}
			{
				cart.length !== 0 && 
					<div>
						<h1>Resumen de compra</h1>
						<MyButton onTouchButton={() => removeCart()}>Vaciar carrito</MyButton>
						<h1>Precio total de su compra: {totalPriceInCart()}</h1>
						{/* <CartForm onSubmit={handleCheckout} /> */} 
					</div>
			}
		
	</div>
  );
}

export default CartView;
