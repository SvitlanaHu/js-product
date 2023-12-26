import{u as y,i as r,a as b,b as $,d as g}from"./assets/symbol-defs-4ca4e526.js";import{a as p,P as C}from"./assets/vendor-b592f4c5.js";const P="https://food-boutique.b.goit.study/api/products";async function B(){try{return(await p.get(`${P}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function S({page:t,limit:e,keyword:s,category:n,byABC:o,byPrice:i,byPopularity:a}){const c={page:t,limit:e,...s&&{keyword:s},...n&&{category:n},...o&&{byABC:o},...i&&{byPrice:i},...a&&{byPopularity:a}};return p.get(`${P}`,{params:c})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async e=>{e.preventDefault();const s=t.querySelector(".footer-email-input"),n=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}const o={email:n};try{const i=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(i.ok){const a=await i.json();alert(a.message)}else if(i.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(i){alert("Error: "+i.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(o){try{const a=(await p.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",a.forEach(c=>{const d=s(c);t.innerHTML+=d}),y(a,".cart-btn-list-discount",r),b(a,".cart-btn-list-discount",r)}catch(i){console.error("Error fetching discount products:",i)}}e();function s(o){const i=o.name,a=12,c=window.innerWidth,d=i.length>a&&c>=1440,L=n(i,a);return`
        <li class="card-container-list-discount" id="${o._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${r}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${o.img}" alt="${o.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${d?" show-full-text":""}" title="${d?i:""}">${L}</h2>
                        <h2 class="price-discount">$${o.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${o._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function n(o,i){return window.innerWidth>=1440&&o.length>i?`${o.slice(0,i)}...`:o}});const u=document.getElementById("discount-products");u.addEventListener("mouseover",function(){u.style.overflowY="auto"});u.addEventListener("mouseout",function(){u.style.overflowY="hidden"});const I="https://food-boutique.b.goit.study/api/products/popular";function T(t){const e=document.querySelector(".popular-product-list");t.forEach(s=>{const n=document.createElement("li");n.classList.add("popular-product-item");const o=s.category.split("_").join(" ");n.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${s.img}" alt="${s.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${s.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${o}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${s.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${s.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button" data-product-id="${s._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
        </a>
    `,e.appendChild(n)}),y(t,".popular-cart-btn",r),b(t,".popular-cart-btn",r)}async function _(){try{return(await p.get(I)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}_().then(t=>{T(t)}).catch(t=>{console.error("Error:",t)});const h=document.getElementById("products-list-container"),v=document.querySelector(".no-results-container");let w;function F(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",h.after(e)}async function f(){const t=$();let e=t.page||1,s=t.limit||6;try{const n=await S(t),{perPage:o,totalPages:i,results:a}=n.data,c=o*i;if(a.length===0){v.classList.remove("visually-hidden"),h.innerHTML="";return}h.innerHTML=q(a),v.classList.add("visually-hidden"),b(a,".cart-btn-list",r),M(c,e,s),y(a,".cart-btn-list",r)}catch(n){console.error("Error fetching products",n)}}function M(t,e,s){F();const n=document.getElementById("tui-pagination-container");if(t>s){const o=window.innerWidth<768?2:4;w=new C(n,{totalItems:t,itemsPerPage:s,visiblePages:o,centerAlign:!0,page:e}),w.on("beforeMove",i=>{g("page",i.page),f()})}}function q(t){return`<ul class="card-container-list">${t.map(e=>{const s=e.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
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
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </li>`}).join("")}</ul>`}async function l(t,e){g(t,e),g("page",1),await f()}async function z(){try{const t=await B(),e=document.getElementById("category-select");t.forEach(s=>{const n=document.createElement("option");n.value=s,n.textContent=s.replace(/_/g," "),e.appendChild(n)})}catch(t){console.error("Error fetching categories:",t)}}async function H(){const t=$();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await z(),await f()}function x(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),s=document.getElementById("sorting-select");t.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.elements["item-search-value"].value.trim();l("keyword",o||null)}),e.addEventListener("change",n=>{l("category",n.target.value!=="Show all"?n.target.value:null)}),s.addEventListener("change",n=>{const o=n.target.value;l("byABC",o==="byABC"),l("byPrice",o==="byPrice"),l("byPopularity",o==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{H(),x()});window.onscroll=()=>m();window.addEventListener("scroll",E(m,250)),window.addEventListener("resize",E(m,250));async function m(){const t=document.querySelector("body"),e=document.body.offsetHeight,s=window.innerHeight,n=window.scrollY,o=e-s/4;n+s>o?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function E(t,e){let s=null;return function(...o){s||(s=setTimeout(()=>{t(...o),clearTimeout(s),s=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
