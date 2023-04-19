import React, { useState } from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {

      const [value,setvalue] =  useState(0);
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
                   
                    <h1>{value}</h1>
                   
                    <Tooltip title="Add">
                    <Button onClick={increm} className="add"><AddIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                    <Button onClick={decrem} className="sub"><DeleteForeverIcon /></Button>
                    </Tooltip>
                </div>
               </div>
          </>
     )
}
export default App;