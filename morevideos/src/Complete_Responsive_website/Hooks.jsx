import React from 'react';
import Home from './Home';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Contact from  './Contact';
import Service from './Services'
import About from './About';
import None from './404';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';

const App = () =>{
     return (
          <>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/service' element={<Service/>} />
              <Route path='/contact' element={<Contact/>} /> 
              <Route path='*' element={<None/>} /> 
          </Routes>
          <Footer/>
          </>
     )
}

export default App;