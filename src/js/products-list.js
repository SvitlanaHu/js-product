import Swal from 'sweetalert2';
import { showLoader, hideLoader } from './loader.js';
import icons from '../img/icone/symbol-defs.svg';
import { getFilteredProducts, getProductById } from './products-api';
import {
  getFilters,
  updateFilter,
  updateCartButtonIcons,
  setCartButtonEventListeners,
} from './local-storage';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

const productsListContainer = document.getElementById('products-list-container');
const noSearchDivContainerElement = document.querySelector('.no-results-container');

let pagination;

window.addEventListener('resize', updatePageSize);

//викликаємо у renderProducts самою першою, щоб оновити розміри сторінки та перезаписати limits
function updatePageSize() {
  let limit;
  if (window.innerWidth >= 1440) {
    limit = 9;
  } else if (window.innerWidth >= 768) {
    limit = 8;
  } else {
    limit = 6;
  }
  const currentFilters = getFilters();
  if (currentFilters.limit !== limit) {
    updateFilter('page', 1);
    updateFilter('limit', limit); //оновлюємо ліміти, НЕ ВИДАЛЯТИ
    renderProducts()
  }
}

function removeAndRecreatePaginationContainer() {
  const container = document.getElementById('tui-pagination-container');
  if (container) {
    container.remove();
  }

  const newContainer = document.createElement('div');
  newContainer.id = 'tui-pagination-container';
  newContainer.className = 'tui-pagination';
  productsListContainer.after(newContainer);
}

export async function renderProducts() {
  updatePageSize();
  const filters = getFilters();
  let page = filters.page || 1;
  let limit = filters.limit || 6;
  showLoader();

  try {
    const response = await getFilteredProducts(filters);
    const { perPage, totalPages, results } = response.data;
    const totalItems = perPage * totalPages;

    if (results.length === 0) {
      noSearchDivContainerElement.classList.remove('visually-hidden');
      productsListContainer.innerHTML = '';
      //НЕ ВИДАЛЯТИ, забирає контейнер, коли в картках нічого не знайдено
      const containerPagination = document.getElementById('tui-pagination-container');
      containerPagination.classList.add('visually-hidden');
      return;
    }

    productsListContainer.innerHTML = createMarkup(results);
    noSearchDivContainerElement.classList.add('visually-hidden');
    results.forEach(product => {
      const productElement = document.querySelector(`[data-product-id="${product._id}"]`);
      productElement.addEventListener('click', () => fetchAndShowProductDetails(product._id, results));
    });
    setupPagination(totalItems, page, limit);
    setCartButtonEventListeners(results, '.cart-btn-list', icons);
    updateCartButtonIcons(results, '.cart-btn-list', icons);
  } catch (error) {
    console.error('Error fetching products', error);
  } finally {
    hideLoader();
  }
}

function setupPagination(totalItems, currentPage, itemsPerPage) {
  removeAndRecreatePaginationContainer();
  const container = document.getElementById('tui-pagination-container');
  if (totalItems > itemsPerPage) {
    const visiblePages = window.innerWidth < 768 ? 2 : 4;
    pagination = new Pagination(container, {
      totalItems,
      itemsPerPage,
      visiblePages,
      centerAlign: true,
      page: currentPage,
    });
    pagination.on('beforeMove', event => {
      updateFilter('page', event.page);
      renderProducts();
    });
  } else {
    //НЕ ВИДАЛЯТИ ЦЕЙ ELSE, бо хоч його візуально не видно, він займає місце на сторінці. Видаляємо контейнер зі сторінки, коли відмальовується лише 1 сторінка з картками
    container.classList.add('visually-hidden');
  }
}

export function createMarkup(arr) {
  return `<ul class="card-container-list">${arr
    .map(item => {
      const categoryWithoutUnderscore = item.category.split('_').join(' ');
      return `
        <li class="photo-card-list" data-product-id="${item._id}">
          <div class="img-container-list">
            <img class="product-image-list" src="${item.img}" alt="${item.name} photo" width=140 height=140 loading="lazy" />
          </div>
          <div class="product-info-list">
            <h2 class="product-name-list">${item.name}</h2>
            <div class='product-atributes-list'>
              <p class="atributes-info-list">
                <b class="atributes-list">Category:</b> ${categoryWithoutUnderscore}
              </p>
              <p class="atributes-info-list">
                <b class="atributes-list">Size:</b> ${item.size}
              </p>
              <p class="atributes-info-list">
                <b class="atributes-list">Popularity:</b> ${item.popularity}
              </p>
            </div>
            <div class="price-and-btn-list">
              <h2 class="product-price-list">$${item.price}</h2>
              <button class='cart-btn-list' type="button" data-product-id="${item._id}">
                <svg class="list-cart-svg-list" width="18" height="18">
                  <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
                </svg>
              </button>
            </div>
          </div>
        </li>`;
    })
    .join('')}</ul>`;
}

async function fetchAndShowProductDetails(productId, results) {
  try {
    showLoader();
    const product = await getProductById(productId);
    showProductDetails(product, results);
  } catch (error) {
    console.error('Error fetching product details:', error);
  } finally {
    hideLoader();
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
              <span class="modal-product-text">Category:</span> <span class="modal-product-value" >${ategoryWithoutUnderscoreModal}</span>
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

