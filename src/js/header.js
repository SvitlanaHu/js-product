import { addToCart } from "./local-storage";
import { getCart } from "./local-storage";

const headerCart = document.querySelector('.cart-btn')
const allContentWrap = document.querySelector('.all-content-wrap');
const numberOfProducts = document.querySelector('.js-number-of-products');
const cartAmount = document.querySelector('.js-cart-amount');
const orderForm = document.querySelector('.order-form');


function getNumberOfProducts() {
  const lsData = getCart();
  numberOfProducts.textContent = lsData.length;
}

