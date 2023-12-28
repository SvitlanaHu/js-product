import { getCategories } from './products-api';
import { updateFilter, getFilters } from './local-storage';
import { renderProducts } from './products-list';

async function handleFilterUpdate(filters) {
  for (const key in filters) {
    updateFilter(key, filters[key]);
  }
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
  await loadCategories();
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

  await renderProducts();
}

function setupFilterEventListeners() {
  const filterForm = document.getElementById('search-form');
  const filterFormElements = filterForm.elements;
  const searchBar = filterFormElements['item-search-value'];
  const categorySelect = filterFormElements['category-select'];
  const sortingSelect = filterFormElements['sorting-select'];

  filterForm.addEventListener('submit', async event => {
    event.preventDefault();
    const keyword = searchBar.value.trim();
    await handleFilterUpdate({ keyword: keyword || null });
  });

  // Додати слухачі для обох випадаючих списків і поля пошуку
  categorySelect.addEventListener('change', updateFilters);
  sortingSelect.addEventListener('change', updateFilters);
  searchBar.addEventListener('input', updateFilters);

  async function updateFilters() {
    const filters = {
      keyword: searchBar.value.trim() || null,
      category: categorySelect.value !== 'Show all' ? categorySelect.value : null,
      byABC: sortingSelect.value === 'byABC',
      byPrice: sortingSelect.value === 'byPrice',
      byPopularity: sortingSelect.value === 'byPopularity'
    };
    await handleFilterUpdate(filters);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  setupFilterEventListeners();
});
