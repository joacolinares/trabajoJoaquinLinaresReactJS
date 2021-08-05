
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';
import "bootstrap/dist/css/bootstrap.min.css";
//import React from 'react';
import ReactDOM from 'react-dom';

//const useContador = inicial => {
 // const [contador, setContador] = useState(inicial)
//
  //const incrementar = () => {
   //   setContador(contador + 1)
  //}
 // return{ contador, incrementar }
//}


function App() {
  //const { contador, incrementar } = useContador(0)
  return (
    <div className="App">
      <header className="App-header">
    <NavBar/>
        <p strong>Aceptamos todo tipo de pago</p>
        <ItemListContainer greeting='Tienda Gamer'/>

        
    <ItemCount/>
                   
      </header>
    </div>

    

  );
}

export default App;
