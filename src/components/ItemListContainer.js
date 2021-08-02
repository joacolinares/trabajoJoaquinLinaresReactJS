import React from 'react';
import ReactDOM from 'react-dom';

class Bienvenida extends React.Component {
    render() {
      return <h2>Bienvenido a  {this.props.brand}!</h2>
    }
  }
  
  const myelement = <Bienvenida brand="Tienda Gamer" />;
  
  ReactDOM.render(myelement, document.getElementById('root'));
  
  export default Bienvenida