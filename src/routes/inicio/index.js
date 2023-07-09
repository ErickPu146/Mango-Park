import "./style.css";
import fondoAnimal1 from "./images/fondoAnimal1.png";
import fondoAnimal2 from "./images/fondoAnimal2.png";
import imagen1 from "./images/imagen1.jpg";
import imagen2 from "./images/imagen2.jpg";
import imagen3 from "./images/imagen3.jpg";
import imagen4 from "./images/imagen4.jpg";
import imagen5 from "./images/imagen5.jpg";
import { useContext } from "react";
import { ParkContext } from "../../context";
import { Card, Col, Container, Row } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Inicio = () => {
  const { background } = useContext(ParkContext);
  return (
    <>
      <div
        className={`
          ${
            background ? "headerHomeDark" : "headerHomeLight"
          } headerHome text-center 
          d-flex align-items-center justify-content-center position-relative`}
      >
        <div data-aos="fade-in" className="headerText">
          <div className="mx-auto">
            <h1 className="headerTitle my-5">¡Bienvenido a MangoPark!</h1>
            <p className="headerSubtitle">
              Descubre la magia de la vida salvaje en nuestro increíble
              zoológico.
            </p>
          </div>
        </div>
      </div>

      <main className="position-relative">
        <div className={`${background ? "bg-dark" : "bg-light"} py-5 relative`}>
          <img
            src={fondoAnimal2}
            alt="Animal"
            className="d-none d-lg-block fondoAnimal2"
          />

          <Container className="text-center relative">
            <Row className="py-5">
              <Col
                sm={12}
                data-aos="fade-up"
                data-aos-offset="-350"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card>
                  <Card.Body>
                    <Row>
                      <Col md={6} className="d-md-flex flex-column justify-content-center gap-5 px-md-4">
                        <Card.Title className="fs-1 headerText">Nosotros</Card.Title>
                        <Card.Text className="contentText">
                          Desde el año 2005, nuestra empresa se enorgullece de
                          contar con una amplia experiencia en el diseño y
                          construcción de espacios naturales que brindan un
                          hogar seguro y enriquecedor para una amplia variedad
                          de especies.
                        </Card.Text>
                      </Col>
                      <Col md={6}>
                        <Card.Img src={imagen2} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                sm={6}
                data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card>
                  <Card.Body>
                    <Row>
                      <Col sm={12}>
                        <Card.Title className="fs-1 headerText">Compromiso</Card.Title>
                        <Card.Text className="contentText">
                          Nuestro compromiso nos impulsa a crear hábitats que reflejen
                          fielmente los entornos naturales de cada especie,
                          promoviendo su bienestar y preservando la
                          biodiversidad. Nos esforzamos por proporcionar a
                          nuestros visitantes una experiencia educativa y
                          emocionante, fomentando la comprensión y el respeto
                          hacia los animales y su hábitat.
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Img src={imagen2} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                sm={6}
                data-aos="fade-up"
                data-aos-offset="-150"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card>
                  <Card.Body>
                    <Row>
                      <Col sm={12}>
                        <Card.Title className="fs-1 headerText">Proyectos</Card.Title>
                        <Card.Text className="contentText">
                          Cada proyecto del zoológico que emprendemos es único y
                          se adapta a las necesidades y características de la
                          ubicación y las especies que albergará. Contamos con
                          un equipo experto de biólogos y conservacionistas,
                          para crear un ambiente atractivo y cautivador tanto
                          para los visitantes como para los animales.
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Img src={imagen2} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                sm={12}
                data-aos="fade-up"
                data-aos-offset="-100"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card>
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <Card.Title className="fs-1 headerText">Descubre</Card.Title>
                        <Card.Text className="contentText">
                        Te invitamos a explorar nuestro sitio web y descubrir la
                    maravillosa diversidad de nuestro zoológico, así como las
                    iniciativas de conservación en las que estamos
                    comprometidos. Únete a nosotros en esta apasionante aventura
                    en la protección y preservación de la vida silvestre desde
                    el año 2005.
                        </Card.Text>
                      </Col>
                      <Col md={6}>
                        <Card.Img src={imagen2} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="container text-center relative">
            <div className="row py-5">
              <div className="card bg-transparent border-0 mt-4 mt-md-0 col-12">
                <div className="opacity text-light bg-cards-dark rounded-5 card-body d-flex flex-column justify-content-center align-items-center"></div>
              </div>
              <div className="card bg-transparent border-0 mt-4 mt-md-0 col-12 col-md-6">
                <div className="opacity card-zoo2 rounded-5 card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="card-text fs-5"></p>
                </div>
              </div>
              <div>
                <div
                  className={`${
                    background ? "card-zoo3" : "bg-success"
                  } opacity text-light rounded-5 card-body d-flex flex-column justify-content-center align-items-center`}
                >
                  <p className="card-text fs-5"></p>
                </div>
              </div>
              <div className="card bg-transparent border-0 mt-4 mt-md-0 col-12">
                <div className="opacity card-zoo4 rounded-5 card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="card-text fs-5">

                  </p>
                </div>
              </div>
            </div>
            <img
              src={fondoAnimal1}
              alt="Animal"
              className="col-2 fondoAnimal1 d-none d-xl-block"
            />
          </div>
        </div>

        <div className={`${background ? "bg-dark" : "bg-light"} py-5`}>
          <div
            data-aos="fade-up"
            data-aos-offset="-450"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className={`${
              background ? "card-zoo5" : "text-bg-dark"
            } opacity container my-5 text-center rounded-5`}
          >
            <div className="row align-items-center mt-5 galeria">
              <div className="col-12 col-md-6 p-3">
                <h1>Protección y bienestar</h1>
                <p className="fs-4">
                  Te invitamos a visitarnos y descubrir cómo trabajamos
                  incansablemente para proteger y preservar a nuestros animales.
                  ¡Únete a nosotros en esta noble causa!"
                </p>
              </div>
              <div className="col-12 col-md-6 imgContainer">
                <img
                  className="rounded-5 img-fluid"
                  src={imagen1}
                  alt="Imagen1"
                />
              </div>
            </div>
            <div className="row mb-3 py-4 galeria">
              <div className="col-md-3 col-6 mb-3 mb-lg-0 imgContainer">
                <img
                  className="rounded-3 img-fluid w-100 h-100"
                  src={imagen2}
                  alt="Imagen2"
                />
              </div>
              <div className="col-md-3 col-6 mb-3 mb-lg-0 imgContainer">
                <img
                  className="rounded-3 img-fluid w-100 h-100"
                  src={imagen3}
                  alt="Imagen3"
                />
              </div>
              <div className="col-md-3 col-6 mb-3 mb-lg-0 imgContainer">
                <img
                  className="rounded-3 img-fluid w-100 h-100"
                  src={imagen4}
                  alt="Imagen4"
                />
              </div>
              <div className="col-md-3 col-6 mb-3 mb-lg-0 imgContainer">
                <img
                  className="rounded-3 img-fluid w-100 h-100"
                  src={imagen5}
                  alt="Imagen5"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { Inicio };
