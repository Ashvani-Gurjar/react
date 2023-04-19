import React, { useState } from 'react';
import './index.css';

const App = () => {
     // that is the consept of Hooks

     const [fullName, setFullName] = useState({
          fname : "",
          lname : "",
          email : "",
          phone : "",
     });
     const inputEvent = (event) => {
          const {value,name} = event.target;

          setFullName((preValue)=>{
              return {
                ...preValue,
                [name]: value,
              }
          })
     };
     const onSubmits = (event) => {
          event.preventDefault();
          alert("form submited");
     }
     return (
          <>
               <div className='container'>
                    <form onSubmit={onSubmits}>
                         <h1> Hello, {fullName.fname} {fullName.lname}   </h1>
                         <p> {fullName.email} </p>
                         <p> {fullName.phone}</p>
                         <div className='star'>
                              <input id='ids' type='text' placeholder='Enter your name'
                                   name='fname'
                                   onChange={inputEvent}
                                   value={fullName.fname}
                              />
                              <input id='ids' type='text' placeholder='Enter your Lastname'
                                   name='lname'
                                   onChange={inputEvent}
                                   value={fullName.lname}
                              />
                              <input id='ids' type='email' placeholder='Enter your Email'
                                   name='email'
                                   onChange={inputEvent}
                                   autoComplete="off"
                                   value={fullName.email}
                              />
                              <input id='ids' type='phone' placeholder='Enter your phoneNo'
                                   name="phone"
                                   onChange={inputEvent}
                                   value={fullName.phone}
                              />
                              <button type='submit' className='btn'>SUMBIT 👍</button>
                         </div>
                    </form>
               </div>
          </>
     )
}
export default App;