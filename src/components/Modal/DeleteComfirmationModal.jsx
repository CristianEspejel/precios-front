import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  const handleConfirm = () => {
    onConfirm();
    toast.error('Producto eliminado correctamente', {
      autoClose: 3000,
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-md w-full">
        <p className="text-gray-900 dark:text-gray-200 text-lg font-semibold mb-4">¿Estás seguro de eliminar este producto?</p>
        <div className="flex justify-end">
          <button onClick={handleConfirm} className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Sí, eliminar</button>
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
