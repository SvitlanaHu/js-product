import icons from '../img/icone/symbol-defs.svg';
import { getProducts } from './products-api';
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

const mainProductCard = document.querySelector('.main-box');
// const formEl = document.querySelector('.search-form')

async function renderProducts() {
  let page = 1;
  let limit;

  if (window.innerWidth >= 1440) {
    limit = 9;
  } else if (window.innerWidth >= 768) {
    limit = 8;
  } else {
    limit = 6;
  }

  try {
    const { data } = await getProducts(page, limit);
    console.log(data);
      const { perPage, totalPages, results } = data;
      const totalItems = perPage * totalPages;
    console.log(results);
    createMarkup(results);

    mainProductCard.innerHTML =
      createMarkup(results) +
      `
  <div id="tui-pagination-container" class="tui-pagination"></div>
</div>
`;

    const container = document.getElementById('tui-pagination-container');
    const pagination = new Pagination(container, {
      totalItems: totalItems,
      itemsPerPage: limit,
      visiblePages: 4,
      centerAlign: true,
    });
    pagination.on('change', page => {
      renderProducts(page);
    });
  } catch (error) {
    console.error('Error fetching products', error);
  }
}

// Call the renderProducts function to automatically render the first page on page load
renderProducts();

export function createMarkup(arr) {
  return `<ul class="card-container-list">${arr
    .map(item => {
      const categoryWithoutUnderscore = item.category.split('_').join(' ');
      return `
            <li class="photo-card-list">
                <a class="product-modal-list" href="МОДАЛЬНЕ ВІКНО">
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
                            <button class='cart-btn-list' type="button">          
                                <svg class="list-cart-svg-list" width="18" height="18">
                                    <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </li>
        `;
    })
    .join('')}

	 `;
}
