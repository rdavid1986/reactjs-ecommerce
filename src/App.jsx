import './App.css';

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/itemList/ItemListContainer"
import imgLogo from "./components/img/logoNvidiaAmd.jpg";
function App() {
return (
    <div className="App">
        <header className="App__header">
            <div className="container__logo">
                <img src={imgLogo} className="logo" alt="logo" />
                <h2>Video Cards Store</h2>
            </div>
            <NavBar/>
        </header>
        <main className="main">
            <ItemListContainer greeting="Bienvenidos" />
        </main>
       
            
    </div>
);
}

export default App;
