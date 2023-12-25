import axios from 'axios';
import icons from '../img/icone/symbol-defs.svg';


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
        } catch(error) {
             console.error('Error fetching discount products:', error);
        }
    }

    fetchDiscountProducts();

    function createProductCard(product) {
        return `
        <li class="card-container-list-discount" id="${product._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="./img/icone/symbol-defs.svg#icon-discount-green"></use>
                         </svg>
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

const discountProductsContainer = document.getElementById("discount-products");

discountProductsContainer.addEventListener("mouseover", function () {
    discountProductsContainer.style.overflowY = "auto";
});
discountProductsContainer.addEventListener("mouseout", function () {
    discountProductsContainer.style.overflowY = "hidden";
});


//  <img class="product-image-discount" src="./img/discount-green.svg" alt="Discount" width="60" height="60"></img>