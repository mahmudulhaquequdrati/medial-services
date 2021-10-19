import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleServices from "./SingleServices/SingleServices";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h3 className="text-primary text-center">Our services</h3>
      <Row xs={1} md={2} lg={3} className="g-4 m-0">
        {services.map((ab) => (
          <SingleServices ab={ab} key={ab.key}></SingleServices>
        ))}
      </Row>
    </div>
  );
};

export default Services;
