import "./style.css";
import { Header } from "../../components/header";
// import { Footer } from "../../components/footer/";
import fondoAnimal1 from "./images/fondoAnimal1.png";
import fondoAnimal2 from "./images/fondoAnimal2.png";
import imagen1 from "./images/imagen1.jpg";
import imagen2 from "./images/imagen2.jpg";
import imagen3 from "./images/imagen3.jpg";
import imagen4 from "./images/imagen4.jpg";
import imagen5 from "./images/imagen5.jpg";

const Inicio = () => {
    return (
        <>
            <Header />
            <main className="">
                <div className="bg-1 py-5 relative">
                    <img src={fondoAnimal2} alt="Animal" className="d-none d-lg-block fondoAnimal2"/>
                    <div className="container text-center relative">
                        <div className="row py-5">
                            <div className="card bg-transparent border-0 mt-4 mt-md-0 col-12 col-md-5 col-xl-4 mb-md-3">
                                <div className="opacity card-zoo1 rounded-5 card-body d-flex flex-column justify-content-center align-items-center">
                                    <h1 className="w-100 border-bottom">
                                        Nosotros
                                    </h1>
                                    <p className="card-text fs-5">Desde el año 2005, nuestra empresa ha creado y desarrollado diversos
                                        zoológicos
                                        alrededor del mundo. Nos enorgullece contar con una amplia experiencia en el diseño y
                                        construcción de espacios naturales que brindan un hogar seguro y enriquecedor para una
                                        amplia
                                        variedad de especies.</p>
                                </div>
                            </div>
                            <div className="card bg-transparent border-0 mt-4 mt-md-0 col-12 col-md-7 col-xl-6 mb-md-3">
                                <div className="opacity card-zoo2 rounded-5 card-body d-flex flex-column justify-content-center align-items-center">
                                    <h1 className="w-100 border-bottom">
                                        Compromiso
                                    </h1>
                                    <p className="card-text fs-5">Nuestro compromiso con la conservación y el bienestar animal nos impulsa a
                                        crear hábitats que reflejen fielmente los entornos naturales de cada especie, promoviendo su
                                        bienestar y preservando la biodiversidad. Nos esforzamos por proporcionar a nuestros
                                        visitantes
                                        una experiencia educativa y emocionante, fomentando la comprensión y el respeto hacia los
                                        animales y su hábitat.
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-transparent border-0 mt-4 mt-md-0 col-12 col-md-7 col-xl-6">
                                <div className="opacity text-light card-zoo3 rounded-5 card-body d-flex flex-column justify-content-center align-items-center">
                                    <h1 className="w-100 border-bottom">
                                        Proyectos
                                    </h1>
                                    <p className="card-text fs-5">Cada proyecto de zoológico que emprendemos es único y se adapta a las
                                        necesidades y características de la ubicación y las especies que albergará. Contamos con un
                                        equipo de expertos en diseño web, junto con biólogos y conservacionistas, para crear un
                                        ambiente atractivo y cautivador tanto para los visitantes como para los animales.</p>
                                </div>
                            </div>
                            <div className="card bg-transparent border-0 mt-4 mt-md-0 col-12 col-md-5 col-xl-4">
                                <div className="opacity card-zoo4 rounded-5 card-body d-flex flex-column justify-content-center align-items-center">
                                    <h1 className="w-100 border-bottom">
                                        Descubre
                                    </h1>
                                    <p className="card-text fs-5">Te invitamos a explorar nuestro sitio web y descubrir la maravillosa
                                        diversidad
                                        de nuestros zoológicos, así como las iniciativas de conservación en las que estamos
                                        comprometidos. Únete a nosotros en esta apasionante aventura en la protección y preservación
                                        de la vida silvestre desde el año 2005.
                                    </p>
                                </div>
                            </div>
                        </div>
                            <img src={fondoAnimal1} alt="Animal" className="col-2 fondoAnimal1 d-none d-xl-block"/>
                    </div>
                </div>

                <div className="bg-2 py-5">
                    <div className="container my-5 text-center text-bg-dark rounded-5">
                        <div className="row align-items-center mt-5 galeria">
                            <div className="col-12 col-md-6 p-3">
                                <h1>Proteccion y bienestar</h1>
                                <p className="fs-4">
                                    Te invitamos a visitarnos y descubrir cómo trabajamos incansablemente
                                    para proteger y preservar a nuestros animales. ¡Únete a nosotros en esta noble causa!"
                                </p>
                            </div>
                            <div className="col-12 col-md-6 imgContainer">
                                <img className="rounded-5 img-fluid" src={imagen1} alt="Imagen1"/>
                            </div>
                        </div>
                        <div className="row mb-3 py-4 galeria">
                            <div className="col-md-3 col-6 mb-3 mb-lg-0 imgContainer">
                                <img className="rounded-3 img-fluid w-100 h-100" src={imagen2} alt="Imagen2"/>
                            </div>
                            <div className="col-md-3 col-6 mb-3 mb-lg-0 imgContainer">
                                <img className="rounded-3 img-fluid w-100 h-100" src={imagen3} alt="Imagen3"/>
                            </div>
                            <div className="col-md-3 col-6 mb-3 mb-lg-0 imgContainer">
                                <img className="rounded-3 img-fluid w-100 h-100" src={imagen4} alt="Imagen4"/>
                            </div>
                            <div className="col-md-3 col-6 mb-3 mb-lg-0 imgContainer">
                                <img className="rounded-3 img-fluid w-100 h-100" src={imagen5} alt="Imagen5"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* <Footer/>  */}
        </>
    );
}

export { Inicio };





      
      

