
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <NavBar/>
        <p strong>Aceptamos todo tipo de pago</p>
        <ItemListContainer greeting='Tienda Gamer'/>

      </header>
    </div>
  );
}

export default App;

//Hola mundo