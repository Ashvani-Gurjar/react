import Reaact, { useState } from 'react';
import './search.css'
import Sresult from './sResult';

const Search = () =>{

       const [img,setimg] = useState("");
        const inputEvent  = (event)=>{
        setimg(event.target.value)
       }
     return (
          <>
               <h1 style={{textAlign:'center'}}>This is Searcher</h1>
               <input onChange={inputEvent} value={img} className="search" style={{textAlign:'center'}} type='search' placeholder="Search Anything" />
                <div className='imgs'>
                  {img===''? null : <Sresult name={img}/>}   
                </div>
          </>

     )
}
export default Search