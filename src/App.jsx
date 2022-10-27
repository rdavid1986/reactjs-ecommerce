import './App.css';

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/itemList/ItemListContainer"
import logoNvidiaAmd from "./components/img/logoNvidiaAmd.jpg";

function App() {
return (
    <div className="App">
        <header className="App__header">
            <div className="container__logo">
                <img src={logoNvidiaAmd} className="logo" alt="logo" />
                <h2>Video Cards Store</h2>
            </div>
            <NavBar/>
            <ItemListContainer greeting="Bienvenidos "/>
        </header>
        <main className="main">
        </main>
       
            
    </div>
);
}

export default App;
