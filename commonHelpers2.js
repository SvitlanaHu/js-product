import"./assets/styles-3b6f081e.js";import{a as m,P as b}from"./assets/vendor-b592f4c5.js";const y="https://food-boutique.b.goit.study/api/products";function v(s,e){return m.get(`${y}`,{params:{page:s,limit:e}})}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".footer-sub-form");s.addEventListener("submit",async e=>{e.preventDefault();const t=s.querySelector(".footer-email-input"),i=t.value;if(!t.checkValidity()){alert("Please enter a valid email address.");return}const n={email:i};try{const o=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const r=await o.json();alert(r.message)}else if(o.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(o){alert("Error: "+o.message)}})});function w(s){localStorage.setItem("shoppingCart",JSON.stringify(s))}function d(){const s=localStorage.getItem("shoppingCart");return s?JSON.parse(s):[]}function P(s){const e=d(),t=e.findIndex(i=>i._id===s._id);t>-1?e[t].quantity+=1:e.push({...s,quantity:1}),w(e)}const a="/js-product/assets/symbol-defs-a3120aea.svg",I=document.querySelector(".main-box");async function u(s=1){let e;window.innerWidth>=1440?e=9:window.innerWidth>=768?e=8:e=6;try{const{data:t}=await v(s,e),{perPage:i,totalPages:n,results:o}=t,r=i*n;I.innerHTML=C(o)+`
      <div id="tui-pagination-container" class="tui-pagination"></div>
    `;const g=document.getElementById("tui-pagination-container");new b(g,{totalItems:r,itemsPerPage:e,visiblePages:4,centerAlign:!0,currentPage:s}).on("beforeMove",h=>{const f=h.page;u(f)}),p()}catch(t){console.error("Error fetching products",t)}}u();function C(s){const e=`<ul class="card-container-list">${s.map(t=>{const i=t.category.split("_").join(" ");return`
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
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(t=>{t.addEventListener("click",i=>{const n=i.currentTarget.dataset.productId,o=s.find(r=>r._id===n);o?S(o):console.error("Product not found for ID:",n)})})},0),e}function S(s,e){P(s),p()}function p(s){const e=d();document.querySelectorAll(".cart-btn-list").forEach(t=>{const i=t.dataset.productId;e.find(o=>o._id===i)?t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#check"></use>
        </svg>
      `:t.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `})}window.onscroll=()=>c();window.addEventListener("scroll",l(c,250)),window.addEventListener("resize",l(c,250));async function c(){const s=document.querySelector("body"),e=document.body.offsetHeight,t=window.innerHeight,i=window.scrollY,n=e-t/4;i+t>n?s.classList.add("body--no-transparency"):s.classList.remove("body--no-transparency")}function l(s,e){let t=null;return function(...n){t||(t=setTimeout(()=>{s(...n),clearTimeout(t),t=null},e))}}
//# sourceMappingURL=commonHelpers2.js.map
