import React, { useState } from 'react';

const CobroConTarjeta = ({ totalVenta }) => {
  const [montoCobrado, setMontoCobrado] = useState('');
  const porcentajeComision = 3.5; // Porcentaje de comisión para cobro con tarjeta
  const porcentajeComisionMeses = 4.69; // Porcentaje de comisión para cobro a meses
  const iva = 0.16; // IVA

  const handleInputChange = (e) => {
    setMontoCobrado(e.target.value);
  };

  const calcularTotalCobrado = () => {
    if (montoCobrado) {
      const montoBruto = parseFloat(montoCobrado);
      const comision = (montoBruto * porcentajeComision) / 100;
      const ivaComision = comision * iva;
      const totalConComisionYIva = montoBruto + comision + ivaComision;
      return totalConComisionYIva.toFixed(2);
    }
    return '';
  };

  const calcularTotalCobradoMeses = () => {
    if (montoCobrado) {
      const montoBruto = parseFloat(montoCobrado);
      const comision = (montoBruto * porcentajeComisionMeses) / 100;
      const ivaComision = comision * iva;
      const totalConComisionYIva = montoBruto + comision + ivaComision;
      return totalConComisionYIva.toFixed(2);
    }
    return '';
  };

  return (
    <div className="mt-6 p-6 bg-green-100 dark:bg-green-900 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-4">Cobro con Tarjeta</h2>
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold text-green-700 dark:text-green-300">Monto Cobrado:</span>
        <input 
          type="number" 
          step="0.01" 
          min="0" 
          value={montoCobrado} 
          onChange={handleInputChange} 
          className="p-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-1/2"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold text-green-700 dark:text-green-300">Total Cobrado (con 3.5% + IVA):</span>
        <span className="text-lg font-semibold text-green-700 dark:text-green-300">${calcularTotalCobrado()}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold text-green-700 dark:text-green-300">Total Cobrado a Meses (con 4.69% + IVA):</span>
        <span className="text-lg font-semibold text-green-700 dark:text-green-300">${calcularTotalCobradoMeses()}</span>
      </div>
    </div>
  );
};

export default CobroConTarjeta;
