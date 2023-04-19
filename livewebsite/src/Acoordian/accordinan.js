import React, { useState } from 'react';
import { questions } from './api';
import Myaccordian from './myaccordian';

const Accodion=()=>{
 
   const [data,setdata ] = useState(questions);
             return (
               <>
                  {data.map((curElem ,index)=>{
                      return <Myaccordian key={index} {...curElem}/>
                  })}
               </>
             )
}

export default Accodion;