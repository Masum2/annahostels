import React from 'react';
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="slider1"/>
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="slider2"/>
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="slider3"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
