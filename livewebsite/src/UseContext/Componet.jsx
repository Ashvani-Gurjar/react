import React, { useContext } from 'react';
import Comp1 from './Componet2';
import { FirstName, LastName } from './Context';


const Comp = () =>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

      return (
          <>
            <h1>My name is {fname} {lname}</h1>
          </>
      )
}

export default Comp;