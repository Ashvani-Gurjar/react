import React, { useState } from 'react';
import './index.css';

const App = ()=>{
     // that is the consept of Hooks
     const state  = useState();
     console.log(state);
     
     const [count,setCount] = useState(0);
     
     const sum = ()=>{
          setCount(count+1);
     }
   
      return(
          <>
          <div className='container'>
          <h1>{count}</h1>
          <button className='btn' onClick={sum}>CLICK ME</button>
          </div>
         </>
      )

}
export default App;