import { Header } from "../../components/header";
import './style.css';
import Email from './imagenes-contactos/email.jpg';
import Telefono from './imagenes-contactos/contactos_llamar.png';
import { Footer } from "../../components/footer/";
import { Form } from 'react-bootstrap'

const Contactos = () => {
    const backGround = false;
    return (
        <>
            <Header />

            <main className={`${backGround ? 'bg-dark' : 'bg-light'}`}>
                <div className="text-center">
                    <div className=" main_contactanos mb-3 p-5 shadow">
                        <div className="d-flex flex-column align-items-center " style={{ width: "100%" }}>
                            <h1 className="h_de_contactanos">Contactanos</h1>
                            <h6 className="h_de_contactanos" style={{ padding: ".3%" }}>Envia un correo</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-sm-around align-items-center text-dark flex-column flex-sm-row ">

                        <div className="div_container_contactanos w-75 p-4 rounded">
                            <Form className={`${backGround ? 'text-white' : 'text-dark'}`}>
                                <p className="text-start">Nombre:</p>
                                <Form.Control type="text" className={`mb-4 w-100 bg-secondary bg-opacity-25 ${backGround ? 'text-white' : 'text-dark'}`} required placeholder="Ingrese su Nombre" />
                                <p className="text-start">Correo electrónico:</p>
                                <Form.Control type="email" className={`mb-4 w-100 bg-secondary bg-opacity-25 ${backGround ? 'text-white' : 'text-dark'}`} required placeholder="Ingrese su Correo" />
                                <p className="text-start">Ingrese su observación:</p>
                                <Form.Control as='textarea' className={`mb-4 w-100 bg-secondary bg-opacity-25 textarea-style ${backGround ? 'text-white' : 'text-dark'}`} required placeholder="Ingrese su observacion aqui" />
                                <button type="submit" className="btn btn-info mb-2  p-1 ajuste-boton-enviar" >Enviar</button>
                            </Form>
                        </div>

                        <div className="w-50 ">
                            <div className="mb-3">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="m-3"><i className={`bi bi-facebook i fs-4 ${backGround ? 'text-white-color' : 'text-color'}`}></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="m-3"><i className={`bi bi-instagram i fs-4 ${backGround ? 'text-white-color' : 'text-color'}`}></i></a>
                                <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer" className="m-3"><i className={`bi bi-twitter i fs-4 ${backGround ? 'text-white-color' : 'text-color'}`}></i></a>
                                <a href="https://github.com/ErickPu146/Mango-Park/tree/main" target="_blank" rel="noopener noreferrer" className="m-3"><i className={`bi bi-github i fs-4 ${backGround ? 'text-white-color' : 'text-color'}`}></i></a>
                            </div>
                            <div className={`align-items-center mb-5 ${backGround ? 'text-white' : 'text-dark'}`}>
                                <i className={`bi bi-envelope-paper-fill size ${backGround ? 'text-white-color' : 'text-color'}`}></i>
                                <p>Envíanos un correo:<br />
                                    MangoPark@hotmail.com
                                </p>
                            </div>
                            <div className={`mb-5 ${backGround ? 'text-white' : 'text-dark'}`}>
                                <i className={`bi bi-telephone-fill size ${backGround ? 'text-white-color' : 'text-color'}`}></i>
                                <p>Contactanos tambien por numero telefonico:<br />
                                    (+502)2514 4155
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

export { Contactos };