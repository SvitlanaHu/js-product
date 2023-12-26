import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export function getProducts(page, limit) {
  return axios.get(`${BASE_URL}`, {
    params: {
      page: page,
      limit: limit,
    },
  });
}

export function getProductsKeyword(page, limit, keyword) {
  return axios.get(`${BASE_URL}`, {
    params: {
      page: page,
      limit: limit,
      keyword: keyword,
    },
  });
}

export function getProductsByCategory(page, limit, category) {
  return axios.get(`${BASE_URL}`, {
    params: {
      page: page,
      limit: limit,
      category: category,
    },
  });
}

// Додайте цю функцію до вашого файлу products-api.js
export async function getCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data; // Повертає масив категорій
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Передає помилку далі для обробки
  }
}

export function getFilteredProducts({
  page,
  limit,
  keyword,
  category,
  byABC,
  byPrice,
  byPopularity,
}) {
  const params = {
    page,
    limit,
    ...(keyword && { keyword }),
    ...(category && { category }),
    ...(byABC && { byABC }),
    ...(byPrice && { byPrice }),
    ...(byPopularity && { byPopularity }),
  };

  return axios.get(`${BASE_URL}`, { params });
}
