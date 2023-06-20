<<<<<<< HEAD
import { Footer } from './componentes/footer/footer';
import React from 'react';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './containers/inicio';
import { Historia } from './containers/historia';
import { Zoologicos } from './containers/zoologicos';
import { Animales } from './containers/animales';
import { Tienda } from './containers/tienda';
import { Contactos } from './containers/contactos';
>>>>>>> f7c945e632c0c2bb0af067138e19c6785627557f

function App() {

  return (
    <>
<<<<<<< HEAD
      <Footer />
=======
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/zoologicos" element={<Zoologicos />} />
          <Route path="/animales" element={<Animales />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </Router>
>>>>>>> f7c945e632c0c2bb0af067138e19c6785627557f
    </>
  );
}

export default App;
