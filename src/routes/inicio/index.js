import "./style.css";
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
        <Container>
          <div data-aos="fade-in" className="headerText">
            <div className="mx-auto">
              <h1 className="headerTitle my-5">¡Bienvenido a MangoPark!</h1>
              <p className="headerSubtitle">
                Descubre la magia de la vida salvaje en nuestro increíble
                zoológico.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <main className="position-relative">
        <div
          className={`${
            background ? "bg-dark" : "bg-light"
          } position-relative py-md-5 relative`}
        >
          <Container className="text-center relative">
            <Row className="py-5 gap-0 row-gap-5">
              <Col
                sm={12}
                data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card
                  className={`${
                    background ? "cardToDark text-light" : "cardToLight"
                  }`}
                >
                  <Card.Body>
                    <Row>
                      <Col
                        md={6}
                        className="d-md-flex flex-column justify-content-center px-md-4 py-4"
                      >
                        <Card.Title className="fs-1 headerText ">
                          Nosotros
                        </Card.Title>
                        <Card.Text className="contentText fw-semibold py-5 px-lg-3">
                          Desde el año 2005, nuestra empresa se enorgullece de
                          contar con una amplia experiencia en el diseño y
                          construcción de espacios naturales que brindan un
                          hogar seguro y enriquecedor para una amplia variedad
                          de especies.
                        </Card.Text>
                      </Col>
                      <Col md={6}>
                        <div className="imgContainer h-100 rounded-2">
                          <img
                            src={imagen2}
                            alt="Imagen"
                            className="h-100 w-100"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                sm={6}
                data-aos="fade-right"
                data-aos-offset="-200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card
                  className={`${
                    background ? "text-bg-dark" : "text-bg-light"
                  } bg-transparent border-0 h-100`}
                >
                  <Card.Body>
                    <Row className="align-items-end">
                      <Col
                        sm={12}
                        className="d-md-flex flex-column justify-content-center py-4"
                      >
                        <Card.Title>
                          <div
                            className={`${
                              background
                                ? "shadowSubtitleDark"
                                : "shadowSubtitleLight"
                            } text-center headerText mb-5 my-md-5 w-100`}
                          >
                            <span>Compromiso</span>
                          </div>
                        </Card.Title>
                        <Card.Text className="contentText  fw-semibold">
                          Nuestro compromiso nos impulsa a crear hábitats que
                          reflejen fielmente los entornos naturales de cada
                          especie, promoviendo su bienestar y preservando la
                          biodiversidad. Nos esforzamos por proporcionar a
                          nuestros visitantes una experiencia educativa y
                          emocionante, fomentando la comprensión y el respeto
                          hacia los animales y su hábitat.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                sm={6}
                data-aos="fade-left"
                data-aos-offset="-200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card
                  className={`${
                    background ? "text-bg-dark" : "text-bg-light"
                  } bg-transparent border-0 h-100`}
                >
                  <Card.Body>
                    <Row>
                      <Col
                        sm={12}
                        className="d-md-flex flex-column justify-content-center py-4"
                      >
                        <Card.Title>
                          <div
                            className={`${
                              background
                                ? "shadowSubtitleDark"
                                : "shadowSubtitleLight"
                            } text-center headerText mb-5 my-md-5 w-100`}
                          >
                            <span>Proyectos</span>
                          </div>
                        </Card.Title>
                        <Card.Text className="contentText  fw-semibold">
                          Cada proyecto del zoológico que emprendemos es único y
                          se adapta a las necesidades y características de la
                          ubicación y las especies que albergará. Contamos con
                          un equipo experto de biólogos y conservacionistas,
                          para crear un ambiente atractivo y cautivador tanto
                          para los visitantes como para los animales.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                sm={12}
                data-aos="fade-up"
                data-aos-offset="-200"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Card
                  className={`${
                    background ? "cardToDark text-light" : "cardToLight"
                  }`}
                >
                  <Card.Body>
                    <Row>
                      <Col
                        md={6}
                        className="d-md-flex flex-column justify-content-center px-md-4 py-4"
                      >
                        <Card.Title className="fs-1 headerText ">
                          Descubre
                        </Card.Title>
                        <Card.Text className="contentText fw-semibold py-5">
                          Te invitamos a explorar nuestro sitio web y descubrir
                          la maravillosa diversidad de nuestro zoológico, así
                          como las iniciativas de conservación en las que
                          estamos comprometidos. Únete a nosotros en esta
                          apasionante aventura en la protección y preservación
                          de la vida silvestre desde el año 2005.
                        </Card.Text>
                      </Col>
                      <Col md={6}>
                        <div className="imgContainer h-100 rounded-2">
                          <img
                            src={imagen2}
                            alt="Imagen"
                            className="h-100 w-100"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div
          className={`${
            background ? "text-bg-dark" : "text-bg-light"
          } pb-md-5 relative`}
        >
          <Container
            data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="relative"
          >
            <div
              className={`${
                background ? "shadowSubtitleDark" : "shadowSubtitleLight"
              } text-center subTitle mb-5 w-100`}
            >
              <span>Protección y</span>
              <span> bienestar</span>
            </div>
            <h2 className="text-center contentText">
              Te invitamos a visitarnos y descubrir cómo trabajamos
              incansablemente para proteger y preservar a nuestros animales.
              ¡Únete a nosotros en esta noble causa!"
            </h2>

            <Row className="py-5 gap row-gap-2">
              <Col sm={6} lg={3} className="px-2">
                <div className="imgContainer rounded-2">
                  <img
                    src={imagen2}
                    alt="Imagen"
                    className="img-fluid w-100 h-100"
                  />
                </div>
              </Col>
              <Col sm={6} lg={3} className="px-2">
                <div className="imgContainer rounded-2">
                  <img
                    src={imagen3}
                    alt="Imagen"
                    className="img-fluid w-100 h-100"
                  />
                </div>
              </Col>
              <Col sm={6} lg={3} className="px-2">
                <div className="imgContainer rounded-2">
                  <img
                    src={imagen4}
                    alt="Imagen"
                    className="img-fluid w-100 h-100"
                  />
                </div>
              </Col>
              <Col sm={6} lg={3} className="px-2">
                <div className="imgContainer rounded-2">
                  <img
                    src={imagen5}
                    alt="Imagen"
                    className="img-fluid w-100 h-100"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  );
};

export { Inicio };
