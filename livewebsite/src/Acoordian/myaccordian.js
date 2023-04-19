import React ,{useState} from 'react';

const Myaccordian = ({question,answer})=>{
     const [item,setitem] = useState(false);
     return (
          <>
               <h1 onClick={()=>setitem(!item)}>{question} {item ? "-" :"+"}</h1>
                 {item && <p>{answer}</p>}
          </>
     )
}
export default Myaccordian;