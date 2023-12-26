import{a as E,i as l,b as L,d as $,e as g}from"./assets/popular-0ba9e290.js";import{a as m,P as C}from"./assets/vendor-b592f4c5.js";const P="https://food-boutique.b.goit.study/api/products";async function B(){try{return(await m.get(`${P}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function S({page:t,limit:e,keyword:o,category:s,byABC:n,byPrice:i,byPopularity:c}){const r={page:t,limit:e,...o&&{keyword:o},...s&&{category:s},...n&&{byABC:n},...i&&{byPrice:i},...c&&{byPopularity:c}};return m.get(`${P}`,{params:r})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form"),e=document.querySelector(".success-modal"),o=document.querySelector(".failure-modal"),s=document.querySelectorAll(".close-svg");t.addEventListener("submit",async n=>{n.preventDefault();const i=t.querySelector(".footer-email-input"),c=i.value;if(!i.checkValidity()){alert("Please enter a valid email address.");return}const r={email:c};try{const a=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(a.ok){const f=await a.json();e.classList.add("open")}else if(a.status===409)o.classList.add("open");else throw new Error("Failed to subscribe.")}catch(a){alert("Error: "+a.message)}}),s.forEach(n=>{n.addEventListener("click",function(){o.classList.contains("open")?o.classList.remove("open"):e.classList.contains("open")&&e.classList.remove("open")})})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(n){try{const c=(await m.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",c.forEach(r=>{const a=o(r);t.innerHTML+=a}),E(c,".cart-btn-list-discount",l),L(c,".cart-btn-list-discount",l)}catch(i){console.error("Error fetching discount products:",i)}}e();function o(n){const i=n.name,c=12,r=window.innerWidth,a=i.length>c&&r>=1440,f=s(i,c);return`
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
                        <h2 class="product-name-list-discount${a?" show-full-text":""}" title="${a?i:""}">${f}</h2>
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
        `}function s(n,i){return window.innerWidth>=1440&&n.length>i?`${n.slice(0,i)}...`:n}});const u=document.getElementById("discount-products");u.addEventListener("mouseover",function(){u.style.overflowY="auto"});u.addEventListener("mouseout",function(){u.style.overflowY="hidden"});const p=document.getElementById("products-list-container"),v=document.querySelector(".no-results-container");let b;function I(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",p.after(e)}async function y(){const t=$();let e=t.page||1,o=t.limit||6;try{const s=await S(t),{perPage:n,totalPages:i,results:c}=s.data,r=n*i;if(c.length===0){v.classList.remove("visually-hidden"),p.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}p.innerHTML=M(c),v.classList.add("visually-hidden"),L(c,".cart-btn-list",l),T(r,e,o),E(c,".cart-btn-list",l)}catch(s){console.error("Error fetching products",s)}}function T(t,e,o){I();const s=document.getElementById("tui-pagination-container");if(t>o){const n=window.innerWidth<768?2:4;b=new C(s,{totalItems:t,itemsPerPage:o,visiblePages:n,centerAlign:!0,page:e}),b.on("beforeMove",i=>{g("page",i.page),y()})}}function M(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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

            </li>`}).join("")}</ul>`}async function d(t,e){g(t,e),g("page",1),await y()}async function F(){try{const t=await B(),e=document.getElementById("category-select");t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.replace(/_/g," "),e.appendChild(s)})}catch(t){console.error("Error fetching categories:",t)}}async function q(){const t=$();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await F(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await y()}function k(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),o=document.getElementById("sorting-select");t.addEventListener("submit",async s=>{s.preventDefault();const n=s.target.elements["item-search-value"].value.trim();d("keyword",n||null)}),e.addEventListener("change",s=>{d("category",s.target.value!=="Show all"?s.target.value:null)}),o.addEventListener("change",s=>{const n=s.target.value;d("byABC",n==="byABC"),d("byPrice",n==="byPrice"),d("byPopularity",n==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{q(),k()});window.onscroll=()=>h();window.addEventListener("scroll",w(h,250)),window.addEventListener("resize",w(h,250));async function h(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,s=window.scrollY,n=e-o/4;s+o>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function w(t,e){let o=null;return function(...n){o||(o=setTimeout(()=>{t(...n),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
