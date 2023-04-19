import React, { useState } from 'react';
import './index.css';

const App = ()=>{
     // that is the consept of Hooks
     let time = new Date().toLocaleTimeString();
     const [ctime,setCount] = useState(time);
     
     const update = () =>{
         time = new Date().toLocaleTimeString();
         setCount(time);
     }
     setInterval(update,setCount);

     // setInterval(()=>{
     //      setCount(new Date().toLocaleTimeString());
     // },1000)


      return(
          <>
          <h1>{ctime}</h1>
          </>
      )
}
export default App;