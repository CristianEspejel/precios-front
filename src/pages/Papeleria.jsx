import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllProduct, deleteProduct, addProduct, editProduct } from '../services/productServices';
import CreateProductModal from '../components/Modal/CreateProductModal';
import UpdateProductModal from '../components/Modal/UpdateProductModal';
import DeleteConfirmationModal from '../components/Modal/DeleteComfirmationModal';
import SearchBar from '../components/SearchBar/SearchBar';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';

const Papeleria = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Filtered products:", filtered); // Agrega este console.log
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const fetchProducts = async () => {
    try {
      const data = await getAllProduct();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = (value) => {
    const searchQuery = value.toLowerCase(); // Convertir la búsqueda a minúsculas
  
    // Filtrar productos en función de la consulta de búsqueda
    const filtered = products.filter(product =>
      product.name && product.name.toLowerCase().includes(searchQuery)
    );
  
    // Actualizar los productos filtrados
    setFilteredProducts(filtered);
  };

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
    fetchProducts();
  };

  const handleAddProduct = async (newProductData) => {
    try {
      await addProduct(newProductData);
      fetchProducts();
      handleCloseCreateModal();
      toast.success('Producto agregado correctamente');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      toast.error('Hubo un error al agregar el producto');
    }
  };

  const openUpdateModal = (product) => {
    setCurrentProduct(product);
    setIsUpdateModalOpen(true);
  };

  const handleEditProduct = async (updatedProductData) => {
    try {
      await editProduct(currentProduct.id, updatedProductData);
      fetchProducts();
      setIsUpdateModalOpen(false);
      toast.success('Producto actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      toast.error('Hubo un error al actualizar el producto');
    }
  };

  const handleOpenDeleteModal = (productId) => {
    setDeleteProductId(productId);
  };

  const handleCancelDelete = () => {
    setDeleteProductId(null);
  };

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(deleteProductId);
      fetchProducts();
      setDeleteProductId(null);
      toast.success('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      toast.error('Hubo un error al eliminar el producto');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 sm:ml-64 mt-12">
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
          <Table products={filteredProducts} onEdit={openUpdateModal} onDelete={handleOpenDeleteModal} />
          <Pagination />
        </div>
      </div>

      {isCreateModalOpen && <CreateProductModal onClose={handleCloseCreateModal} onSave={handleAddProduct}/>}
      {isUpdateModalOpen && <UpdateProductModal product={currentProduct} onClose={() => setIsUpdateModalOpen(false)} onSave={handleEditProduct} />}
      {deleteProductId && <DeleteConfirmationModal onConfirm={handleDeleteProduct} onCancel={handleCancelDelete} />}
    </section>
  );
};

export default Papeleria;
