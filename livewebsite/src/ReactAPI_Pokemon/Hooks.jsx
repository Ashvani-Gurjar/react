import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {

     const [num, setnum] = useState();
     const [name, setname] = useState();
     const [moves, setmoves] = useState();

     useEffect(() => {
          async function getData() {
               const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
               setname(res.data.name)
               setmoves(res.data.moves.length)
          }
          getData();
     })

     return (
          <>
               <div className='container text-center'>
                    <h1 className='text-center text-captilize'>You choose  <span className='text-danger'>{num}</span> value</h1>
                    <h1 className='text-center text-captilize'>The name is <span className='text-success'>{name}</span></h1>
                    <h1 className='text-center text-captilize'>I have <span className='text-success'>{moves}</span> </h1>
                    <select value={num} onChange={(event) => { setnum(event.target.value) }} >
                         <option value='1'>1</option>
                         <option value='25'>25</option>
                         <option value='3'>3</option>
                         <option value='4'>4</option>
                         <option value='5'>5</option>
                    </select>
               </div>
          </>
     )
}
export default App;