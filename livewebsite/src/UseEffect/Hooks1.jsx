import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App  = () =>{
     const [num ,setnum] = useState(0);
     // this is always run when click
     useEffect(()=>{
         document.title = `You Clicked me ${num} times`
     }) // then nums change then active

     const add = ()=>{
          setnum(num+1);     
     }
   
     return (
          <>
          <h1 className='text-center text-capitilize mt-5' >This is a button</h1>
          <button className='btn btn-success my-5 mx-5' onClick={add}> Click Me 1 {num} </button>
          </>
     )
}

export default App;