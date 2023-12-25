import{i as a,u as c,a as f,b as L,d as T,h as q}from"./assets/local-storage-55954597.js";import{a as b,P as B}from"./assets/vendor-b592f4c5.js";const z="https://food-boutique.b.goit.study/api/products";function H(t,s,e){return b.get(`${z}`,{params:{page:t,limit:s,keyword:e}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async s=>{s.preventDefault();const e=t.querySelector(".footer-email-input"),o=e.value;if(!e.checkValidity()){alert("Please enter a valid email address.");return}const i={email:o};try{const n=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(n.ok){const r=await n.json();alert(r.message)}else if(n.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function s(o){try{const n=(await b.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",n.forEach(r=>{const p=e(r);t.innerHTML+=p})}catch(i){console.error("Error fetching discount products:",i)}}s();function e(o){return`
        <li class="card-container-list-discount" id="${o._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${a}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${o.img}" alt="${o.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                            <h2 class="product-name-list-discount">${o.name}</h2>
                            <h2 class="price-discount">$${o.price}</h2>
                            <button class='cart-btn-list-discount' type="button">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    
        `}});const l=document.getElementById("discount-products");l.addEventListener("mouseover",function(){l.style.overflowY="auto"});l.addEventListener("mouseout",function(){l.style.overflowY="hidden"});const M="https://food-boutique.b.goit.study/api/products/popular";function _(t){const s=document.querySelector(".popular-product-list");t.forEach(e=>{const o=document.createElement("li");o.classList.add("popular-product-item");const i=e.category.split("_").join(" ");o.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${e.img}" alt="${e.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${e.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${i}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${e.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${e.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="${a}#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,s.appendChild(o)})}async function k(){try{return(await b.get(M)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}k().then(t=>{_(t)}).catch(t=>{console.error("Error:",t)});const d=document.getElementById("products-list-container");document.getElementById("search-bar-id");const D=document.getElementById("search-form"),m=document.querySelector(".no-results-container");let E,$=null;D.addEventListener("submit",F);async function F(t){t.preventDefault(),c("page",1);const s=t.target.elements["item-search-value"].value.trim();if($=s,!s)return d.innerHTML="",console.log("Please enter a search query.");try{await u(s)}catch{console.log("Oops! Something went wrong! Try reloading the page!")}}window.addEventListener("resize",j);function j(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,f().limit!==t&&(c("limit",t),c("page",1),u())}function h(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const s=document.createElement("div");s.id="tui-pagination-container",s.className="tui-pagination",d.after(s)}async function u(){const t=f();let s=t.page||1,e=t.limit||6;try{m.classList.add("visually-hidden");const{data:o}=await H(s,e,$),{perPage:i,totalPages:n,results:r}=o,p=i*n;if(r.length===0){h(),console.log(r),m.classList.remove("visually-hidden"),d.innerHTML="",console.log("nothing");return}d.innerHTML=O(r),m.classList.add("visually-hidden"),L(r,".cart-btn-list",a),h();const C=document.getElementById("tui-pagination-container"),I=window.innerWidth<768?2:4;n===1?h():E=new B(C,{totalItems:p,itemsPerPage:e,visiblePages:I,centerAlign:!0,page:s}),E.on("beforeMove",S=>{const v=S.page,g=f(),w=g.limit||6;(v!==g.page||w!==g.limit)&&(c("page",v),c("limit",w),u())}),T(r,".cart-btn-list",a)}catch(o){console.error("Error fetching products",o)}}u();function O(t){const s=`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
                                    <use href="${a}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const i=o.currentTarget.dataset.productId,n=t.find(r=>r._id===i);n?q(n,t):console.error("Product not found for ID:",i)})})},0),L(t),s}window.onscroll=()=>y();window.addEventListener("scroll",P(y,250)),window.addEventListener("resize",P(y,250));async function y(){const t=document.querySelector("body"),s=document.body.offsetHeight,e=window.innerHeight,o=window.scrollY,i=s-e/4;o+e>i?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function P(t,s){let e=null;return function(...i){e||(e=setTimeout(()=>{t(...i),clearTimeout(e),e=null},s))}}
//# sourceMappingURL=commonHelpers2.js.map
