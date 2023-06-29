import { Header } from "../../containers/header";
import { Footer } from "../../containers/footer";
import { Image, Container, Row } from "react-bootstrap";
import "./style.css";
import Animal1 from "./images/Imagen1.jpg";
import { Area } from "../../components/area";
import { Animal } from "../../components/animal";

const defaultAreas = [
  {
    nameArea: "Todas las areas",
    img: Animal1,
  },
  {
    nameArea: "Acuario",
    img: Animal1,
  },
  {
    nameArea: "segunda",
    img: Animal1,
  },
  {
    nameArea: "Tercera",
    img: Animal1,
  },
];

const defaultAnimals = [
  {
    nameAnimal: "Pepito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },  {
    nameAnimal: "patito",
    area: "segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },  {
    nameAnimal: "patito",
    area: "segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },  {
    nameAnimal: "patito",
    area: "segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
];

const Zoologico = ({ background }) => {
  return (
    <>
      <Header />
      
      <main
        className={`${
          background ? "text-bg-dark" : "text-bg-light"
        } position-relative`}
      >
        <div className="headerZoo position-relative d-flex justify-content-center">
          <Image src={Animal1} fluid className="w-100 h-100 imgResponsive" />
          <div className="position-absolute bottom-0">
            <div className="text-center title">
              <span>LAS MARAVILLAS DE </span>
              <span>MANGOPARK</span>
            </div>
          </div>
        </div>

        <Container className="pt-5">
          <div className={`${background ? 'shadowSubtitleDark' : 'shadowSubtitleLight'} text-center subTitle mb-5 my-md-5`}>
            <span>Descubre Nuestras Áreas</span>
          </div>

          <Row>
            {defaultAreas.map((area, index) => (
              <Area area={area} key={index} />
            ))}
          </Row>

          <div className={`${background ? 'shadowSubtitleDark' : 'shadowSubtitleLight'} text-center subTitle mb-5 my-md-5`}>
            <span>Habitantes del Área: </span>
          </div>

          <Row>
            {defaultAnimals.map((animal, index) => (
              <Animal animal={animal} key={index} />
            ))}
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export { Zoologico };
