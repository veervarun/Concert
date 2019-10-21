import React, { Component } from 'react';
import Mybutton from '../Highlights/Mybutton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: ['First 4 rows', 'Middle 4 rows', 'last 4 rows'],
    linkTo: [
      'https://www.Facebook.com',
      'https://www.Linkedin.com',
      'https://www.twitter.com'
    ],
    delay: [500, 750, 1000]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <Mybutton
                text="purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
