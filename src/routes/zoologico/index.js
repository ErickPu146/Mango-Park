import { Container, Pagination, Row } from "react-bootstrap";
import "./style.css";
import { Area } from "../../components/area";
import { Animal } from "../../components/animal";
import { ParkContext } from "../../context";
import { useContext } from "react";

const Zoologico = () => {
  const {
    background,
    currentAnimals,
    defaultAreas,
    currentPage,
    setCurrentPage,
    items,
    totalPages,
  } = useContext(ParkContext);
  return (
    <>
      <div className="headerZoologico text-center d-flex align-items-center justify-content-center position-relative">
        <div className="headerText">
          <div className="mx-auto">
            <h1 className="headerTitle my-5">LAS MARAVILLAS DE MANGOPARK</h1>
          </div>
        </div>
      </div>

      <main
        className={`${
          background ? "text-bg-dark" : "text-bg-light"
        } position-relative`}
      >
        <Container className="pt-5 d-flex flex-column align-items-center ">
          <div
            className={`${
              background ? "shadowSubtitleDark" : "shadowSubtitleLight"
            } text-center subTitle mb-5 my-md-5`}
          >
            <span>Descubre Nuestras Áreas</span>
          </div>

          <Row>
            {defaultAreas.map((area, index) => (
              <Area area={area} key={index} />
            ))}
          </Row>

          <div
            className={`${
              background ? "shadowSubtitleDark" : "shadowSubtitleLight"
            } text-center subTitle mb-5 my-md-5`}
          >
            <span>Habitantes del Área: </span>
          </div>

          <Pagination>
            <Pagination.Prev
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {items}
            <Pagination.Next
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>

          <Row>
            {currentAnimals.map((animal, index) => (
              <Animal animal={animal} key={index} />
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

export { Zoologico };
