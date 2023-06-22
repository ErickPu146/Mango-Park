import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from '../routes/inicio';
import { Ubicacion } from '../routes/ubicacion';
import { Zoologico } from '../routes/zoologico';
import { Tienda } from '../routes/tienda';
import { Contactos } from '../routes/contactos';
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
                        path="/ubicacion" 
                        element={<Ubicacion background={background}/>} 
                    />
                    <Route 
                        path="/zoologico" 
                        element={<Zoologico background={background}/>} 
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