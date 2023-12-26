const loader = document.querySelector('.loader');
const mainContent = document.getElementById('main-content');

export function showLoader() {
  loader.removeAttribute('hidden');
  mainContent.style.display = 'none'; // Приховати основний контент
}

export function hideLoader() {
  loader.setAttribute('hidden', '');
  mainContent.style.display = 'block'; // Показати основний контент
}
