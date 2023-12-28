const loader = document.querySelector('.loader');
const mainContent = document.getElementById('main-content');

function scrollToFilters() {
  const filtersSection = document.getElementById('filters-section');
  if (filtersSection) {
    filtersSection.scrollIntoView({ behavior: 'smooth' });
  }
}

export function showLoader() {
  loader.removeAttribute('hidden');
  Array.from(mainContent.children).forEach(child => {
    // Перевірка, чи child містить .search-container
    const searchContainer = child.querySelector('.search-container');
    if (!searchContainer) {
      child.style.filter = 'blur(5px) grayscale(1)';
    }
  });
}

export function hideLoader() {
  loader.setAttribute('hidden', '');
  Array.from(mainContent.children).forEach(child => {
    child.style.filter = 'none';
  });
  scrollToFilters();
}
