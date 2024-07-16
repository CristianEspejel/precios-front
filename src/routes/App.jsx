import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/header/header';
import Home from '../pages/Home';
import MateriasPrimas from '../pages/Materias';
import MateriasDeudores from '../pages/MateriasDeudores';
import Papeleria from '../pages/Papeleria';
import PapeleriaDeudores from '../pages/PapeDeudores';
import Deudores from '../pages/Deudores';
import CalculadoraIva from '../pages/Iva';
import RealizarVenta from '../pages/Venta';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div>
        <ToastContainer />
        <Header sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materias-primas" element={<MateriasPrimas />} />
          <Route path="/materias-deudores" element={<MateriasDeudores />} />
          <Route path="/papeleria" element={<Papeleria />} />
          <Route path="/papeleria-deudores" element={<PapeleriaDeudores />} />
          <Route path="/deudores" element={<Deudores />} />
          <Route path="/iva" element={<CalculadoraIva />} />
          <Route path="/venta" element={<RealizarVenta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
