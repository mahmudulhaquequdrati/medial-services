import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleServices = (props) => {
  const { img, title, details } = props.ab;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} className="img-fluid" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link className="text-decoration-none" to="/">
              Show details
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleServices;
