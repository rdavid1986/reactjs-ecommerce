import { createContext, useState } from "react";
//importamos e inicializamos el contexto con createcontext()
export const cartContext = createContext();
//Creamos nuestro context provider

export function CartContextProvider({ children }) {
  
  const [cart, setCart] = useState([]);
  

  function addToCart(product, count) {
	console.log(product, count)
	let itemAlreadyInCart = cart.findIndex(
	  (itemInCart) => itemInCart.id === product.id
	);
	let newCart = [...cart];

	if (itemAlreadyInCart !== -1) {
	  newCart[itemAlreadyInCart].count += count;
	  setCart(newCart);
	} else {
	  //agregando una propiedad
	  product.count = count;
	  newCart.push(product);
	  //2usando spread

	  setCart(newCart);
	}
  }

  function itemsInCart() {
	let total = 0;
	cart.forEach((itemInCart) => (total = total + itemInCart.count));
	return total;
  }

  function clearCart() {
	console.log(cart, "Se vacio el carrito");
	  setCart([])
  }
  function removeItem(id) {
	const deleteItemListCart = cart.filter(product => {
           return product.id !== id
        })
		console.log(cart, "Se removio un tiem del carrito");
	setCart(deleteItemListCart);
  }
   function totalPricePerItems(id) {
		const totalPricePerItems = cart.map(product => product.id).indexOf(id)
		return cart[totalPricePerItems].price * cart[totalPricePerItems].count
	}
   function totalPriceInCart() {
		///calcular el costo total de la compra 
				  let cartItemsTotalPrice = 0;
				cart.forEach(
				  (item) =>
					(cartItemsTotalPrice = cartItemsTotalPrice + totalPricePerItems(item.id))
			);
			return cartItemsTotalPrice;
		}

  /*  function alreadyInCart(id){
			 return true/false 
		} */

   
  const value = {
			  itemsInCart,
			  cart,
			  addToCart,
			  clearCart,
			  removeItem,
			  totalPricePerItems,
			  totalPriceInCart
		  };
  //3. retornamos el Provider del context creado
  //4. Pasamos en la prop "value" las variables que queramos hacer visibles */
  return (
	<cartContext.Provider value={ value }>
	  { children }
	</cartContext.Provider>
  );
}
