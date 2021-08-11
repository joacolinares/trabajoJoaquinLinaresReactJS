// import React, { useState } from 'react';

// const useContador = inicial => {
//     const [contador, setContador] = useState(inicial)
  
//     const incrementar = () => {
//         setContador(contador + 1)
//     }
//     const decrementar = () => {
//         setContador(contador - 1)
//     }
//     return{ contador, incrementar, decrementar }
//   }

//   function ItemCount() {
//     const { contador, incrementar, decrementar } = useContador(0)
//     return (
//         <div>
//           <p>
//           <button onClick ={incrementar}>+</button>         {contador} <button onClick ={decrementar}>-</button>  
//           </p>
                      
                     
       
//       </div>
  
      
  
//     );
//   }







//function ItemCount(){
   // return(
        
   //     <div>
    //        <button type="button" class="btn btn-light">+</button>
     //       <input type = "number"></input>
     //       <button type="button" class="btn btn-light">-</button>
      //  </div>
        
 //   )
//}
import {useState} from "react"

const ItemCount = ({ stock, initial , onAdd }) => {
  const [count, setCount ] = useState(initial)

const handleClick =  (e, value) =>{
  console.log("-")
  if (value === "add" && count + 1 <= stock) {
    setCount (count + 1)
  }else if (value === "subtract" && count > 1)  {
    setCount(count - 1)
  }
}

  return (
    <div>
      <button onClick = {(e) => handleClick(e, "subtract")}>-</button>
      <br></br>
      <p>     {count} </p>
      <button onClick = {(e) => handleClick(e, "add")}>+</button>
      <br></br>
      <input type = {"button"} value = {"agregar carrito"} onClick = {onAdd}/>
    </div>
  )
};

export default ItemCount