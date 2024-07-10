import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer desde react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS de react-toastify

import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Home from '../pages/Home';
import MateriasPrimas from '../pages/Materias';
import MateriasDeudores from '../pages/MateriasDeudores';
import Papeleria from '../pages/Papeleria';
import PapeleriaDeudores from '../pages/PapeDeudores';
import Deudores from '../pages/Deudores';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        
        <Header />
        <Sidebar />  
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materias-primas" element={<MateriasPrimas />} />
          <Route path="/materias-deudores" element={<MateriasDeudores />} />
          <Route path="/papeleria" element={<Papeleria />} />
          <Route path="/papeleria-deudores" element={<PapeleriaDeudores />} />
          <Route path="/deudores" element={<Deudores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
