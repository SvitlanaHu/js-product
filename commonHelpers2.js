import{a as u,i as a,b as p,d as $,e as h}from"./assets/scrollup-f18bc45c.js";import{a as g,S as d,P as z}from"./assets/vendor-f5f845be.js";const w="https://food-boutique.b.goit.study/api/products";async function A(){try{return(await g.get(`${w}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function q({page:t,limit:e,keyword:o,category:s,byABC:n,byPrice:c,byPopularity:i}){const r={page:t,limit:e,...o&&{keyword:o},...s&&{category:s},...n&&{byABC:n},...c&&{byPrice:c},...i&&{byPopularity:i}};return g.get(`${w}`,{params:r})}async function E(t){try{return(await g.get(`${w}/${t}`)).data}catch(e){throw console.error("Error fetching product by id:",e),e}}const x=document.querySelector(".loader"),B=document.getElementById("main-content");function T(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function _(){x.removeAttribute("hidden"),B.style.filter="blur(5px) grayscale(1)"}function I(){x.setAttribute("hidden",""),B.style.filter="none",T()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(n){try{const i=(await g.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",i.forEach(r=>{const l=o(r);t.innerHTML+=l}),i.forEach(r=>{document.querySelector(`[data-product-id="${r._id}"]`).addEventListener("click",()=>k(r._id,i))}),u(i,".cart-btn-list-discount",a),p(i,".cart-btn-list-discount",a)}catch(c){console.error("Error fetching discount products:",c)}}e();function o(n){const c=n.name,i=12,r=window.innerWidth,l=c.length>i&&r>=1440,P=s(c,i);return`
        <li class="card-container-list-discount" id="${n._id}" data-product-id="${n._id}">
        <div class="photo-card-list-discount">
                <div class="product-modal-list-discount">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${a}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${n.img}" alt="${n.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?c:""}">${P}</h2>
                        <h2 class="price-discount">$${n.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${n._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function s(n,c){return window.innerWidth>=1440&&n.length>c?`${n.slice(0,c)}...`:n}});const y=document.getElementById("discount-products");y.addEventListener("mouseover",function(){y.style.overflowY="auto"});y.addEventListener("mouseout",function(){y.style.overflowY="hidden"});async function k(t,e){try{const o=await E(t);D(o,e)}catch(o){console.error("Error fetching product details:",o)}}function D(t,e){d.fire({html:`
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
              <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${a}#icon-close-sharp"></use>
        </svg>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",a),u(e,".modal-add-to-cart-btn",a),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}const F="https://food-boutique.b.goit.study/api/products/popular";async function W(){try{return(await g.get(`${F}`)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}function H(t){const e=document.querySelector(".popular-product-list");e&&t.forEach(o=>{const s=document.createElement("li");s.classList.add("popular-product-item");const n=o.category.split("_").join(" ");s.innerHTML=`
      <div class="popular-modal"  data-product-id="${o._id}">
      <div class="popular-img">
        <img class="popular-photo-item" src="${o.img}" alt="${o.name}" width="56" height="56" loading="lazy">
      </div>  
      <ul class="about-popular">
        <li class="name-popular-product">${o.name}</li>
        <li class="subname-popular-product">Category: <span class="id-subname">${n}</span></li>
        <li class="subname-popular-product">Size: <span class="id-subname">${o.size}</span></li>
        <li class="subname-popular-product">Popularity: <span class="id-subname">${o.popularity}</span></li>
      </ul>
      <button class='popular-cart-btn' type="button" data-product-id="${o._id}">
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      </button>
    </div>
    
      `,e.appendChild(s)}),t.forEach(o=>{document.querySelector(`[data-product-id="${o._id}"]`).addEventListener("click",()=>M(o._id,t))}),u(t,".popular-cart-btn",a),p(t,".popular-cart-btn",a)}W().then(t=>{H(t)}).catch(t=>{console.error("Error:",t)});async function M(t,e){try{const o=await E(t);U(o,e)}catch(o){console.error("Error fetching product details:",o)}}function U(t,e){d.fire({html:`
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
              <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${a}#icon-close-sharp"></use>
        </svg>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",a),u(e,".modal-add-to-cart-btn",a),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}const f=document.getElementById("products-list-container"),L=document.querySelector(".no-results-container");let C;window.addEventListener("resize",R);function R(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,$().limit!==t&&(h("page",1),h("limit",t),v())}function j(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",f.after(e)}async function v(){const t=$();let e=t.page||1,o=t.limit||6;_();try{const s=await q(t),{perPage:n,totalPages:c,results:i}=s.data,r=n*c;if(i.length===0){L.classList.remove("visually-hidden"),f.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}f.innerHTML=Y(i),L.classList.add("visually-hidden"),i.forEach(l=>{document.querySelector(`[data-product-id="${l._id}"]`).addEventListener("click",()=>N(l._id,i))}),O(r,e,o),p(i,".cart-btn-list",a),u(i,".cart-btn-list",a)}catch(s){console.error("Error fetching products",s)}finally{I()}}function O(t,e,o){j();const s=document.getElementById("tui-pagination-container");if(t>o){const n=window.innerWidth<768?2:4;C=new z(s,{totalItems:t,itemsPerPage:o,visiblePages:n,centerAlign:!0,page:e}),C.on("beforeMove",c=>{h("page",c.page),v()})}else s.classList.add("visually-hidden")}function Y(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
                  <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
                </svg>
              </button>
            </div>
          </div>
        </li>`}).join("")}</ul>`}async function N(t,e){try{_();const o=await E(t);V(o,e)}catch(o){console.error("Error fetching product details:",o)}finally{I()}}function V(t,e){d.fire({html:`
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
          <p class="modal-product-description">${t.desc}</p>  
        </div>
      </div>
      <div class="modal-price-button-container">
        <p class="modal-product-price">$${t.price}</p>
        <button class='modal-add-to-cart-btn' type="button" data-product-id="${t._id}">
          Add to 
          <svg class="modal-add-to-cart-svg" width="18" height="18">
            <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
          </svg>
        </button>
      </div>
      <svg class="custom-close-icon" width="28" height="28">
        <use href="${a}#icon-close-sharp"></use>
      </svg>
    `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",a),u(e,".modal-add-to-cart-btn",a),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}async function m(t,e){h(t,e),h("page",1),await v()}async function G(){try{const t=await A(),e=document.getElementById("category-select");t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.replace(/_/g," "),e.appendChild(s)})}catch(t){console.error("Error fetching categories:",t)}}async function J(){const t=$();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await G(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await v()}function K(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),o=document.getElementById("sorting-select");t.addEventListener("submit",async s=>{s.preventDefault();const n=s.target.elements["item-search-value"].value.trim();m("keyword",n||null)}),e.addEventListener("change",s=>{m("category",s.target.value!=="Show all"?s.target.value:null)}),o.addEventListener("change",s=>{const n=s.target.value;m("byABC",n==="byABC"),m("byPrice",n==="byPrice"),m("byPopularity",n==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{J(),K()});window.onscroll=()=>b();window.addEventListener("scroll",S(b,250)),window.addEventListener("resize",S(b,250));async function b(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,s=window.scrollY,n=e-o/4;s+o>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function S(t,e){let o=null;return function(...n){o||(o=setTimeout(()=>{t(...n),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
