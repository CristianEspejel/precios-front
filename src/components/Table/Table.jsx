import React from 'react';
import iconDelete from '../../assets/delete.png';
import iconEdit from '../../assets/edit.png';

const Table = ({ products, onEdit, onDelete, startIndex }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">No.</th>
          <th scope="col" className="px-4 py-3">Nombre del Producto</th>
          <th scope="col" className="px-4 py-3">Descripción</th>
          <th scope="col" className="px-4 py-3">Precio</th>
          <th scope="col" className="px-4 py-3">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-4 py-3">{startIndex + index}</td> {/* Numeración secuencial */}
            <td className="px-4 py-3">{product.product_name}</td>
            <td className="px-4 py-3">{product.description}</td>
            <td className="px-4 py-3">{product.price}</td>
            <td className="px-4 py-3 flex flex-row items-center">
              <img
                src={iconEdit}
                alt="icono para editar"
                className="w-6 cursor-pointer"
                onClick={() => onEdit(product)}
              />
              <img
                src={iconDelete}
                alt="icono para eliminar"
                className="w-6 cursor-pointer ml-2"
                onClick={() => onDelete(product.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
