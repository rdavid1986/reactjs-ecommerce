import React from "react";
import ItemListContainer from "../itemList/ItemListContainer";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import Header from "../Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "../../context/cartContext";
import CartView from "../CartView/CartView";
import ThanksYou from "../ThankYou/ThankYou";

function Main() {
  return (
    <main className="main">
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/thankyou/:idOrder" element={<ThanksYou />} />
            <Route
              path="*"
              element={<h1>Error 404: La pagina solicitada no existe</h1>}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </main>
  );
}

export default Main;