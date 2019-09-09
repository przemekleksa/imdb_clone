import React from 'react';
import Slider from "react-slick";
import './slider.scss';
import poster1 from './poster1.jpg';
import poster2 from './poster2.jpg';
import { Link } from 'react-router-dom';

const SliderHomepage = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return ( 
        <Slider {...settings} className="homepage-slider">
        <div className="sliderItem">
            <Link to="/movie" className="slider-img">
                <img src={poster1} alt="plakat"  />
                <div className="data">
                    <p className="rating">6/10</p>
                    <p className="title">Bla bla</p>
                    <p className="category">Horror</p>
                    <p className="cast">Aktor</p>
                </div>
            </Link>
        </div>
        <div className="sliderItem">
            <Link to="/movie" className="slider-img">
                <img src={poster2} alt="plakat" />
                <div className="data">
                    <p className="rating">6/10</p>
                    <p className="title">Bla bla</p>
                    <p className="category">Horror</p>
                    <p className="cast">Aktor</p>
                </div>
            </Link>
        </div>
        <div className="sliderItem">
            <Link to="/movie" className="slider-img">
                <img src={poster1} alt="plakat" />
                <div className="data">
                    <p className="rating">6/10</p>
                    <p className="title">Bla bla</p>
                    <p className="category">Horror</p>
                    <p className="cast">Aktor</p>
                </div>
            </Link>
        </div>
        <div className="sliderItem">
            <Link to="/movie" className="slider-img">
                <img src={poster2} alt="plakat" />
                <div className="data">
                    <p className="rating">6/10</p>
                    <p className="title">Bla bla</p>
                    <p className="category">Horror</p>
                    <p className="cast">Aktor</p>
                </div>
            </Link>
        </div>
        <div className="sliderItem">
            <Link to="/movie" className="slider-img">
                <img src={poster1} alt="plakat" />
                <div className="data">
                    <p className="rating">6/10</p>
                    <p className="title">Bla bla</p>
                    <p className="category">Horror</p>
                    <p className="cast">Aktor</p>
                </div>
            </Link>
        </div>
        <div className="sliderItem">
            <Link to="/movie" className="slider-img">
                <img src={poster2} alt="plakat" />
                <div className="data">
                    <p className="rating">6/10</p>
                    <p className="title">Bla bla</p>
                    <p className="category">Horror</p>
                    <p className="cast">Aktor</p>
                </div>
            </Link>
        </div>
        
      </Slider>
     );
}
 
export default SliderHomepage;