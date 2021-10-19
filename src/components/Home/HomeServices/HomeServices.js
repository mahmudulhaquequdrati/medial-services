import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleHomeServices from "../SingleHomeServices/SingleHomeServices";

const HomeServices = () => {
  const [homeservices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4 m-0">
        {homeservices.slice(0, 3).map((ab) => (
          <SingleHomeServices ab={ab} key={ab.key}></SingleHomeServices>
        ))}
      </Row>
    </div>
  );
};

export default HomeServices;
