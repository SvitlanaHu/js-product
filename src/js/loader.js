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
  mainContent.style.filter = 'blur(5px) grayscale(1)';
}

export function hideLoader() {
  loader.setAttribute('hidden', '');
  mainContent.style.filter = 'none';
  scrollToFilters();
}
