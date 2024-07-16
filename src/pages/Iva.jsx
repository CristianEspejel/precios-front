import React, { useState } from 'react';

const Iva = () => {
  const [precioProducto, setPrecioProducto] = useState('');
  const [porcentajeIVA] = useState(16); // IVA estándar en México para muchos productos
  const [tipoProducto, setTipoProducto] = useState('papeleria'); // Estado para el tipo de producto

  const calcularPrecioConIVA = () => {
    if (!precioProducto) return 0;
    let precio = parseFloat(precioProducto);
    let precioConIVA = precio * (1 + porcentajeIVA / 100);
    return precioConIVA.toFixed(2); // Redondear a 2 decimales
  };

  const calcularPrecioSugerido = () => {
    let precioConIVA = parseFloat(calcularPrecioConIVA());
    let porcentajeAumento = tipoProducto === 'papeleria' ? 0.25 : 0.30;
    let precioSugerido = precioConIVA * (1 + porcentajeAumento);
    return precioSugerido.toFixed(2); // Redondear a 2 decimales
  };

  const handleChangePrecio = (event) => {
    // Asegurarse de aceptar números decimales con hasta dos decimales
    const valor = event.target.value.replace(/[^0-9.]/g, '');
    setPrecioProducto(valor);
  };

  const handleTipoProducto = (tipo) => {
    setTipoProducto(tipo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Calculadora de IVA</h2>
        <div className="mb-4">
          <label htmlFor="precio" className="block text-sm font-medium text-gray-700">
            Precio del Producto:
          </label>
          <input
            type="text"
            id="precio"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            value={precioProducto}
            onChange={handleChangePrecio}
            placeholder="Ingrese el precio"
          />
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Precio Total con IVA:</p>
          <p className="text-lg font-semibold text-green-600">${calcularPrecioConIVA()}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Precio Sugerido:</p>
          <p className="text-lg font-semibold text-green-600">${calcularPrecioSugerido()}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 ${
              tipoProducto === 'papeleria' ? 'bg-green-600' : ''
            }`}
            onClick={() => handleTipoProducto('papeleria')}
          >
            Papelería
          </button>
          <button
            className={`bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 ${
              tipoProducto === 'materias' ? 'bg-green-600' : ''
            }`}
            onClick={() => handleTipoProducto('materias')}
          >
            Materias Primas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Iva;
