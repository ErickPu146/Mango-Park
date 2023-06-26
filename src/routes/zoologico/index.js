import { useContext } from "react";
import { Header } from "../../containers/header";
import { Footer } from "../../containers/footer";
import { Button, Modal, Form } from "react-bootstrap";
import { ParkContext } from "../../context";

const Zoologico = ({ background }) => {
  const { 
    show,
    handleShow,
    handleClose, 
    validated, 
    handleSubmit,
    workerCode,
    setWorkerCode,
  } = useContext(ParkContext);

  return (
    <>
      <Header />
      <main className="position-relative">
        <div className={`${background ? "bg-dark" : "bg-light"}`}>
          <div className="d-flex justify-content-end pt-2 pb-4">
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
                <Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event, workerCode)}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ingrese su nombre</Form.Label>
                    <Form.Control type="text" required/>
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      required
                    />
                    <Form.Label>
                      Codigo de permiso otorgado por MangoPark
                    </Form.Label>
                    <Form.Control
                      onChange={(event) => setWorkerCode(event.target.value)} 
                      type="password" 
                      required
                    />
                  </Form.Group>
                  <Modal.Footer
                    className={`${
                      background ? "text-bg-dark" : "text-bg-light"
                    }`}
                  >
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                    <Button type="submit" variant="primary">
                      Ingresar
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export { Zoologico };
