import{a as u,i as n,b as p,d as b,e as m}from"./assets/scrollup-74746765.js";import{a as g,S as d,P as z}from"./assets/vendor-f5f845be.js";const $="https://food-boutique.b.goit.study/api/products";async function A(){try{return(await g.get(`${$}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function q({page:t,limit:e,keyword:o,category:s,byABC:a,byPrice:c,byPopularity:i}){const r={page:t,limit:e,...o&&{keyword:o},...s&&{category:s},...a&&{byABC:a},...c&&{byPrice:c},...i&&{byPopularity:i}};return g.get(`${$}`,{params:r})}async function w(t){try{return(await g.get(`${$}/${t}`)).data}catch(e){throw console.error("Error fetching product by id:",e),e}}const S=document.querySelector(".loader"),_=document.getElementById("main-content");function k(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function B(){S.removeAttribute("hidden"),_.style.filter="blur(5px) grayscale(1)"}function I(){S.setAttribute("hidden",""),_.style.filter="none",k()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(a){try{const i=(await g.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",i.forEach(r=>{const l=o(r);t.innerHTML+=l}),i.forEach(r=>{document.querySelector(`[data-product-id="${r._id}"]`).addEventListener("click",()=>F(r._id,i))}),u(i,".cart-btn-list-discount",n),p(i,".cart-btn-list-discount",n)}catch(c){console.error("Error fetching discount products:",c)}}e();function o(a){const c=a.name,i=12,r=window.innerWidth,l=c.length>i&&r>=1440,E=s(c,i);return`
        <li class="card-container-list-discount" id="${a._id}" data-product-id="${a._id}">
        <div class="photo-card-list-discount">
                <div class="product-modal-list-discount">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${n}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${a.img}" alt="${a.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?c:""}">${E}</h2>
                        <h2 class="price-discount">$${a.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${a._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${n}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function s(a,c){return window.innerWidth>=1440&&a.length>c?`${a.slice(0,c)}...`:a}});const h=document.getElementById("discount-products");h.addEventListener("mouseover",function(){h.style.overflowY="auto"});h.addEventListener("mouseout",function(){h.style.overflowY="hidden"});async function F(t,e){try{const o=await w(t);T(o,e)}catch(o){console.error("Error fetching product details:",o)}}function T(t,e){d.fire({html:`
        <div class="modal-product-container">
          <div class="modal-image-container">
            <img src="${t.img}" alt="${t.name}">
          </div>
          <div class="modal-product-info">
            <h2 class="modal-product-title">${t.name}</h2>
            <p><span class="modal-product-text">Category:</span> <span class="modal-product-value">${t.category}</span></p>
            <p><span class="modal-product-text">Size:</span> <span class="modal-product-value">${t.size}</span></p>
            <p><span class="modal-product-text">Popularity:</span> <span class="modal-product-value">${t.popularity}</span></p>
            <p class="modal-product-description">${t.desc}</p>
          </div>
        </div>
        <div class="modal-price-button-container">
          <p class="modal-product-price">$${t.price}</p>
          <button class='modal-add-to-cart-btn' type="button" data-product-id="${t._id}">
            Add to 
            <svg class="modal-add-to-cart-svg" width="18" height="18">
              <use href="${n}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${n}#icon-close-sharp"></use>
        </svg>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",n),u(e,".modal-add-to-cart-btn",n),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}const D="https://food-boutique.b.goit.study/api/products/popular";async function W(){try{return(await g.get(`${D}`)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}function H(t){const e=document.querySelector(".popular-product-list");e&&t.forEach(o=>{const s=document.createElement("li");s.classList.add("popular-product-item");const a=o.category.split("_").join(" ");s.innerHTML=`
      <div class="popular-modal"  data-product-id="${o._id}">
      <div class="popular-img">
        <img class="popular-photo-item" src="${o.img}" alt="${o.name}" width="56" height="56" loading="lazy">
      </div>  
      <ul class="about-popular">
        <li class="name-popular-product">${o.name}</li>
        <li class="subname-popular-product">Category: <span class="id-subname">${a}</span></li>
        <li class="subname-popular-product">Size: <span class="id-subname">${o.size}</span></li>
        <li class="subname-popular-product">Popularity: <span class="id-subname">${o.popularity}</span></li>
      </ul>
      <button class='popular-cart-btn' type="button" data-product-id="${o._id}">
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${n}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      </button>
    </div>
    
      `,e.appendChild(s)}),t.forEach(o=>{document.querySelector(`[data-product-id="${o._id}"]`).addEventListener("click",()=>M(o._id,t))}),u(t,".popular-cart-btn",n),p(t,".popular-cart-btn",n)}W().then(t=>{H(t)}).catch(t=>{console.error("Error:",t)});async function M(t,e){try{const o=await w(t);U(o,e)}catch(o){console.error("Error fetching product details:",o)}}function U(t,e){d.fire({html:`
        <div class="modal-product-container">
          <div class="modal-image-container">
            <img src="${t.img}" alt="${t.name}">
          </div>
          <div class="modal-product-info">
            <h2 class="modal-product-title">${t.name}</h2>
            <p><span class="modal-product-text">Category:</span> <span class="modal-product-value">${t.category}</span></p>
            <p><span class="modal-product-text">Size:</span> <span class="modal-product-value">${t.size}</span></p>
            <p><span class="modal-product-text">Popularity:</span> <span class="modal-product-value">${t.popularity}</span></p>
            <p class="modal-product-description">${t.desc}</p>
          </div>
        </div>
        <div class="modal-price-button-container">
          <p class="modal-product-price">$${t.price}</p>
          <button class='modal-add-to-cart-btn' type="button" data-product-id="${t._id}">
            Add to 
            <svg class="modal-add-to-cart-svg" width="18" height="18">
              <use href="${n}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${n}#icon-close-sharp"></use>
        </svg>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",n),u(e,".modal-add-to-cart-btn",n),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}const y=document.getElementById("products-list-container"),P=document.querySelector(".no-results-container");let L;window.addEventListener("resize",R);function R(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(m("page",1),m("limit",t),v())}function j(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",y.after(e)}async function v(){const t=b();let e=t.page||1,o=t.limit||6;B();try{const s=await q(t),{perPage:a,totalPages:c,results:i}=s.data,r=a*c;if(i.length===0){P.classList.remove("visually-hidden"),y.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}y.innerHTML=Y(i),P.classList.add("visually-hidden"),i.forEach(l=>{document.querySelector(`[data-product-id="${l._id}"]`).addEventListener("click",()=>N(l._id,i))}),O(r,e,o),p(i,".cart-btn-list",n),u(i,".cart-btn-list",n)}catch(s){console.error("Error fetching products",s)}finally{I()}}function O(t,e,o){j();const s=document.getElementById("tui-pagination-container");if(t>o){const a=window.innerWidth<768?2:4;L=new z(s,{totalItems:t,itemsPerPage:o,visiblePages:a,centerAlign:!0,page:e}),L.on("beforeMove",c=>{m("page",c.page),v()})}else s.classList.add("visually-hidden")}function Y(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
        <li class="photo-card-list" data-product-id="${e._id}">
          <div class="img-container-list">
            <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
          </div>
          <div class="product-info-list">
            <h2 class="product-name-list">${e.name}</h2>
            <div class='product-atributes-list'>
              <p class="atributes-info-list">
                <b class="atributes-list">Category:</b> ${o}
              </p>
              <p class="atributes-info-list">
                <b class="atributes-list">Size:</b> ${e.size}
              </p>
              <p class="atributes-info-list">
                <b class="atributes-list">Popularity:</b> ${e.popularity}
              </p>
            </div>
            <div class="price-and-btn-list">
              <h2 class="product-price-list">$${e.price}</h2>
              <button class='cart-btn-list' type="button" data-product-id="${e._id}">
                <svg class="list-cart-svg-list" width="18" height="18">
                  <use href="${n}#icon-heroicons-solid_shopping-cart-18x18"></use>
                </svg>
              </button>
            </div>
          </div>
        </li>`}).join("")}</ul>`}async function N(t,e){try{B();const o=await w(t);V(o,e)}catch(o){console.error("Error fetching product details:",o)}finally{I()}}function V(t,e){d.fire({html:`
      <div class="modal-product-container">
        <div class="modal-image-container">
          <img class="modal-img" src="${t.img}" alt="${t.name}">
        </div>
        <div class="modal-product-info">
          <h2 class="modal-product-title">${t.name}</h2>
          <div class="modal-product-main-info>
            <p class="text-box">
              <span class="modal-product-text">Category:</span> <span class="modal-product-value">${t.category}</span>
            </p>
            <p class="text-box">
              <span class="modal-product-text">Size:</span> <span class="modal-product-value">${t.size}</span>
            </p>
            <p class="text-box">
              <span class="modal-product-text">Popularity:</span> <span class="modal-product-value">${t.popularity}</span>
            </p>
          </div>
          <p id="modal-product-description" class="modal-product-description">${t.desc}</p>  
        </div>
      </div>
      <div class="modal-price-button-container">
        <p class="modal-product-price">$${t.price}</p>
        <button class='modal-add-to-cart-btn' type="button" data-product-id="${t._id}">
         Add to <span class="modal-button-text">Add to</span> 
          <svg class="modal-add-to-cart-svg" width="18" height="18">
            <use href="${n}#icon-heroicons-solid_shopping-cart-18x18"></use>
          </svg>
        </button>
      </div>
      <svg class="custom-close-icon" width="28" height="28">
        <use href="${n}#icon-close-sharp"></use>
      </svg>
    `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",n),u(e,".modal-add-to-cart-btn",n),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}async function C(t){for(const e in t)m(e,t[e]);m("page",1),await v()}async function G(){try{const t=await A(),e=document.getElementById("category-select");t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.replace(/_/g," "),e.appendChild(s)})}catch(t){console.error("Error fetching categories:",t)}}async function J(){const t=b();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await G(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await v()}function K(){const t=document.getElementById("search-form"),e=t.elements;t.addEventListener("submit",async o=>{o.preventDefault();const s=e["item-search-value"].value.trim();await C({keyword:s||null})}),t.addEventListener("change",async o=>{if(o.target.id==="category-select"||o.target.id==="sorting-select"){const s={category:e["category-select"].value!=="Show all"?e["category-select"].value:null,byABC:e["sorting-select"].value==="byABC",byPrice:e["sorting-select"].value==="byPrice",byPopularity:e["sorting-select"].value==="byPopularity"};await C(s)}})}document.addEventListener("DOMContentLoaded",()=>{J(),K()});window.onscroll=()=>f();window.addEventListener("scroll",x(f,250)),window.addEventListener("resize",x(f,250));async function f(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,s=window.scrollY,a=e-o/4;s+o>a?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function x(t,e){let o=null;return function(...a){o||(o=setTimeout(()=>{t(...a),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
