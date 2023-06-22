import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Form } from 'react-bootstrap';
import './style.css';
import logoZoo from './imagen-logo/logo-zoo.png';

const Header = () => {

  const location = useLocation()

  return (
    <>
      <header className="sticky-top">
        <Navbar expand="lg" className="navAndFooter">
          <Container fluid>
            <Navbar.Brand>
              <Link
                to="/"
                className="navbar-brand text-light fs-2 d-none d-sm-block"
                style={{ fontWeight: 'bold' }}
              >
                <img
                  src={logoZoo}
                  className="rounded-circle"
                  alt="logo"
                  style={{ height: '60px' }}
                /> MangoPark
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarMangoPark" className="white" />
            <Navbar.Collapse id="navbarMangoPark">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                <li className="nav-item class_li" >
                  <Link
                    to="/"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <i className="bi bi-house-door-fill"> Inicio</i>
                  </Link>
                </li>
                <li className="nav-item class_li" >
                  <Link
                    to="/zoologicos"
                    className="nav-link text-white"
                  >
                    <i className="bi bi-geo-alt-fill"> Ubicacion</i>
                  </Link>
                </li>
                <li className="nav-item class_li" >
                  <Link
                    to="/animales"
                    className="nav-link text-white"
                  >
                    <i className="bi bi-info-circle-fill"> Zoologico</i>
                  </Link>
                </li>
                <li className="nav-item class_li" >
                  <Link
                    to="/tienda"
                    className="nav-link text-white"
                  >
                    <i className="bi bi-bag-check-fill"> tienda</i>
                  </Link>
                </li>
                <li className="nav-item class_li" >
                  <Link
                    to="/contactos"
                    className="nav-link text-white"
                  >
                    <i className="bi bi-telephone-fill"> Contactanos</i>
                  </Link>
                </li>
              </ul>

              <Form 
                className={`
                ${
                  location.pathname === "/" | 
                  location.pathname === "/historia" |
                  location.pathname === "/contactos" 
                  ? "d-none" : "d-block"
                }`}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export { Header };
