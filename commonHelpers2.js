import{a as y,i as r,b as f,d as $,e as m}from"./assets/symbol-defs-04bf95ba.js";import{a as p,P as B}from"./assets/vendor-b592f4c5.js";const P="https://food-boutique.b.goit.study/api/products";async function C(){try{return(await p.get(`${P}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function I({page:t,limit:e,keyword:o,category:s,byABC:n,byPrice:i,byPopularity:a}){const l={page:t,limit:e,...o&&{keyword:o},...s&&{category:s},...n&&{byABC:n},...i&&{byPrice:i},...a&&{byPopularity:a}};return p.get(`${P}`,{params:l})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form"),e=document.querySelector(".success-modal"),o=document.querySelector(".failure-modal"),s=document.querySelectorAll(".close-svg");t.addEventListener("submit",async n=>{n.preventDefault();const i=t.querySelector(".footer-email-input"),a=i.value;if(!i.checkValidity()){alert("Please enter a valid email address.");return}const l={email:a};try{const c=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(c.ok){const v=await c.json();e.classList.add("open")}else if(c.status===409)o.classList.add("open");else throw new Error("Failed to subscribe.")}catch(c){alert("Error: "+c.message)}}),s.forEach(n=>{n.addEventListener("click",function(){o.classList.contains("open")?o.classList.remove("open"):e.classList.contains("open")&&e.classList.remove("open")})})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(n){try{const a=(await p.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",a.forEach(l=>{const c=o(l);t.innerHTML+=c}),y(a,".cart-btn-list-discount",r),f(a,".cart-btn-list-discount",r)}catch(i){console.error("Error fetching discount products:",i)}}e();function o(n){const i=n.name,a=12,l=window.innerWidth,c=i.length>a&&l>=1440,v=s(i,a);return`
        <li class="card-container-list-discount" id="${n._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${r}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${n.img}" alt="${n.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${c?" show-full-text":""}" title="${c?i:""}">${v}</h2>
                        <h2 class="price-discount">$${n.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${n._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function s(n,i){return window.innerWidth>=1440&&n.length>i?`${n.slice(0,i)}...`:n}});const u=document.getElementById("discount-products");u.addEventListener("mouseover",function(){u.style.overflowY="auto"});u.addEventListener("mouseout",function(){u.style.overflowY="hidden"});const S="https://food-boutique.b.goit.study/api/products/popular";function M(t){const e=document.querySelector(".popular-product-list");t.forEach(o=>{const s=document.createElement("li");s.classList.add("popular-product-item");const n=o.category.split("_").join(" ");s.innerHTML=`
      <a class="popular-modal">
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
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
        </a>
    `,e.appendChild(s)}),y(t,".popular-cart-btn",r),f(t,".popular-cart-btn",r)}async function k(){try{return(await p.get(S)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}k().then(t=>{M(t)}).catch(t=>{console.error("Error:",t)});const g=document.getElementById("products-list-container"),E=document.querySelector(".no-results-container");let w;function T(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",g.after(e)}async function b(){const t=$();let e=t.page||1,o=t.limit||6;try{const s=await I(t),{perPage:n,totalPages:i,results:a}=s.data,l=n*i;if(a.length===0){E.classList.remove("visually-hidden"),g.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}g.innerHTML=q(a),E.classList.add("visually-hidden"),f(a,".cart-btn-list",r),_(l,e,o),y(a,".cart-btn-list",r)}catch(s){console.error("Error fetching products",s)}}function _(t,e,o){T();const s=document.getElementById("tui-pagination-container");if(t>o){const n=window.innerWidth<768?2:4;w=new B(s,{totalItems:t,itemsPerPage:o,visiblePages:n,centerAlign:!0,page:e}),w.on("beforeMove",i=>{m("page",i.page),b()})}}function q(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
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

            </li>`}).join("")}</ul>`}async function d(t,e){m(t,e),m("page",1),await b()}async function F(){try{const t=await C(),e=document.getElementById("category-select");t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.replace(/_/g," "),e.appendChild(s)})}catch(t){console.error("Error fetching categories:",t)}}async function W(){const t=$();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await F(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await b()}function x(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),o=document.getElementById("sorting-select");t.addEventListener("submit",async s=>{s.preventDefault();const n=s.target.elements["item-search-value"].value.trim();d("keyword",n||null)}),e.addEventListener("change",s=>{d("category",s.target.value!=="Show all"?s.target.value:null)}),o.addEventListener("change",s=>{const n=s.target.value;d("byABC",n==="byABC"),d("byPrice",n==="byPrice"),d("byPopularity",n==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{W(),x()});document.getElementById("open-modal-btn").addEventListener("click",z);document.getElementById("close-my-modal-btn").addEventListener("click",H);function z(){document.getElementById("my-modal").classList.add("open")}function H(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});window.onscroll=()=>h();window.addEventListener("scroll",L(h,250)),window.addEventListener("resize",L(h,250));async function h(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,s=window.scrollY,n=e-o/4;s+o>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function L(t,e){let o=null;return function(...n){o||(o=setTimeout(()=>{t(...n),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
