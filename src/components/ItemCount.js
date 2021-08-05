import React, { useState } from 'react';

const useContador = inicial => {
    const [contador, setContador] = useState(inicial)
  
    const incrementar = () => {
        setContador(contador + 1)
    }
    const decrementar = () => {
        setContador(contador - 1)
    }
    return{ contador, incrementar, decrementar }
  }

  function ItemCount() {
    const { contador, incrementar, decrementar } = useContador(0)
    return (
        <div>
          <p>
          <button onClick ={incrementar}>+</button>         {contador} <button onClick ={decrementar}>-</button>  
          </p>
                      
                     
       
      </div>
  
      
  
    );
  }







//function ItemCount(){
   // return(
        
   //     <div>
    //        <button type="button" class="btn btn-light">+</button>
     //       <input type = "number"></input>
     //       <button type="button" class="btn btn-light">-</button>
      //  </div>
        
 //   )
//}


export default ItemCount