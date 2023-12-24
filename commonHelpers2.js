import{i as r,a as p,u as c,g as w,r as C,b as T}from"./assets/local-storage-6f64b94b.js";import{a as h,P as I}from"./assets/vendor-b592f4c5.js";const S="https://food-boutique.b.goit.study/api/products";function _(t,e){return h.get(`${S}`,{params:{page:t,limit:e}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async e=>{e.preventDefault();const s=t.querySelector(".footer-email-input"),i=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}const n={email:i};try{const o=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const a=await o.json();alert(a.message)}else if(o.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(o){alert("Error: "+o.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function e(i){try{const o=(await h.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;console.log(o),t.innerHTML="",o.slice(0,2).forEach(l=>{const d=s(l);t.innerHTML+=d})}catch(n){console.error("Error fetching discount products:",n)}}e();function s(i){return`
        <li class="card-container-list-discount">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <img class="product-image-list-discount" src="${i.img}" alt="${i.name} photo" width=114 height=114 loading="lazy" />
                    </div>
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
                </a>
            </div>
        </li>
    
        `}});const q="https://food-boutique.b.goit.study/api/products/popular";function z(t){const e=document.querySelector(".popular-product-list");t.forEach(s=>{const i=document.createElement("li");i.classList.add("popular-product-item");const n=s.category.split("_").join(" ");i.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${s.img}" alt="${s.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${s.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${n}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${s.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${s.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="${r}#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,e.appendChild(i)})}async function H(){try{return(await h.get(q)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}H().then(t=>{z(t)}).catch(t=>{console.error("Error:",t)});const $=document.getElementById("products-list-container");let y;window.addEventListener("resize",M);function M(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,p().limit!==t&&(c("limit",t),c("page",1),m())}function P(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",s=>{const i=s.currentTarget.dataset.productId;B(i,t)})})}function B(t,e){const i=w().find(o=>o._id===t),n=e.find(o=>o._id===t);i?C(t):n&&T(n),E()}function E(t){const e=w();document.querySelectorAll(".cart-btn-list").forEach(s=>{const i=s.dataset.productId;e.find(o=>o._id===i)?s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${r}#icon-check"></use>
        </svg>
      `:s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `})}function k(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const e=document.createElement("div");e.id="tui-pagination-container",e.className="tui-pagination",$.after(e)}async function m(){const t=p();let e=t.page||1,s=t.limit||6;try{const{data:i}=await _(e,s),{perPage:n,totalPages:o,results:a}=i,l=n*o;$.innerHTML=F(a),P(a),k();const d=document.getElementById("tui-pagination-container");y=new I(d,{totalItems:l,itemsPerPage:s,visiblePages:4,centerAlign:!0,page:e}),y.on("beforeMove",L=>{const f=L.page,u=p(),b=u.limit||6;(f!==u.page||b!==u.limit)&&(c("page",f),c("limit",b),m())}),E()}catch(i){console.error("Error fetching products",i)}}function F(t){const e=`<ul class="card-container-list">${t.map(s=>{const i=s.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${s.img}" alt="${s.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${s.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${i}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Size:</b> ${s.size}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Popularity:</b> ${s.popularity}
                            </p>
                        </div>
                        </a>
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${s.price}</h2>
                            <button class='cart-btn-list' type="button" data-product-id="${s._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{P(t)},0),e}m();window.onscroll=()=>g();window.addEventListener("scroll",v(g,250)),window.addEventListener("resize",v(g,250));async function g(){const t=document.querySelector("body"),e=document.body.offsetHeight,s=window.innerHeight,i=window.scrollY,n=e-s/4;i+s>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function v(t,e){let s=null;return function(...n){s||(s=setTimeout(()=>{t(...n),clearTimeout(s),s=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
