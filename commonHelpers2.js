import"./assets/styles-8194e3e2.js";import{a as b,P as m}from"./assets/vendor-b592f4c5.js";const y="https://food-boutique.b.goit.study/api/products";function v(s,e){return b.get(`${y}`,{params:{page:s,limit:e}})}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".footer-sub-form");s.addEventListener("submit",async e=>{e.preventDefault();const t=s.querySelector(".footer-email-input"),i=t.value;if(!t.checkValidity()){alert("Please enter a valid email address.");return}const o={email:i};try{const n=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(n.ok){const r=await n.json();alert(r.message)}else if(n.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}})});function w(s){localStorage.setItem("shoppingCart",JSON.stringify(s))}function l(){const s=localStorage.getItem("shoppingCart");return s?JSON.parse(s):[]}function P(s){const e=l(),t=e.findIndex(i=>i._id===s._id);t>-1?e[t].quantity+=1:e.push({...s,quantity:1}),w(e)}const a="/js-product/assets/symbol-defs-32713cbc.svg",I=document.querySelector(".main-box");async function u(s=1){let e;window.innerWidth>=1440?e=9:window.innerWidth>=768?e=8:e=6;try{const{data:t}=await v(s,e),{perPage:i,totalPages:o,results:n}=t,r=i*o;I.innerHTML=C(n)+`
      <div id="tui-pagination-container" class="tui-pagination"></div>
    `;const g=document.getElementById("tui-pagination-container");new m(g,{totalItems:r,itemsPerPage:e,visiblePages:4,centerAlign:!0,currentPage:s}).on("beforeMove",h=>{const f=h.page;u(f)}),p()}catch(t){console.error("Error fetching products",t)}}u();function C(s){const e=`<ul class="card-container-list">${s.map(t=>{const i=t.category.split("_").join(" ");return`
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
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(t=>{t.addEventListener("click",i=>{const o=i.currentTarget.dataset.productId,n=s.find(r=>r._id===o);n?S(n):console.error("Product not found for ID:",o)})})},0),e}function S(s,e){l().find(o=>o._id===s._id)?console.log("Product is already in the cart"):(P(s),p())}function p(s){const e=l();document.querySelectorAll(".cart-btn-list").forEach(t=>{const i=t.dataset.productId;e.find(n=>n._id===i)?(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#icon-check"></use>
        </svg>
      `,t.disabled=!0):(t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `,t.disabled=!1)})}window.onscroll=()=>c();window.addEventListener("scroll",d(c,250)),window.addEventListener("resize",d(c,250));async function c(){const s=document.querySelector("body"),e=document.body.offsetHeight,t=window.innerHeight,i=window.scrollY,o=e-t/4;i+t>o?s.classList.add("body--no-transparency"):s.classList.remove("body--no-transparency")}function d(s,e){let t=null;return function(...o){t||(t=setTimeout(()=>{s(...o),clearTimeout(t),t=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
