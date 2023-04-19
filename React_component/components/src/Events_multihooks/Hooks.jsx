import React, { useState } from 'react';
import './index.css';

const App = ()=>{
     let pprev = 'CLICK ME';
     let pcol = "#8e44ad";
     const [prev,setName] = useState(pprev);
     const [col,setCol] = useState(pcol);
     const done =()=>{
          pcol = '#34495e';
          pprev = 'OUCH!! 😱'
          setName(pprev);
          setCol(pcol);
     }
     const doub = ()=>{
            setCol("#8e44ad")
            setName("Ayyo!! 😠")
     }
      return(
          <>
          <div style={{backgroundColor: col}}>
          <button className='btn' onMouseEnter={done} onMouseLeave ={doub}><span className='up'>{prev}</span></button>
          </div>
          </>
      )
}
export default App;