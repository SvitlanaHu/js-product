// import {
//    createMarkup } from './js/products-list';
// import { renderCartProducts } from './js/cart-page';
// import { getProducts } from './js/products-api.js';
// import { getCart  } from './js/local-storage';

// const modalCartByBuy = document.querySelector('.modal-cart'); // to modal-cart.js

// export function displayByBuyModal() {
//   modalCartByBuy.classList.remove('is-hidden');
//   document.body.style.overflow = 'hidden';
// }

// const createNewOrder = async orderObj => {
//   const res = await axios.post(`${BASE_URL}orders/`, orderObj);
//   return await res.data;
// };

// const showError = message => {
//   swal('Error!', `${message}`, {
//     className: 'swal-red',
//     icon: 'error',
//     buttons: false,
//     timer: 5000,
//   });
// };

// const containerFull = document.querySelector('.container_full_cart');
// const handleCart = event => {
//   if (event.target.classList.contains('close-button')) {
//     const clickedButton = event.target.closest('.delete-product-button');
//     deleteProductAndUpdateCart(clickedButton.id);
//     createMarkup();
//     calculationTotalPrice();
//   }

//   if (
//     event.target.classList.contains('delete-all-btn') ||
//     event.target.classList.contains('delete-all-btn-icon')
//   ) {
//     deleteAllFromCart();
//   }
// };

// if (JSON.parse(localStorage.getItem('shoppingCart')).length) {
//   containerFull.addEventListener('click', handleCart);
// }

// function updateCartFromLocalStorage() {
//   const productsNumber = JSON.parse(
//     localStorage.getItem('shoppingCart')
//   ).length;
//   const quantityCart = document.querySelector('.quantity_products');
//   const quantityInCart = document.querySelector('.cart-span');
//   quantityCart.textContent = '(' + productsNumber + ')';
//   if (JSON.parse(localStorage.getItem('shoppingCart')).length) {
//     quantityInCart.textContent = '(' + productsNumber + ')';
//   }
// }

// updateCartFromLocalStorage();

// function deleteProductAndUpdateCart(productId) {
//   let productsArr =
//     JSON.parse(localStorage.getItem('shoppingCart')) || [];
//   const indexToDelete = productsArr.findIndex(
//     product => product._id === productId
//   );
//   if (indexToDelete !== -1) {
//     productsArr.splice(indexToDelete, 1);
//     localStorage.setItem('shoppingCart', JSON.stringify(productsArr));
//     createMarkup();
//     updateCartFromLocalStorage();
//   }
// }

// function deleteAllFromCart() {
//   localStorage.setItem('shoppingCart', JSON.stringify([]));
//   updateCartFromLocalStorage();
//   renderCartProducts();
// }

// function calculationTotalPrice() {
//   const objectProducts =
//     JSON.parse(localStorage.getItem('shoppingCart')) || [];
//   const totalPrice = objectProducts.reduce((acc, product) => {
//     return acc + product.price;
//   }, 0);
//   if (JSON.parse(localStorage.getItem('shoppingCart')).length) {
//     const totalPriceProducts = document.querySelector('.cart_total_cost');
//     totalPriceProducts.textContent = `$ ${totalPrice.toFixed(2)}`;
//   }
// }
// calculationTotalPrice();

// const cartBtnSubmit = document.querySelector('.cart_form_button');

// if (JSON.parse(localStorage.getItem('shoppingCart')).length) {
//   cartBtnSubmit.addEventListener('click', makeOrder);
// }

// async function makeOrder() {
//   const emailInputValue = document.querySelector('.cart_form_input').value;
//   const objectProducts = JSON.parse(localStorage.getItem('shoppingCart'));
//   const orderData = objectProducts.map(product => {
//     return {
//       productId: product._id,
//       amount: product.amount,
//     };
//   });

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(emailInputValue)) {
//     showError('Please, enter valid Email!');
//     return;
//   }

//   const requestObj = {
//     email: emailInputValue,
//     products: orderData,
//   };
//   try {
//     const response = await createNewOrder(requestObj);
//     deleteAllFromCart();
//     displayByBuyModal(response);
//   } catch (error) {
//     console.error('Error creating order:', error);
//     showError('Error creating order. Please try again later.');
//   }
// }
