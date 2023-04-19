import React from 'react';
import { FirstName, LastName } from './Context';

const Comp1 = () => {
     return (
          
          <>
               <FirstName.Consumer>
                    {(fname) => {
                         return (
                              <LastName.Consumer>
                               {(lname) => {
                                   return (
                                        <h1> Good morning, {fname} {lname}</h1>
                         )}}
                               </LastName.Consumer>
                         );
                    }}
              </FirstName.Consumer>
          </>
     )
}

export default Comp1;