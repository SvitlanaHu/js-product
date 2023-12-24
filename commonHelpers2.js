import{i as r,a as p,u as c,b as w,d as C,h as I}from"./assets/local-storage-03e6884f.js";import{a as m,P as T}from"./assets/vendor-b592f4c5.js";const S="https://food-boutique.b.goit.study/api/products";function B(t,o){return m.get(`${S}`,{params:{page:t,limit:o}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async o=>{o.preventDefault();const e=t.querySelector(".footer-email-input"),s=e.value;if(!e.checkValidity()){alert("Please enter a valid email address.");return}const i={email:s};try{const n=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(n.ok){const a=await n.json();alert(a.message)}else if(n.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function o(s){try{const n=(await m.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;console.log(n),t.innerHTML="",n.slice(0,2).forEach(l=>{const d=e(l);t.innerHTML+=d})}catch(i){console.error("Error fetching discount products:",i)}}o();function e(s){return`
        <li class="card-container-list-discount">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <img class="product-image-list-discount" src="${s.img}" alt="${s.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                            <h2 class="product-name-list-discount">${s.name}</h2>
                            <h2 class="price-discount">$${s.price}</h2>
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
    
        `}});const z="https://food-boutique.b.goit.study/api/products/popular";function q(t){const o=document.querySelector(".popular-product-list");t.forEach(e=>{const s=document.createElement("li");s.classList.add("popular-product-item");const i=e.category.split("_").join(" ");s.innerHTML=`
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
<use href="${r}#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,o.appendChild(s)})}async function D(){try{return(await m.get(z)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}D().then(t=>{q(t)}).catch(t=>{console.error("Error:",t)});const P=document.getElementById("products-list-container");let y;window.addEventListener("resize",F);function F(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,p().limit!==t&&(c("limit",t),c("page",1),h())}function H(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const o=document.createElement("div");o.id="tui-pagination-container",o.className="tui-pagination",P.after(o)}async function h(){const t=p();let o=t.page||1,e=t.limit||6;try{const{data:s}=await B(o,e),{perPage:i,totalPages:n,results:a}=s,l=i*n;P.innerHTML=E(a),w(a,".cart-btn-list",r),H();const d=document.getElementById("tui-pagination-container"),$=window.innerWidth<768?2:4;y=new T(d,{totalItems:l,itemsPerPage:e,visiblePages:$,centerAlign:!0,page:o}),y.on("beforeMove",L=>{const f=L.page,u=p(),b=u.limit||6;(f!==u.page||b!==u.limit)&&(c("page",f),c("limit",b),h())}),C(a,".cart-btn-list",r)}catch(s){console.error("Error fetching products",s)}}h();function E(t){const o=`<ul class="card-container-list">${t.map(e=>{const s=e.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${e.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${s}
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
        `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",s=>{const i=s.currentTarget.dataset.productId,n=t.find(a=>a._id===i);n?I(n,t):console.error("Product not found for ID:",i)})})},0),w(t),o}const M=document.getElementById("search-bar-id");let _=[];M.addEventListener("input",k);function k(t){const o=t.target.value.toLowerCase();console.log(t.target.value);const e=_.filter(s=>s.name.toLowerCase().includes(o));console.log(e),E(e)}window.onscroll=()=>g();window.addEventListener("scroll",v(g,250)),window.addEventListener("resize",v(g,250));async function g(){const t=document.querySelector("body"),o=document.body.offsetHeight,e=window.innerHeight,s=window.scrollY,i=o-e/4;s+e>i?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function v(t,o){let e=null;return function(...i){e||(e=setTimeout(()=>{t(...i),clearTimeout(e),e=null},o))}}
//# sourceMappingURL=commonHelpers2.js.map
