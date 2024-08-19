import products from "./data.js"


// 1. Traer todos los documentos
export default async function getItems() {
  return products;
}

// 2. Traer un documento por ID
export async function getSingleItem(idParams) {
  const itemData = products.find(product => product.id === idParams);
  if (itemData){
      return itemData;
  } else {
    throw new Error("Producto no encontrado")
  }
}

// 3. Traer todos los documentos según categoría
export async function getItemByCategory(categoryParams) {
  const documentsData = products.filter( product => product.category === categoryParams);
  
  return documentsData;
}