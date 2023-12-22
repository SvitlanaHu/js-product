import axios from 'axios';

/**
  |============================
  | API (але це не точно, бо тут чомусь одразу по алфавіту)
  |============================
*/
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export function getProducts(page, limit) {
    return axios.get(`${BASE_URL}`, {
        params: {
            page: page,
            limit: limit,
        },
    });
};

// getProducts(1, 6).then(data => console.log(data))
/**
  |============================
  | ОСНОВНИЙ КОД
  |============================
*/
const mainProductCard = document.querySelector('.main-container')
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
     const { results } = data;
     console.log(results);
     createMarkup(results)

     
    mainProductCard.innerHTML += createMarkup(results);
    
} catch (error) {
        console.error('Error fetching products', error);
      }
    }
  
    // Call the renderProducts function to automatically render the first page on page load
    renderProducts();
    
   function createMarkup(arr) {
    return `<div class="card-container-list">${arr.map(item => {
        const categoryWithoutUnderscore = item.category.split('_').join(' ');
        return `
            <div class="photo-card-list">
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
                                    <use href="./img/icone/symbol-defs.svg#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }).join('')}</div>`;
}
