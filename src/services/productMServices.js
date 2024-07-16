const apiUrl = 'http://localhost:8080/products/materias'; // URL base de tu API para la categoría 'materias'
// const apiUrl = 'https://precios-back-production.up.railway.app/products/materias';
// Obtener todos los productos de materias
export const getAllProduct = () => {
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los productos: ' + response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error en la función getAllProduct:', error);
      throw error;
    });
};

// Agregar un nuevo producto de materias
export const addProduct = (newProduct) => {
  return fetch(`${apiUrl}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al agregar el producto: ' + response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error en la función addProduct:', error);
      throw error;
    });
};

// Editar un producto de materias existente
// export const editProduct = (productId, updatedProduct) => {
//   return fetch(`${apiUrl}/edit/${productId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(updatedProduct)
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Error al actualizar el producto: ' + response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error('Error en la función editProduct:', error);
//       throw error;
//     });
// };


export const editProduct = (productId, updatedProduct) => {
  return fetch(`http://localhost:8080/prices/papeleria/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedProduct)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al actualizar el producto: ' + response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error en la función editProduct:', error);
      throw error;
    });
};

// Eliminar un producto de materias
export const deleteProduct = (productId) => {
  return fetch(`${apiUrl}/delete/${productId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al eliminar el producto: ' + response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error en la función deleteProduct:', error);
      throw error;
    });
};
