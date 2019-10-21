import React, { Component } from 'react';
import Carousel from './Carousel';
import Timer from './Timer';
class Featured extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Carousel />
        <div className="artist_name">
          <div className="wrapper">Sunidhi Chauhan</div>
        </div>
        <Timer />
      </div>
    );
  }
}

export default Featured;
