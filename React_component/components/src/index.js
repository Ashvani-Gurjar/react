import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import './index.css'
import Sdata from './Sdata'

function ncard(val){
  return (
     <Card 
     key={val.id}
     imgsrc={val.imgsrc}
     title={val.title}
     sname={val.sname}
     link={val.link}
     />
  )
}
ReactDom.render(
   <>
   <h1 className='heading-style'> List of Top 5 Netflix  Series in 2020 </h1>
   <div className='all'>
   {Sdata.map(ncard)}
   </div>
  </>
  ,document.getElementById("root"));