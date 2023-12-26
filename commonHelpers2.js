import{u as y,i as r,a as b,b as $,d as g}from"./assets/symbol-defs-2b41c213.js";import{a as p,P as C}from"./assets/vendor-b592f4c5.js";const L="https://food-boutique.b.goit.study/api/products";async function B(){try{return(await p.get(`${L}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function I({page:t,limit:e,keyword:n,category:o,byABC:s,byPrice:i,byPopularity:a}){const c={page:t,limit:e,...n&&{keyword:n},...o&&{category:o},...s&&{byABC:s},...i&&{byPrice:i},...a&&{byPopularity:a}};return p.get(`${L}`,{params:c})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async e=>{e.preventDefault();const n=t.querySelector(".footer-email-input"),o=n.value;if(!n.checkValidity()){alert("Please enter a valid email address.");return}const s={email:o};try{const i=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(i.ok){const a=await i.json();alert(a.message)}else if(i.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(i){alert("Error: "+i.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(s){try{const a=(await p.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",a.forEach(c=>{const l=n(c);t.innerHTML+=l}),y(a,".cart-btn-list-discount",r),b(a,".cart-btn-list-discount",r)}catch(i){console.error("Error fetching discount products:",i)}}e();function n(s){const i=s.name,a=12,c=window.innerWidth,l=i.length>a&&c>=1440,P=o(i,a);return`
        <li class="card-container-list-discount" id="${s._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${r}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${s.img}" alt="${s.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?i:""}">${P}</h2>
                        <h2 class="price-discount">$${s.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${s._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function o(s,i){return window.innerWidth>=1440&&s.length>i?`${s.slice(0,i)}...`:s}});const u=document.getElementById("discount-products");u.addEventListener("mouseover",function(){u.style.overflowY="auto"});u.addEventListener("mouseout",function(){u.style.overflowY="hidden"});const S="https://food-boutique.b.goit.study/api/products/popular";function T(t){const e=document.querySelector(".popular-product-list");t.forEach(n=>{const o=document.createElement("li");o.classList.add("popular-product-item");const s=n.category.split("_").join(" ");o.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${n.img}" alt="${n.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${n.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${s}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${n.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${n.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button" data-product-id="${n._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
        </a>
    `,e.appendChild(o)}),y(t,".popular-cart-btn",r),b(t,".popular-cart-btn",r)}async function _(){try{return(await p.get(S)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}_().then(t=>{T(t)}).catch(t=>{console.error("Error:",t)});const h=document.getElementById("products-list-container"),v=document.querySelector(".no-results-container");let w;function F(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",h.after(e)}async function f(){const t=$();let e=t.page||1,n=t.limit||6;try{const o=await I(t),{perPage:s,totalPages:i,results:a}=o.data,c=s*i;if(a.length===0){v.classList.remove("visually-hidden"),h.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}h.innerHTML=q(a),v.classList.add("visually-hidden"),b(a,".cart-btn-list",r),M(c,e,n),y(a,".cart-btn-list",r)}catch(o){console.error("Error fetching products",o)}}function M(t,e,n){F();const o=document.getElementById("tui-pagination-container");if(t>n){const s=window.innerWidth<768?2:4;w=new C(o,{totalItems:t,itemsPerPage:n,visiblePages:s,centerAlign:!0,page:e}),w.on("beforeMove",i=>{g("page",i.page),f()})}}function q(t){return`<ul class="card-container-list">${t.map(e=>{const n=e.category.split("_").join(" ");return`
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
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>

            </li>`}).join("")}</ul>`}async function d(t,e){g(t,e),g("page",1),await f()}async function z(){try{const t=await B(),e=document.getElementById("category-select");t.forEach(n=>{const o=document.createElement("option");o.value=n,o.textContent=n.replace(/_/g," "),e.appendChild(o)})}catch(t){console.error("Error fetching categories:",t)}}async function H(){const t=$();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await z(),await f()}function x(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),n=document.getElementById("sorting-select");t.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["item-search-value"].value.trim();d("keyword",s||null)}),e.addEventListener("change",o=>{d("category",o.target.value!=="Show all"?o.target.value:null)}),n.addEventListener("change",o=>{const s=o.target.value;d("byABC",s==="byABC"),d("byPrice",s==="byPrice"),d("byPopularity",s==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{H(),x()});window.onscroll=()=>m();window.addEventListener("scroll",E(m,250)),window.addEventListener("resize",E(m,250));async function m(){const t=document.querySelector("body"),e=document.body.offsetHeight,n=window.innerHeight,o=window.scrollY,s=e-n/4;o+n>s?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function E(t,e){let n=null;return function(...s){n||(n=setTimeout(()=>{t(...s),clearTimeout(n),n=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
