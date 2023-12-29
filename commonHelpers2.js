import{a as u,i,b as p,d as b,e as m}from"./assets/scrollup-fea7c203.js";import{a as h,S as l,b as $,P as z}from"./assets/vendor-47b962c6.js";const w="https://food-boutique.b.goit.study/api/products";async function k(){try{return(await h.get(`${w}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function F({page:t,limit:e,keyword:o,category:n,byABC:s,byPrice:c,byPopularity:a}){const r={page:t,limit:e,...o&&{keyword:o},...n&&{category:n},...s&&{byABC:s},...c&&{byPrice:c},...a&&{byPopularity:a}};return h.get(`${w}`,{params:r})}async function E(t){try{return(await h.get(`${w}/${t}`)).data}catch(e){throw console.error("Error fetching product by id:",e),e}}const _=document.querySelector(".loader"),x=document.getElementById("main-content");function T(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function A(){_.removeAttribute("hidden"),Array.from(x.children).forEach(t=>{t.querySelector(".search-container")||(t.style.filter="blur(5px) grayscale(1)")})}function I(){_.setAttribute("hidden",""),Array.from(x.children).forEach(t=>{t.style.filter="none"}),T()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(s){try{const a=(await h.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",a.forEach(r=>{const d=o(r);t.innerHTML+=d}),a.forEach(r=>{document.querySelector(`[data-product-id="${r._id}"]`).addEventListener("click",()=>D(r._id,a))}),u(a,".cart-btn-list-discount",i),p(a,".cart-btn-list-discount",i)}catch(c){console.error("Error fetching discount products:",c)}}e();function o(s){const c=s.name,a=12,r=window.innerWidth,d=c.length>a&&r>=1440,P=n(c,a);return`
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
                        <h2 class="product-name-list-discount${d?" show-full-text":""}" title="${d?c:""}">${P}</h2>
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
        `}function n(s,c){return window.innerWidth>=1440&&s.length>c?`${s.slice(0,c)}...`:s}});const g=document.getElementById("discount-products");g.addEventListener("mouseover",function(){g.style.overflowY="auto"});g.addEventListener("mouseout",function(){g.style.overflowY="hidden"});async function D(t,e){try{const o=await E(t);W(o,e)}catch(o){console.error("Error fetching product details:",o)}}function W(t,e){l.fire({html:`
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
              <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${i}#icon-close-sharp"></use>
        </svg>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"},didOpen:o=>{new $(o.querySelector(".modal-product-description"))}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{l.close()})}const H="https://food-boutique.b.goit.study/api/products/popular";async function M(){try{return(await h.get(`${H}`)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}function O(t){const e=document.querySelector(".popular-product-list");e&&t.forEach(o=>{const n=document.createElement("li");n.classList.add("popular-product-item");const s=o.category.split("_").join(" ");n.innerHTML=`
      <div class="popular-modal"  data-product-id="${o._id}">
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
    </div>
    
      `,e.appendChild(n)}),t.forEach(o=>{document.querySelector(`[data-product-id="${o._id}"]`).addEventListener("click",()=>U(o._id,t))}),u(t,".popular-cart-btn",i),p(t,".popular-cart-btn",i)}M().then(t=>{O(t)}).catch(t=>{console.error("Error:",t)});async function U(t,e){try{const o=await E(t);R(o,e)}catch(o){console.error("Error fetching product details:",o)}}function R(t,e){l.fire({html:`
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
              <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${i}#icon-close-sharp"></use>
        </svg>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"},didOpen:o=>{new $(o.querySelector(".modal-product-description"))}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{l.close()})}const v=document.getElementById("products-list-container"),L=document.querySelector(".no-results-container");let C;window.addEventListener("resize",q);function q(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(m("page",1),m("limit",t),y())}function j(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",v.after(e)}async function y(){q();const t=b();let e=t.page||1,o=t.limit||6;A();try{const n=await F(t),{perPage:s,totalPages:c,results:a}=n.data,r=s*c;if(a.length===0){L.classList.remove("visually-hidden"),v.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}v.innerHTML=N(a),L.classList.add("visually-hidden"),a.forEach(d=>{document.querySelector(`[data-product-id="${d._id}"]`).addEventListener("click",()=>V(d._id,a))}),Y(r,e,o),p(a,".cart-btn-list",i),u(a,".cart-btn-list",i)}catch(n){console.error("Error fetching products",n)}finally{I()}}function Y(t,e,o){j();const n=document.getElementById("tui-pagination-container");if(t>o){const s=window.innerWidth<768?2:4;C=new z(n,{totalItems:t,itemsPerPage:o,visiblePages:s,centerAlign:!0,page:e}),C.on("beforeMove",c=>{m("page",c.page),y()})}else n.classList.add("visually-hidden")}function N(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
        </li>`}).join("")}</ul>`}async function V(t,e){try{A();const o=await E(t);G(o,e)}catch(o){console.error("Error fetching product details:",o)}finally{I()}}function G(t,e){l.fire({html:`
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
            <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
          </svg>
        </button>
      </div>
      <svg class="custom-close-icon" width="28" height="28">
        <use href="${i}#icon-close-sharp"></use>
      </svg>
    `,showConfirmButton:!1,customClass:{container:"custom-swal"},didOpen:o=>{new $(o.querySelector(".modal-product-description"))}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{l.close()})}async function S(t){for(const e in t)m(e,t[e]);m("page",1),await y()}async function J(){try{const t=await k(),e=document.getElementById("category-select");t.forEach(o=>{const n=document.createElement("option");n.value=o,n.textContent=o.replace(/_/g," "),e.appendChild(n)})}catch(t){console.error("Error fetching categories:",t)}}async function K(){const t=b();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await J(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await y()}function Q(){const t=document.getElementById("search-form"),e=t.elements,o=e["item-search-value"],n=e["category-select"],s=e["sorting-select"];t.addEventListener("submit",async a=>{a.preventDefault();const r=o.value.trim();await S({keyword:r||null})}),n.addEventListener("change",c),s.addEventListener("change",c),o.addEventListener("input",c);async function c(){const a={keyword:o.value.trim()||null,category:n.value!=="Show all"?n.value:null,byABC:s.value==="byABC",byPrice:s.value==="byPrice",byPopularity:s.value==="byPopularity"};await S(a)}}document.addEventListener("DOMContentLoaded",()=>{K(),Q()});window.onscroll=()=>f();window.addEventListener("scroll",B(f,250)),window.addEventListener("resize",B(f,250));async function f(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,n=window.scrollY,s=e-o/4;n+o>s?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function B(t,e){let o=null;return function(...s){o||(o=setTimeout(()=>{t(...s),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
