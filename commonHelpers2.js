import"./assets/styles-8194e3e2.js";import{a as m,P as b}from"./assets/vendor-b592f4c5.js";const y="https://food-boutique.b.goit.study/api/products";function v(e,s){return m.get(`${y}`,{params:{page:e,limit:s}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-sub-form");e.addEventListener("submit",async s=>{s.preventDefault();const t=e.querySelector(".footer-email-input"),i=t.value;if(!t.checkValidity()){alert("Please enter a valid email address.");return}const o={email:i};try{const n=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(n.ok){const r=await n.json();alert(r.message)}else if(n.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}})});function w(e){localStorage.setItem("shoppingCart",JSON.stringify(e))}function l(){const e=localStorage.getItem("shoppingCart");return e?JSON.parse(e):[]}function P(e){const s=l(),t=s.findIndex(i=>i._id===e._id);t>-1?s[t].quantity+=1:s.push({...e,quantity:1}),w(s)}const a="/js-product/assets/symbol-defs-a3120aea.svg",I=document.querySelector(".main-box");async function u(e=1){let s;window.innerWidth>=1440?s=9:window.innerWidth>=768?s=8:s=6;try{const{data:t}=await v(e,s),{perPage:i,totalPages:o,results:n}=t,r=i*o;I.innerHTML=C(n)+`
      <div id="tui-pagination-container" class="tui-pagination"></div>
    `;const g=document.getElementById("tui-pagination-container");new b(g,{totalItems:r,itemsPerPage:s,visiblePages:4,centerAlign:!0,currentPage:e}).on("beforeMove",h=>{const f=h.page;u(f)}),p()}catch(t){console.error("Error fetching products",t)}}u();function C(e){const s=`<ul class="card-container-list">${e.map(t=>{const i=t.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${t.img}" alt="${t.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${t.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${i}
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
                                    <use href="${a}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </li>
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(t=>{t.addEventListener("click",i=>{const o=i.currentTarget.dataset.productId,n=e.find(r=>r._id===o);n?S(n):console.error("Product not found for ID:",o)})})},0),s}function S(e,s){l().find(o=>o._id===e._id)?console.log("Product is already in the cart"):(P(e),p())}function p(e){const s=l();document.querySelectorAll(".cart-btn-list").forEach(t=>{const i=t.dataset.productId;s.find(n=>n._id===i)?(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#icon-check"></use>
        </svg>
      `,t.disabled=!0):(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `,t.disabled=!1)})}window.onscroll=()=>c();window.addEventListener("scroll",d(c,250)),window.addEventListener("resize",d(c,250));async function c(){const e=document.querySelector("body"),s=document.body.offsetHeight,t=window.innerHeight,i=window.scrollY,o=s-t/4;i+t>o?e.classList.add("body--no-transparency"):e.classList.remove("body--no-transparency")}function d(e,s){let t=null;return function(...o){t||(t=setTimeout(()=>{e(...o),clearTimeout(t),t=null},s))}}
//# sourceMappingURL=commonHelpers2.js.map
