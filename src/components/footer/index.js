import { Facebook, Instagram, Twitter, Github } from "react-bootstrap-icons";
import "./style.css"

const Footer = () => {
    return (
        <>
            <footer className="navAndFooter p-5 container-fluid bg-dark" >
                <div className="row">
                    <section className="col-md-12 col-lg-4 mt-2">
                        <div className="d-flex flex-column text-white align-items-center container">
                            <h3>Dirección</h3>
                            <h6>El Condado, 1 avenida, 2da calle</h6>
                            <h6>San Felipe, Retalhuleu</h6>
                            <h6>Guatemala</h6>
                        </div>
                    </section>
                    <section className="col-md-12 col-lg-4 mt-2">
                        <div className="d-flex flex-column text-white align-items-center container">
                            <h3>Siguenos en</h3>
                            <div className="d-flex gap-4">
                                <a className="i" href="#"><Facebook/></a>
                                <a className="i" href="#"><Instagram/></a>
                                <a className="i" href="#"><Twitter/></a>
                                <a className="i" href="#"><Github/></a>
                            </div>
                        </div>
                    </section>
                    <section className="col-md-12 col-lg-4 mt-2">
                        <div className="d-flex flex-column text-white align-items-center container">
                            <h3>Teléfono</h3>
                            <h6>(+502)2514 4155</h6>
                        </div>
                    </section>
                    <section className="justify-content-center d-flex mt-4">
                        <p className="text-white">Copyright 2023 © All rights Reserved MangoPark Zoo | Design and Develop by Estudio
                            MangoChango Academy</p>
                    </section>
                </div>
            </footer>
        </>
    );
}

export { Footer };