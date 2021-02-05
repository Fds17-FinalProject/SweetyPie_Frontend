import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
    width: ${({size}) => size === 'Large' ? '300px' : size === 'Medium' ? '275px' : '145px'};
    height: ${({size}) => size === 'Large' ? '200px' : size === 'Medium' ? '185px' : '95px'}; 
  
    border-radius: 10px;

  .slick-slider {
    position: relative;
  }

  .slick-slide > div {
    position: relative;
  }

  .slick-dots {
    position: absolute;
    bottom: 5px;
    margin: 0;
    padding: 0;
    display: ${({size}) => size === 'Small' ? 'none' : 'block'}
  }

  .slick-dots > li {
    width: 1px;
  }

  .slick-arrow::before {
    color: #181818;
    font-size: 25px;
  }

  img {
    width: 100%;
    height: ${({size}) => size === 'Large' ? '200px' : size === 'Medium' ? '185px' : '95px'}; 
  }

`;

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
  return (
    <button
      {...props}
      className={"slick-prev slick-arrow" }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount + 1 ? true : false}
      type="button"
      style={{ width: 100, heigth: 100, position: 'absolute', zIndex: 10, bottom: 50, left: -25 }}
    >
      Previous
    </button>
  )
};
 
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow"
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
    style={{ width: 100, heigth: 100, position: 'absolute', zIndex: 10, bottom: 50, right: -25 }}
  >
    Next
  </button>
);

const Carousel = ({ size, img }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow : <SlickArrowLeft />,
		nextArrow : <SlickArrowRight />,
  };

  return (
    <StyledSlider size={size} img={img} {...settings} >
      <img src={img[0]} alt="" className="rounded-xl" />
      <img src={img[1]} alt="" className="rounded-xl" />
      <img src={img[2]} alt="" className="rounded-xl" />
      <img src={img[3]} alt="" className="rounded-xl" />
      <img src={img[4]} alt="" className="rounded-xl" />
    </StyledSlider>
  );
};

export default Carousel;