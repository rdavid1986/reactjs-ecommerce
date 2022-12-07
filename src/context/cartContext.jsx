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

  function removeCart() {
    console.log(cart, "carrito")
      setCart([])
  }
  function removeItem(idRemove) {
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
  }

  /*  function priceInCart() {
             calcular el costo total de la compra 
        } */

  /*  function alreadyInCart(id){
             return true/false 
        } */

   
  const value = {
              itemsInCart,
              cart,
              addToCart,
              removeCart,
              removeItem,
          };
  //3. retornamos el Provider del context creado
  //4. Pasamos en la prop "value" las variables que queramos hacer visibles */
  return (
    <cartContext.Provider value={ value }>
      { children }
    </cartContext.Provider>
  );
}
