import{i as r,u as c,a as f,b as C,d as T,h as B}from"./assets/local-storage-5985b4da.js";import{a as b,P as q}from"./assets/vendor-b592f4c5.js";const z="https://food-boutique.b.goit.study/api/products";function H(t,s,e){return b.get(`${z}`,{params:{page:t,limit:s,keyword:e}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async s=>{s.preventDefault();const e=t.querySelector(".footer-email-input"),i=e.value;if(!e.checkValidity()){alert("Please enter a valid email address.");return}const o={email:i};try{const n=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(n.ok){const a=await n.json();alert(a.message)}else if(n.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function s(i){try{const n=(await b.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",n.forEach(a=>{const m=e(a);t.innerHTML+=m})}catch(o){console.error("Error fetching discount products:",o)}}s();function e(i){return`
        <li class="card-container-list-discount" id="${i._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${r}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${i.img}" alt="${i.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>

                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                            <h2 class="product-name-list-discount">${i.name}</h2>
                            <h2 class="price-discount">$${i.price}</h2>
                            <button class='cart-btn-list-discount' type="button">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
    
        `}});const u=document.getElementById("discount-products");u.addEventListener("mouseover",function(){u.style.overflowY="auto"});u.addEventListener("mouseout",function(){u.style.overflowY="hidden"});const M="https://food-boutique.b.goit.study/api/products/popular";function _(t){const s=document.querySelector(".popular-product-list");t.forEach(e=>{const i=document.createElement("li");i.classList.add("popular-product-item");const o=e.category.split("_").join(" ");i.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${e.img}" alt="${e.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${e.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${o}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${e.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${e.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="${r}#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,s.appendChild(i)})}async function k(){try{return(await b.get(M)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}k().then(t=>{_(t)}).catch(t=>{console.error("Error:",t)});const p=document.getElementById("products-list-container");document.getElementById("search-bar-id");const D=document.getElementById("search-form"),l=document.querySelector(".no-results-container");let P,I=null;D.addEventListener("submit",F);async function F(t){t.preventDefault(),c("page",1);const s=t.target.elements["item-search-value"].value.trim();if(I=s,!s)return p.innerHTML="",d(),l.classList.remove("visually-hidden"),console.log("Please enter a search query.");try{await g(s)}catch{console.log("Oops! Something went wrong! Try reloading the page!")}}window.addEventListener("resize",j);function j(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,f().limit!==t&&(c("limit",t),c("page",1),g())}function d(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const s=document.createElement("div");s.id="tui-pagination-container",s.className="tui-pagination",p.after(s)}async function g(){const t=f();let s=t.page||1,e=t.limit||6;try{l.classList.add("visually-hidden");const{data:i}=await H(s,e,I),{perPage:o,totalPages:n,results:a}=i,m=o*n;if(a.length===0){d(),document.getElementById("tui-pagination-container").classList.add("visually-hidden"),console.log(a),l.classList.remove("visually-hidden"),p.innerHTML="",console.log("nothing");return}p.innerHTML=O(a),l.classList.add("visually-hidden"),C(a,".cart-btn-list",r),d();const v=document.getElementById("tui-pagination-container"),S=window.innerWidth<768?2:4;n===1?(d(),v.classList.add("visually-hidden")):P=new q(v,{totalItems:m,itemsPerPage:e,visiblePages:S,centerAlign:!0,page:s}),P.on("beforeMove",w=>{const E=w.page,h=f(),L=h.limit||6;(E!==h.page||L!==h.limit)&&(c("page",E),c("limit",L),g())}),T(a,".cart-btn-list",r)}catch(i){console.error("Error fetching products",i)}}g();function O(t){const s=`<ul class="card-container-list">${t.map(e=>{const i=e.category.split("_").join(" ");return`
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
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",i=>{const o=i.currentTarget.dataset.productId,n=t.find(a=>a._id===o);n?B(n,t):console.error("Product not found for ID:",o)})})},0),C(t),s}window.onscroll=()=>y();window.addEventListener("scroll",$(y,250)),window.addEventListener("resize",$(y,250));async function y(){const t=document.querySelector("body"),s=document.body.offsetHeight,e=window.innerHeight,i=window.scrollY,o=s-e/4;i+e>o?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function $(t,s){let e=null;return function(...o){e||(e=setTimeout(()=>{t(...o),clearTimeout(e),e=null},s))}}
//# sourceMappingURL=commonHelpers2.js.map
