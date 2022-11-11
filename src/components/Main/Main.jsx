import React from "react";
import ItemListContainer from "../ItemList/ItemListContainer";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import Header from '../Header/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom"
function Main() {
  return (
    <main className="main">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Error 404: La pagina solicitada no existe</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;
