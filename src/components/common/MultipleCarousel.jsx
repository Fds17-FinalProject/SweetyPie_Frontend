import React from "react";
import { AiFillStar } from 'react-icons/ai';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Slider from "react-slick";
import RecentSearch from '../search/RecentSearch';
import Carousel from './Carousel';
import styled from 'styled-components';
const StyledSlider = styled(Slider)`
    width: ${({size}) => size === 'Large' ? '300px' : size === 'Medium' ? '275px' : '145px'};
    height: ${({size}) => size === 'Large' ? '200px' : size === 'Medium' ? '185px' : '95px'}; 
  
    border-radius: 10px;

  .slick-slider {
    position: relative;
  }

  .arrowLeft {
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


  img {
    width: 100%;
    height: ${({size}) => size === 'Large' ? '200px' : size === 'Medium' ? '185px' : '95px'}; 
  }

`;

const ArrowLeft = ({ currentSlide, slideCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-16 h-16 mr-4 text-black text-4xl border-2 border-gray-300 transition-colors duration-150 focus:outline-none bg-white  rounded-full focus:shadow-outline hover:bg-gray-100 transform hover:scale-110 absolute -top-20 right-20"
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount + 1 ? true : false}
      type="button"
      // style={{ width: 100, heigth: 100, position: 'absolute', zIndex: 20, bottom: 50, left: -25, border: '10px solid' }}
    >
      <HiChevronLeft />
    </button>
  )
};
 
const ArrowRight = ({ currentSlide, slideCount, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-16 h-16 mr-4 text-black text-4xl border-2 border-gray-300 transition-colors duration-150 focus:outline-none bg-white  rounded-full focus:shadow-outline hover:bg-gray-100 transform hover:scale-110 absolute -top-20 right-0"
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <HiChevronRight />
    </button>
 
  );



const MultipleCarousel = ({children}) => {
  // const recent = children[0];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow : <ArrowLeft />,
    nextArrow : <ArrowRight />,
  };

  return (
    <li className="w-full">
      <Slider {...settings} >
          {children && children.map(recent => (
            <div>
              <h3>
                <RecentSearch {...recent} />
                </h3>
            </div>
          ))}
        
    
        
        <div >
          <h3>
            
            </h3>
          </div>
          <div>
            <h3></h3>
          </div>
          <div>
            <h3></h3>
          </div>
          <div>
            <h3></h3>
          </div>
          {/* <div>
            <h3></h3>
          </div> */}
      </Slider>
    </li>
  );
  
}

export default MultipleCarousel;



