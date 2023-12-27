document.getElementById("close-my-modal-btn").addEventListener("click", closeModal)

// Закрити модальне вікно
function closeModal() {
    document.getElementById("my-modal").classList.remove("open")
}

// Закрити модальне вікно на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрити модальне вікно при кліку поза вікном 
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});