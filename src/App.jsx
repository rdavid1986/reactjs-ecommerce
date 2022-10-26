import logo from './logo.svg';
import './App.css';
//importamos componentes 
import Button from "./components/MyButton/MyButton";
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Button/>
        <Button/>
        <Button/>
    </div>
  );
}

export default App;
