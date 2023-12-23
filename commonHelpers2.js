import"./assets/styles-8194e3e2.js";import{a as g,P as h}from"./assets/vendor-b592f4c5.js";const b="https://food-boutique.b.goit.study/api/products";function m(i,t){return g.get(`${b}`,{params:{page:i,limit:t}})}const f="/js-product/assets/symbol-defs-a3120aea.svg",y=document.querySelector(".main-box");async function l(){let i=1,t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6;try{const{data:s}=await m(i,t);console.log(s);const{perPage:n,totalPages:o,results:e}=s,d=n*o;console.log(e),r(e),y.innerHTML=r(e)+`
  <div id="tui-pagination-container" class="tui-pagination"></div>
</div>
`;const u=document.getElementById("tui-pagination-container");new h(u,{totalItems:d,itemsPerPage:t,visiblePages:4,centerAlign:!0}).on("change",p=>{l(p)})}catch(s){console.error("Error fetching products",s)}}l();function r(i){return`<ul class="card-container-list">${i.map(t=>{const s=t.category.split("_").join(" ");return`
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

	 `}window.onscroll=()=>a();window.addEventListener("scroll",c(a,250)),window.addEventListener("resize",c(a,250));async function a(){const i=document.querySelector("body"),t=document.body.offsetHeight,s=window.innerHeight,n=window.scrollY,o=t-s/4;n+s>o?i.classList.add("body--no-transparency"):i.classList.remove("body--no-transparency")}function c(i,t){let s=null;return function(...o){s||(s=setTimeout(()=>{i(...o),clearTimeout(s),s=null},t))}}
//# sourceMappingURL=commonHelpers2.js.map
