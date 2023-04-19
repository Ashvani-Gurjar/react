import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub, mult,div} from './Calculater.jsx';
ReactDOM.render(
   <>
   <h1 style={{
      color: 'purple',
      textAlign:'center',
      textDecoder:'null',
      fontSize:'60px',
      textShadow:'0px 4px 5px green',
      textDecorationStyle:'null'
   }
   }>
   <ul>
      <li>Sum of two no is {add(30,3)}</li>
      <li>Sub of two no is {sub(30,3)} </li>
      <li>Div of two no is {div(32,3)} </li>
      <li>Mult of two no is {mult(30,3)} </li>
   </ul>
   </h1>
   </>
     , document.getElementById("root"));
