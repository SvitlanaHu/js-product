import axios from 'axios';


document.addEventListener("DOMContentLoaded", function () {
    const discountProductsContainer = document.getElementById("discount-products");
    const paginationContainer = document.getElementById('pagination');
    const itemsPerPage = 2;
    let currentPage = 1;

  
    async function fetchDiscountProducts(page) {
        try {
            const respone = await axios.get('https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`');
            const discountProducts = respone.data;
            console.log(discountProducts);

            discountProductsContainer.innerHTML = '';

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
        <div class="card-container-list-discount">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <svg class='list-cart-svg-list' width="18" height="18" >
                            <use href="./img/icone/symbol-defs.svg#icon-heroicons-solid_shopping-cart-18x18"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${product.img}" alt="${product.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                            <h2 class="product-name-list-discount">${product.name}</h2>
                            <h2 class="price-discount">$${product.price}</h2>
                            <button class='cart-btn-list-discount' type="button">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="./img/icone/symbol-defs.svg#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    
        `
    }
    // Функція для додавання продукту до кошика
    








    // 
})