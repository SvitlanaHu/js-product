let topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => {
    if (window.scrollY > 500) {
        topBtn.style.opacity = "1";
    } else {
        topBtn.style.opacity = "0";
    }
};