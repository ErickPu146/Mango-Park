import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Inicio } from './containers/inicio';
import { Historia } from './containers/historia';
import { Zoologicos } from './containers/zoologicos';
import { Animales } from './containers/animales';
import { Tienda } from './containers/tienda';
import { Contactos } from './containers/contactos';
import { Header } from './components/header';

function App() {

  return (

    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/zoologicos" element={<Zoologicos />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
