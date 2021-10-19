import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleAbout from "./SingleAbout/SingleAbout";

const About = () => {
  const [about, setabout] = useState([]);
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setabout(data));
  }, []);
  return (
    <div>
      <h2>About us</h2>
      <p className="mb-0">Here is bit about us</p>
      <div className="p-4">
        <Row className="gy-4 p-4">
          {about.map((ab) => (
            <SingleAbout ab={ab} key={ab.key}></SingleAbout>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default About;
