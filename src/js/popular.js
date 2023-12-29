import axios from 'axios';
import icons from '../img/icone/symbol-defs.svg';
import {
  updateCartButtonIcons,
  setCartButtonEventListeners,
} from './local-storage';
import Swal from 'sweetalert2';
import { getProductById } from './products-api'

const POPULAR_URL = 'https://food-boutique.b.goit.study/api/products/popular';

async function fetchProducts() {
  try {
    const response = await axios.get(`${POPULAR_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular products:', error);
    throw error;
  }
}

function renderPopularProducts(products) {
  const productList = document.querySelector('.popular-product-list');

  if (productList) {
    products.forEach(product => {
      const listItem = document.createElement('li');
      listItem.classList.add('popular-product-item');

      const popularCategoryWithoutUnderscore = product.category
        .split('_')
        .join(' ');

      listItem.innerHTML = `
      <div class="popular-modal"  data-product-id="${product._id}">
      <div class="popular-img">
        <img class="popular-photo-item" src="${product.img}" alt="${product.name}" width="56" height="56" loading="lazy">
      </div>  
      <ul class="about-popular">
        <li class="name-popular-product">${product.name}</li>
        <li class="subname-popular-product">Category: <span class="id-subname">${popularCategoryWithoutUnderscore}</span></li>
        <li class="subname-popular-product">Size: <span class="id-subname">${product.size}</span></li>
        <li class="subname-popular-product">Popularity: <span class="id-subname">${product.popularity}</span></li>
      </ul>
      <button class='popular-cart-btn' type="button" data-product-id="${product._id}">
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      </button>
    </div>
    
      `;
      productList.appendChild(listItem);
    });
  }
  products.forEach(product => {
    const productElement = document.querySelector(`[data-product-id="${product._id}"]`);
    productElement.addEventListener('click', () => fetchAndShowProductDetails(product._id, products));
  });
  updateCartButtonIcons(products, '.popular-cart-btn', icons);
  setCartButtonEventListeners(products, '.popular-cart-btn', icons);
  
}

fetchProducts()
  .then(popularProducts => {
    renderPopularProducts(popularProducts);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  async function fetchAndShowProductDetails(productId, products) {
    try {
      const product = await getProductById(productId);
      showProductDetails(product, products);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }
  function showProductDetails(product, results) {
    const categoryWithoutUnderscoreModal = product.category.split('_').join(' ');
    
    Swal.fire({
      html: `
        <div class="modal-product-container">
          <div class="modal-image-container">
            <img class="modal-img" src="${product.img}" alt="${product.name}">
          </div>
          <div class="modal-product-info">
            <h2 class="modal-product-title">${product.name}</h2>
            <div class="modal-product-main-info">
              <p class="text-box">
                <span class="modal-product-text">Category:</span> <span class="modal-product-value">${categoryWithoutUnderscoreModal}</span>
              </p>
              <p class="text-box">
                <span class="modal-product-text">Size:</span> <span class="modal-product-value">${product.size}</span>
              </p>
              <p class="text-box">
                <span class="modal-product-text">Popularity:</span> <span class="modal-product-value">${product.popularity}</span>
              </p>
            </div>
            <p id="modal-product-description" class="modal-product-description">${product.desc}</p>  
          </div>
        </div>
        <div class="modal-price-button-container">
          <p class="modal-product-price">$${product.price}</p>
          <button class='modal-add-to-cart-btn' type="button" data-product-id="${product._id}">
           Add to <span class="modal-button-text">Add to</span> 
            <svg class="modal-add-to-cart-svg" width="18" height="18">
              <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${icons}#icon-close-sharp"></use>
        </svg>
      `,
      showConfirmButton: false,
      customClass: {
        container: 'custom-swal',
      },
    });
  
    setCartButtonEventListeners(results, '.modal-add-to-cart-btn', icons);
    updateCartButtonIcons(results, '.modal-add-to-cart-btn', icons);
    document.querySelector('.custom-close-icon').addEventListener('click', () => {
      Swal.close();
    });
  }
  