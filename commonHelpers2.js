import{i as c,u as d,a as b,b as T,d as S,h as q}from"./assets/local-storage-ee33ca5d.js";import{a as w,P as B}from"./assets/vendor-b592f4c5.js";const z="https://food-boutique.b.goit.study/api/products";function H(t,s,e){return w.get(`${z}`,{params:{page:t,limit:s,keyword:e}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async s=>{s.preventDefault();const e=t.querySelector(".footer-email-input"),i=e.value;if(!e.checkValidity()){alert("Please enter a valid email address.");return}const n={email:i};try{const o=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const r=await o.json();alert(r.message)}else if(o.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(o){alert("Error: "+o.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function s(n){try{const r=(await w.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",r.forEach(l=>{const a=e(l);t.innerHTML+=a})}catch(o){console.error("Error fetching discount products:",o)}}s();function e(n){const o=n.name,r=12,l=window.innerWidth,a=o.length>r&&l>=1440,f=i(o,r);return`
        <li class="card-container-list-discount" id="${n._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${c}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${n.img}" alt="${n.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${a?" show-full-text":""}" title="${a?o:""}">${f}</h2>
                        <h2 class="price-discount">$${n.price}</h2>
                            <button class='cart-btn-list-discount' type="button">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${c}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </li>
        `}function i(n,o){return window.innerWidth>=1440&&n.length>o?`${n.slice(0,o)}...`:n}});const g=document.getElementById("discount-products");g.addEventListener("mouseover",function(){g.style.overflowY="auto"});g.addEventListener("mouseout",function(){g.style.overflowY="hidden"});document.querySelector(".numbers-of-products");const M="https://food-boutique.b.goit.study/api/products/popular";function W(t){const s=document.querySelector(".popular-product-list");t.forEach(e=>{const i=document.createElement("li");i.classList.add("popular-product-item");const n=e.category.split("_").join(" ");i.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${e.img}" alt="${e.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${e.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${n}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${e.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${e.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="${c}#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,s.appendChild(i)})}async function F(){try{return(await w.get(M)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}F().then(t=>{W(t)}).catch(t=>{console.error("Error:",t)});const h=document.getElementById("products-list-container");document.getElementById("search-bar-id");const _=document.getElementById("search-form"),u=document.querySelector(".no-results-container");let $,I=null;_.addEventListener("submit",k);async function k(t){t.preventDefault(),d("page",1);const s=t.target.elements["item-search-value"].value.trim();if(I=s,!s)return h.innerHTML="",p(),u.classList.remove("visually-hidden"),console.log("Please enter a search query.");try{await m(s)}catch{console.log("Oops! Something went wrong! Try reloading the page!")}}window.addEventListener("resize",D);function D(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(d("limit",t),d("page",1),m())}function p(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const s=document.createElement("div");s.id="tui-pagination-container",s.className="tui-pagination",h.after(s)}async function m(){const t=b();let s=t.page||1,e=t.limit||6;try{u.classList.add("visually-hidden");const{data:i}=await H(s,e,I),{perPage:n,totalPages:o,results:r}=i,l=n*o;if(r.length===0){p(),document.getElementById("tui-pagination-container").classList.add("visually-hidden"),console.log(r),u.classList.remove("visually-hidden"),h.innerHTML="",console.log("nothing");return}h.innerHTML=x(r),u.classList.add("visually-hidden"),T(r,".cart-btn-list",c),p();const a=document.getElementById("tui-pagination-container"),f=window.innerWidth<768?2:4;o===1?(p(),a.classList.add("visually-hidden")):$=new B(a,{totalItems:l,itemsPerPage:e,visiblePages:f,centerAlign:!0,page:s}),$.on("beforeMove",E=>{const L=E.page,y=b(),P=y.limit||6;(L!==y.page||P!==y.limit)&&(d("page",L),d("limit",P),m())}),S(r,".cart-btn-list",c)}catch(i){console.error("Error fetching products",i)}}m();function x(t){const s=`<ul class="card-container-list">${t.map(e=>{const i=e.category.split("_").join(" ");return`
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
                                    <use href="${c}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",i=>{const n=i.currentTarget.dataset.productId,o=t.find(r=>r._id===n);o?q(o,t):console.error("Product not found for ID:",n)})})},0),T(t),s}window.onscroll=()=>v();window.addEventListener("scroll",C(v,250)),window.addEventListener("resize",C(v,250));async function v(){const t=document.querySelector("body"),s=document.body.offsetHeight,e=window.innerHeight,i=window.scrollY,n=s-e/4;i+e>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function C(t,s){let e=null;return function(...n){e||(e=setTimeout(()=>{t(...n),clearTimeout(e),e=null},s))}}
//# sourceMappingURL=commonHelpers2.js.map
