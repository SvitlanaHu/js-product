import axios from 'axios';
import icons from '../img/icone/symbol-defs.svg';
import { updateCartButtonIcons, setCartButtonEventListeners } from './local-storage';
import Swal from 'sweetalert2';
import { getProductById } from './products-api'
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';


document.addEventListener("DOMContentLoaded", function () {
    const discountProductsContainer = document.getElementById("discount-products");
    const paginationContainer = document.getElementById('pagination');


    async function fetchDiscountProducts(page) {
        try {
            const respone = await axios.get('https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`');
            const discountProducts = respone.data;
            // console.log(discountProducts);

            discountProductsContainer.innerHTML = '';

            // Вибірка тільки 2 продуктів для відображення
            // const productsToDisplay = discountProducts.slice(0, 2);

            // productsToDisplay.forEach(product => {
            //     const card = createProductCard(product);
            //     console.log(product);
            //     discountProductsContainer.innerHTML += card;
            // });
            discountProducts.forEach(product => {
                const card = createProductCard(product)
                
                discountProductsContainer.innerHTML += card;
            });
            discountProducts.forEach(product => {
                const productElement = document.querySelector(`[data-product-id="${product._id}"]`);
                productElement.addEventListener('click', () => fetchAndShowProductDetails(product._id, discountProducts));
              });
            updateCartButtonIcons(discountProducts, '.cart-btn-list-discount', icons); // Використання уніфікованої функції
            setCartButtonEventListeners(discountProducts, '.cart-btn-list-discount', icons); // Використання уніфікованої функції
        } catch (error) {
            console.error('Error fetching discount products:', error);
        }
    }

    fetchDiscountProducts();

    function createProductCard(product) {
        const longText = product.name;
        const maxLength = 12;
        const screenWidth = window.innerWidth;
        const shouldShowFullText = longText.length > maxLength && screenWidth >= 1440;
        const truncatedText = truncateText(longText, maxLength);
           return `
        <li class="card-container-list-discount" id="${product._id}" data-product-id="${product._id}">
        <div class="photo-card-list-discount">
                <div class="product-modal-list-discount">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${icons}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${product.img}" alt="${product.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${shouldShowFullText ? ' show-full-text' : ''}" title="${shouldShowFullText ? longText : ''}">${truncatedText}</h2>
                        <h2 class="price-discount">$${product.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${product._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `
    }

// Якщо довжина h2 більша maxLength, то додаємо ... і текст виводимо під курсором для екранів від 1440px
    function truncateText(text, maxLength) {
        const screenWidth = window.innerWidth;
        return screenWidth >= 1440 && text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }


})

const discountProductsContainer = document.getElementById("discount-products");

discountProductsContainer.addEventListener("mouseover", function () {
    discountProductsContainer.style.overflowY = "auto";
});
discountProductsContainer.addEventListener("mouseout", function () {
    discountProductsContainer.style.overflowY = "hidden";
});

async function fetchAndShowProductDetails(productId, discountProductsContainer) {
    try {
      const product = await getProductById(productId);
      showProductDetails(product, discountProductsContainer);
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
            <img src="${product.img}" alt="${product.name}">
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
            Add to 
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
      didOpen: (element) => {
        new SimpleBar(element.querySelector('.modal-product-description'));
      }
    });
    
    setCartButtonEventListeners(results, '.modal-add-to-cart-btn', icons);
    updateCartButtonIcons(results, '.modal-add-to-cart-btn', icons);
    document.querySelector('.custom-close-icon').addEventListener('click', () => {
      Swal.close();
    });
  }
  
//  <img class="product-image-discount" src="./img/discount-green.svg" alt="Discount" width="60" height="60"></img>