import{a as y,i as a,b as f,d as b,e as u}from"./assets/scrollup-e5a186ed.js";import{a as g,P as S}from"./assets/vendor-b592f4c5.js";const L="https://food-boutique.b.goit.study/api/products";async function T(){try{return(await g.get(`${L}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function _({page:t,limit:e,keyword:n,category:s,byABC:o,byPrice:i,byPopularity:r}){const c={page:t,limit:e,...n&&{keyword:n},...s&&{category:s},...o&&{byABC:o},...i&&{byPrice:i},...r&&{byPopularity:r}};return g.get(`${L}`,{params:c})}const P=document.querySelector(".loader"),C=document.getElementById("main-content");function z(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function F(){P.removeAttribute("hidden"),C.style.display="none"}function A(){P.setAttribute("hidden",""),C.style.display="block",z()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(o){try{const r=(await g.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",r.forEach(c=>{const l=n(c);t.innerHTML+=l}),y(r,".cart-btn-list-discount",a),f(r,".cart-btn-list-discount",a)}catch(i){console.error("Error fetching discount products:",i)}}e();function n(o){const i=o.name,r=12,c=window.innerWidth,l=i.length>r&&c>=1440,I=s(i,r);return`
        <li class="card-container-list-discount" id="${o._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${a}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${o.img}" alt="${o.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?i:""}">${I}</h2>
                        <h2 class="price-discount">$${o.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${o._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function s(o,i){return window.innerWidth>=1440&&o.length>i?`${o.slice(0,i)}...`:o}});const p=document.getElementById("discount-products");p.addEventListener("mouseover",function(){p.style.overflowY="auto"});p.addEventListener("mouseout",function(){p.style.overflowY="hidden"});const W="https://food-boutique.b.goit.study/api/products/popular";async function H(){try{return(await g.get(`${W}`)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}function M(t){const e=document.querySelector(".popular-product-list");e&&t.forEach(n=>{const s=document.createElement("li");s.classList.add("popular-product-item");const o=n.category.split("_").join(" ");s.innerHTML=`
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
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
            </svg>
          </button>
        </a>
      `,e.appendChild(s)}),y(t,".popular-cart-btn",a),f(t,".popular-cart-btn",a)}H().then(t=>{M(t)}).catch(t=>{console.error("Error:",t)});const h=document.getElementById("products-list-container"),w=document.querySelector(".no-results-container");let E;window.addEventListener("resize",B);function B(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(u("limit",t),u("page",1))}function x(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",h.after(e)}async function v(){B();const t=b();let e=t.page||1,n=t.limit||6;F();try{const s=await _(t),{perPage:o,totalPages:i,results:r}=s.data,c=o*i;if(r.length===0){w.classList.remove("visually-hidden"),h.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}h.innerHTML=k(r),w.classList.add("visually-hidden"),f(r,".cart-btn-list",a),q(c,e,n),y(r,".cart-btn-list",a)}catch(s){console.error("Error fetching products",s)}finally{A()}}function q(t,e,n){x();const s=document.getElementById("tui-pagination-container");if(t>n){const o=window.innerWidth<768?2:4;E=new S(s,{totalItems:t,itemsPerPage:n,visiblePages:o,centerAlign:!0,page:e}),E.on("beforeMove",i=>{u("page",i.page),v()})}}function k(t){return`<ul class="card-container-list">${t.map(e=>{const n=e.category.split("_").join(" ");return`
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
                                    <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>

            </li>`}).join("")}</ul>`}async function d(t,e){u(t,e),u("page",1),await v()}async function U(){try{const t=await T(),e=document.getElementById("category-select");t.forEach(n=>{const s=document.createElement("option");s.value=n,s.textContent=n.replace(/_/g," "),e.appendChild(s)})}catch(t){console.error("Error fetching categories:",t)}}async function D(){const t=b();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await U(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await v()}function R(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),n=document.getElementById("sorting-select");t.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["item-search-value"].value.trim();d("keyword",o||null)}),e.addEventListener("change",s=>{d("category",s.target.value!=="Show all"?s.target.value:null)}),n.addEventListener("change",s=>{const o=s.target.value;d("byABC",o==="byABC"),d("byPrice",o==="byPrice"),d("byPopularity",o==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{D(),R()});window.onscroll=()=>m();window.addEventListener("scroll",$(m,250)),window.addEventListener("resize",$(m,250));async function m(){const t=document.querySelector("body"),e=document.body.offsetHeight,n=window.innerHeight,s=window.scrollY,o=e-n/4;s+n>o?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function $(t,e){let n=null;return function(...o){n||(n=setTimeout(()=>{t(...o),clearTimeout(n),n=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
