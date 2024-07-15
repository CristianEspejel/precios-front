import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between items-center p-4">
      <button
        onClick={handlePrevious}
        className={`inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button
        onClick={handleNext}
        className={`inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
