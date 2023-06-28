import { useContext, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { ParkContext } from "../../context";

const Area = ({ area }) => {
  const { background } = useContext(ParkContext);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col sm={6} md={4} lg={3} className="mb-3">
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
        ${isHovered & background ? "shadowDark" : ""}
        ${isHovered & !background ? "shadowLight" : ""} 
        cardArea`}
      >
        <Card.Img src={area.img} className="imgResponsive" />
        <Card.Title className="lh-sm text-light position-absolute bottom-0 ps-2">
          {area.nameArea}
        </Card.Title>
      </Card>
    </Col>
  );
};

export { Area };
