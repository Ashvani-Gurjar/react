import React  from "react";
import  ReactDOM  from "react-dom";

const name = "Ashvani Singh"
const last = "Gurjar";

ReactDOM.render(
     <>
     <h1>My name is {name} </h1>,
     <h1>My name is {name} {last} </h1>,
     <h1>My name is {name + last} </h1>,
     <h1>My name is {name + " " + last} </h1>,
     <h1>My name is {`${name} ${last}`} </h1>,
      <h3>The sum of 2 and 3 is {2+3}</h3>
     </>,
     document.getElementById("root")
);