import{a as u,i,b as p,d as b,e as m}from"./assets/scrollup-fea7c203.js";import{a as h,S as d,b as $,P as q}from"./assets/vendor-47b962c6.js";const w="https://food-boutique.b.goit.study/api/products";async function k(){try{return(await h.get(`${w}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function F({page:t,limit:e,keyword:s,category:o,byABC:a,byPrice:c,byPopularity:n}){const r={page:t,limit:e,...s&&{keyword:s},...o&&{category:o},...a&&{byABC:a},...c&&{byPrice:c},...n&&{byPopularity:n}};return h.get(`${w}`,{params:r})}async function E(t){try{return(await h.get(`${w}/${t}`)).data}catch(e){throw console.error("Error fetching product by id:",e),e}}const _=document.querySelector(".loader"),B=document.getElementById("main-content");function W(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function z(){_.removeAttribute("hidden"),Array.from(B.children).forEach(t=>{t.querySelector(".search-container")||(t.style.filter="blur(5px) grayscale(1)")})}function A(){_.setAttribute("hidden",""),Array.from(B.children).forEach(t=>{t.style.filter="none"}),W()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(a){try{const n=(await h.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",n.forEach(r=>{const l=s(r);t.innerHTML+=l}),n.forEach(r=>{document.querySelector(`[data-product-id="${r._id}"]`).addEventListener("click",()=>M(r._id,n))}),u(n,".cart-btn-list-discount",i),p(n,".cart-btn-list-discount",i)}catch(c){console.error("Error fetching discount products:",c)}}e();function s(a){const c=a.name,n=12,r=window.innerWidth,l=c.length>n&&r>=1440,x=o(c,n);return`
        <li class="card-container-list-discount" id="${a._id}" data-product-id="${a._id}">
        <div class="photo-card-list-discount">
                <div class="product-modal-list-discount">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${i}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${a.img}" alt="${a.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?c:""}">${x}</h2>
                        <h2 class="price-discount">$${a.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${a._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function o(a,c){return window.innerWidth>=1440&&a.length>c?`${a.slice(0,c)}...`:a}});const g=document.getElementById("discount-products");g.addEventListener("mouseover",function(){g.style.overflowY="auto"});g.addEventListener("mouseout",function(){g.style.overflowY="hidden"});async function M(t,e){try{const s=await E(t);T(s,e)}catch(s){console.error("Error fetching product details:",s)}}function T(t,e){const s=t.category.split("_").join(" ");d.fire({html:`
        <div class="modal-product-container">
          <div class="modal-image-container">
            <img src="${t.img}" alt="${t.name}">
          </div>
          <div class="modal-product-info">
            <h2 class="modal-product-title">${t.name}</h2>

            <div class="modal-product-main-info">
              <p class="text-box">
                <span class="modal-product-text">Category:</span> <span class="modal-product-value" >${s}</span>
              </p>
              <p class="text-box">
                <span class="modal-product-text">Size:</span> <span class="modal-product-value">${t.size}</span>
              </p>
              <p class="text-box">
                <span class="modal-product-text">Popularity:</span> <span class="modal-product-value">${t.popularity}</span>
              </p>
            </div>
            <p id="modal-product-description" class="modal-product-description">${t.desc}</p>  
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
      `,showConfirmButton:!1,customClass:{container:"custom-swal"},didOpen:o=>{new $(o.querySelector(".modal-product-description"))}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}const D="https://food-boutique.b.goit.study/api/products/popular";async function H(){try{return(await h.get(`${D}`)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}function U(t){const e=document.querySelector(".popular-product-list");e&&t.forEach(s=>{const o=document.createElement("li");o.classList.add("popular-product-item");const a=s.category.split("_").join(" ");o.innerHTML=`
      <div class="popular-modal"  data-product-id="${s._id}">
      <div class="popular-img">
        <img class="popular-photo-item" src="${s.img}" alt="${s.name}" width="56" height="56" loading="lazy">
      </div>  
      <ul class="about-popular">
        <li class="name-popular-product">${s.name}</li>
        <li class="subname-popular-product">Category: <span class="id-subname">${a}</span></li>
        <li class="subname-popular-product">Size: <span class="id-subname">${s.size}</span></li>
        <li class="subname-popular-product">Popularity: <span class="id-subname">${s.popularity}</span></li>
      </ul>
      <button class='popular-cart-btn' type="button" data-product-id="${s._id}">
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      </button>
    </div>
    
      `,e.appendChild(o)}),t.forEach(s=>{document.querySelector(`[data-product-id="${s._id}"]`).addEventListener("click",()=>j(s._id,t))}),u(t,".popular-cart-btn",i),p(t,".popular-cart-btn",i)}H().then(t=>{U(t)}).catch(t=>{console.error("Error:",t)});async function j(t,e){try{const s=await E(t);O(s,e)}catch(s){console.error("Error fetching product details:",s)}}function O(t,e){const s=t.category.split("_").join(" ");d.fire({html:`
        <div class="modal-product-container">
          <div class="modal-image-container">
            <img src="${t.img}" alt="${t.name}">
          </div>
          <div class="modal-product-info">
            <h2 class="modal-product-title">${t.name}</h2>
            <div class="modal-product-main-info">
              <p class="text-box">
                <span class="modal-product-text">Category:</span> <span class="modal-product-value" >${s}</span>
              </p>
              <p class="text-box">
                <span class="modal-product-text">Size:</span> <span class="modal-product-value">${t.size}</span>
              </p>
              <p class="text-box">
                <span class="modal-product-text">Popularity:</span> <span class="modal-product-value">${t.popularity}</span>
              </p>
            </div>
            <p id="modal-product-description" class="modal-product-description">${t.desc}</p>  
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
      `,showConfirmButton:!1,customClass:{container:"custom-swal"},didOpen:o=>{new $(o.querySelector(".modal-product-description"))}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}const v=document.getElementById("products-list-container"),P=document.querySelector(".no-results-container");let L;window.addEventListener("resize",I);function I(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(m("page",1),m("limit",t),y())}function R(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",v.after(e)}async function y(){I();const t=b();let e=t.page||1,s=t.limit||6;z();try{const o=await F(t),{perPage:a,totalPages:c,results:n}=o.data,r=a*c;if(n.length===0){P.classList.remove("visually-hidden"),v.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}v.innerHTML=N(n),P.classList.add("visually-hidden"),n.forEach(l=>{document.querySelector(`[data-product-id="${l._id}"]`).addEventListener("click",()=>V(l._id,n))}),Y(r,e,s),p(n,".cart-btn-list",i),u(n,".cart-btn-list",i)}catch(o){console.error("Error fetching products",o)}finally{A()}}function Y(t,e,s){R();const o=document.getElementById("tui-pagination-container");if(t>s){const a=window.innerWidth<768?2:4;L=new q(o,{totalItems:t,itemsPerPage:s,visiblePages:a,centerAlign:!0,page:e}),L.on("beforeMove",c=>{m("page",c.page),y()})}else o.classList.add("visually-hidden")}function N(t){return`<ul class="card-container-list">${t.map(e=>{const s=e.category.split("_").join(" ");return`
        <li class="photo-card-list" data-product-id="${e._id}">
          <div class="img-container-list">
            <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
          </div>
          <div class="product-info-list">
            <h2 class="product-name-list">${e.name}</h2>
            <div class='product-atributes-list'>
              <p class="atributes-info-list">
                <b class="atributes-list">Category:</b> ${s}
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
        </li>`}).join("")}</ul>`}async function V(t,e){try{z();const s=await E(t);G(s,e)}catch(s){console.error("Error fetching product details:",s)}finally{A()}}function G(t,e){t.category.split("_").join(" "),d.fire({html:`
      <div class="modal-product-container">
        <div class="modal-image-container">
          <img src="${t.img}" alt="${t.name}">
        </div>
        <div class="modal-product-info">
          <h2 class="modal-product-title">${t.name}</h2>
          <div class="modal-product-main-info">
            <p class="text-box">
              <span class="modal-product-text">Category:</span> <span class="modal-product-value" >${ategoryWithoutUnderscoreModal}</span>
            </p>
            <p class="text-box">
              <span class="modal-product-text">Size:</span> <span class="modal-product-value">${t.size}</span>
            </p>
            <p class="text-box">
              <span class="modal-product-text">Popularity:</span> <span class="modal-product-value">${t.popularity}</span>
            </p>
          </div>
          <p id="modal-product-description" class="modal-product-description">${t.desc}</p>  
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
    `,showConfirmButton:!1,customClass:{container:"custom-swal"},didOpen:s=>{new $(s.querySelector(".modal-product-description"))}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}async function C(t){for(const e in t)m(e,t[e]);m("page",1),await y()}async function J(){try{const t=await k(),e=document.getElementById("category-select");t.forEach(s=>{const o=document.createElement("option");o.value=s,o.textContent=s.replace(/_/g," "),e.appendChild(o)})}catch(t){console.error("Error fetching categories:",t)}}async function K(){const t=b();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await J(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await y()}function Q(){const t=document.getElementById("search-form"),e=t.elements,s=e["item-search-value"],o=e["category-select"],a=e["sorting-select"];t.addEventListener("submit",async n=>{n.preventDefault();const r=s.value.trim();await C({keyword:r||null})}),o.addEventListener("change",c),a.addEventListener("change",c),s.addEventListener("input",c);async function c(){const n={keyword:s.value.trim()||null,category:o.value!=="Show all"?o.value:null,byABC:a.value==="byABC",byPrice:a.value==="byPrice",byPopularity:a.value==="byPopularity"};await C(n)}}document.addEventListener("DOMContentLoaded",()=>{K(),Q()});window.onscroll=()=>f();window.addEventListener("scroll",S(f,250)),window.addEventListener("resize",S(f,250));async function f(){const t=document.querySelector("body"),e=document.body.offsetHeight,s=window.innerHeight,o=window.scrollY,a=e-s/4;o+s>a?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function S(t,e){let s=null;return function(...a){s||(s=setTimeout(()=>{t(...a),clearTimeout(s),s=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
