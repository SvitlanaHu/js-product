import icons from '/img/icone/symbol-defs.svg';
import basket_1 from '../img/basket_1x.png';
import basket_2 from '../img/basket_2x.png';
import { createMarkup } from './products-list';

export const cartFullMarkup = document.querySelector('.cart');

export const renderCartProducts = () => {
  const productsArr =
    JSON.parse(localStorage.getItem('shoppingCart')) || [];
  if (productsArr.length > 0) {
    cartFullMarkup.innerHTML = '';
    cartFullMarkup.insertAdjacentHTML('afterbegin', createMarkup(productsArr));
    createMarkup();
  } else {
    cartFullMarkup.innerHTML = '';
    const cartContainer = document.querySelector('.cart');
    cartContainer.innerHTML += `<div class="container">
    <div class="empty-basket">
      <div class="basket_container">
        <ul class="basket_list">
        <span class="cart-page-shop-icon"
          <li class="basket_item">
            <svg class="" width="18" height="18">
            <use
            href="${icons}#icon-heroicons-solid_shopping-cart-18x18"
          ></use>            </svg>
          </span>
          </li>
          <li class="basket_item">
            <p class="basket_text">Cart&nbsp;<span class="basket_span">(0)</span></p>
          </li>
        </ul>
      </div>
      <img
        class="basket_img"
        srcset="${basket_1}, ${basket_2}"
        src="${basket_1}"
        alt="yellow shopping basket"
        width="132"
        height="114"
      />
      <div class="basket_container_text">
        <h3 class="basket_title">
          Your basket is <span class="basket_title_span">empty...</span>
        </h3>
        <p class="basket-text">
          Go to the main page to select your favorite products and add them to the
          cart.
        </p>
      </div>
    </div>
  </div>`;
  }
};

renderCartProducts();
