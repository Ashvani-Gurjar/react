import React from 'react';
import ReactDom from 'react-dom';
import Slot from './Slotmachine'

// const Slot = ()=>{
//         let x = '😇' ;
//         let y = '😇' ;
//         let a = '😻'  ;
//         let z =  '😇' ;
//         if(x==y && y==z){
//           return  (
//                <>
//                <h1> {x} {y} {z}</h1> 
//                <h1> This is matching. </h1>
//                </>
//           )
//         }
//         else{
//           return (
//                <>
//                     <h1>{x} {y} {z}</h1> 
//                    <h1> This is not matching</h1>
//                </>
//           )
//         }
// }


// const Slot = (props)=>{
//      let x = props.x;
//      let y = props.y;
//      let z =  props.z;
//      if(x==y && y==z){
//        return  (
//             <>
//             <h1> {x} {y} {z}</h1> 
//             <h1> This is matching. </h1>
//             </>
//        )
//      }
//      else{
//        return (
//             <>
//                  <h1>{x} {y} {z}</h1> 
//                 <h1> This is not matching</h1>
//             </>
//        )
//      }
// }
ReactDom.render(
     <>
          <h1> 🎰  Welcome to <span style= {{fontWeight:"bold",color:"purple"}}> Slot machine game</span>  🎰  </h1>
          <Slot x= '😇' y='😇' z='😇' />
          <Slot x= '😇' y='😇' z='🐣' />
          <Slot x= '😇' y='😇' z='😇'/>
          <Slot x= '😇' y='🐱' z='😇'/>
     </>
     ,document.getElementById("root"));
















