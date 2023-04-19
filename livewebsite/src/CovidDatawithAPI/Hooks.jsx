import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

     const [data, setData] = useState([]);

     const getCovidData = async () => {
          const data = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
          const response = await data.json();
          console.log(response.data.regional[0].loc);
          setData(response.data.regional);
     }
     useEffect(() => {
          getCovidData();
     },[]);

     return (
          <>
               <div className='container-fluid  mt-5'>
                    <div className='main-heading'>
                         <h1 className='mb-5 text-center'><span className='font-weight-bold'>INDIA</span> covid-19 Dashboard</h1>
                    </div>
                    <div className='table-responsive'>
                         <table className='table table-hover mr-5'>
                              <thead className='thead-dark'>
                                   <tr>
                                        <th>State</th>
                                        <th>Confirmed</th>
                                        <th>recovered</th>
                                        <th>deaths</th>
                                        <th>active</th>
                                        <th>update</th>
                                   </tr>
                              </thead>

                              <tbody >
                                   {
                                        data.map((cdata, index) => {
                                         return (
                                             <tr key={index}>
                                                  <th>{cdata.loc}</th>
                                                  <td>{cdata.confirmedCasesIndian}</td>
                                                  <td>{cdata.confirmedCasesForeign}</td>
                                                  <td>{cdata.deaths}</td>
                                                  <td>{cdata.discharged}</td>
                                                  <td>{cdata.totalConfirmed}</td>

                                             </tr>
                                   
                                        )
                                   })
                                   }
                              </tbody>

                         </table> 

                    </div>
               </div>
          </>
     )
}

export default App;