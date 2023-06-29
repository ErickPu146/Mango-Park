import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from '../routes/inicio';
import { Ubicacion } from '../routes/ubicacion';
import { Zoologico } from '../routes/zoologico';
import { Tienda } from '../routes/tienda';
import { Contactos } from '../routes/contactos';
import { Header } from '../containers/header'
import { Footer } from '../containers/footer';

const AppUI = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route 
                        path="/" 
                        element={<Inicio/>} 
                    />
                    <Route 
                        path="/ubicacion" 
                        element={<Ubicacion/>} 
                    />
                    <Route 
                        path="/zoologico" 
                        element={<Zoologico/>} 
                    />
                    <Route 
                        path="/tienda" 
                        element={<Tienda/>} 
                    />
                    <Route 
                        path="/contactos" 
                        element={<Contactos/>} 
                    />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export { AppUI };