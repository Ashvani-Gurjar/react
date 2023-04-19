import React, { createContext } from 'react';
import Comp from './Componet';

const FirstName = createContext();
const LastName = createContext();

const App = () =>{

      return (

          <>
              <FirstName.Provider value={"Ashvani"}>
              <LastName.Provider value={"Singh Gurjar"}>
              <Comp/>
              </LastName.Provider>
              </FirstName.Provider>

          </>
      )
}

export default App;
export {FirstName,LastName}