import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleDetails = () => {
  const [detail, setDetail] = useState([]);
  const { key } = useParams();
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  const found = detail.find((detail) => detail.key === key);
  console.log(found, detail);
  const { img, title, details } = found || {};

  return (
    <div className="bg-light py-4">
      <h3 className="text-center text-primary mt-0">{title}</h3>

      <Card className="card" style={{ width: "18rem", margin: "2rem auto 0" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to="/services">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleDetails;
