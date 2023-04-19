import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App  = () =>{
       
     const [num ,setnum] = useState(0);
     const [nums ,setnums] = useState(0);
     
     // this is always run when click
     useEffect(()=>{
          alert(`${num} Clicked1`)
     },[num]) // then nums change then active
     

     const add = ()=>{
          setnum(num+1);     
     }
     const adds = ()=>{
          setnums(nums+1);
     }

     // this is block the value increaseing 
     // const add = (()=>{
     //      setnum(num+1);
     // },()=>{
     //      alert(`${num} Clicked2`)
     // })
          
     return (
          <>
          <h1 className='text-center text-capitilize mt-5' >This is a button</h1>
          <button className='btn btn-success my-5 mx-5' onClick={add}> Click Me 1 {num} </button>
          <button className='btn btn-success my-5 mx-5' onClick={adds}> Click Me 2 {nums} </button>

          </>
     )
}

export default App;