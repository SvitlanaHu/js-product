import icons from '../img/icone/symbol-defs.svg';
import { getCart, clearCart, saveCart } from './local-storage';
import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/orders ';

const cartProductList = document.querySelector('.js-cart-list');
const deleteAllBtn = document.querySelector('.js-delete-all-btn');
const allContentWrap = document.querySelector('.all-content-wrap');
const numberOfProducts = document.querySelector('.js-number-of-products');
const cartAmount = document.querySelector('.js-cart-amount');
const orderForm = document.querySelector('.order-form');
const imageForModal = document.querySelector(".image-container-modal-cart");
const openCartModal = document.querySelector(".order-btn-submit");
const closeCartModal = document.querySelector(".close-svg");
const cartModal = document.querySelector(".checkout-modal");

renderCartMarkup();
cartProductList.addEventListener('click', onClickDeleteProduct);
getNumberOfProducts();
modalImage();

function renderCartMarkup() {
  const arrSavedCart = getCart();

  allContentWrap.classList.add('is-visible-main-content');
  renderCartTpl(arrSavedCart);
  orderForm.addEventListener('submit', onOrderFormSubmit);
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
    cartProductList.innerHTML = '';
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
  cartProductList.innerHTML = '';
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

  const amount = lsData.reduce(
    (acc, { price, quantity }) => (acc += price * quantity),
    0
  );
  cartAmount.textContent = amount;
}

countTotalAmount();

// ================================================

function onOrderFormSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value;

  if (!email) {
    alert('Please, write your email!');
    return;
  }
  // postProductApi(email);
  checkOnValidateEmail(email);
  evt.currentTarget.reset();
}

function checkOnValidateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please, enter valid Email!');
    return;
  }

  cartModal.classList.add("open");
}

// // POST запит на API
// async function postProductApi(email) {
//   const [{ _id, quantity }] = getCart();

//   const formData = {
//     email: email,
//     products: [{ productId: _id, amount: quantity }],
//   };

//   const options = {
//     method: 'post',
//     data: formData,
//   };

//   try {
//     await axios(
//       `${BASE_URL}
// `,
//       options
//     );
//     cartProductList.innerHTML = '';
//     alert('Your order is accepted!');
//   } catch (error) {
//     console.error(error);
//   }
// }

closeCartModal.addEventListener("click", function () {
  cartModal.classList.remove("open");
})

function modalImage() {
  const arrayForImage = getCart();

  takeImage(arrayForImage);
}

function takeImage(arr) {
  const images = arr.map(({ img, name }) => ({ img, name }));
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  const modalImg = `<img src="${randomImage.img}" alt="${randomImage.name}" width="140" height="140">`;

  imageForModal.insertAdjacentHTML('beforeend', modalImg);
}
