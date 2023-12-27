import{a as E,i as l,b as L,d as $,e as g}from"./assets/popular-5ee110a8.js";import{a as h,P as S}from"./assets/vendor-b592f4c5.js";const P="https://food-boutique.b.goit.study/api/products";async function I(){try{return(await h.get(`${P}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function T({page:t,limit:e,keyword:o,category:s,byABC:n,byPrice:i,byPopularity:c}){const a={page:t,limit:e,...o&&{keyword:o},...s&&{category:s},...n&&{byABC:n},...i&&{byPrice:i},...c&&{byPopularity:c}};return h.get(`${P}`,{params:a})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form"),e=document.querySelector(".success-modal"),o=document.querySelector(".failure-modal"),s=document.querySelectorAll(".close-svg");t.addEventListener("submit",async n=>{n.preventDefault();const i=t.querySelector(".footer-email-input"),c=i.value;if(!i.checkValidity()){alert("Please enter a valid email address.");return}const a={email:c};try{const r=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(r.ok){const f=await r.json();e.classList.add("open")}else if(r.status===409)o.classList.add("open");else throw new Error("Failed to subscribe.")}catch(r){alert("Error: "+r.message)}}),s.forEach(n=>{n.addEventListener("click",function(){o.classList.contains("open")?o.classList.remove("open"):e.classList.contains("open")&&e.classList.remove("open")})})});const B=document.querySelector(".loader"),C=document.getElementById("main-content");function F(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function M(){B.removeAttribute("hidden"),C.style.display="none"}function q(){B.setAttribute("hidden",""),C.style.display="block",F()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(n){try{const c=(await h.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",c.forEach(a=>{const r=o(a);t.innerHTML+=r}),E(c,".cart-btn-list-discount",l),L(c,".cart-btn-list-discount",l)}catch(i){console.error("Error fetching discount products:",i)}}e();function o(n){const i=n.name,c=12,a=window.innerWidth,r=i.length>c&&a>=1440,f=s(i,c);return`
        <li class="card-container-list-discount" id="${n._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${l}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${n.img}" alt="${n.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${r?" show-full-text":""}" title="${r?i:""}">${f}</h2>
                        <h2 class="price-discount">$${n.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${n._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${l}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function s(n,i){return window.innerWidth>=1440&&n.length>i?`${n.slice(0,i)}...`:n}});const u=document.getElementById("discount-products");u.addEventListener("mouseover",function(){u.style.overflowY="auto"});u.addEventListener("mouseout",function(){u.style.overflowY="hidden"});const p=document.getElementById("products-list-container"),v=document.querySelector(".no-results-container");let b;function A(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",p.after(e)}async function y(){const t=$();let e=t.page||1,o=t.limit||6;M();try{const s=await T(t),{perPage:n,totalPages:i,results:c}=s.data,a=n*i;if(c.length===0){v.classList.remove("visually-hidden"),p.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}p.innerHTML=D(c),v.classList.add("visually-hidden"),L(c,".cart-btn-list",l),k(a,e,o),E(c,".cart-btn-list",l)}catch(s){console.error("Error fetching products",s)}finally{q()}}function k(t,e,o){A();const s=document.getElementById("tui-pagination-container");if(t>o){const n=window.innerWidth<768?2:4;b=new S(s,{totalItems:t,itemsPerPage:o,visiblePages:n,centerAlign:!0,page:e}),b.on("beforeMove",i=>{g("page",i.page),y()})}}function D(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
                                    <use href="${l}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>

            </li>`}).join("")}</ul>`}async function d(t,e){g(t,e),g("page",1),await y()}async function H(){try{const t=await I(),e=document.getElementById("category-select");t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.replace(/_/g," "),e.appendChild(s)})}catch(t){console.error("Error fetching categories:",t)}}async function _(){const t=$();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await H(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await y()}function x(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),o=document.getElementById("sorting-select");t.addEventListener("submit",async s=>{s.preventDefault();const n=s.target.elements["item-search-value"].value.trim();d("keyword",n||null)}),e.addEventListener("change",s=>{d("category",s.target.value!=="Show all"?s.target.value:null)}),o.addEventListener("change",s=>{const n=s.target.value;d("byABC",n==="byABC"),d("byPrice",n==="byPrice"),d("byPopularity",n==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{_(),x()});window.onscroll=()=>m();window.addEventListener("scroll",w(m,250)),window.addEventListener("resize",w(m,250));async function m(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,s=window.scrollY,n=e-o/4;s+o>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function w(t,e){let o=null;return function(...n){o||(o=setTimeout(()=>{t(...n),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
