import icons from '../img/icone/symbol-defs.svg';
import { getProducts } from './products-api';
import { addToCart, getCart, getFilters, updateFilter, removeFromCart} from './local-storage';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

const productsListContainer = document.getElementById('products-list-container');

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
    renderProducts();
  }
}

// Функція, яка викликається при кліку на кнопку додавання продукту до кошика
function handleCartButtonClick(productId, arr) {
  const cart = getCart();
  const productInCart = cart.find(item => item._id === productId);
  const product = arr.find(item => item._id === productId); // Знаходимо продукт у масиві

  if (productInCart) {
    // Якщо продукт вже є у кошику, видаляємо його з кошика
    removeFromCart(productId);
  } else if (product) {
    // Якщо продукт немає у кошику, але він існує в масиві, додаємо його
    addToCart(product);
  }
  updateCartButtonIcons(arr);
}

// Оновлення іконок кнопок кошика
function updateCartButtonIcons(arr) {
  const cart = getCart();
  document.querySelectorAll('.cart-btn-list').forEach(button => {
    const productId = button.dataset.productId;
    const productInCart = cart.find(item => item._id === productId);

    if (productInCart) {
      // Якщо продукт є у кошику, показуємо іконку з галочкою
      button.innerHTML = `
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${icons}#icon-check"></use>
        </svg>
      `;
    } else {
      // Якщо продукт немає у кошику, показуємо іконку кошика
      button.innerHTML = `
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `;
    }
  });
}

// Встановлення обробників подій на кнопки додавання до кошика
function setCartButtonEventListeners(arr) {
  document.querySelectorAll('.cart-btn-list').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.currentTarget.dataset.productId;
      handleCartButtonClick(productId, arr);
    });
  });
}

async function renderProducts() {
    const filters = getFilters();
    let page = filters.page || 1;
    let limit = filters.limit || 6;

    try {
        const { data } = await getProducts(page, limit);
        const { perPage, totalPages, results } = data;
        const totalItems = perPage * totalPages;

       
    productsListContainer.innerHTML = createMarkup(results); // Оновлюємо тільки список продуктів
    setCartButtonEventListeners(results); // Встановлення обробників подій на нові кнопки

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

    setCartButtonEventListeners(arr); // Встановлення обробників подій після створення розмітки
    return markup;
}


