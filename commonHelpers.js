import{a as g,P as f}from"./assets/vendor-b592f4c5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const h="https://food-boutique.b.goit.study/api/products";function m(s,t){return g.get(`${h}`,{params:{page:s,limit:t}})}const y=document.querySelector(".main-container");async function d(){let s=1,t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6;try{const{data:i}=await m(s,t);console.log(i);const{perPage:n,totalPages:e,results:o}=i,r=n*e;console.log(o),a(o),y.innerHTML=a(o)+`
  <div id="tui-pagination-container" class="tui-pagination"></div>
</div>
`;const u=document.getElementById("tui-pagination-container");new f(u,{totalItems:r,itemsPerPage:t,visiblePages:4,centerAlign:!0}).on("change",p=>{d(p)})}catch(i){console.error("Error fetching products",i)}}d();function a(s){return`<div class="card-container-list">${s.map(t=>{const i=t.category.split("_").join(" ");return`
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
        `}).join("")}

	 `}window.onscroll=()=>c();window.addEventListener("scroll",l(c,250)),window.addEventListener("resize",l(c,250));async function c(){const s=document.querySelector("body"),t=document.body.offsetHeight,i=window.innerHeight,n=window.scrollY,e=t-i/4;n+i>e?s.classList.add("body--no-transparency"):s.classList.remove("body--no-transparency")}function l(s,t){let i=null;return function(...e){i||(i=setTimeout(()=>{s(...e),clearTimeout(i),i=null},t))}}
//# sourceMappingURL=commonHelpers.js.map
