document.addEventListener('DOMContentLoaded', () => {
  const subscriptionForm = document.querySelector('.footer-sub-form');
  const successModal = document.querySelector('.success-modal');
  const failureModal = document.querySelector('.failure-modal');
  const closeFooterModals = document.querySelectorAll('.close-svg');

  subscriptionForm.addEventListener('submit', async e => {
    e.preventDefault();

    const emailInput = subscriptionForm.querySelector('.footer-email-input');
    const email = emailInput.value;

    // Перевірка валідності email
    if (!emailInput.checkValidity()) {
      alert('Please enter a valid email address.');
      return;
    }

    // Об'єкт, що відправляється на сервер
    const subscriptionData = { email };

    try {
      const response = await fetch(
        'https://food-boutique.b.goit.study/api/subscription',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subscriptionData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        successModal.classList.add('open');
      } else if (response.status === 409) {
        failureModal.classList.add('open');
      } else {
        throw new Error('Failed to subscribe.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
    emailInput.value = '';
  });

  // Функція, яка закриває модалку
  function closeModal() {
    if (failureModal.classList.contains('open')) {
      failureModal.classList.remove('open');
    } else if (successModal.classList.contains('open')) {
      successModal.classList.remove('open');
    }
  }

  // Закривання модалки при кліку на .close-svg
  closeFooterModals.forEach(closeFooterModal => {
    closeFooterModal.addEventListener('click', closeModal);
  });

  // Закривання модалки при натисканні клавіші "Esc"
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  // Закривання модалки при кліку поза модальним вікном
  document.addEventListener('click', function (event) {
    const isOutsideModal =
      !event.target.closest('.failure-modal-interface') &&
      !event.target.closest('.success-modal-interface');

    if (isOutsideModal) {
      closeModal();
    }
  });
});
