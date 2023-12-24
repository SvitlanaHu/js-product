import{a as w,P as L}from"./vendor-b592f4c5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const u="/js-product/assets/symbol-defs-16fdabac.svg",S="https://food-boutique.b.goit.study/api/products";function $(t,i){return w.get(`${S}`,{params:{page:t,limit:i}})}function E(t){localStorage.setItem("productFilters",JSON.stringify(t))}function a(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function p(t,i){const e=a();e[t]=i,E(e)}function y(t){localStorage.setItem("shoppingCart",JSON.stringify(t))}function l(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}function _(t){const i=l(),e=i.findIndex(n=>n._id===t._id);e>-1?i[e].quantity+=1:i.push({...t,quantity:1}),y(i)}function F(t){const i=l(),e=i.findIndex(n=>n._id===t);e>-1&&(i[e].quantity>1?i[e].quantity-=1:i.splice(e,1)),y(i)}const q=document.getElementById("products-list-container");let c;window.addEventListener("resize",x);function x(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,a().limit!==t&&(p("limit",t),f())}function v(t,i){const n=l().find(r=>r._id===t),s=i.find(r=>r._id===t);n?F(t):s&&_(s),b()}function b(t){const i=l();document.querySelectorAll(".cart-btn-list").forEach(e=>{const n=e.dataset.productId;i.find(r=>r._id===n)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${u}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${u}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `})}function I(t){document.querySelectorAll(".cart-btn-list").forEach(i=>{i.addEventListener("click",e=>{const n=e.currentTarget.dataset.productId;v(n,t)})})}async function f(){const t=a();let i=t.page||1,e=t.limit||6;try{const{data:n}=await $(i,e),{perPage:s,totalPages:r,results:o}=n,g=s*r;q.innerHTML=O(o),I(o);const P=document.getElementById("tui-pagination-container");c?(c.reset(g),c.movePageTo(i)):(c=new L(P,{totalItems:g,itemsPerPage:e,visiblePages:4,centerAlign:!0,page:i}),c.on("beforeMove",C=>{const m=C.page,d=a(),h=d.limit||6;(m!==d.page||h!==d.limit)&&(p("page",m),p("limit",h),f())})),b()}catch(n){console.error("Error fetching products",n)}}f();function O(t){const i=`<ul class="card-container-list">${t.map(e=>{const n=e.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${e.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${n}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Size:</b> ${e.size}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Popularity:</b> ${e.popularity}
                            </p>
                        </div>
                        </a>
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${e.price}</h2>
                            <button class='cart-btn-list' type="button" data-product-id="${e._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${u}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",n=>{const s=n.currentTarget.dataset.productId,r=t.find(o=>o._id===s);r?v(r,t):console.error("Product not found for ID:",s)})})},0),I(t),i}export{O as c,u as i};
//# sourceMappingURL=products-list-9df6fae9.js.map
