import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import AddButton from '../components/AddButton/AddButton';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import CreateItemModal from '../components/Modal/CreateProductModal';
import UpdateItemModal from '../components/Modal/UpdateProductModal';
import { getAllProduct, addProduct, editProduct, deleteProduct } from '../services/productMServices';

const Materias = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProduct();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const openUpdateModal = (product) => {
    setCurrentProduct(product);
    setIsUpdateModalOpen(true);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    // <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 sm:ml-64">
    //   <div className="mx-auto px-4 lg:px-12">
    //     <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
    //       <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
    //         <div className="w-full md:w-1/2">
    //           <SearchBar onSearch={handleSearch} />
    //         </div>
    //         <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
    //           <AddButton onClick={openCreateModal} />
    //         </div>
    //       </div>
    //       <Table products={products} onEdit={openUpdateModal} onDelete={handleDeleteProduct} />
    //       <Pagination />
    //     </div>
    //   </div>

    //   {isCreateModalOpen && <CreateItemModal onClose={() => setIsCreateModalOpen(false)} onSave={fetchProducts} />}
    //   {isUpdateModalOpen && <UpdateItemModal product={currentProduct} onClose={() => setIsUpdateModalOpen(false)} onSave={fetchProducts} />}
    // </section>
    <></>
  );
};

export default Materias;

