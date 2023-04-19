import React, { useState } from 'react';
import './index.css';

const App = ()=>{
     // that is the consept of Hooks
     let time = new Date().toLocaleTimeString();
     const [count,setCount] = useState(time);
     const run = ()=>{
          time = new Date().toLocaleTimeString();
          setCount(time);
     }
      return(
          <>
          <div className = 'container'>
          <h1>{count}</h1>
          <button className='btn' onClick={run}>CLICK ME</button>
          </div>
         </>
      )
}
export default App;