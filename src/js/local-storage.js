// Функція для збереження фільтрів у localStorage
export function saveFilters(filters) {
  localStorage.setItem('productFilters', JSON.stringify(filters));
}

// Функція для отримання фільтрів з localStorage
export function getFilters() {
  const savedFilters = localStorage.getItem('productFilters');
  return savedFilters
    ? JSON.parse(savedFilters)
    : { keyword: null, category: null, page: 1, limit: 6 };
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
  const existingProductIndex = cart.findIndex(
    item => item._id === productToAdd._id
  );

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

// Кількість товарів в корзині
export function updateCartCount() {
  const cartItems = getCart();
  const totalCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );
  const cartCountElement = document.querySelector('.numbers-of-products');
  if (cartCountElement) {
    cartCountElement.textContent = totalCount;
  }
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
  updateCartButtonIcons(arr, '.modal-add-to-cart-btn', icons);
  updateCartButtonIcons(arr, '.cart-btn-list', icons);
  updateCartButtonIcons(arr, '.popular-cart-btn', icons);
  updateCartButtonIcons(arr, '.cart-btn-list-discount', icons);
  // Оновлення кількості товарів у кошику
  updateCartCount();
}

function getCartButtonIconHTML(productId, cart, icons, buttonClass) {
  const productInCart = cart.find(item => item._id === productId);
  const iconId = productInCart
    ? 'icon-check'
    : 'icon-heroicons-solid_shopping-cart-18x18';
  const width = buttonClass === '.popular-cart-btn' ? '12' : '18';
console.log(buttonClass)
  // Перевірка, чи клас кнопки відповідає 'modal-add-to-cart-btn'
  if (buttonClass === '.modal-add-to-cart-btn') {
    return `
      <button class="modal-add-to-cart-btn">
        Add to 
        <svg class="modal-add-to-cart-svg" width="${width}" height="${width}">
          <use href="${icons}#${iconId}"></use>
        </svg>
      </button>
    `;
  }

  // Для інших класів повертаємо тільки SVG
  return `
    <svg class="${buttonClass === '.popular-cart-btn' ? 'olive' : 'list-cart-svg-list'}" width="${width}" height="${width}">
      <use href="${icons}#${iconId}"></use>
    </svg>
  `;
}

// Уніфікована функція для оновлення іконок кнопок кошика
export function updateCartButtonIcons(arr, buttonClass, icons) {
  const cart = getCart();
  const buttons = document.querySelectorAll(buttonClass);

  buttons.forEach(button => {
    const productId = button.dataset.productId;
    button.innerHTML = getCartButtonIconHTML(
      productId,
      cart,
      icons,
      buttonClass
    );
  });
}

// Уніфікована функція для встановлення обробників подій на кнопки додавання до кошика
export function setCartButtonEventListeners(arr, buttonClass, icons) {
  document.querySelectorAll(buttonClass).forEach(button => {
    button.addEventListener('click', e => {
      e.stopPropagation();
      const productId = e.currentTarget.dataset.productId;
      handleCartButtonClick(productId, arr, buttonClass, icons);
    });
  });
}
