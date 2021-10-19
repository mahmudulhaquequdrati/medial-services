import { Button } from "react-bootstrap";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import img from "../../images/11.jpg";

const ContactUs = () => {
  return (
    <Row className="g-0 d-flex align-items-center">
      <Col lg={6}>
        <div className="contact-img-div">
          <img className="contact-img img-fluid" src={img} alt="" />
        </div>
      </Col>

      <Col lg={6}>
        <Form className="form">
          <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="mt-2">Your Name</Form.Label>
            <Form.Control type="name" placeholder="type your name" />

            <Form.Label className="mt-2">Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Massage</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button size="lg" className="p-2 m-3" variant="success">
            Contact Now
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactUs;
