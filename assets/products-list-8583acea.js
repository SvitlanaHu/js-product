import{a as P,P as C}from"./vendor-b592f4c5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const l="/js-product/assets/symbol-defs-16fdabac.svg",$="https://food-boutique.b.goit.study/api/products";function w(e,i){return P.get(`${$}`,{params:{page:e,limit:i}})}function m(e){localStorage.setItem("productFilters",JSON.stringify(e))}function d(){const e=localStorage.getItem("productFilters");return e?JSON.parse(e):{keyword:null,category:null,page:1,limit:6}}function h(e,i){const t=d();t[e]=i,m(t)}function S(e){localStorage.setItem("shoppingCart",JSON.stringify(e))}function u(){const e=localStorage.getItem("shoppingCart");return e?JSON.parse(e):[]}function L(e){const i=u(),t=i.findIndex(o=>o._id===e._id);t>-1?i[t].quantity+=1:i.push({...e,quantity:1}),S(i)}const _=document.getElementById("products-list-container");let c;async function y(){let e=d(),i=e.page||1,t;window.innerWidth>=1440?t=e.limit=9:window.innerWidth>=768?t=e.limit=8:t=e.limit=6,m(e);try{const{data:o}=await w(i,t),{perPage:s,totalPages:r,results:n}=o,p=s*r;_.innerHTML=E(n);const b=document.getElementById("tui-pagination-container");c?(c.reset(p),c.movePageTo(i)):(c=new C(b,{totalItems:p,itemsPerPage:t,visiblePages:4,centerAlign:!0,page:i}),c.on("beforeMove",I=>{const g=I.page,a=d(),f=a.limit||6;(g!==a.page||f!==a.limit)&&(h("page",g),h("limit",f),y())})),v()}catch(o){console.error("Error fetching products",o)}}y();function E(e){const i=`<ul class="card-container-list">${e.map(t=>{const o=t.category.split("_").join(" ");return`
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
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(t=>{t.addEventListener("click",o=>{const s=o.currentTarget.dataset.productId,r=e.find(n=>n._id===s);r?F(r):console.error("Product not found for ID:",s)})})},0),i}function F(e,i){u().find(s=>s._id===e._id)?console.log("Product is already in the cart"):(L(e),v())}function v(e){const i=u();document.querySelectorAll(".cart-btn-list").forEach(t=>{const o=t.dataset.productId;i.find(r=>r._id===o)?(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${l}#icon-check"></use>
        </svg>
      `,t.disabled=!0):(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${l}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `,t.disabled=!1)})}export{E as c,l as i};
//# sourceMappingURL=products-list-8583acea.js.map
