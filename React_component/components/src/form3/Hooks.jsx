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
               if(name === "fName"){
                    return {
                         fname : value,
                         lname : preValue.lname,
                         email : preValue.email,
                         phone : preValue.phone,
                    };
               }
               else if (name === "lName"){
                    return {
                         fname : preValue.fname,
                         lname : value,
                         email : preValue.email,
                         phone : preValue.phone,
                    };  
               }
               else if (name === "email"){
                    return {
                         fname : preValue.fname,
                         lname : preValue.lname,
                         email : value,
                         phone : preValue.phone,
                    };  
               }
               else if (name === "phone"){
                    return {
                         fname : preValue.fname,
                         lname : preValue.lname,
                         email : preValue.email,
                         phone : value,
                    };  
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
                         <p1> {fullName.email} </p1>
                         <p1> {fullName.phone}</p1>
                         <div className='star'>
                              <input id='ids' type='text' placeholder='Enter your name'
                                   name='fName'
                                   onChange={inputEvent}
                                   value={fullName.fname}
                              />
                              <input id='ids' type='text' placeholder='Enter your Lastname'
                                   name='lName'
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