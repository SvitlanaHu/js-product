import './header';
import icons from '../img/icone/symbol-defs.svg';
import { getCart, clearCart, saveCart } from './local-storage';
import axios from 'axios';
import { updateCartCount } from "./local-storage";
import './modal-window';

const BASE_URL = 'https://food-boutique.b.goit.study/api/orders ';

const orderForm = document.querySelector('.order-form');
const imageForModal = document.querySelector(".image-container-modal-cart");
const openCartModal = document.querySelector(".order-btn-submit");
const closeCartModal = document.querySelector(".close-svg");
const cartModal = document.querySelector(".checkout-modal");

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
modalImage();

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
      const categoryWithoutUnderscore = category.split('_').join(' ');
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
                  >&nbsp;&nbsp;${categoryWithoutUnderscore}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${size}
                </p>
              </div>
              <p class="cart-item-price">$${price}</p>
            </div>
          </div>
        </li>`;
    })
    .join('');

  return (refs.cartProductList.innerHTML = markup);
}

// Кнопка видалення усіх продуктів
refs.deleteAllBtn.addEventListener('click', deleteProducts)

function deleteProducts() {
  refs.cartProductList.innerHTML = '';
  clearCart();
  countTotalPrice();
  getNumberOfProducts();
  refs.cartMainContainer.hidden = true;
  refs.emptyBasketContent.hidden = false;
  refs.emptyBasketWrap.style.display = 'block';
}

function countTotalPrice() {
  const lsData = getCart();

  const totalPrice = lsData.reduce(
    (acc, { price, quantity }) => (acc += price * quantity),
    0
  );
  refs.cartTotalPrice.textContent = totalPrice.toFixed(2);
  updateCartCount();
}

// ================================================

async function onOrderFormSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value;

  if (!email) {
    alert('Please, write your email!');
    return;
  }
  // postProductApi(email);
  checkOnValidateEmail(email);
  evt.currentTarget.reset();

    //Відправляємо озамовлення на сервер
  const productsInCart = getCart();
  const productsData = productsInCart.map(({ _id }) => ({
    productId: _id,
    amount: 1,
  }));

  const orderData = {
    email,
    products: productsData,
  };
try {
  // Відкрити модальне вікно
function openModal(){
    document.getElementById("my-modal").classList.add("open")
  }
  const openModalBtn = document.getElementById('open-modal-btn')
  openModalBtn.addEventListener("click", openModal);
  const response = await fetch('https://food-boutique.b.goit.study/api/orders', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
  });

// Додаємо обробник подій на елемент з id "open-modal-btn"
  if (response.ok) {
    openModal()
    clearCart();
    deleteProducts()
    updateCartCount()
  } else if (response.status === 400) {
    // Обробка помилок "Bad Request"
    const errorData = await response.json();
    alert('Bad request: ' + errorData.message);
  } else if (response.status === 404) {
    // Обробка помилок "Not Found"
    alert('Resource not found.');
  } else if (response.status === 500) {
    // Обробка помилок "Server Error"
    alert('Server error. Please try again later.');
  } else {
    // Інші невизначені помилки
    throw new Error('Failed to subscribe.');
}
  } catch (error) {
  alert('Error: ' + error.message);
}
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

closeCartModal.addEventListener("click", function () {
  cartModal.classList.remove("open");
})

function modalImage() {
  const arrayForImage = getCart();

  takeImage(arrayForImage);
}

function takeImage(arr) {
  if (arr.length === 1) {
    const imageForModal = 
  }
}

<svg class="success-svg" width="140" height="140">
      <use
        href="./img/icone/symbol-defs.svg#icon-order-placed-purchased-icon"
      ></use>
    </svg>