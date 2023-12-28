let topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => {
    if (window.scrollY > 500) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
};