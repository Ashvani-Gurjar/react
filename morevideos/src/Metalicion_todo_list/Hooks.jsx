import React, { useState } from 'react';
import './index.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComp from './ListComp'
const App = ()=>{
  
     const [item,setItem] = useState("Mangeoes");
     const [newitem,setNewItem] = useState([]);

     const itemEvent = (event)=>{
          setItem(event.target.value);
     }

     const listOfItems = () =>{
           setNewItem((prevItems)=>{
               return [...prevItems,item];
          });
          setItem("");
     }


     return (
          <div className='main_div' >
               <div className='center_div' >
                <br />
                  <h1>ToDoList</h1>
                <br />
                <input type='text' placeholder='Add an items' value={item} onChange={itemEvent}></input>
                <Button  variant="outlined" color="primary" className='btn' onClick={listOfItems} ><AddIcon /></Button> 
               <br />
               <ol>
                    {newitem.map((val,index)=>{
                         return <ListComp key={index} text={val} />;
                    })}
               </ol>
               <br />
               </div>
          </div>
     )
}
export default App;