import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="text-dark">
          <h3>Best Medical services</h3>
          <p>
            Our professionals and consultantas are working very hard for you
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />
        <Carousel.Caption className="text-light">
          <h3>Amazing online services </h3>
          <p>We have online activist who can support you through online.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />
        <Carousel.Caption className="text-light">
          <h3>Psysicain services</h3>
          <p>Our psysician is always ready to help you with their best.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
