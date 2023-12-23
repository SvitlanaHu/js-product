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
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
}

// Очищення кошика
export function clearCart() {
    saveCart([]);
}