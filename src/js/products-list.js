import icons from '../img/icone/symbol-defs.svg';
import { getProducts, getProductsKeyword, getProductsCategory } from './products-api';
import { getFilters, updateFilter, removeFromCart, handleCartButtonClick, updateCartButtonIcons, setCartButtonEventListeners} from './local-storage';

import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

const productsListContainer = document.getElementById('products-list-container');
const inputkeywordEl = document.getElementById('search-bar-id')
const formFiltersEl = document.getElementById('search-form')
const noSearchDivContainerElement = document.querySelector('.no-results-container')
// noSearchDivContainerElement.classList.remove('visually-hidden');

let page;
let pagination;
let query = null;

formFiltersEl.addEventListener('submit', onSubmit)

async function onSubmit(evt) {
  evt.preventDefault();
  updateFilter('page', 1);
  page = 1;
  const searchQuery = evt.target.elements['item-search-value'].value.trim();
  query = searchQuery;
if (!searchQuery) {
  productsListContainer.innerHTML='';  

  return console.log('Please enter a search query.');
} try {
  await renderProducts(searchQuery);
} catch(error) {
 console.log('Oops! Something went wrong! Try reloading the page!')    
}
}

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
    container.remove(); // Видалення контейнера пагінації
  }

  // Створення нового контейнера пагінації
  const newContainer = document.createElement('div');
  newContainer.id = 'tui-pagination-container';
  newContainer.className = 'tui-pagination';
  productsListContainer.after(newContainer); // Додавання після контейнера з продуктами
}

async function renderProducts() {
    const filters = getFilters();
    let page = filters.page || 1;
    let limit = filters.limit || 6;

    try {
      noSearchDivContainerElement.classList.add('visually-hidden')
      const { data } = await getProductsKeyword(page, limit, query);
      const { perPage, totalPages, results } = data;
      const totalItems = perPage * totalPages;
      if (results.length === 0) { 
        removeAndRecreatePaginationContainer()
        console.log(results);
        noSearchDivContainerElement.classList.remove('visually-hidden')
        productsListContainer.innerHTML=''; 
          console.log('nothing');
          return;

      }
    productsListContainer.innerHTML = createMarkup(results); // Оновлюємо тільки список продуктів
    noSearchDivContainerElement.classList.add('visually-hidden')
    
    setCartButtonEventListeners(results, '.cart-btn-list', icons); // Використання уніфікованої функції

    removeAndRecreatePaginationContainer();

    const container = document.getElementById('tui-pagination-container');
     // Визначення кількості видимих сторінок на основі ширини екрану
     const visiblePages = window.innerWidth < 768 ? 2 : 4; // За замовчуванням 4, якщо ширина екрану більша за 768
     if (totalPages === 1) {
      removeAndRecreatePaginationContainer();
     } else {
    pagination = new Pagination(container, {
      totalItems: totalItems,
      itemsPerPage: limit,
      visiblePages: visiblePages,
      centerAlign: true,
      page: page,
    });
  }


    pagination.on('beforeMove', event => {
              const currentPage = event.page;
              const currentFilters = getFilters();
              const newLimit = currentFilters.limit || 6;
              if (currentPage !== currentFilters.page || newLimit !== currentFilters.limit) {
                  updateFilter('page', currentPage);
                  updateFilter('limit', newLimit);
                  renderProducts();
              }
            });

    updateCartButtonIcons(results, '.cart-btn-list', icons); // Використання уніфікованої функції
  } catch (error) {
    console.error('Error fetching products', error);
  }
}


renderProducts();

export function createMarkup(arr) {
  const markup = `<ul class="card-container-list">${arr
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
                                    <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `;
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