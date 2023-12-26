import { getCategories } from './products-api';
import { updateFilter, getFilters } from './local-storage';
import { renderProducts } from './products-list';

async function handleFilterUpdate(key, value) {
  updateFilter(key, value);
  updateFilter('page', 1); // Повернення на першу сторінку при зміні фільтра
  await renderProducts();
}

async function loadCategories() {
  try {
    const categories = await getCategories();
    const categorySelect = document.getElementById('category-select');

    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category.replace(/_/g, ' ');
      categorySelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

async function initializeFilters() {
  const filters = getFilters();

  if (filters.keyword) {
    document.getElementById('search-bar-id').value = filters.keyword;
  }

  if (filters.category) {
    document.getElementById('category-select').value = filters.category;
  }
  if (filters.byABC || filters.byPrice || filters.byPopularity) {
    const sortSelect = document.getElementById('sorting-select');
    sortSelect.value = filters.byABC
      ? 'byABC'
      : filters.byPrice
      ? 'byPrice'
      : 'byPopularity';
  }

  await loadCategories();
  await renderProducts();
}

function setupFilterEventListeners() {
  const searchForm = document.getElementById('search-form');
  const categorySelect = document.getElementById('category-select');
  const sortSelect = document.getElementById('sorting-select');

  searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    const keyword = event.target.elements['item-search-value'].value.trim();
    handleFilterUpdate('keyword', keyword || null);
  });

  categorySelect.addEventListener('change', event => {
    handleFilterUpdate(
      'category',
      event.target.value !== 'Show all' ? event.target.value : null
    );
  });

  sortSelect.addEventListener('change', event => {
    const sortType = event.target.value;
    handleFilterUpdate('byABC', sortType === 'byABC');
    handleFilterUpdate('byPrice', sortType === 'byPrice');
    handleFilterUpdate('byPopularity', sortType === 'byPopularity');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  setupFilterEventListeners();
});
