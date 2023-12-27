import{a as E,i as a,b as L,d as y,e as u}from"./assets/scrollup-d552af36.js";import{a as f,P as I}from"./assets/vendor-b592f4c5.js";const $="https://food-boutique.b.goit.study/api/products";async function S(){try{return(await f.get(`${$}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function T({page:t,limit:e,keyword:o,category:i,byABC:n,byPrice:s,byPopularity:c}){const r={page:t,limit:e,...o&&{keyword:o},...i&&{category:i},...n&&{byABC:n},...s&&{byPrice:s},...c&&{byPopularity:c}};return f.get(`${$}`,{params:r})}const P=document.querySelector(".loader"),B=document.getElementById("main-content");function F(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function A(){P.removeAttribute("hidden"),B.style.display="none"}function W(){P.setAttribute("hidden",""),B.style.display="block",F()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(n){try{const c=(await f.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",c.forEach(r=>{const l=o(r);t.innerHTML+=l}),E(c,".cart-btn-list-discount",a),L(c,".cart-btn-list-discount",a)}catch(s){console.error("Error fetching discount products:",s)}}e();function o(n){const s=n.name,c=12,r=window.innerWidth,l=s.length>c&&r>=1440,C=i(s,c);return`
        <li class="card-container-list-discount" id="${n._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${a}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${n.img}" alt="${n.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?s:""}">${C}</h2>
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
        `}function i(n,s){return window.innerWidth>=1440&&n.length>s?`${n.slice(0,s)}...`:n}});const g=document.getElementById("discount-products");g.addEventListener("mouseover",function(){g.style.overflowY="auto"});g.addEventListener("mouseout",function(){g.style.overflowY="hidden"});const h=document.getElementById("products-list-container"),v=document.querySelector(".no-results-container");let b;window.addEventListener("resize",z);function z(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,y().limit!==t&&(u("limit",t),u("page",1),p())}function H(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",h.after(e)}async function p(){const t=y();let e=t.page||1,o=t.limit||6;A();try{const i=await T(t),{perPage:n,totalPages:s,results:c}=i.data,r=n*s;if(c.length===0){v.classList.remove("visually-hidden"),h.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}h.innerHTML=_(c),v.classList.add("visually-hidden"),L(c,".cart-btn-list",a),M(r,e,o),E(c,".cart-btn-list",a)}catch(i){console.error("Error fetching products",i)}finally{W()}}function M(t,e,o){H();const i=document.getElementById("tui-pagination-container");if(t>o){const n=window.innerWidth<768?2:4;b=new I(i,{totalItems:t,itemsPerPage:o,visiblePages:n,centerAlign:!0,page:e}),b.on("beforeMove",s=>{u("page",s.page),p()})}}function _(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
                                    <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>

            </li>`}).join("")}</ul>`}async function d(t,e){u(t,e),u("page",1),await p()}async function x(){try{const t=await S(),e=document.getElementById("category-select");t.forEach(o=>{const i=document.createElement("option");i.value=o,i.textContent=o.replace(/_/g," "),e.appendChild(i)})}catch(t){console.error("Error fetching categories:",t)}}async function k(){const t=y();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await x(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await p()}function q(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),o=document.getElementById("sorting-select");t.addEventListener("submit",async i=>{i.preventDefault();const n=i.target.elements["item-search-value"].value.trim();d("keyword",n||null)}),e.addEventListener("change",i=>{d("category",i.target.value!=="Show all"?i.target.value:null)}),o.addEventListener("change",i=>{const n=i.target.value;d("byABC",n==="byABC"),d("byPrice",n==="byPrice"),d("byPopularity",n==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{k(),q()});window.onscroll=()=>m();window.addEventListener("scroll",w(m,250)),window.addEventListener("resize",w(m,250));async function m(){const t=document.querySelector("body"),e=document.body.offsetHeight,o=window.innerHeight,i=window.scrollY,n=e-o/4;i+o>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function w(t,e){let o=null;return function(...n){o||(o=setTimeout(()=>{t(...n),clearTimeout(o),o=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
