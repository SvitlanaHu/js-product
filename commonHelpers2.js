import{u as w,i as r,a as $,b as d,d as b}from"./assets/local-storage-ce53c924.js";import{a as E,P as q}from"./assets/vendor-b592f4c5.js";const B="https://food-boutique.b.goit.study/api/products";function z(t,s,e){return E.get(`${B}`,{params:{page:t,limit:s,keyword:e}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async s=>{s.preventDefault();const e=t.querySelector(".footer-email-input"),o=e.value;if(!e.checkValidity()){alert("Please enter a valid email address.");return}const i={email:o};try{const n=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(n.ok){const a=await n.json();alert(a.message)}else if(n.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function s(i){try{const a=(await E.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",a.forEach(l=>{const c=e(l);t.innerHTML+=c}),w(a,".cart-btn-list-discount",r),$(a,".cart-btn-list-discount",r)}catch(n){console.error("Error fetching discount products:",n)}}s();function e(i){const n=i.name,a=12,l=window.innerWidth,c=n.length>a&&l>=1440,f=o(n,a);return`
        <li class="card-container-list-discount" id="${i._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${r}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${i.img}" alt="${i.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${c?" show-full-text":""}" title="${c?n:""}">${f}</h2>
                        <h2 class="price-discount">$${i.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${i._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function o(i,n){return window.innerWidth>=1440&&i.length>n?`${i.slice(0,n)}...`:i}});const g=document.getElementById("discount-products");g.addEventListener("mouseover",function(){g.style.overflowY="auto"});g.addEventListener("mouseout",function(){g.style.overflowY="hidden"});document.querySelector(".numbers-of-products");const H="https://food-boutique.b.goit.study/api/products/popular";function M(t){const s=document.querySelector(".popular-product-list");t.forEach(e=>{const o=document.createElement("li");o.classList.add("popular-product-item");const i=e.category.split("_").join(" ");o.innerHTML=`
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
          <button class='popular-cart-btn' type="button" data-product-id="${e._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
        </a>
    `,s.appendChild(o)}),w(t,".popular-cart-btn",r),$(t,".popular-cart-btn",r)}async function W(){try{return(await E.get(H)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}W().then(t=>{M(t)}).catch(t=>{console.error("Error:",t)});const h=document.getElementById("products-list-container");document.getElementById("search-bar-id");const _=document.getElementById("search-form"),u=document.querySelector(".no-results-container");let S,I=null;_.addEventListener("submit",F);async function F(t){t.preventDefault(),d("page",1);const s=t.target.elements["item-search-value"].value.trim();if(I=s,!s)return h.innerHTML="",p(),u.classList.remove("visually-hidden"),console.log("Please enter a search query.");try{await m(s)}catch{console.log("Oops! Something went wrong! Try reloading the page!")}}window.addEventListener("resize",k);function k(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&(d("limit",t),d("page",1),m())}function p(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const s=document.createElement("div");s.id="tui-pagination-container",s.className="tui-pagination",h.after(s)}async function m(){const t=b();let s=t.page||1,e=t.limit||6;try{u.classList.add("visually-hidden");const{data:o}=await z(s,e,I),{perPage:i,totalPages:n,results:a}=o,l=i*n;if(a.length===0){p(),document.getElementById("tui-pagination-container").classList.add("visually-hidden"),console.log(a),u.classList.remove("visually-hidden"),h.innerHTML="",console.log("nothing");return}h.innerHTML=x(a),u.classList.add("visually-hidden"),$(a,".cart-btn-list",r),p();const c=document.getElementById("tui-pagination-container"),f=window.innerWidth<768?2:4;n===1?(p(),c.classList.add("visually-hidden")):S=new q(c,{totalItems:l,itemsPerPage:e,visiblePages:f,centerAlign:!0,page:s}),S.on("beforeMove",L=>{const P=L.page,y=b(),C=y.limit||6;(P!==y.page||C!==y.limit)&&(d("page",P),d("limit",C),m())}),w(a,".cart-btn-list",r)}catch(o){console.error("Error fetching products",o)}}m();function x(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="#">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${e.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${o}
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
        `}).join("")}</ul>`}window.onscroll=()=>v();window.addEventListener("scroll",T(v,250)),window.addEventListener("resize",T(v,250));async function v(){const t=document.querySelector("body"),s=document.body.offsetHeight,e=window.innerHeight,o=window.scrollY,i=s-e/4;o+e>i?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function T(t,s){let e=null;return function(...i){e||(e=setTimeout(()=>{t(...i),clearTimeout(e),e=null},s))}}
//# sourceMappingURL=commonHelpers2.js.map
