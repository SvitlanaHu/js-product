import{a as l}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const a="https://food-boutique.b.goit.study/api/products";function d(o,t){return l.get(`${a}`,{params:{page:o,limit:t}})}const u=document.querySelector(".main-container");async function p(){let o=1,t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6;try{const{data:i}=await d(o,t);console.log(i);const{results:r}=i;console.log(r),c(r),u.innerHTML+=c(r)}catch(i){console.error("Error fetching products",i)}}p();function c(o){return`<div class="card-container-list">${o.map(t=>{const i=t.category.split("_").join(" ");return`
            <div class="photo-card-list">
                <a class="product-modal-list" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${t.img}" alt="${t.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${t.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${i}
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
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="../img/icone/symbol-defs.svg#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        `}).join("")}</div>`}
//# sourceMappingURL=commonHelpers.js.map
