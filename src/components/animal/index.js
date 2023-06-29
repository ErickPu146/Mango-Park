import { useContext, useState } from "react";
import { Card, Col } from "react-bootstrap";
import "./style.css"
import { ParkContext } from "../../context";

const Animal = ({ animal }) => {
    const {
        background
    } = useContext(ParkContext)
    const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Col sm={6} md={4} className="mb-3">
        <Card 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                ${isHovered & background ? "shadowCardDark" : ''}
                ${isHovered & !background ? 'shadowCardLight' : ''} 
                CardAnimal`}
        >
          <span className="position-relative frontCard">
            <Card.Img src={animal.img} className="imgResponsive" />
            <Card.Title className="lh-sm text-light position-absolute bottom-0 ps-2">
              <span className="fw-bold">Nombre: </span>{animal.nameAnimal} <br />
              <span className="fw-bold">Area: </span>{animal.area}
            </Card.Title>
          </span>
          <Card.Body className="backCard">
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export { Animal };
