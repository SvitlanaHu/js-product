import axios from 'axios';
import icons from '../img/icone/symbol-defs.svg';


document.addEventListener("DOMContentLoaded", function () {
    const discountProductsContainer = document.getElementById("discount-products");
    const paginationContainer = document.getElementById('pagination');
    const itemsPerPage = 2;
    let currentPage = 1;

  
    async function fetchDiscountProducts(page) {
        try {
            const respone = await axios.get('https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`');
            const discountProducts = respone.data;
            // console.log(discountProducts);

            discountProductsContainer.innerHTML = '';

                // Вибірка тільки 2 продуктів для відображення
            const productsToDisplay = discountProducts.slice(0, 2);

            productsToDisplay.forEach(product => {
                const card = createProductCard(product);
                discountProductsContainer.innerHTML += card;
            });
            // discountProducts.forEach(product => {
            //     const card = createProductCard(product)
            //     discountProductsContainer.innerHTML += card;
            // });
        } catch(error) {
             console.error('Error fetching discount products:', error);
        }
    }

    fetchDiscountProducts();

    function createProductCard(product) {
        return `
        <li class="card-container-list-discount">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <img class="product-image-list-discount" src="${product.img}" alt="${product.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                            <h2 class="product-name-list-discount">${product.name}</h2>
                            <h2 class="price-discount">$${product.price}</h2>
                            <button class='cart-btn-list-discount' type="button">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    
        `
    }
    // Функція для додавання продукту до кошика
    








    // 
})