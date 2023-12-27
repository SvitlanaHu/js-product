import{a as w,i as a,b as E,d as $,e as g}from"./assets/footer-942eabf8.js";import{a as y,P as S}from"./assets/vendor-b592f4c5.js";const L="https://food-boutique.b.goit.study/api/products";async function T(){try{return(await y.get(`${L}/categories`)).data}catch(t){throw console.error("Error fetching categories:",t),t}}function A({page:t,limit:e,keyword:i,category:o,byABC:n,byPrice:s,byPopularity:c}){const r={page:t,limit:e,...i&&{keyword:i},...o&&{category:o},...n&&{byABC:n},...s&&{byPrice:s},...c&&{byPopularity:c}};return y.get(`${L}`,{params:r})}let B=document.querySelector(".top-btn");B.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});window.onscroll=()=>B.style.opacity=window.scrollY>500?1:0;const P=document.querySelector(".loader"),C=document.getElementById("main-content");function F(){const t=document.getElementById("filters-section");t&&t.scrollIntoView({behavior:"smooth"})}function H(){P.removeAttribute("hidden"),C.style.display="none"}function M(){P.setAttribute("hidden",""),C.style.display="block",F()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(n){try{const c=(await y.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",c.forEach(r=>{const l=i(r);t.innerHTML+=l}),w(c,".cart-btn-list-discount",a),E(c,".cart-btn-list-discount",a)}catch(s){console.error("Error fetching discount products:",s)}}e();function i(n){const s=n.name,c=12,r=window.innerWidth,l=s.length>c&&r>=1440,I=o(s,c);return`
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
                        <h2 class="product-name-list-discount${l?" show-full-text":""}" title="${l?s:""}">${I}</h2>
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
        `}function o(n,s){return window.innerWidth>=1440&&n.length>s?`${n.slice(0,s)}...`:n}});const u=document.getElementById("discount-products");u.addEventListener("mouseover",function(){u.style.overflowY="auto"});u.addEventListener("mouseout",function(){u.style.overflowY="hidden"});const p=document.getElementById("products-list-container"),f=document.querySelector(".no-results-container");let v;function _(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",p.after(e)}async function m(){const t=$();let e=t.page||1,i=t.limit||6;H();try{const o=await A(t),{perPage:n,totalPages:s,results:c}=o.data,r=n*s;if(c.length===0){f.classList.remove("visually-hidden"),p.innerHTML="",document.getElementById("tui-pagination-container").classList.add("visually-hidden");return}p.innerHTML=x(c),f.classList.add("visually-hidden"),E(c,".cart-btn-list",a),k(r,e,i),w(c,".cart-btn-list",a)}catch(o){console.error("Error fetching products",o)}finally{M()}}function k(t,e,i){_();const o=document.getElementById("tui-pagination-container");if(t>i){const n=window.innerWidth<768?2:4;v=new S(o,{totalItems:t,itemsPerPage:i,visiblePages:n,centerAlign:!0,page:e}),v.on("beforeMove",s=>{g("page",s.page),m()})}}function x(t){return`<ul class="card-container-list">${t.map(e=>{const i=e.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${e.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${i}
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

            </li>`}).join("")}</ul>`}async function d(t,e){g(t,e),g("page",1),await m()}async function W(){try{const t=await T(),e=document.getElementById("category-select");t.forEach(i=>{const o=document.createElement("option");o.value=i,o.textContent=i.replace(/_/g," "),e.appendChild(o)})}catch(t){console.error("Error fetching categories:",t)}}async function q(){const t=$();if(t.keyword&&(document.getElementById("search-bar-id").value=t.keyword),await W(),t.category&&(document.getElementById("category-select").value=t.category),t.byABC||t.byPrice||t.byPopularity){const e=document.getElementById("sorting-select");e.value=t.byABC?"byABC":t.byPrice?"byPrice":"byPopularity"}await m()}function z(){const t=document.getElementById("search-form"),e=document.getElementById("category-select"),i=document.getElementById("sorting-select");t.addEventListener("submit",async o=>{o.preventDefault();const n=o.target.elements["item-search-value"].value.trim();d("keyword",n||null)}),e.addEventListener("change",o=>{d("category",o.target.value!=="Show all"?o.target.value:null)}),i.addEventListener("change",o=>{const n=o.target.value;d("byABC",n==="byABC"),d("byPrice",n==="byPrice"),d("byPopularity",n==="byPopularity")})}document.addEventListener("DOMContentLoaded",()=>{q(),z()});window.onscroll=()=>h();window.addEventListener("scroll",b(h,250)),window.addEventListener("resize",b(h,250));async function h(){const t=document.querySelector("body"),e=document.body.offsetHeight,i=window.innerHeight,o=window.scrollY,n=e-i/4;o+i>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function b(t,e){let i=null;return function(...n){i||(i=setTimeout(()=>{t(...n),clearTimeout(i),i=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
