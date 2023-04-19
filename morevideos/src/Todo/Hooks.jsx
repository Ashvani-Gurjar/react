import React, { useState } from 'react'
import todo from './todo.png'
import './style.css';
const App = () => {

     const [inputData, setinputData] = useState('');
     const [items, setitems] = useState([]);
     const  [toggleSubmit,settoggleSubmit] = useState(true);
     const [isEdit,setisEdit] = useState(null);

     const addItem = ()=>{
          if(!inputData){
          }
          else if(inputData && !toggleSubmit){
               setitems(
                    items.map((elem)=>{
                         if(elem.id===isEdit){
                              return {...elem,name:inputData}
                         }
                       return elem;
                    })

                    )
                    setinputData('');
                    settoggleSubmit(true);
                    setisEdit(null);
               }
          else{
               const  allInputData = {id: new Date().getTime().toString(), name: inputData }
               setitems([...items, allInputData]);
               setinputData('')
          }
     }
    const ita = (e) =>{
     setinputData(e.target.value);
    } 

 const deleteItem = (index) =>{
      const updata = items.filter((elem)=>{
          return index !== elem.id;
      });
      setitems(updata);
 }

  const editItem  = (id) =>{
     let newEditItem = items.find((elem)=>{
       return  elem.id === id;
     })
     setinputData(newEditItem.name)
     settoggleSubmit(false);
     setisEdit(id);
 }


     return (
          <>
               <div className='main-div'>
                    <div className='child-div'>
                         <figure>
                              <img src={todo} alt="todologo" />
                              <figcaption>Add Your List Here ✋ </figcaption>
                         </figure>
                         <div className='addItems'>
                              <input value={inputData} onChange={ita} type="text" placeholder='✍️ Add Items ...' />
                              {
                                   toggleSubmit ? <i onClick={addItem} className='fa fa-plus add-btn' title='Add Item'></i>
                                           : <i  onClick={addItem} className='far fa-edit add-btn' title='Update Item' ></i>

                              }
                         </div>

                     <div className='showItems'>
                         {
                              items.map((elem) => {
                                   return (
                                             <div className='eachItem' key={elem.id}>
                                                  <h3>{elem.name}</h3>
                                                  <div className='todo-btn'>
                                                  <i  onClick={()=>editItem(elem.id)} className='far fa-edit add-btn' title='Edit Item' ></i>
                                                  <i  onClick={()=>deleteItem(elem.id)} className='far fa-trash-alt add-btn' title='Delete Item' ></i>
                                                  </div>
                                             </div>
                                   )
                              })
                         }
                </div>
                         <div className='showItems'>
                              <button onClick={(()=>{setitems([])})} className='btn effect04' data-sm-link-text='Remove All'><span>CHECK LIST</span></button>
                         </div>

                    </div>
               </div>
          </>
     )
}

export default App;