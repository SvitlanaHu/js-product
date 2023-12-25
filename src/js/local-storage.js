/* для імпорту функій в ваш файл застосовуйте
import { назва функції, назва функції } from './js/localStorage';
наприклад:
import { saveFilters, getFilters, updateFilter, saveCart, getCart, addToCart, removeFromCart, clearCart } from './js/localStorage';
*/

// Функція для збереження фільтрів у localStorage
export function saveFilters(filters) {
    localStorage.setItem('productFilters', JSON.stringify(filters));
}

// Функція для отримання фільтрів з localStorage
export function getFilters() {
    const savedFilters = localStorage.getItem('productFilters');
    return savedFilters ? JSON.parse(savedFilters) : { keyword: null, category: null, page: 1, limit: 6 };
}

// Функція для оновлення певного фільтра
export function updateFilter(key, value) {
    const filters = getFilters();
    filters[key] = value;
    saveFilters(filters);
}

// Функція для збереження кошика у localStorage
export function saveCart(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Функція для отримання кошика з localStorage
export function getCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    return savedCart ? JSON.parse(savedCart) : [];
}

// Додавання продукту до кошика
export function addToCart(productToAdd) {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(item => item._id === productToAdd._id);

    if (existingProductIndex > -1) {
        // Збільшуємо кількість існуючого продукту в кошику
        cart[existingProductIndex].quantity += 1;
    } else {
        // Додаємо новий продукт в кошик з кількістю 1
        cart.push({ ...productToAdd, quantity: 1 });
    }

    saveCart(cart);
}


// Видалення продукту з кошика
export function removeFromCart(productId) {
    const cart = getCart();
    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1) {
        if (cart[productIndex].quantity > 1) {
            // Якщо кількість більше 1, зменшуємо її
            cart[productIndex].quantity -= 1;
        } else {
            // Якщо кількість дорівнює 1, видаляємо продукт з кошика
            cart.splice(productIndex, 1);
        }
    }

    saveCart(cart);
}

// Очищення кошика
export function clearCart() {
    saveCart([]);
}

// Уніфікована функція для обробки кліку на кнопку додавання продукту до кошика
export function handleCartButtonClick(productId, arr, buttonClass, icons) {
    const cart = getCart();
    const productInCart = cart.find(item => item._id === productId);
    const product = arr.find(item => item._id === productId);
  
    if (productInCart) {
      removeFromCart(productId);
    } else if (product) {
      addToCart(product);
    }
    updateCartButtonIcons(arr, '.cart-btn-list', icons);
    updateCartButtonIcons(arr, '.popular-cart-btn', icons);
    updateCartButtonIcons(arr, '.cart-btn-list-discount', icons);
  }
  
  // Уніфікована функція для оновлення іконок кнопок кошика
  export function updateCartButtonIcons(arr, buttonClass, icons) {
    const cart = getCart();
    document.querySelectorAll(buttonClass).forEach(button => {
      const productId = button.dataset.productId;
      const productInCart = cart.find(item => item._id === productId);
  
      if (productInCart) {
        button.innerHTML = `
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${icons}#icon-check"></use>
          </svg>
        `;
      } else {
        button.innerHTML = `
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${icons}#icon-heroicons-solid_shopping-cart-18x18"></use>
          </svg>
        `;
      }
    });
  }
  
  // Уніфікована функція для встановлення обробників подій на кнопки додавання до кошика
  export function setCartButtonEventListeners(arr, buttonClass, icons) {
    document.querySelectorAll(buttonClass).forEach(button => {
      button.addEventListener('click', (e) => {
        const productId = e.currentTarget.dataset.productId;
        handleCartButtonClick(productId, arr, buttonClass, icons);
      });
    });
  }