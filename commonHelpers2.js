import{a as p,u as g,g as w,r as C,b as T}from"./assets/local-storage-9fe54653.js";import{a as m,P as I}from"./assets/vendor-b592f4c5.js";const S="https://food-boutique.b.goit.study/api/products";function _(t,o){return m.get(`${S}`,{params:{page:t,limit:o}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async o=>{o.preventDefault();const s=t.querySelector(".footer-email-input"),e=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}const n={email:e};try{const i=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const r=await i.json();alert(r.message)}else if(i.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(i){alert("Error: "+i.message)}})});const c="/js-product/assets/symbol-defs-b78fbdde.svg";document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function o(e){try{const i=(await m.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;console.log(i),t.innerHTML="",i.slice(0,2).forEach(l=>{const d=s(l);t.innerHTML+=d})}catch(n){console.error("Error fetching discount products:",n)}}o();function s(e){return`
        <li class="card-container-list-discount">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <img class="product-image-list-discount" src="${e.img}" alt="${e.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                            <h2 class="product-name-list-discount">${e.name}</h2>
                            <h2 class="price-discount">$${e.price}</h2>
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
    
        `}});const q="https://food-boutique.b.goit.study/api/products/popular";function z(t){const o=document.querySelector(".popular-product-list");t.forEach(s=>{const e=document.createElement("li");e.classList.add("popular-product-item");const n=s.category.split("_").join(" ");e.innerHTML=`
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
<use href="${c}#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,o.appendChild(e)})}async function H(){try{return(await m.get(q)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}H().then(t=>{z(t)}).catch(t=>{console.error("Error:",t)});const M=document.getElementById("products-list-container");let a;window.addEventListener("resize",k);function k(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,p().limit!==t&&(g("limit",t),f())}function P(t,o){const e=w().find(i=>i._id===t),n=o.find(i=>i._id===t);e?C(t):n&&T(n),$()}function $(t){const o=w();document.querySelectorAll(".cart-btn-list").forEach(s=>{const e=s.dataset.productId;o.find(i=>i._id===e)?s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${c}#icon-check"></use>
        </svg>
      `:s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${c}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `})}function E(t){document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",s=>{const e=s.currentTarget.dataset.productId;P(e,t)})})}async function f(){const t=p();let o=t.page||1,s=t.limit||6;try{const{data:e}=await _(o,s),{perPage:n,totalPages:i,results:r}=e,l=n*i;M.innerHTML=B(r),E(r);const d=document.getElementById("tui-pagination-container");a?(a.reset(l),a.movePageTo(o)):(a=new I(d,{totalItems:l,itemsPerPage:s,visiblePages:4,centerAlign:!0,page:o}),a.on("beforeMove",L=>{const b=L.page,u=p(),y=u.limit||6;(b!==u.page||y!==u.limit)&&(g("page",b),g("limit",y),f())})),$()}catch(e){console.error("Error fetching products",e)}}f();function B(t){const o=`<ul class="card-container-list">${t.map(s=>{const e=s.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${s.img}" alt="${s.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${s.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${e}
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
                                    <use href="${c}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(s=>{s.addEventListener("click",e=>{const n=e.currentTarget.dataset.productId,i=t.find(r=>r._id===n);i?P(i,t):console.error("Product not found for ID:",n)})})},0),E(t),o}window.onscroll=()=>h();window.addEventListener("scroll",v(h,250)),window.addEventListener("resize",v(h,250));async function h(){const t=document.querySelector("body"),o=document.body.offsetHeight,s=window.innerHeight,e=window.scrollY,n=o-s/4;e+s>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function v(t,o){let s=null;return function(...n){s||(s=setTimeout(()=>{t(...n),clearTimeout(s),s=null},o))}}
//# sourceMappingURL=commonHelpers2.js.map
