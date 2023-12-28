import{a as d,i,b as u,d as b,e as g}from"./assets/scrollup-bba5a696.js";import{a as m,S as $,P as A}from"./assets/vendor-f5f845be.js";const w="https://food-boutique.b.goit.study/api/products";async function T(){try{return(await m.get(`${w}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function D({page:t,limit:e,keyword:o,category:n,byABC:s,byPrice:c,byPopularity:a}){const r={page:t,limit:e,...o&&{keyword:o},...n&&{category:n},...s&&{byABC:s},...c&&{byPrice:c},...a&&{byPopularity:a}};return m.get(`${w}`,{params:r})}async function E(t){try{return(await m.get(`${w}/${t}`)).data}catch(e){throw console.error("Error fetching product by id:",e),e}}const _=document.querySelector(".loader"),B=document.getElementById("main-content");function F(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function x(){_.removeAttribute("hidden"),B.style.filter="blur(5px) grayscale(1)"}function I(){_.setAttribute("hidden",""),B.style.filter="none",F()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(s){try{const a=(await m.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",a.forEach(r=>{const l=o(r);t.innerHTML+=l}),a.forEach(r=>{document.querySelector(`[data-product-id="${r._id}"]`).addEventListener("click",()=>q(r._id,a))}),d(a,".cart-btn-list-discount",i),u(a,".cart-btn-list-discount",i)}catch(c){console.error("Error fetching discount products:",c)}}e();function o(s){const c=s.name,a=12,r=window.innerWidth,l=c.length>a&&r>=1440,P=n(c,a);return`
        <li class="card-container-list-discount" id="${s._id}" data-product-id="${s._id}">
        <div class="photo-card-list-discount">
                <div class="product-modal-list-discount">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${i}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${s.img}" alt="${s.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?c:""}">${P}</h2>
                        <h2 class="price-discount">$${s.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${s._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function n(s,c){return window.innerWidth>=1440&&s.length>c?`${s.slice(0,c)}...`:s}});const h=document.getElementById("discount-products");h.addEventListener("mouseover",function(){h.style.overflowY="auto"});h.addEventListener("mouseout",function(){h.style.overflowY="hidden"});async function q(t,e){try{const o=await E(t);W(o,e)}catch(o){console.error("Error fetching product details:",o)}}function W(t,e){$.fire({html:`
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
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),u(e,".modal-add-to-cart-btn",i),d(e,".modal-add-to-cart-btn",i)}const H="https://food-boutique.b.goit.study/api/products/popular";async function M(){try{return(await m.get(`${H}`)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}function k(t){const e=document.querySelector(".popular-product-list");e&&t.forEach(o=>{const n=document.createElement("li");n.classList.add("popular-product-item");const s=o.category.split("_").join(" ");n.innerHTML=`
        <a class="popular-modal"  data-product-id="${o._id}">
          <div class="popular-img">
            <img class="popular-photo-item" src="${o.img}" alt="${o.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${o.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${s}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${o.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${o.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button" data-product-id="${o._id}">
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </a>
      `,e.appendChild(n)}),t.forEach(o=>{document.querySelector(`[data-product-id="${o._id}"]`).addEventListener("click",()=>U(o._id,t))}),d(t,".popular-cart-btn",i),u(t,".popular-cart-btn",i)}M().then(t=>{k(t)}).catch(t=>{console.error("Error:",t)});async function U(t,e){try{const o=await E(t);R(o,e)}catch(o){console.error("Error fetching product details:",o)}}function R(t,e){$.fire({html:`
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
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),u(e,".modal-add-to-cart-btn",i),d(e,".modal-add-to-cart-btn",i)}const f=document.getElementById("products-list-container"),L=document.querySelector(".no-results-container");let C;window.addEventListener("resize",z);function z(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(g("page",1),y())}function j(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",f.after(e)}async function y(){z();const t=b();let e=t.page||1,o=t.limit||6;x();try{const n=await D(t),{perPage:s,totalPages:c,results:a}=n.data,r=s*c;if(a.length===0){L.classList.remove("visually-hidden"),f.innerHTML="";return}f.innerHTML=Y(a),L.classList.add("visually-hidden"),a.forEach(l=>{document.querySelector(`[data-product-id="${l._id}"]`).addEventListener("click",()=>N(l._id,a))}),O(r,e,o),u(a,".cart-btn-list",i),d(a,".cart-btn-list",i)}catch(n){console.error("Error fetching products",n)}finally{I()}}function O(t,e,o){j();const n=document.getElementById("tui-pagination-container");if(t>o){const s=window.innerWidth<768?2:4;C=new A(n,{totalItems:t,itemsPerPage:o,visiblePages:s,centerAlign:!0,page:e}),C.on("beforeMove",c=>{g("page",c.page),y()})}}function Y(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
                  <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
                </svg>
              </button>
            </div>
          </div>
        </li>`}).join("")}</ul>`}async function N(t,e){try{x();const o=await E(t);V(o,e)}catch(o){console.error("Error fetching product details:",o)}finally{I()}}function V(t,e){$.fire({html:`
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
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
          </svg>
        </button>
      </div>
    `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),u(e,".modal-add-to-cart-btn",i),d(e,".modal-add-to-cart-btn",i)}async function p(t,e){g(t,e),g("page",1),await y()}async function G(){try{const t=await T(),e=document.getElementById("category-select");t.forEach(o=>{const n=document.createElement("option");n.value=o,n.textContent=o.replace(/_/g," "),e.appendChild(n)})}catch(t){console.error("Error fetching categories:",t)}}async function J(){const t=b();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await G(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await y()}function K(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),o=document.getElementById("sorting-select");t.addEventListener("submit",async n=>{n.preventDefault();const s=n.target.elements["item-search-value"].value.trim();p("keyword",s||null)}),e.addEventListener("change",n=>{p("category",n.target.value!=="Show all"?n.target.value:null)}),o.addEventListener("change",n=>{const s=n.target.value;p("byABC",s==="byABC"),p("byPrice",s==="byPrice"),p("byPopularity",s==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{J(),K()});window.onscroll=()=>v();window.addEventListener("scroll",S(v,250)),window.addEventListener("resize",S(v,250));async function v(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,n=window.scrollY,s=e-o/4;n+o>s?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function S(t,e){let o=null;return function(...s){o||(o=setTimeout(()=>{t(...s),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
