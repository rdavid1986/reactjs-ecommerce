/* back end */
import products from "../data/data.js";

function GetItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

export default GetItems;
