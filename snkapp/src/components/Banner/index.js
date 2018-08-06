import React from 'react';
import Slider from "react-slick";

export default class Banner extends React.Component{
     render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    return (
      <Slider {...settings}>
        <div className="Banner__img1">
        
        </div>
        <div className="Banner__img2">
          
        </div>
        <div className="Banner__img3">
          
        </div>
      </Slider>
    );
  }
}