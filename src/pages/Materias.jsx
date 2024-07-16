import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllProduct, deleteProduct, addProduct, editProduct } from '../services/productMServices';
import CreateMateriasModal from '../components/Modal/CreateMateriasModal';
import UpdateMateriasModal from '../components/Modal/UpdateMateriasModal';
import DeleteMateriasModal from '../components/Modal/DeleteMateriasModal';
import SearchBar from '../components/SearchBar/SearchBar';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';

const Materias = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Definir currentPage como estado inicial

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, products]);

  const fetchProducts = async () => {
    try {
      const data = await getAllProduct();
      setProducts(data);
      filterProducts(data); // Filtrar productos al obtenerlos
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filterProducts = (data = products) => {
    const filtered = data.filter(product =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered); // Actualizar lista de productos filtrados
  };

  const handleSearch = (value) => {
    setSearchQuery(value); // Actualizar consulta de búsqueda
  };

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true); // Abrir modal de creación
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false); // Cerrar modal de creación
    fetchProducts(); // Actualizar lista de productos al cerrar el modal
  };

  const handleAddProduct = async (newProductData) => {
    try {
      await addProduct(newProductData);
      fetchProducts(); // Actualizar lista de productos tras agregar uno nuevo
      handleCloseCreateModal(); // Cerrar modal de creación
      toast.success('Producto agregado correctamente');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      toast.error('Hubo un error al agregar el producto');
    }
  };

  const openUpdateModal = (product) => {
    setCurrentProduct(product);
    setIsUpdateModalOpen(true); // Abrir modal de actualización
  };

  const handleEditProduct = async (updatedProductData) => {
    try {
      await editProduct(currentProduct.id, updatedProductData);
      fetchProducts(); // Actualizar lista de productos tras editar uno
      setIsUpdateModalOpen(false); // Cerrar modal de edición
      toast.success('Producto actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      toast.error('Hubo un error al actualizar el producto');
    }
  };

  const handleOpenDeleteModal = (productId) => {
    setDeleteProductId(productId); // Establecer ID del producto a eliminar
  };

  const handleCancelDelete = () => {
    setDeleteProductId(null); // Limpiar ID del producto a eliminar
  };

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(deleteProductId);
      fetchProducts(); // Actualizar lista de productos tras eliminar uno
      setDeleteProductId(null); // Limpiar ID del producto a eliminar
      toast.success('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      toast.error('Hubo un error al eliminar el producto');
    }
  };

  // Cálculo de startIndex
  const productsPerPage = 5; // Definir la cantidad de productos por página
  const startIndex = (currentPage - 1) * productsPerPage + 1;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 sm:ml-26 mt-12">
      <div className="mx-auto px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button className='flex items-center justify-center text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-800' onClick={handleOpenCreateModal}>Agregar Producto</button>
            </div>
          </div>
          <Table products={filteredProducts} onEdit={openUpdateModal} onDelete={handleOpenDeleteModal} startIndex={startIndex} />
          <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredProducts.length / productsPerPage)} onPageChange={setCurrentPage} />
        </div>
      </div>

      {isCreateModalOpen && <CreateMateriasModal onClose={handleCloseCreateModal} onSave={handleAddProduct}/>}
      {isUpdateModalOpen && <UpdateMateriasModal product={currentProduct} onClose={() => setIsUpdateModalOpen(false)} onSave={handleEditProduct} />}
      {deleteProductId && <DeleteMateriasModal onConfirm={handleDeleteProduct} onCancel={handleCancelDelete} />}
    </section>
  );
};

export default Materias;
