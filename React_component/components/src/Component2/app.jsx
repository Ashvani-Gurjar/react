import React  from 'react';
import "./index.css";

function App(){
const time = new Date(2023,3,8,13).getHours(); //self gives time
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
     return (
          <> <div className='container'>
          <h1 className='ht'> Hello Sir,<span style={cssstyle}> {greeting} </span> </h1>
           </div>
          </>
     )
}
export default App;