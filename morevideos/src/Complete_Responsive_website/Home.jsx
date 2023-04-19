import React from 'react';
import Common from './Component';
const web = 'https://thumbs.dreamstime.com/z/grow-your-business-words-office-table-computer-coffee-notepad-smartphone-digital-tablet-66818060.jpg'

const Home = () => {
     return (
          <>
               <Common name='Grow your business with ' imgsrc={web} visit='/service' btname='Get Started'/>
          </>
     )
}

export default Home;