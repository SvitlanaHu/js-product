import"./assets/styles-3b6f081e.js";import{a as g,P as b}from"./assets/vendor-b592f4c5.js";const h="https://food-boutique.b.goit.study/api/products";function m(e,t){return g.get(`${h}`,{params:{page:e,limit:t}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".footer-sub-form");e.addEventListener("submit",async t=>{t.preventDefault();const s=e.querySelector(".footer-email-input"),n=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}const o={email:n};try{const i=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(i.ok){const a=await i.json();alert(a.message)}else if(i.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(i){alert("Error: "+i.message)}})});const f="/js-product/assets/symbol-defs-a3120aea.svg",y=document.querySelector(".main-box");async function d(){let e=1,t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6;try{const{data:s}=await m(e,t);console.log(s);const{perPage:n,totalPages:o,results:i}=s,a=n*o;console.log(i),c(i),y.innerHTML=c(i)+`
  <div id="tui-pagination-container" class="tui-pagination"></div>
</div>
`;const u=document.getElementById("tui-pagination-container");new b(u,{totalItems:a,itemsPerPage:t,visiblePages:4,centerAlign:!0}).on("change",p=>{d(p)})}catch(s){console.error("Error fetching products",s)}}d();function c(e){return`<ul class="card-container-list">${e.map(t=>{const s=t.category.split("_").join(" ");return`
            <li class="photo-card-list">
                <a class="product-modal-list" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list">
                        <img class="product-image-list" src="${t.img}" alt="${t.name} photo" width=140 height=140 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <h2 class="product-name-list">${t.name}</h2>
                        <div class='product-atributes-list'>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Category:</b> ${s}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Size:</b> ${t.size}
                            </p>
                            <p class="atributes-info-list">
                                <b class="atributes-list">Popularity:</b> ${t.popularity}
                            </p>
                        </div>
                        
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${t.price}</h2>
                            <button class='cart-btn-list' type="button">          
                                <svg class="list-cart-svg-list" width="18" height="18">
                                    <use href="${f}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </li>
        `}).join("")}

	 `}window.onscroll=()=>r();window.addEventListener("scroll",l(r,250)),window.addEventListener("resize",l(r,250));async function r(){const e=document.querySelector("body"),t=document.body.offsetHeight,s=window.innerHeight,n=window.scrollY,o=t-s/4;n+s>o?e.classList.add("body--no-transparency"):e.classList.remove("body--no-transparency")}function l(e,t){let s=null;return function(...o){s||(s=setTimeout(()=>{e(...o),clearTimeout(s),s=null},t))}}
//# sourceMappingURL=commonHelpers2.js.map
