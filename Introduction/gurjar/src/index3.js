import React  from "react";
import  ReactDOM  from "react-dom";

const name = "Ashvani Singh Gurjar";
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();
  
ReactDOM.render(
     <>
     <h1>Hello,My name is {name}</h1>,
     <h1>Today Date is {currdate} </h1>,
     <h1>Current Time is {currtime}  </h1>,
     </>,
     document.getElementById("root")
);