import icons from '../img/icone/symbol-defs.svg';
import { getProducts } from './products-api';
import { addToCart, getCart, getFilters, updateFilter, saveFilters } from './local-storage';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

// const mainProductCard = document.querySelector('.main-box');
const productsListContainer = document.getElementById('products-list-container');
// const formEl = document.querySelector('.search-form')

let pagination;

async function renderProducts() {
  let filters = getFilters();
  let page = filters.page || 1;
  let limit;

  if (window.innerWidth >= 1440) {
    limit = filters.limit = 9;
  } else if (window.innerWidth >= 768) {
    limit = filters.limit = 8;
  } else {
    limit = filters.limit = 6;
  }
    // localStorage.setItem('productFilters', JSON.stringify(filters));
    saveFilters(filters)
    try {
        const { data } = await getProducts(page, limit);
        const { perPage, totalPages, results } = data;
        const totalItems = perPage * totalPages;

       
    productsListContainer.innerHTML = createMarkup(results); // Оновлюємо тільки список продуктів

        const container = document.getElementById('tui-pagination-container');
        
        if (!pagination) {
            pagination = new Pagination(container, {
                totalItems: totalItems,
                itemsPerPage: limit,
                visiblePages: 4,
                centerAlign: true,
                page: page, // Важливо: встановлення поточної сторінки
            });

            pagination.on('beforeMove', event => {
              const currentPage = event.page;
              const currentFilters = getFilters();
              const newLimit = currentFilters.limit || 6; // Оновлення ліміту зі значенням за замовчуванням, якщо не встановлено
              if (currentPage !== currentFilters.page || newLimit !== currentFilters.limit) {
                  updateFilter('page', currentPage);
                  updateFilter('limit', newLimit); // Оновлення ліміту
                  renderProducts();
              }
          });
        } else {
            // Оновлення пагінації з новими даними
            pagination.reset(totalItems);
            pagination.movePageTo(page);
        }

        updateCartButtonIcons();
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

  return markup;
}

function handleCartButtonClick(product, arr) {
  const cart = getCart();
  const productInCart = cart.find(item => item._id === product._id);

  if (productInCart) {
    // Якщо продукт вже є у кошику, виведіть повідомлення і не додавайте його знову
    console.log('Product is already in the cart');
  } else {
    // Якщо продукт немає у кошику, додайте його
    addToCart(product);
    updateCartButtonIcons(arr);
  }
}

function updateCartButtonIcons(arr) {
  const cart = getCart();
  document.querySelectorAll('.cart-btn-list').forEach(button => {
    const productId = button.dataset.productId;
    const productInCart = cart.find(item => item._id === productId);

    if (productInCart) {
      button.innerHTML = `
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${icons}#icon-check"></use>
        </svg>
      `;
      button.disabled = true; // Заборонити кліки на кнопку
    } else {
      button.innerHTML = `
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `;
      button.disabled = false; // Дозволити кліки на кнопку
    }
  });
}

