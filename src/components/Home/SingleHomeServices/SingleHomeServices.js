import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleHomeServices = (props) => {
  const { img, title, details } = props.ab;
  return (
    <Col className="mb-3">
      <Card className="pb-3">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link className="text-decoration-none">Show Details</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleHomeServices;
