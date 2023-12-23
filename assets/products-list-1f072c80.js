import{a as I,P}from"./vendor-b592f4c5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const l="/js-product/assets/symbol-defs-b7d3a608.svg",C="https://food-boutique.b.goit.study/api/products";function $(e,r){return I.get(`${C}`,{params:{page:e,limit:r}})}function S(e){localStorage.setItem("productFilters",JSON.stringify(e))}function d(){const e=localStorage.getItem("productFilters");return e?JSON.parse(e):{keyword:null,category:null,page:1,limit:6}}function h(e,r){const t=d();t[e]=r,S(t)}function L(e){localStorage.setItem("shoppingCart",JSON.stringify(e))}function u(){const e=localStorage.getItem("shoppingCart");return e?JSON.parse(e):[]}function _(e){const r=u(),t=r.findIndex(o=>o._id===e._id);t>-1?r[t].quantity+=1:r.push({...e,quantity:1}),L(r)}const w=document.getElementById("products-list-container");let c;async function m(){const e=d();let r=e.page||1,t=e.limit||6;try{const{data:o}=await $(r,t),{perPage:s,totalPages:i,results:n}=o,p=s*i;w.innerHTML=E(n);const v=document.getElementById("tui-pagination-container");c?(c.reset(p),c.movePageTo(r)):(c=new P(v,{totalItems:p,itemsPerPage:t,visiblePages:4,centerAlign:!0,page:r}),c.on("beforeMove",b=>{const g=b.page,a=d(),f=a.limit||6;(g!==a.page||f!==a.limit)&&(h("page",g),h("limit",f),m())})),y()}catch(o){console.error("Error fetching products",o)}}m();function E(e){const r=`<ul class="card-container-list">${e.map(t=>{const o=t.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${t.img}" alt="${t.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${t.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${o}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Size:</b> ${t.size}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Popularity:</b> ${t.popularity}
                            </p>
                        </div>
                        </a>
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${t.price}</h2>
                            <button class='cart-btn-list' type="button" data-product-id="${t._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${l}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(t=>{t.addEventListener("click",o=>{const s=o.currentTarget.dataset.productId,i=e.find(n=>n._id===s);i?F(i):console.error("Product not found for ID:",s)})})},0),r}function F(e,r){u().find(s=>s._id===e._id)?console.log("Product is already in the cart"):(_(e),y())}function y(e){const r=u();document.querySelectorAll(".cart-btn-list").forEach(t=>{const o=t.dataset.productId;r.find(i=>i._id===o)?(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${l}#icon-check"></use>
        </svg>
      `,t.disabled=!0):(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${l}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `,t.disabled=!1)})}export{E as c,l as i};
//# sourceMappingURL=products-list-1f072c80.js.map
