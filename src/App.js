import React from 'react';
import './resources/styles.css';

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
          <Header/>
          <Featured/>
          <VenueInfo/>
          <Highlight/>
          <Pricing/>
          <Location/>
          <Footer/>
    </div>
  );
}

export default App;
 