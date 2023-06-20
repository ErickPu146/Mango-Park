import { Header } from "../../components/header";
// import { Footer } from "../../components/footer/";
import './style.css';
import Email from './imagenes-contactos/email.jpg';
import Telefono from './imagenes-contactos/contactos_llamar.png';
import { Footer } from "../../components/footer/";

const Contactos = () => {
    return (
        <>
            <Header />

            <main>
                <div className="text-center">
                    <div className=" main_contactanos mb-3 p-5 shadow">
                        <div className="d-flex flex-column align-items-center " style={{width: "100%"}}>
                            <h1 className="h_de_contactanos">Contactanos</h1>
                            <h6 className="h_de_contactanos" style={{padding: ".3%"}}>Envia un correo</h6>
                        </div>
                    </div>

                    <div className="d-flex justify-content-sm-around align-items-center text-white flex-column flex-sm-row ">
                        <div className="w-50 ">
                            <div className="mb-5 ">
                                <h1>Pregunta Sin Miedo</h1>
                                <p>No dudes en ponerte en contacto con nosotros. Siempre estamos abiertos a
                                    discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.</p>
                            </div>
                            <div className="align-items-center mb-5">
                                <img src={Email} alt="Correo electronico" style={{height: "75px"}} />
                                    <p>Envíanos un correo:<br />
                                        MangoPark@hotmail.com
                                    </p>
                            </div>
                            <div className="mb-5">
                                <img src={Telefono} alt="Llamar" style={{height: "75px"}} />
                                    <p>Contactanos tambien por numero telefonico:<br />
                                        (+502)2514 4155
                                    </p>
                            </div>
                            <div className="mb-3">
                                <a href="#" className="m-3"><i className="bi bi-facebook i"></i></a>
                                <a href="#" className="m-3"><i className="bi bi-instagram i"></i></a>
                                <a href="#" className="m-3"><i className="bi bi-twitter i"></i></a>
                                <a href="#" className="m-3"><i className="bi bi-github i"></i></a>
                            </div>
                        </div>
                        <div className="div_container_contactanos w-75 bg-dark p-4 rounded">
                            <p className="text-start">Nombre:</p>
                            <input type="text" className="mb-4 w-100 input_style_contactos" placeholder="Ingrese su Nombre" />
                                <p className="text-start">Correo electronico:</p>
                                <input type="text" className="mb-4 w-100 input_style_contactos" placeholder="Ingrese su Correo" />
                                    <p className="text-start">Ingrese su observacion:</p>
                                    <textarea cols="30" rows="10" className="mb-4 w-100 textarea_style_contactos" placeholder="Ingrese su observacion aqui"></textarea>
                                    <button type="submit" className="btn btn-info mb-2  p-1 ajuste-boton-enviar" >Enviar</button>
                                </div>
                        </div>
                    </div>
            </main>

            <Footer/>
        </>
    );
}

export { Contactos };