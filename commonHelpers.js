import{a as d}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u="/js-product/assets/symbol-defs-bacee5fb.svg",p="https://food-boutique.b.goit.study/api/products";function f(i,t){return d.get(`${p}`,{params:{page:i,limit:t}})}const h=document.querySelector(".main-container");async function g(){let i=1,t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6;try{const{data:s}=await f(i,t);console.log(s);const{results:r}=s;console.log(r),l(r),h.innerHTML+=l(r)}catch(s){console.error("Error fetching products",s)}}g();function l(i){return`<ul class="card-container-list">${i.map(t=>{const s=t.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="МОДАЛЬНЕ ВІКНО"> </a>
                    <div class="img-container-list">
                        <img class="product-image-list" src="${t.img}" alt="${t.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${t.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${s}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Size:</b> ${t.size}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Popularity:</b> ${t.popularity}
                            </p>
                        </div>
                        
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${t.price}</h2>
                            <button class='cart-btn-list' type="button">          
                                <svg class="list-cart-svg-list" width="18" height="18">
                                    <use href="${u}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
               
            </li>
        `}).join("")}</ul>`}window.onscroll=()=>c();window.addEventListener("scroll",a(c,250)),window.addEventListener("resize",a(c,250));async function c(){const i=document.querySelector("body"),t=document.body.offsetHeight,s=window.innerHeight,r=window.scrollY,e=t-s/4;r+s>e?i.classList.add("body--no-transparency"):i.classList.remove("body--no-transparency")}function a(i,t){let s=null;return function(...e){s||(s=setTimeout(()=>{i(...e),clearTimeout(s),s=null},t))}}
//# sourceMappingURL=commonHelpers.js.map
