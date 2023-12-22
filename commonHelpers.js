import{a as n}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();class u{constructor(){this.searchQuery="",this.page=1,this.PER_PAGE=9}async fetchProducts(){const e={method:"get",url:"${BASE_URL}",params:{q:`${this.searchQuery}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${this.page}`,per_page:`${this.PER_PAGE}`}};try{return(await n(e)).data}catch(o){console.error(o)}}}const l=new u;console.log("query: ",l.query);const d="https://food-boutique.b.goit.study/api/products";function p(s,e){return n.get(`${d}`,{params:{page:s,limit:e}})}const f=document.querySelector(".main-container");async function h(){let s=1,e=6;try{const{data:o}=await p(s,e);console.log(o);const{results:i}=o;console.log(i),a(i),f.innerHTML+=a(i)}catch(o){console.error("Error fetching products",o)}}h();function a(s){return`<div class="card-container">${s.map(e=>{const o=e.category.split("_").join(" ");return`
            <div class="photo-card">
                <a class="product-modal" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container">
                        <img class="product-image" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info">
                        <h2 class="product-name">${e.name}</h2>
                        <div class='product-atributes'>
                            <p class="atributes-info">
                                <b class="atributes">Category:</b> ${o}
                            </p>
                            <p class="atributes-info">
                                <b class="atributes">Size:</b> ${e.size}
                            </p>
                            <p class="atributes-info">
                                <b class="atributes">Popularity:</b> ${e.popularity}
                            </p>
                        </div>
                        
                        <div class="price-and-btn">
                            <h2 class="product-price">$${e.price}</h2>
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
