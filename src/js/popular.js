import axios from 'axios';
import icons from '../img/icone/symbol-defs.svg';
const popularProductsURL =
  'https://food-boutique.b.goit.study/api/products/popular';

function renderPopularProducts(products) {
  const productList = document.querySelector('.popular-product-list');

  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.classList.add('popular-product-item');

    listItem.innerHTML = `
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${product.img}" alt="${product.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${product.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${product.category}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${product.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${product.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="'${icons}'#icon-heroicons-solid_shopping-cart-18x18 "></use>
         </svg></button>
        </a>
    `;

    productList.appendChild(listItem);
  });
}

async function fetchPopularProducts() {
  try {
    const response = await axios.get(popularProductsURL);
    return response.data; // Повертаємо список популярних продуктів з відповіді
  } catch (error) {
    console.error('Error fetching popular products:', error);
    throw error; // Обробка помилки, якщо запит не вдалося виконати
  }
}

// Викликаємо функцію для отримання списку популярних продуктів
fetchPopularProducts()
  .then(popularProducts => {
    // Рендеримо список популярних продуктів
    renderPopularProducts(popularProducts);
  })
  .catch(error => {
    console.error('Error:', error);
    // Тут можна обробити помилку, якщо отримання популярних продуктів не вдалося
  });