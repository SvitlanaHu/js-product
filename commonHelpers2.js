import{a as u,i,b as p,d as b,e as m}from"./assets/scrollup-8a4568bf.js";import{a as h,S as d,P as z}from"./assets/vendor-f5f845be.js";const $="https://food-boutique.b.goit.study/api/products";async function q(){try{return(await h.get(`${$}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function k({page:t,limit:e,keyword:o,category:a,byABC:s,byPrice:c,byPopularity:n}){const r={page:t,limit:e,...o&&{keyword:o},...a&&{category:a},...s&&{byABC:s},...c&&{byPrice:c},...n&&{byPopularity:n}};return h.get(`${$}`,{params:r})}async function w(t){try{return(await h.get(`${$}/${t}`)).data}catch(e){throw console.error("Error fetching product by id:",e),e}}const S=document.querySelector(".loader"),_=document.getElementById("main-content");function F(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function B(){S.removeAttribute("hidden"),Array.from(_.children).forEach(t=>{t.querySelector(".search-container")||(t.style.filter="blur(5px) grayscale(1)")})}function A(){S.setAttribute("hidden",""),Array.from(_.children).forEach(t=>{t.style.filter="none"}),F()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(s){try{const n=(await h.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",n.forEach(r=>{const l=o(r);t.innerHTML+=l}),n.forEach(r=>{document.querySelector(`[data-product-id="${r._id}"]`).addEventListener("click",()=>W(r._id,n))}),u(n,".cart-btn-list-discount",i),p(n,".cart-btn-list-discount",i)}catch(c){console.error("Error fetching discount products:",c)}}e();function o(s){const c=s.name,n=12,r=window.innerWidth,l=c.length>n&&r>=1440,E=a(c,n);return`
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
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?c:""}">${E}</h2>
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
        `}function a(s,c){return window.innerWidth>=1440&&s.length>c?`${s.slice(0,c)}...`:s}});const g=document.getElementById("discount-products");g.addEventListener("mouseover",function(){g.style.overflowY="auto"});g.addEventListener("mouseout",function(){g.style.overflowY="hidden"});async function W(t,e){try{const o=await w(t);M(o,e)}catch(o){console.error("Error fetching product details:",o)}}function M(t,e){const o=t.category.split("_").join(" ");d.fire({html:`
        <div class="modal-product-container">
          <div class="modal-image-container">
            <img class="modal-img" src="${t.img}" alt="${t.name}">
          </div>
          <div class="modal-product-info">
            <h2 class="modal-product-title">${t.name}</h2>
            <div class="modal-product-main-info">
              <p class="text-box">
                <span class="modal-product-text">Category:</span> <span class="modal-product-value">${o}</span>
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
              <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${i}#icon-close-sharp"></use>
        </svg>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}const T="https://food-boutique.b.goit.study/api/products/popular";async function D(){try{return(await h.get(`${T}`)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}function H(t){const e=document.querySelector(".popular-product-list");e&&t.forEach(o=>{const a=document.createElement("li");a.classList.add("popular-product-item");const s=o.category.split("_").join(" ");a.innerHTML=`
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
    
      `,e.appendChild(a)}),t.forEach(o=>{document.querySelector(`[data-product-id="${o._id}"]`).addEventListener("click",()=>U(o._id,t))}),u(t,".popular-cart-btn",i),p(t,".popular-cart-btn",i)}D().then(t=>{H(t)}).catch(t=>{console.error("Error:",t)});async function U(t,e){try{const o=await w(t);j(o,e)}catch(o){console.error("Error fetching product details:",o)}}function j(t,e){const o=t.category.split("_").join(" ");d.fire({html:`
        <div class="modal-product-container">
          <div class="modal-image-container">
            <img class="modal-img" src="${t.img}" alt="${t.name}">
          </div>
          <div class="modal-product-info">
            <h2 class="modal-product-title">${t.name}</h2>
            <div class="modal-product-main-info">
              <p class="text-box">
                <span class="modal-product-text">Category:</span> <span class="modal-product-value">${o}</span>
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
              <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </div>
        <svg class="custom-close-icon" width="28" height="28">
          <use href="${i}#icon-close-sharp"></use>
        </svg>
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}const y=document.getElementById("products-list-container"),x=document.querySelector(".no-results-container");let P;window.addEventListener("resize",I);function I(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(m("page",1),m("limit",t),v())}function R(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",y.after(e)}async function v(){I();const t=b();let e=t.page||1,o=t.limit||6;B();try{const a=await k(t),{perPage:s,totalPages:c,results:n}=a.data,r=s*c;if(n.length===0){x.classList.remove("visually-hidden"),y.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}y.innerHTML=Y(n),x.classList.add("visually-hidden"),n.forEach(l=>{document.querySelector(`[data-product-id="${l._id}"]`).addEventListener("click",()=>N(l._id,n))}),O(r,e,o),p(n,".cart-btn-list",i),u(n,".cart-btn-list",i)}catch(a){console.error("Error fetching products",a)}finally{A()}}function O(t,e,o){R();const a=document.getElementById("tui-pagination-container");if(t>o){const s=window.innerWidth<768?2:4;P=new z(a,{totalItems:t,itemsPerPage:o,visiblePages:s,centerAlign:!0,page:e}),P.on("beforeMove",c=>{m("page",c.page),v()})}else a.classList.add("visually-hidden")}function Y(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
        </li>`}).join("")}</ul>`}async function N(t,e){try{B();const o=await w(t);V(o,e)}catch(o){console.error("Error fetching product details:",o)}finally{A()}}function V(t,e){const o=t.category.split("_").join(" ");d.fire({html:`
      <div class="modal-product-container">
        <div class="modal-image-container">
          <img class="modal-img" src="${t.img}" alt="${t.name}">
        </div>
        <div class="modal-product-info">
          <h2 class="modal-product-title">${t.name}</h2>
          <div class="modal-product-main-info">
            <p class="text-box">
              <span class="modal-product-text">Category:</span> <span class="modal-product-value">${o}</span>
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
            <use href="${i}#icon-heroicons-solid_shopping-cart-18x18"></use>
          </svg>
        </button>
      </div>
      <svg class="custom-close-icon" width="28" height="28">
        <use href="${i}#icon-close-sharp"></use>
      </svg>
    `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",i),u(e,".modal-add-to-cart-btn",i),document.querySelector(".custom-close-icon").addEventListener("click",()=>{d.close()})}async function L(t){for(const e in t)m(e,t[e]);m("page",1),await v()}async function G(){try{const t=await q(),e=document.getElementById("category-select");t.forEach(o=>{const a=document.createElement("option");a.value=o,a.textContent=o.replace(/_/g," "),e.appendChild(a)})}catch(t){console.error("Error fetching categories:",t)}}async function J(){const t=b();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await G(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await v()}function K(){const t=document.getElementById("search-form"),e=t.elements,o=e["item-search-value"],a=e["category-select"],s=e["sorting-select"];t.addEventListener("submit",async n=>{n.preventDefault();const r=o.value.trim();await L({keyword:r||null})}),a.addEventListener("change",c),s.addEventListener("change",c),o.addEventListener("input",c);async function c(){const n={keyword:o.value.trim()||null,category:a.value!=="Show all"?a.value:null,byABC:s.value==="byABC",byPrice:s.value==="byPrice",byPopularity:s.value==="byPopularity"};await L(n)}}document.addEventListener("DOMContentLoaded",()=>{J(),K()});window.onscroll=()=>f();window.addEventListener("scroll",C(f,250)),window.addEventListener("resize",C(f,250));async function f(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,a=window.scrollY,s=e-o/4;a+o>s?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function C(t,e){let o=null;return function(...s){o||(o=setTimeout(()=>{t(...s),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
