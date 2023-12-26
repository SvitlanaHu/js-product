import{u as y,i as r,a as b,b as L,d as m}from"./assets/symbol-defs-d40a96bb.js";import{a as p,P as B}from"./assets/vendor-b592f4c5.js";const $="https://food-boutique.b.goit.study/api/products";async function C(){try{return(await p.get(`${$}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function I({page:t,limit:e,keyword:n,category:s,byABC:o,byPrice:i,byPopularity:a}){const c={page:t,limit:e,...n&&{keyword:n},...s&&{category:s},...o&&{byABC:o},...i&&{byPrice:i},...a&&{byPopularity:a}};return p.get(`${$}`,{params:c})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async e=>{e.preventDefault();const n=t.querySelector(".footer-email-input"),s=n.value;if(!n.checkValidity()){alert("Please enter a valid email address.");return}const o={email:s};try{const i=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(i.ok){const a=await i.json();alert(a.message)}else if(i.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(i){alert("Error: "+i.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(o){try{const a=(await p.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",a.forEach(c=>{const l=n(c);t.innerHTML+=l}),y(a,".cart-btn-list-discount",r),b(a,".cart-btn-list-discount",r)}catch(i){console.error("Error fetching discount products:",i)}}e();function n(o){const i=o.name,a=12,c=window.innerWidth,l=i.length>a&&c>=1440,P=s(i,a);return`
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
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?i:""}">${P}</h2>
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
        `}function s(o,i){return window.innerWidth>=1440&&o.length>i?`${o.slice(0,i)}...`:o}});const u=document.getElementById("discount-products");u.addEventListener("mouseover",function(){u.style.overflowY="auto"});u.addEventListener("mouseout",function(){u.style.overflowY="hidden"});const S="https://food-boutique.b.goit.study/api/products/popular";function T(t){const e=document.querySelector(".popular-product-list");t.forEach(n=>{const s=document.createElement("li");s.classList.add("popular-product-item");const o=n.category.split("_").join(" ");s.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${n.img}" alt="${n.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${n.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${o}</span></li>
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
    `,e.appendChild(s)}),y(t,".popular-cart-btn",r),b(t,".popular-cart-btn",r)}async function k(){try{return(await p.get(S)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}k().then(t=>{T(t)}).catch(t=>{console.error("Error:",t)});const g=document.getElementById("products-list-container"),v=document.querySelector(".no-results-container");let E;function _(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",g.after(e)}async function f(){const t=L();let e=t.page||1,n=t.limit||6;try{const s=await I(t),{perPage:o,totalPages:i,results:a}=s.data,c=o*i;if(a.length===0){v.classList.remove("visually-hidden"),g.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}g.innerHTML=q(a),v.classList.add("visually-hidden"),b(a,".cart-btn-list",r),M(c,e,n),y(a,".cart-btn-list",r)}catch(s){console.error("Error fetching products",s)}}function M(t,e,n){_();const s=document.getElementById("tui-pagination-container");if(t>n){const o=window.innerWidth<768?2:4;E=new B(s,{totalItems:t,itemsPerPage:n,visiblePages:o,centerAlign:!0,page:e}),E.on("beforeMove",i=>{m("page",i.page),f()})}}function q(t){return`<ul class="card-container-list">${t.map(e=>{const n=e.category.split("_").join(" ");return`
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

            </li>`}).join("")}</ul>`}async function d(t,e){m(t,e),m("page",1),await f()}async function F(){try{const t=await C(),e=document.getElementById("category-select");t.forEach(n=>{const s=document.createElement("option");s.value=n,s.textContent=n.replace(/_/g," "),e.appendChild(s)})}catch(t){console.error("Error fetching categories:",t)}}async function W(){const t=L();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await F(),await f()}function x(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),n=document.getElementById("sorting-select");t.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["item-search-value"].value.trim();d("keyword",o||null)}),e.addEventListener("change",s=>{d("category",s.target.value!=="Show all"?s.target.value:null)}),n.addEventListener("change",s=>{const o=s.target.value;d("byABC",o==="byABC"),d("byPrice",o==="byPrice"),d("byPopularity",o==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{W(),x()});document.getElementById("open-modal-btn").addEventListener("click",function(){document.getElementById("my-modal").classList.add("open")});document.getElementById("close-my-modal-btn").addEventListener("click",function(){document.getElementById("my-modal").classList.remove("open")});window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});window.onscroll=()=>h();window.addEventListener("scroll",w(h,250)),window.addEventListener("resize",w(h,250));async function h(){const t=document.querySelector("body"),e=document.body.offsetHeight,n=window.innerHeight,s=window.scrollY,o=e-n/4;s+n>o?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function w(t,e){let n=null;return function(...o){n||(n=setTimeout(()=>{t(...o),clearTimeout(n),n=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
