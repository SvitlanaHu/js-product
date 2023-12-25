import axios from 'axios';
import icons from '../img/icone/symbol-defs.svg';
import { updateCartButtonIcons, setCartButtonEventListeners } from './local-storage';


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
        <li class="card-container-list-discount" id="${product._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${icons}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${product.img}" alt="${product.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
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
    // Функція для додавання продукту до кошика









    // 


})

const discountProductsContainer = document.getElementById("discount-products");

discountProductsContainer.addEventListener("mouseover", function () {
    discountProductsContainer.style.overflowY = "auto";
});
discountProductsContainer.addEventListener("mouseout", function () {
    discountProductsContainer.style.overflowY = "hidden";
});


//  <img class="product-image-discount" src="./img/discount-green.svg" alt="Discount" width="60" height="60"></img>