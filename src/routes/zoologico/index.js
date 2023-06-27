import { useContext } from "react";
import { Header } from "../../containers/header";
import { Footer } from "../../containers/footer";
import { Button, Modal, Form } from "react-bootstrap";
import { ParkContext } from "../../context";
import "./style.css"

const Zoologico = ({ background }) => {
  const {
    show,
    handleShow,
    handleClose,
    validated,
    handleSubmit,
    workerCode,
    setWorkerCode,
    validatedWorkerCode,
  } = useContext(ParkContext);

  return (
    <>
      <Header />
      <main className={`${background ? "text-bg-dark" : "text-bg-light"} position-relative`}>
        <div className="pb-4 headerZoo">
          <div className="h-100 text-center d-flex flex-column justify-content-end pb-5">
            <p className="d-md-none title mt-5 pt-5">LAS MARAVILLAS DE MANGOPARK</p>
            <p className="d-none d-md-block title">LAS MARAVILLAS DE</p>
            <p className="d-none d-md-block title">MANGOPARK</p>
          </div>
          <Button
            variant="info"
            onClick={handleShow} 
            className="position-absolute top-0 end-0 m-2"
          >
            ¿Eres parte del equipo de administracion de MangoPark?
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            data-bs-theme={`${background ? "dark" : "light"}`}
          >
            <Modal.Header
              closeButton
              className={`${background ? "text-bg-dark" : "text-bg-light"}`}
            >
              <Modal.Title>Apartado para el personal de MangoPark</Modal.Title>
            </Modal.Header>
            <Modal.Body
              className={`${background ? "text-bg-dark" : "text-bg-light"}`}
            >
              <Form
                noValidate
                validated={validated}
                onSubmit={(event) => handleSubmit(event, workerCode)}
              >
                <Form.Group
                  className="mb-3"
                >
                  <Form.Label>Ingrese su nombre</Form.Label>
                  <Form.Control type="text" required />
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
                  className={`${background ? "text-bg-dark" : "text-bg-light"}`}
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

        <div className={`${validatedWorkerCode ? 'd-bloc' : 'd-none'}`}>
          HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
      </main>

      <Footer />
    </>
  );
};

export { Zoologico };
