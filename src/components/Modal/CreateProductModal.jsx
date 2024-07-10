import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from '../../services/productServices';

const CreateProductModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    product_name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProduct = {
        product_name: formData.product_name,
        description: formData.description,
        price: parseFloat(formData.price)
      };

      await addProduct(newProduct);
      onClose(); // Cierra el modal después de agregar el producto exitosamente
      toast.success('Producto agregado exitosamente');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      toast.error('Hubo un error al agregar el producto');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-screen bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 dark:bg-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Agregar Producto</h3>
          <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="product_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre del Producto</label>
            <input type="text" id="product_name" name="product_name" value={formData.product_name} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-sm text-gray-800 dark:text-gray-200 bg-gray-200 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full px-3 py-2 mt-1 text-sm text-gray-800 dark:text-gray-200 bg-gray-200 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Precio</label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-sm text-gray-800 dark:text-gray-200 bg-gray-200 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500" required />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="flex items-center justify-center text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-800">Agregar Producto</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
