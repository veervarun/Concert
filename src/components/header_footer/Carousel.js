import React from 'react';
import Slider from 'react-slick';
import slide_one from '../../resources/images/sunidhi_three.jpg';
import slide_two from '../../resources/images/sunidhi_two.jpg';
import slide_three from '../../resources/images/sunidhi.jpg';

const Carousel = () => {
  const settings = {
    dots: false,
    infinte: true,
    autoplay: true,
    speed: 1000
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ height: `${window.innnerHeight}px`, overflow: 'hidden' }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
