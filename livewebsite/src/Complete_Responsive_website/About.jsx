import React from 'react';
import Common from './Component';
import web from '../images/s1.jpg';
const About = () => {
     return (
          <>
            <Common name='Welcome to About page' imgsrc={web} visit='/contact' btname='Contact Now'/>
          </>
     )
}

export default About;