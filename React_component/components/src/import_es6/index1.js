import React from 'react';
import ReactDOM from 'react-dom';
import name,{ame, first,midd,last} from './Funtion1.jsx';
import * as full from './Funtion1.jsx';
// ReactDOM.render(<h1>Good Morning</h1>,document.getElementById("root"));
ReactDOM.render(
   <>
   {/* <h1>
      {name},
      {ame},
      {first()},
      {midd()},
      {last()}
   </h1> */}
   {/* Second method */}
    {full.default},
    {full.ame},
    {full.first()},
    {full.midd()},
    {full.last()}

   </>
     , document.getElementById("root"));
