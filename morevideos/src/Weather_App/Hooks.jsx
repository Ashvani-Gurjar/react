import React, { useEffect, useState } from 'react';
import './st.css';
const App = ()=>{
   
     const [city,setcity] =  useState(null);
     const [search,setsearch] = useState('kanpur');

     useEffect(()=>{
      const fetchApi = async() =>{
           const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e996d0310dc3468151f93ebe3dd6224e
           `)
           const json = await response.json();
           console.log(json);
           setcity(json.main);
          }
          fetchApi();
      },[search])

    const inputValue = (event)=>{
     setsearch(event.target.value);
    }


     return (
          <>
             <div className='box'>
               <div className='inputData'>
                    <input
                    type='search'
                    value={search}
                    placeholder='Search'
                    className='inputfield'
                    onChange={inputValue}/>
                    
                 </div>
               {!city ?  ( <p className='errorMsg
               '> No Data Found</p>)
                  : (
          
                <div>
                  <div className='info'>
                <h2 className='location'> <i className="fa-solid fa-street-view"></i>{search}</h2>
                <h1 className='temp'>
                 {city.temp}<sup>o</sup>C
                </h1>
                <h3 className='tempmin_max'>Min :{city.temp_max} <sup>o</sup>C  | Max : {city.temp_min} <sup>o</sup>C</h3>
               </div>

               <div className='wave -one'></div>
               <div className='wave -two'></div>
               <div className='wave -three'></div>
             </div>     
)}           
             </div>

              
          </>
     )
}
export default App;