import{u as w,i as r,a as $,g as q,b as d,d as y}from"./assets/local-storage-387e6bb1.js";import{a as P,P as B}from"./assets/vendor-b592f4c5.js";const z="https://food-boutique.b.goit.study/api/products";function H(t,s,e){return P.get(`${z}`,{params:{page:t,limit:s,keyword:e}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async s=>{s.preventDefault();const e=t.querySelector(".footer-email-input"),o=e.value;if(!e.checkValidity()){alert("Please enter a valid email address.");return}const n={email:o};try{const i=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const a=await i.json();alert(a.message)}else if(i.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(i){alert("Error: "+i.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function s(n){try{const a=(await P.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;t.innerHTML="",a.forEach(l=>{const c=e(l);t.innerHTML+=c}),w(a,".cart-btn-list-discount",r),$(a,".cart-btn-list-discount",r)}catch(i){console.error("Error fetching discount products:",i)}}s();function e(n){const i=n.name,a=12,l=window.innerWidth,c=i.length>a&&l>=1440,f=o(i,a);return`
        <li class="card-container-list-discount" id="${n._id}">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="#">
                    <div class="img-container-list-discount">
                        <svg width="60" height="60" class="product-image-discount">
                            <use href="${r}#icon-discount-green"></use>
                         </svg>
                        <img class="product-image-list-discount" src="${n.img}" alt="${n.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    </a>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                        <h2 class="product-name-list-discount${c?" show-full-text":""}" title="${c?i:""}">${f}</h2>
                        <h2 class="price-discount">$${n.price}</h2>
                            <button class='cart-btn-list-discount' type="button" data-product-id="${n._id}">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
            </div>
        </li>
        `}function o(n,i){return window.innerWidth>=1440&&n.length>i?`${n.slice(0,i)}...`:n}});const g=document.getElementById("discount-products");g.addEventListener("mouseover",function(){g.style.overflowY="auto"});g.addEventListener("mouseout",function(){g.style.overflowY="hidden"});const M=document.querySelector(".numbers-of-products");function W(){const t=q();M.textContent=t.length}W();const _="https://food-boutique.b.goit.study/api/products/popular";function F(t){const s=document.querySelector(".popular-product-list");t.forEach(e=>{const o=document.createElement("li");o.classList.add("popular-product-item");const n=e.category.split("_").join(" ");o.innerHTML=`
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
          <button class='popular-cart-btn' type="button" data-product-id="${e._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${r}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
        </a>
    `,s.appendChild(o)}),w(t,".popular-cart-btn",r),$(t,".popular-cart-btn",r)}async function x(){try{return(await P.get(_)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}x().then(t=>{F(t)}).catch(t=>{console.error("Error:",t)});const m=document.getElementById("products-list-container");document.getElementById("search-bar-id");const D=document.getElementById("search-form"),u=document.querySelector(".no-results-container");let S,I=null;D.addEventListener("submit",k);async function k(t){t.preventDefault(),d("page",1);const s=t.target.elements["item-search-value"].value.trim();if(I=s,!s)return m.innerHTML="",p(),u.classList.remove("visually-hidden"),console.log("Please enter a search query.");try{await h(s)}catch{console.log("Oops! Something went wrong! Try reloading the page!")}}window.addEventListener("resize",O);function O(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,y().limit!==t&&(d("limit",t),d("page",1),h())}function p(){const t=document.getElementById("tui-pagination-container");t&&t.remove();const s=document.createElement("div");s.id="tui-pagination-container",s.className="tui-pagination",m.after(s)}async function h(){const t=y();let s=t.page||1,e=t.limit||6;try{u.classList.add("visually-hidden");const{data:o}=await H(s,e,I),{perPage:n,totalPages:i,results:a}=o,l=n*i;if(a.length===0){p(),document.getElementById("tui-pagination-container").classList.add("visually-hidden"),console.log(a),u.classList.remove("visually-hidden"),m.innerHTML="",console.log("nothing");return}m.innerHTML=j(a),u.classList.add("visually-hidden"),$(a,".cart-btn-list",r),p();const c=document.getElementById("tui-pagination-container"),f=window.innerWidth<768?2:4;i===1?(p(),c.classList.add("visually-hidden")):S=new B(c,{totalItems:l,itemsPerPage:e,visiblePages:f,centerAlign:!0,page:s}),S.on("beforeMove",E=>{const L=E.page,b=y(),C=b.limit||6;(L!==b.page||C!==b.limit)&&(d("page",L),d("limit",C),h())}),w(a,".cart-btn-list",r)}catch(o){console.error("Error fetching products",o)}}h();function j(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
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
        `}).join("")}</ul>`}window.onscroll=()=>v();window.addEventListener("scroll",T(v,250)),window.addEventListener("resize",T(v,250));async function v(){const t=document.querySelector("body"),s=document.body.offsetHeight,e=window.innerHeight,o=window.scrollY,n=s-e/4;o+e>n?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function T(t,s){let e=null;return function(...n){e||(e=setTimeout(()=>{t(...n),clearTimeout(e),e=null},s))}}
//# sourceMappingURL=commonHelpers2.js.map
