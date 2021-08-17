import "../styles.css";
const Item = ({ item }) => {
    return (
      <ul>
        <li className = "colorTexto">Numero de Producto: {item.id}</li>
        <br></br>
        <li className = "colorTexto">{item.title}</li>
        <li>
          <img src={item.pictureUrl}></img>
        </li>
        <li className = "colorTexto"> {item.description}</li>
        <li className = "colorTexto" >$ {item.price}</li>
        <li className = "colorTexto">Cantidad: {item.stock}</li>
      </ul>
    );
  };
  
  export default Item;