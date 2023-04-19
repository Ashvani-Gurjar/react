    // jsx attributes
import  ReactDOM  from "react-dom";
import React  from "react";
import './index.css'
  
const name =  "Ashvani Singh Gurjar";
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/400/300"
const img3 = "https://picsum.photos/300/300"
const link = "https://google.com"


// export css

// ReactDOM.render(
//      <>
//      <h1 contentEditable="true" className="heading">Hello,My name is {name}</h1>
//      <div className="img_id"> 
//      <img src={img2} alt="Good Image"/>
//      <img src={img3} alt="Good Image"/>
//       <a href={link}  target="_blank"><img src={img1} alt="Good Image"/></a> 
//      </div>
//      </>,
//      document.getElementById("root")
// );

// inline css

// ReactDOM.render(
//      <>
//      <h1 style={{
//           color: '#000',
//           fontSize: '34px',
//           fontFamily: 'Climate Crisis',
//           textAlign: 'center',  // not use text-aline - >> textAline camelCase used  in inline html
//           margin: '0 auto',
//           padding: '10px',
//           borderRadius: '10px', // camelCase
//           backgroundColor: '#fff'

//      }}>Hello,My name is {name}</h1>
//      <div className="img_id"> 
//      <img src={img2} alt="Good Image"/>
//      <img src={img3} alt="Good Image"/>
//       <a href={link}  target="_blank"><img src={img1} alt="Good Image"/></a> 
//      </div>
//      </>,
//      document.getElementById("root")
// );

// Other method 

const heading = {
     color: '#000',
     fontSize: '34px',
     fontFamily: "'Climate Crisis', cursive",
     textAlign: 'center',  // not use text-aline - >> textAline camelCase used  in inline html
     margin: '0 auto',
     padding: '10px',
     borderRadius: '10px', // camelCase
     backgroundColor: '#fff',
     textShadow : '0px 3px 4px green'

}

ReactDOM.render(
          <>
          <h1 style={heading}> Hello,My name is {name}</h1>
          <div className="img_id"> 
          <img src={img2} alt="Good Image"/>
          <img src={img3} alt="Good Image"/>
           <a href={link}  target="_blank"><img src={img1} alt="Good Image"/></a> 
          </div>
          </>,
          document.getElementById("root")
     );