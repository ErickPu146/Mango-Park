import React, { createContext, useState } from "react";

const ParkContext = createContext();
const allowedValues = ["123", "456", "789"];

const ParkProvider = (props) => {
  const [background, setBackground] = useState(false);
  const [workerCode, setWorkerCode] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ValidateWorkerCode = (workerCode) => {
    console.log(workerCode);
    if (allowedValues.includes(workerCode)) {
      alert('Ingreso Correctamente')
      handleClose()
    } else {
      alert('Datos incorrecto')
    }
  };

  const handleSubmit = (event, workerCode) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      ValidateWorkerCode(workerCode);
    }
    setValidated(true);
  };

  return (
    <>
      <ParkContext.Provider
        value={{
          background,
          setBackground,
          validated,
          handleSubmit,
          handleClose,
          handleShow,
          show,
          workerCode,
          setWorkerCode,
        }}
      >
        {props.children}
      </ParkContext.Provider>
    </>
  );
};

export { ParkProvider, ParkContext };
