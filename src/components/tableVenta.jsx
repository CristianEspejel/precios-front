import React from 'react';

const TableVenta = ({ products, onAddToVenta }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">Nombre del Producto</th>
          <th scope="col" className="px-4 py-3">Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr 
            key={product.id} 
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" 
            onClick={() => onAddToVenta(product)}
          >
            <td className="px-4 py-3">{product.product_name}</td>
            <td className="px-4 py-3">${product.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableVenta;
