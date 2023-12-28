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

  filterForm.addEventListener('submit', async event => {
    event.preventDefault();
    const keyword = filterFormElements['item-search-value'].value.trim();
    await handleFilterUpdate({ keyword: keyword || null });
  });

  filterForm.addEventListener('change', async event => {
    if (event.target.id === 'category-select' || event.target.id === 'sorting-select') {
      const filters = {
        category: filterFormElements['category-select'].value !== 'Show all' 
                   ? filterFormElements['category-select'].value 
                   : null,
        byABC: filterFormElements['sorting-select'].value === 'byABC',
        byPrice: filterFormElements['sorting-select'].value === 'byPrice',
        byPopularity: filterFormElements['sorting-select'].value === 'byPopularity'
      };
      await handleFilterUpdate(filters);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  setupFilterEventListeners();
});
