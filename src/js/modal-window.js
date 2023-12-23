const openModal = document.getElementById("open-modal");
const closeModal = document.querySelector("#close-modal");
const modal = document.getElementById("list-modal");


openModal.addEventListener("click", function () {
    modal.classList.add("open");
});

closeModal.addEventListener("click", function () {
    modal.classList.remove("open");
});
