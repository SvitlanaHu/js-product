
import { getCart } from "./local-storage";


const numberOfProducts = document.querySelector('.numbers-of-products');


function getNumberOfProducts() {
  const lsData = getCart();
  numberOfProducts.textContent = lsData.length;
}

getNumberOfProducts()
