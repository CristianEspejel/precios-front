import React from 'react';
import { Link } from 'react-router-dom';
import DeudoresMateriaIcon from '../assets/deudor.png';
import DeudoresPapeleriaIcon from '../assets/deuda.png';

const Deudores = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-40 sm:ml-26">
      <div className="mx-auto px-4 lg:px-12">
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/materias-deudores" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={DeudoresMateriaIcon} alt="Lista Deudores Materia" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Lista Deudores Materia</span>
            </Link>
            <Link to="/papeleria-deudores" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <img src={DeudoresPapeleriaIcon} alt="Lista Deudores Papelería" className="w-16 h-16 mb-4" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Lista Deudores Papelería</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deudores;
