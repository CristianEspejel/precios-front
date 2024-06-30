import React, { useState } from 'react';

const CreateProductModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    product_name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar el producto
    console.log('Nuevo producto:', formData);
    onClose(); // Cierra el modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Producto</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={formData.product_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          {/* Agrega más campos aquí (precio, descripción, etc.) */}
          <button type="submit">Agregar</button>
        </form>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default CreateProductModal;
