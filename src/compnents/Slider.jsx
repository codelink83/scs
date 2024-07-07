import React from 'react'
import slider_1 from "../assets/slider-1.jpg"
import slider_2 from "../assets/slider-2.jpg"
import slider_3 from "../assets/slider-3.png"

const Slider = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src={slider_1} className="d-block w-100" alt="img"/>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={slider_2} className="d-block w-100" alt="img"/>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={slider_3} className="d-block w-100" alt="img"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider
