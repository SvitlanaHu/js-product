import"./assets/styles-8a58b2ce.js";import{a as u,P as b}from"./assets/vendor-b592f4c5.js";const y="https://food-boutique.b.goit.study/api/products";function v(s,e){return u.get(`${y}`,{params:{page:s,limit:e}})}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".footer-sub-form");s.addEventListener("submit",async e=>{e.preventDefault();const t=s.querySelector(".footer-email-input"),o=t.value;if(!t.checkValidity()){alert("Please enter a valid email address.");return}const i={email:o};try{const r=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(r.ok){const a=await r.json();alert(a.message)}else if(r.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(r){alert("Error: "+r.message)}})});function w(s){localStorage.setItem("shoppingCart",JSON.stringify(s))}function l(){const s=localStorage.getItem("shoppingCart");return s?JSON.parse(s):[]}function P(s){const e=l(),t=e.findIndex(o=>o._id===s._id);t>-1?e[t].quantity+=1:e.push({...s,quantity:1}),w(e)}const n="/js-product/assets/symbol-defs-32713cbc.svg",$="https://food-boutique.b.goit.study/api/products/popular";function C(s){const e=document.querySelector(".popular-product-list");s.forEach(t=>{const o=document.createElement("li");o.classList.add("popular-product-item"),o.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${t.img}" alt="${t.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${t.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${t.category}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${t.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${t.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="'${n}'#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,e.appendChild(o)})}async function I(){try{return(await u.get($)).data}catch(s){throw console.error("Error fetching popular products:",s),s}}I().then(s=>{C(s)}).catch(s=>{console.error("Error:",s)});const E=document.querySelector(".main-box");async function p(s=1){let e;window.innerWidth>=1440?e=9:window.innerWidth>=768?e=8:e=6;try{const{data:t}=await v(s,e),{perPage:o,totalPages:i,results:r}=t,a=o*i;E.innerHTML=L(r)+`
      <div id="tui-pagination-container" class="tui-pagination"></div>
    `;const h=document.getElementById("tui-pagination-container");new b(h,{totalItems:a,itemsPerPage:e,visiblePages:4,centerAlign:!0,currentPage:s}).on("beforeMove",f=>{const m=f.page;p(m)}),g()}catch(t){console.error("Error fetching products",t)}}p();function L(s){const e=`<ul class="card-container-list">${s.map(t=>{const o=t.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${t.img}" alt="${t.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${t.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${o}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Size:</b> ${t.size}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Popularity:</b> ${t.popularity}
                            </p>
                        </div>
                        </a>
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${t.price}</h2>
                            <button class='cart-btn-list' type="button" data-product-id="${t._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${n}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(t=>{t.addEventListener("click",o=>{const i=o.currentTarget.dataset.productId,r=s.find(a=>a._id===i);r?S(r):console.error("Product not found for ID:",i)})})},0),e}function S(s,e){l().find(i=>i._id===s._id)?console.log("Product is already in the cart"):(P(s),g())}function g(s){const e=l();document.querySelectorAll(".cart-btn-list").forEach(t=>{const o=t.dataset.productId;e.find(r=>r._id===o)?(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `,t.disabled=!0):(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${n}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `,t.disabled=!1)})}window.onscroll=()=>c();window.addEventListener("scroll",d(c,250)),window.addEventListener("resize",d(c,250));async function c(){const s=document.querySelector("body"),e=document.body.offsetHeight,t=window.innerHeight,o=window.scrollY,i=e-t/4;o+t>i?s.classList.add("body--no-transparency"):s.classList.remove("body--no-transparency")}function d(s,e){let t=null;return function(...i){t||(t=setTimeout(()=>{s(...i),clearTimeout(t),t=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
