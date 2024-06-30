import React from 'react';

const Pagination = () => (
  <div className="flex justify-between items-center p-4">
    <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
      Anterior
    </button>
    <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
      Siguiente
    </button>
  </div>
);

export default Pagination;
