/* back end */
import products from "../data/data.js";

function GetItems(categoryId) {
  return new Promise((resolve) => {
    if (categoryId === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      setTimeout(() => {
        let itemsFilter = products.filter(
          (item) => item.category === categoryId
        );
        resolve(itemsFilter);
      }, 2000);
    }
  });
}
export function getSingleItem(idParam){
  return new Promise((resolve, reject) => {
    let itemFind = products.find((item) => item.id === Number(idParam));
    if (itemFind === undefined) reject("El producto no existe");

    setTimeout(() => {
      resolve(itemFind);
    }, 2000);
  })
}

export default GetItems;
