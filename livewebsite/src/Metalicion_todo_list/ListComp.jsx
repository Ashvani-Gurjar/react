import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './index.css'



const ListComp = (props) =>{
     const [line, setline] = useState(false);
     const cutIt = () =>{
       setline(true); 
     }
     return (
        <div className='todo_style'>
          <span onClick={cutIt}><DeleteIcon className='deleteIcon'/> </span>
          <li style={{textDecoration : line  ? 'line-through' : 'none'}} >{props.text}</li>
        </div>
     )
}

export default ListComp;