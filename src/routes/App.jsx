import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Home from '../pages/Home';
import MateriasPrimas from '../pages/Materias';
import MateriasDeudores from '../pages/MateriasDeudores'
import Papeleria from '../pages/Papeleria';
import PapeleriaDeudores from '../pages/PapeDeudores';
import Deudores from '../pages/Deudores';

function App() {
  return (
    <Router>
      
        <Header/>
        <Sidebar/>  
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materias-primas" element={<MateriasPrimas />} />
            <Route path="/materias-deudores" element={<MateriasDeudores />} />
            <Route path="/papeleria" element={<Papeleria />} />
            <Route path="/papeleria-deudores" element={<PapeleriaDeudores />} />
            <Route path = "/deudores" element = {<Deudores/>}/>
          </Routes>
          
    </Router>
  );
}

export default App
