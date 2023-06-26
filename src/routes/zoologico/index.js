import { useState } from "react";
import { Header } from "../../containers/header";
import { Footer } from "../../containers/footer";
import { Button, Modal, Form } from "react-bootstrap";

const Zoologico = ({ background }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />
      <main className="position-relative">
        <div className={`${background ? "bg-dark" : "bg-light"} py-5`}>
          <div className="d-flex justify-content-end">
            <Button
              variant={background ? "outline-warning" : "outline-success"}
              onClick={handleShow}
            >
              ¿Eres parte del equipo de administracion de MangoPark?
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header
                closeButton
                className={`${background ? "text-bg-dark" : "text-bg-light"}`}
              >
                <Modal.Title>
                  Apartado para el personal de MangoPark
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                className={`${background ? "text-bg-dark" : "text-bg-light"}`}
              >
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ingrese su nombre</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nombre@ejemplo.com"
                    />
                    <Form.Label>Codigo de permiso otorgado por MangoPark</Form.Label>
                    <Form.Control type="password"/>

                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer
                className={`${background ? "text-bg-dark" : "text-bg-light"}`}
              >
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary">Ingresar</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export { Zoologico };
