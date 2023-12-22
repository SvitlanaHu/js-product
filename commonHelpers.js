import{a}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l="https://food-boutique.b.goit.study/api/products";function u(s,t){return a.get(`${l}`,{params:{page:s,limit:t}})}const d=document.querySelector(".main-container");async function p(){let s=1,t=6;try{const{data:r}=await u(s,t);console.log(r);const{results:i}=r;console.log(i),n(i),d.innerHTML+=n(i)}catch(r){console.error("Error fetching products",r)}}p();function n(s){return`<div class="card-container">${s.map(t=>{const r=t.category.split("_").join(" ");return`
            <div class="photo-card">
                <a class="product-modal" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container">
                        <img class="product-image" src="${t.img}" alt="${t.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info">
                        <h2 class="product-name">${t.name}</h2>
                        <div class='product-atributes'>
                            <p class="atributes-info">
                                <b class="atributes">Category:</b> ${r}
                            </p>
                            <p class="atributes-info">
                                <b class="atributes">Size:</b> ${t.size}
                            </p>
                            <p class="atributes-info">
                                <b class="atributes">Popularity:</b> ${t.popularity}
                            </p>
                        </div>
                        
                        <div class="price-and-btn">
                            <h2 class="product-price">$${t.price}</h2>
                            <button class='cart-btn' type="button">          
                                <svg class='list-cart-svg' width="18" height="18" >
                                    <use href="./img/icone/symbol-defs.svg#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        `}).join("")}</div>`}
//# sourceMappingURL=commonHelpers.js.map
