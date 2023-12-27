import { showLoader, hideLoader } from './loader.js';
import icons from '../img/icone/symbol-defs.svg';
import { getFilteredProducts } from './products-api';
import {
  getFilters,
  updateFilter,
  updateCartButtonIcons,
  setCartButtonEventListeners,
} from './local-storage';

import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

const productsListContainer = document.getElementById(
  'products-list-container'
);
const noSearchDivContainerElement = document.querySelector(
  '.no-results-container'
);

let pagination;

// Обробка зміни розміру вікна
window.addEventListener('resize', updatePageSize);

// Функція для оновлення ліміту продуктів на сторінці
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
    updateFilter('limit', limit);
    updateFilter('page', 1); // Оновлення сторінки до першої
    renderProducts();
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
      const container = document.getElementById('tui-pagination-container');
      container.classList.add('visually-hidden');
      return;
    }

    productsListContainer.innerHTML = createMarkup(results);
    noSearchDivContainerElement.classList.add('visually-hidden');
    setCartButtonEventListeners(results, '.cart-btn-list', icons);
    setupPagination(totalItems, page, limit);
    updateCartButtonIcons(results, '.cart-btn-list', icons);
  } catch (error) {
    console.error('Error fetching products', error);
  }finally {
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
  }
}

export function createMarkup(arr) {
  return `<ul class="card-container-list">${arr
    .map(item => {
      const categoryWithoutUnderscore = item.category.split('_').join(' ');
      return `
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
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
                        </a>
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${item.price}</h2>
                            <button class='cart-btn-list' type="button" data-product-id="${item._id}">
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>

            </li>`;
    })
    .join('')}</ul>`;

    setTimeout(() => {
      document.querySelectorAll('.cart-btn-list').forEach(button => {
        button.addEventListener('click', (e) => {
          const productId = e.currentTarget.dataset.productId;
          const product = arr.find(item => item._id === productId);
          if (product) {
            handleCartButtonClick(product, arr);
          } else {
            console.error('Product not found for ID:', productId);
          }
        });
      });
    }, 0);


    setCartButtonEventListeners(arr); // Встановлення обробників подій після створення розмітки
    return markup;
}


