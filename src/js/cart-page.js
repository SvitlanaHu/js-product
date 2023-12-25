import icons from '../img/icone/symbol-defs.svg';
import { getCart, clearCart, saveCart } from './local-storage';
import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/orders ';

const refs = {
  cartProductList: document.querySelector('.js-cart-list'),
  deleteAllBtn: document.querySelector('.js-delete-all-btn'),
  emptyBasketContent: document.querySelector('.empty-basket-content'),
  emptyBasketWrap: document.querySelector('.empty-basket-wrap'),
  cartMainContainer: document.querySelector('.main-content-with-delete-all'),
  numberOfProducts: document.querySelector('.js-number-of-products'),
  cartTotalPrice: document.querySelector('.js-cart-amount'),
  orderForm: document.querySelector('.order-form'),
};

renderCartMarkup();
getNumberOfProducts();

refs.cartProductList.addEventListener('click', onClickDeleteProduct);

function renderCartMarkup() {
  const lsData = getCart();

  if (!lsData.length) {
    refs.emptyBasketContent.hidden = false;
    return;
  }

  renderCartTpl(lsData);
  refs.cartMainContainer.hidden = false;
  refs.emptyBasketWrap.style.display = 'none';

  countTotalPrice();
  refs.orderForm.addEventListener('submit', onOrderFormSubmit);
}

function getNumberOfProducts() {
  const lsData = getCart();
  refs.numberOfProducts.textContent = lsData.length;
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
  countTotalPrice();
}

function checkLS() {
  const lsData = getCart();
  if (!lsData.length) {
    refs.cartMainContainer.hidden = true;

    refs.emptyBasketContent.hidden = false;
    refs.emptyBasketWrap.style.display = 'block';
    refs.cartProductList.innerHTML = '';
  }
}

// Розмітка cartProductList
function renderCartTpl(arr) {
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

  return (refs.cartProductList.innerHTML = markup);
}

// Кнопка видалення усіх продуктів
refs.deleteAllBtn.addEventListener('click', () => {
  refs.cartProductList.innerHTML = '';
  clearCart();
  countTotalPrice();
  getNumberOfProducts();
  refs.cartMainContainer.hidden = true;
  refs.emptyBasketContent.hidden = false;
  refs.emptyBasketWrap.style.display = 'block';
});

function countTotalPrice() {
  const lsData = getCart();

  const totalPrice = lsData.reduce(
    (acc, { price, quantity }) => (acc += price * quantity),
    0
  );
  refs.cartTotalPrice.textContent = totalPrice.toFixed(2);
}

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
