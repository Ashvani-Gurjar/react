import React from 'react';
import ReactDom from 'react-dom';

// const name = ["shiv","mohan","Gurjar","Ashvani"];
// first method to show
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// Second method to show using map

// const allname = name.map(function(cvalue){
//      return cvalue;
// })
// console.log(allname);

// const value = name.map(function(cvalue,i,arr){
//        return  i + " " + cvalue;
// })
// console.log(value)

const obje = [
    {id:1,name:"Ashvani",degree:"cse"},
    {id:2,name:"singh",degree:"ec"},
    {id:3,name:"gurjar",degree:"it"}
];

const val = obje.map((val)=>{
     return  `My name is ${val.name} and i have ${val.degree} degree`;
})
// console.log(val);


ReactDom.render(
   <>
   <h1>{val}</h1>
  </>
  ,document.getElementById("root"));