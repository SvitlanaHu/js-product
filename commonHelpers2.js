import{a as u,i as a,b as p,d as b,e as h}from"./assets/scrollup-4a865553.js";import{a as g,S as l,P as A}from"./assets/vendor-f5f845be.js";const $="https://food-boutique.b.goit.study/api/products";async function q(){try{return(await g.get(`${$}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function T({page:t,limit:e,keyword:o,category:n,byABC:s,byPrice:c,byPopularity:i}){const r={page:t,limit:e,...o&&{keyword:o},...n&&{category:n},...s&&{byABC:s},...c&&{byPrice:c},...i&&{byPopularity:i}};return g.get(`${$}`,{params:r})}async function w(t){try{return(await g.get(`${$}/${t}`)).data}catch(e){throw console.error("Error fetching product by id:",e),e}}const B=document.querySelector(".loader"),_=document.getElementById("main-content");function k(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function x(){B.removeAttribute("hidden"),_.style.filter="blur(5px) grayscale(1)"}function I(){B.setAttribute("hidden",""),_.style.filter="none",k()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(s){try{const i=(await g.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",i.forEach(r=>{const d=o(r);t.innerHTML+=d}),i.forEach(r=>{document.querySelector(`[data-product-id="${r._id}"]`).addEventListener("click",()=>D(r._id,i))}),u(i,".cart-btn-list-discount",a),p(i,".cart-btn-list-discount",a)}catch(c){console.error("Error fetching discount products:",c)}}e();function o(s){const c=s.name,i=12,r=window.innerWidth,d=c.length>i&&r>=1440,P=n(c,i);return`
        <li class="card-container-list-discount" id="${s._id}" data-product-id="${s._id}">
        <div class="photo-card-list-discount">
                <div class="product-modal-list-discount">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${a}#icon-discount-green"></use>
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
                                    <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function n(s,c){return window.innerWidth>=1440&&s.length>c?`${s.slice(0,c)}...`:s}});const y=document.getElementById("discount-products");y.addEventListener("mouseover",function(){y.style.overflowY="auto"});y.addEventListener("mouseout",function(){y.style.overflowY="hidden"});async function D(t,e){try{const o=await w(t);F(o,e)}catch(o){console.error("Error fetching product details:",o)}}function F(t,e){l.fire({html:`
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
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",a),u(e,".modal-add-to-cart-btn",a),document.querySelector(".custom-close-icon").addEventListener("click",()=>{l.close()})}const W="https://food-boutique.b.goit.study/api/products/popular";async function H(){try{return(await g.get(`${W}`)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}function M(t){const e=document.querySelector(".popular-product-list");e&&t.forEach(o=>{const n=document.createElement("li");n.classList.add("popular-product-item");const s=o.category.split("_").join(" ");n.innerHTML=`
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
          <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      </button>
    </div>
    
      `,e.appendChild(n)}),t.forEach(o=>{document.querySelector(`[data-product-id="${o._id}"]`).addEventListener("click",()=>U(o._id,t))}),u(t,".popular-cart-btn",a),p(t,".popular-cart-btn",a)}H().then(t=>{M(t)}).catch(t=>{console.error("Error:",t)});async function U(t,e){try{const o=await w(t);R(o,e)}catch(o){console.error("Error fetching product details:",o)}}function R(t,e){l.fire({html:`
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
      `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",a),u(e,".modal-add-to-cart-btn",a),document.querySelector(".custom-close-icon").addEventListener("click",()=>{l.close()})}const v=document.getElementById("products-list-container"),L=document.querySelector(".no-results-container");let C;window.addEventListener("resize",z);function z(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(h("page",1),h("limit",t))}function j(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",v.after(e)}async function E(){z();const t=b();let e=t.page||1,o=t.limit||6;x();try{const n=await T(t),{perPage:s,totalPages:c,results:i}=n.data,r=s*c;if(i.length===0){L.classList.remove("visually-hidden"),v.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}v.innerHTML=Y(i),L.classList.add("visually-hidden"),i.forEach(d=>{document.querySelector(`[data-product-id="${d._id}"]`).addEventListener("click",()=>N(d._id,i))}),O(r,e,o),p(i,".cart-btn-list",a),u(i,".cart-btn-list",a)}catch(n){console.error("Error fetching products",n)}finally{I()}}function O(t,e,o){j();const n=document.getElementById("tui-pagination-container");if(t>o){const s=window.innerWidth<768?2:4;C=new A(n,{totalItems:t,itemsPerPage:o,visiblePages:s,centerAlign:!0,page:e}),C.on("beforeMove",c=>{h("page",c.page),E()})}}function Y(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
        </li>`}).join("")}</ul>`}async function N(t,e){try{x();const o=await w(t);V(o,e)}catch(o){console.error("Error fetching product details:",o)}finally{I()}}function V(t,e){l.fire({html:`
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
    `,showConfirmButton:!1,customClass:{container:"custom-swal"}}),p(e,".modal-add-to-cart-btn",a),u(e,".modal-add-to-cart-btn",a),document.querySelector(".custom-close-icon").addEventListener("click",()=>{l.close()})}async function m(t,e){h(t,e),h("page",1),await E()}async function G(){try{const t=await q(),e=document.getElementById("category-select");t.forEach(o=>{const n=document.createElement("option");n.value=o,n.textContent=o.replace(/_/g," "),e.appendChild(n)})}catch(t){console.error("Error fetching categories:",t)}}async function J(){const t=b();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await G(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await E()}function K(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),o=document.getElementById("sorting-select");t.addEventListener("submit",async n=>{n.preventDefault();const s=n.target.elements["item-search-value"].value.trim();m("keyword",s||null)}),e.addEventListener("change",n=>{m("category",n.target.value!=="Show all"?n.target.value:null)}),o.addEventListener("change",n=>{const s=n.target.value;m("byABC",s==="byABC"),m("byPrice",s==="byPrice"),m("byPopularity",s==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{J(),K()});window.onscroll=()=>f();window.addEventListener("scroll",S(f,250)),window.addEventListener("resize",S(f,250));async function f(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,n=window.scrollY,s=e-o/4;n+o>s?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function S(t,e){let o=null;return function(...s){o||(o=setTimeout(()=>{t(...s),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
