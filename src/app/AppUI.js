import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from '../containers/inicio';
import { Historia } from '../containers/historia';
import { Zoologicos } from '../containers/zoologicos';
import { Animales } from '../containers/animales';
import { Tienda } from '../containers/tienda';
import { Contactos } from '../containers/contactos';
import { ParkContext } from '../context';

const AppUI = () => {
    const {
        background,
    } = useContext(ParkContext);
    
    return (
        <>
            <Router>
                <Routes>
                    <Route 
                        path="/" 
                        element={<Inicio background={background}/>} 
                    />
                    <Route 
                        path="/historia" 
                        element={<Historia background={background}/>} 
                    />
                    <Route 
                        path="/zoologicos" 
                        element={<Zoologicos background={background}/>} 
                    />
                    <Route 
                        path="/animales" 
                        element={<Animales background={background}/>}
                    />
                    <Route 
                        path="/tienda" 
                        element={<Tienda background={background}/>} 
                    />
                    <Route 
                        path="/contactos" 
                        element={<Contactos background={background}/>} 
                    />
                </Routes>
            </Router>
        </>
    );
}

export { AppUI };