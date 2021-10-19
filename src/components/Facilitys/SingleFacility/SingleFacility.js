import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleFacility = (props) => {
  const { title, description } = props.ab;
  return (
    <Col
      lg={3}
      md={4}
      sm={4}
      className="shadow mb-5 bg-body rounded-3 mx-3 px-3 py-4"
    >
      <h4>{title} </h4>
      <p className="fs-6">{description} </p>
      <Link
        to="/services"
        className="border-0 bg-primary text-light px-3 py-2 rounded-3 text-decoration-none"
      >
        Read More
      </Link>
    </Col>
  );
};

export default SingleFacility;
