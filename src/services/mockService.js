/* back end */
import products from "../data/data.js";

export function GetItems(idCategory) {
  return new Promise((resolve) => {
    if (idCategory === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      setTimeout(() => {
        let itemsFilter = products.filter(
          (item) => item.category === idCategory
        );
        resolve(itemsFilter);
      }, 500);
    }
  });
}
export function getSingleItem(idParam) {
  return new Promise((resolve, reject) => {
    let itemFind = products.find((item) => item.id === Number(idParam));
    if (itemFind === undefined) reject("El producto no existe");

    setTimeout(() => {
      resolve(itemFind);
    }, 500);
  });
}

export default GetItems;