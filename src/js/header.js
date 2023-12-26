import { updateCartCount } from "./local-storage";
updateCartCount()

// Get the element
let topBtn = document.querySelector(".top-btn");

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
window.onscroll = () => topBtn.style.opacity = window.scrollY > 500 ? 1 : 0;