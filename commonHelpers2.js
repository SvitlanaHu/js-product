import"./assets/styles-8a58b2ce.js";import{a as y,P as $}from"./assets/vendor-b592f4c5.js";const C="https://food-boutique.b.goit.study/api/products";function S(t,e){return y.get(`${C}`,{params:{page:t,limit:e}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async e=>{e.preventDefault();const s=t.querySelector(".footer-email-input"),o=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}const r={email:o};try{const i=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(i.ok){const a=await i.json();alert(a.message)}else if(i.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(i){alert("Error: "+i.message)}})});function L(t){localStorage.setItem("productFilters",JSON.stringify(t))}function u(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function f(t,e){const s=u();s[t]=e,L(s)}function E(t){localStorage.setItem("shoppingCart",JSON.stringify(t))}function p(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}function T(t){const e=p(),s=e.findIndex(o=>o._id===t._id);s>-1?e[s].quantity+=1:e.push({...t,quantity:1}),E(e)}const c="/js-product/assets/symbol-defs-32713cbc.svg",_="https://food-boutique.b.goit.study/api/products/popular";function q(t){const e=document.querySelector(".popular-product-list");t.forEach(s=>{const o=document.createElement("li");o.classList.add("popular-product-item"),o.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${s.img}" alt="${s.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${s.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${s.category}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${s.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${s.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="'${c}'#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,e.appendChild(o)})}async function k(){try{return(await y.get(_)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}k().then(t=>{q(t)}).catch(t=>{console.error("Error:",t)});const F=document.getElementById("products-list-container");let n;async function v(){const t=u();let e=t.page||1,s=t.limit||6;try{const{data:o}=await S(e,s),{perPage:r,totalPages:i,results:a}=o,g=r*i;F.innerHTML=H(a);const P=document.getElementById("tui-pagination-container");n?(n.reset(g),n.movePageTo(e)):(n=new $(P,{totalItems:g,itemsPerPage:s,visiblePages:4,centerAlign:!0,page:e}),n.on("beforeMove",I=>{const h=I.page,l=u(),m=l.limit||6;(h!==l.page||m!==l.limit)&&(f("page",h),f("limit",m),v())})),w()}catch(o){console.error("Error fetching products",o)}}v();function H(t){const e=`<ul class="card-container-list">${t.map(s=>{const o=s.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${s.img}" alt="${s.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${s.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${o}
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
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.dataset.productId,i=t.find(a=>a._id===r);i?x(i):console.error("Product not found for ID:",r)})})},0),e}function x(t,e){p().find(r=>r._id===t._id)?console.log("Product is already in the cart"):(T(t),w())}function w(t){const e=p();document.querySelectorAll(".cart-btn-list").forEach(s=>{const o=s.dataset.productId;e.find(i=>i._id===o)?(s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${c}#icon-check"></use>
        </svg>
      `,s.disabled=!0):(s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${c}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `,s.disabled=!1)})}window.onscroll=()=>d();window.addEventListener("scroll",b(d,250)),window.addEventListener("resize",b(d,250));async function d(){const t=document.querySelector("body"),e=document.body.offsetHeight,s=window.innerHeight,o=window.scrollY,r=e-s/4;o+s>r?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function b(t,e){let s=null;return function(...r){s||(s=setTimeout(()=>{t(...r),clearTimeout(s),s=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
