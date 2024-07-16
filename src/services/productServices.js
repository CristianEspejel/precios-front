// ProductService.js

const apiUrl = 'http://localhost:8080/prices/papeleria'; // URL base de tu API para la categoría 'papeleria'
// const apiUrl = 'https://precios-back-production.up.railway.app/prices/papeleria';
// Obtener todos los productos de papelería
export const getAllProduct = () => {
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los precios: ' + response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error en la función getAllProduct:', error);
      throw error;
    });
};

// Agregar un nuevo producto de papelería
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

// Editar un producto de papelería existente
// export const editProduct = (productId, updatedProduct) => {
//   return fetch(`/edit/${productId}`, {
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
// export const editProduct = (productId, updatedProduct) => {
//   // const url = `${apiUrl}/edit/${productId}`;
//   // console.log('URL de actualización:', url); // Verificar la URL generada
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


// export const editProduct = (productId, updatedProduct) => {
//   return fetch(`http://localhost:8080/prices/papeleria/edit/${productId}`, {
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
// async function editProduct(productId, productData) {
//   try {
//       const response = await fetch(`http://localhost:8080/prices/papeleria/edit/${productId}`, {
//           method: 'PUT',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(productData),
//       });
//       if (!response.ok) {
//           throw new Error(`Error al actualizar el producto: ${response.status}`);
//       }
//       return await response.json();
//   } catch (error) {
//       console.error('Error en la función editProduct:', error);
//       throw error;
//   }
// }


// productServices.js

export const editProduct = (productId, updatedProduct) => {
  const url = `${apiUrl}/edit/${productId}`;
  console.log('URL de actualización:', url); // Verificar la URL generada
  console.log('Datos enviados:', updatedProduct); // Verificar los datos enviados
  return fetch(url, {
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





// Eliminar un producto de papelería
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
