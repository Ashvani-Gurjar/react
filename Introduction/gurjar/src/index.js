import React  from 'react';
import ReactDom from 'react-dom';
import "./index5.css";

const time = new Date(2023,3,8,3).getHours(); //self gives time
// const time = new Date().getHours();
let greeting = "";
const cssstyle ={};

if(time>=1 && time<12){
          greeting =  "Good Morning";
          cssstyle.color = "green";
     }
else if(time>=12 && time<20){
          greeting ="Good Evening";
          cssstyle.color = "orange";

     }
else{
          greeting = "Good Night";
          cssstyle.color = "purple";

     }

ReactDom.render(
     <>
     <div className='container'>
               <h1 className='ht'> Hello Sir,<span style={cssstyle}> {greeting} </span> </h1>
      </div>
     </>,
 document.getElementById("root"));


