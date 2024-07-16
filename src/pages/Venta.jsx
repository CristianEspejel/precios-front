import React, { useState, useEffect } from 'react';
import { getAllProduct } from '../services/productServices';
import TableVenta from '../components/tableVenta';
import Pagination from '../components/Pagination/Pagination';
import CobroConTarjeta from '../components/CobroTrajeta'; // Importa el componente CobroConTarjeta
import addIcon from '../assets/add.png';
import minusIcon from '../assets/menos.png';

const RealizarVenta = () => {
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [totalVenta, setTotalVenta] = useState(0);
  const [montoPagado, setMontoPagado] = useState(0);
  const [cambio, setCambio] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Mostrar 5 productos por página

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const data = await getAllProduct();
      setProductos(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm) {
      const filtered = productos.filter(product => 
        product.product_name.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productos);
    }
  };

  const handleAddToVenta = (product) => {
    const existingProduct = productosSeleccionados.find(p => p.id === product.id);
    if (existingProduct) {
      const updatedProducts = productosSeleccionados.map(p =>
        p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setProductosSeleccionados(updatedProducts);
    } else {
      setProductosSeleccionados([...productosSeleccionados, { ...product, cantidad: 1 }]);
    }
    setTotalVenta(totalVenta + product.price);
  };

  const handleIncreaseCantidad = (id) => {
    const updatedProducts = productosSeleccionados.map(p =>
      p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
    );
    setProductosSeleccionados(updatedProducts);
    const product = productos.find(p => p.id === id);
    setTotalVenta(totalVenta + product.price);
  };

  const handleDecreaseCantidad = (id) => {
    const updatedProducts = productosSeleccionados.map(p =>
      p.id === id && p.cantidad > 0 ? { ...p, cantidad: p.cantidad - 1 } : p
    ).filter(p => p.cantidad > 0);
    setProductosSeleccionados(updatedProducts);
    const product = productos.find(p => p.id === id);
    setTotalVenta(totalVenta - product.price);
  };

  const handleChangeMontoPagado = (e) => {
    const valor = parseFloat(e.target.value);
    setMontoPagado(valor);
    const cambio = valor - totalVenta;
    setCambio(cambio >= 0 ? cambio : 0);
  };

  const handleClearVenta = () => {
    setProductosSeleccionados([]);
    setTotalVenta(0);
    setMontoPagado(0);
    setCambio(0);
  };

  const handleRemoveFromVenta = (id) => {
    const productToRemove = productosSeleccionados.find(p => p.id === id);
    if (productToRemove) {
      const updatedProducts = productosSeleccionados.filter(p => p.id !== id);
      setProductosSeleccionados(updatedProducts);
      setTotalVenta(totalVenta - (productToRemove.price * productToRemove.cantidad));
    }
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 sm:ml-64 mt-12">
      <div className="mx-auto px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <input 
                  type="text" 
                  placeholder="Buscar producto..." 
                  onChange={handleSearch} 
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <TableVenta products={paginatedProducts} onAddToVenta={handleAddToVenta} />
              <Pagination 
                currentPage={currentPage} 
                totalPages={Math.ceil(filteredProducts.length / productsPerPage)} 
                onPageChange={setCurrentPage} 
              />
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Productos Seleccionados</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="px-4 py-3">Producto</th>
                      <th className="px-4 py-3">Cantidad</th>
                      <th className="px-4 py-3">Precio Unitario</th>
                      <th className="px-4 py-3">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productosSeleccionados.map(product => (
                      <tr key={product.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                        <td className="px-4 py-3">{product.product_name}</td>
                        <td className="px-4 py-3">{product.cantidad}</td>
                        <td className="px-4 py-3">${product.price.toFixed(2)}</td>
                        <td className="px-4 py-3">
                          <button 
                            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                            onClick={() => handleDecreaseCantidad(product.id)}
                          >
                            <img src={minusIcon} alt="Disminuir cantidad" className="h-4 w-4" />
                          </button>
                          <button 
                            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 ml-2"
                            onClick={() => handleIncreaseCantidad(product.id)}
                          >
                            <img src={addIcon} alt="Aumentar cantidad" className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">Total Venta:</span>
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">${totalVenta.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">Monto Pagado:</span>
                  <input 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={montoPagado} 
                    onChange={handleChangeMontoPagado} 
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-1/2"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">Cambio:</span>
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">${cambio.toFixed(2)}</span>
                </div>
                <button 
                  className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  onClick={handleClearVenta}
                >
                  Cancelar Venta
                </button>
              </div>
            </div>
          </div>
          <CobroConTarjeta totalVenta={totalVenta} /> {/* Coloca el componente CobroConTarjeta aquí */}
        </div>
      </div>
    </section>
  );
};

export default RealizarVenta;
