import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from '../routes/inicio';
import { Historia } from '../routes/historia';
import { Zoologicos } from '../routes/zoologicos';
import { Animales } from '../routes/animales';
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