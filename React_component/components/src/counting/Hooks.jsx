import React, { useState } from 'react';
import './index.css';

const App = () => {


      const [value,setvalue] = useState(0);
      const increm = () =>{
           setvalue(value+1);
      }
      const decrem = () =>{
          if(value>0) {
               setvalue(value-1);
          }
          else{
               alert("Number can't go negative");
          }  
      }
    
     return (
          <>
               <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>{value}</h1>
                    <br />
                    <button onClick={increm}>Increm </button>
                    <button onClick={decrem}> Decrem </button>
                </div>
               </div>
          </>
     )
}
export default App;