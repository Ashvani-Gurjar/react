import React, { useState } from 'react';
import './index.css';

const App = ()=>{
     // that is the consept of Hooks
    
     const [name,setName] = useState("");
     const [fullName,setFullName] = useState();

          const inputEvent = (event)=>{
               setName(event.target.value);
          };
       let sname = document.getElementById("ids");
     //      name += sname.value; 
     //      setCount(name);
     //      sname.value = "";
     const run = ()=>{
          setFullName(name);
          setName("");    
     }
      return(
          <>
          <div className = 'container'>
          <h1> Hello, {fullName}</h1>
           <form>
            <input id= 'ids' type='text' placeholder='Enter your name'
               onChange={inputEvent}
               value={name}
            />
           </form>
          <button className='btn' onClick={run}>SUMBIT 👍</button>
          </div>
         </>
      )
}
export default App;