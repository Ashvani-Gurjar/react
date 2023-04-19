import React, { useState } from 'react';
import './index.css';

const App = ()=>{
     // that is the consept of Hooks
    
     const [name,setName] = useState("");
     const [fullName,setFullName] = useState("");
     const [namelast,setNamelast] = useState("");
     const [lastname,setNamelasts] = useState("");

          const inputEvent = (event)=>{
               setName(event.target.value);
          };
          const inputEventtwo = (event)=>{
               setNamelast(event.target.value);
          };
     const onSubmits = (event)=>{
          event.preventDefault();
          setFullName(name);
          setNamelasts(namelast)
          setName("");    
          setNamelast("");    
     }
      return(
          <>
          <div className = 'container'>
           <form onSubmit={onSubmits}>
           <h1> Hello, {fullName} {lastname}</h1>
           <div className='star'>
            <input id= 'ids' type='text' placeholder='Enter your name'
               onChange={inputEvent}
               value={name}
            />
            <input id= 'ids' type='text' placeholder='Enter your Lastname'
               onChange={inputEventtwo}
               value={namelast}
            />
          <button type='submit' className='btn'>SUMBIT 👍</button>
           </div>
           </form>
          </div>
         </>
      )
}
export default App;