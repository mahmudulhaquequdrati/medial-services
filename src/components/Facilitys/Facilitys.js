import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleFacility from "./SingleFacility/SingleFacility";

const Facilitys = () => {
  const [facility, setFacility] = useState([]);
  useEffect(() => {
    fetch("/facility.json")
      .then((res) => res.json())
      .then((data) => setFacility(data));
  }, []);

  return (
    <div className="p-4">
      <Row className="gy-4 p-4 d-flex justify-content-center mt-3">
        {facility.map((ab) => (
          <SingleFacility ab={ab} key={ab.id}></SingleFacility>
        ))}
      </Row>
    </div>
  );
};

export default Facilitys;
