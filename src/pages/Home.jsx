import React from 'react';
import { Link } from 'react-router-dom';
import MateriasIcon from '../assets/materias.png'; // Asegúrate de ajustar la ruta según sea necesario
import PapeleriaIcon from '../assets/papeleria.png';
import VentaIcon from '../assets/venta.png';
import DeudoresMateriaIcon from '../assets/deudor.png';
import DeudoresPapeleriaIcon from '../assets/deuda.png';
import Calculadora from '../assets/calculadora.png'
import Timer from '../assets/cronometro.png'
import ventaM from '../assets/ventam.png'

const Home = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-40 sm:ml-26">
      <div className="mx-auto px-4 lg:px-12">
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/materias-primas" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={MateriasIcon} alt="Materias" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Materias</span>
            </Link>
            <Link to="/papeleria" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={PapeleriaIcon} alt="Papelería" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Papelería</span>
            </Link>
            <Link to="/venta" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={VentaIcon} alt="Realizar Venta" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Realizar Venta Pape</span>
            </Link>
            <Link to="/venta-materias" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={ventaM} alt="Realizar Venta" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Realizar Venta Materias</span>
            </Link>
            <Link to="/materias-deudores" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={DeudoresMateriaIcon} alt="Lista Deudores Materia" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Lista Deudores Materia</span>
            </Link>
            <Link to="/papeleria-deudores" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={DeudoresPapeleriaIcon} alt="Lista Deudores Papelería" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Lista Deudores Papelería</span>
            </Link>
            <Link to="/iva" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={Calculadora} alt="Lista Deudores Papelería" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Calculadora iva</span>
            </Link>
            <Link to="/timer" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={Timer} alt="Lista Deudores Papelería" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Calculadora iva</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
