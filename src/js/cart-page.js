import icons from '../img/icone/symbol-defs.svg';
import { getCart } from './local-storage';
import { clearCart } from './local-storage';
import { saveCart } from './local-storage';
// import axios from 'axios';

// const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

const cartProductList = document.querySelector('.js-cart-list');
const deleteAllBtn = document.querySelector('.js-delete-all-btn');
const allContentWrap = document.querySelector('.all-content-wrap');
const numberOfProducts = document.querySelector('.js-number-of-products');
const cartAmount = document.querySelector('.js-cart-amount');
const orderForm = document.querySelector('.order-form');

renderCartMarkup();
getNumberOfProducts();

function renderCartMarkup() {
  const arrSavedCart = getCart();
  allContentWrap.classList.add('is-visible-main-content');
  renderCartTpl(arrSavedCart);
  cartProductList.addEventListener('click', onClickDeleteProduct);
  // orderForm.addEventListener('submit', onOrderFormSubmit);
}

function onClickDeleteProduct(evt) {
  if (!evt.target.classList.contains('js-delete-product-btn')) {
    return;
  }

  const parent = evt.target.closest('.js-cart-item');
  const productId = parent.dataset.id;

  const productsCartInLS = getCart();
  const findProduct = productsCartInLS.filter(({ _id }) => productId !== _id);

  saveCart(findProduct);

  parent.style.display = 'none';

  getNumberOfProducts();

  checkLS();
  countTotalAmount();
}

function checkLS() {
  const lsData = getCart();
  if (!lsData.length) {
    allContentWrap.classList.replace(
      'is-visible-main-content',
      'is-hidden-main-content'
    );
  }
}

// Розмітка cartProductList
function renderCartTpl(arr) {
  if (!arr.length) {
    allContentWrap.classList.add('is-hidden-main-content');
    return;
  }

  const markup = arr
    .map(({ _id, name, img, category, price, size }) => {
      return `<li class="cart-item js-cart-item" data-id = ${_id}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${icons}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${img}"
                alt="${name}"
                width="100"
                height="100"
              />
              </div>
            </div>
            <div class="cart-item-descr">
              <h3 class="cart-item-title">${name}</h3>
              <div class="cart-text-wrap">
                <p class="cart-item-text">
                  <span class="cart-light-text">Category:</span
                  >&nbsp;&nbsp;${category}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${size}
                </p>
              </div>
              <p class="cart-item-price">${price}</p>
            </div>
          </div>
        </li>`;
    })
    .join('');

  return (cartProductList.innerHTML = markup);
}

// Кнопка видалення усіх продуктів
deleteAllBtn.addEventListener('click', () => {
  clearCart();
  getNumberOfProducts();
  allContentWrap.classList.replace(
    'is-visible-main-content',
    'is-hidden-main-content'
  );
});

function getNumberOfProducts() {
  const lsData = getCart();
  numberOfProducts.textContent = lsData.length;
}

function countTotalAmount() {
  const lsData = getCart();

  const amount = lsData.reduce((acc, { price }) => (acc += price), 0);
  cartAmount.textContent = amount;
}

countTotalAmount();

// ================================================

// function onOrderFormSubmit(evt) {
//   evt.preventDefault();
//   const email = evt.currentTarget.elements.email.value;

//   if (!email) {
//     alert('Please, write your email!');
//     return;
//   }
//   console.log(email);
//   console.log('Отправили заказ');
// }

// const createNewOrder = async orderObj => {
//   const res = await axios.post(`${BASE_URL}orders/`, orderObj);
//   return await res.data;
// };

// createNewOrder();
