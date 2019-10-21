import React, { Component } from 'react';
import './resources/styles.css';
import Featured from './components/header_footer/Featured';
import Header from './components/header_footer/Header';
import Venuenfo from './components/venuenfo/Venuenfo';
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/price/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';

export default class App extends Component {
  render() {
    return (
      <div style={{ height: '1500px', background: 'cornflowerblue' }}>
        <Header />
        <Element name="event">
          <Featured />
        </Element>

        <Element name="venue nfo">
          <Venuenfo />
        </Element>

        <Element name="highlight">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}
