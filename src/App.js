import React from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/highlight';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer'

function App() {
  return (
    <div className="App" style={{ height:"1200px",background:'cornflowerblue'}}>
          
            <Header name="header"/>
          
          <Element>
            <Featured name="featured"/>
          </Element>
          <Element>
            <VenueInfo name="venueinformation"/>
          </Element>
          <Element>
            <Highlight name="highlight"/>
          </Element>
          <Element>
            <Pricing name="pricing"/>
          </Element>  
          <Element>
            <Location name="location"/>
          </Element>
          <Element>
            <Footer name="footer"/>
          </Element>
    </div>
  );
}

export default App;
 