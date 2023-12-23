import"./assets/styles-8194e3e2.js";import{a as g,P as h}from"./assets/vendor-b592f4c5.js";const b="https://food-boutique.b.goit.study/api/products";function m(s,t){return g.get(`${b}`,{params:{page:s,limit:t}})}const f=document.querySelector(".main-container");async function l(){let s=1,t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6;try{const{data:i}=await m(s,t);console.log(i);const{perPage:n,totalPages:o,results:e}=i,d=n*o;console.log(e),r(e),f.innerHTML=r(e)+`
  <div id="tui-pagination-container" class="tui-pagination"></div>
</div>
`;const u=document.getElementById("tui-pagination-container");new h(u,{totalItems:d,itemsPerPage:t,visiblePages:4,centerAlign:!0}).on("change",p=>{l(p)})}catch(i){console.error("Error fetching products",i)}}l();function r(s){return`<div class="card-container-list">${s.map(t=>{const i=t.category.split("_").join(" ");return`
            <div class="photo-card-list">
                <a class="product-modal-list" href="МОДАЛЬНЕ ВІКНО">
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
                        
                        <div class="price-and-btn-list">
                            <h2 class="product-price-list">$${t.price}</h2>
                            <button class='cart-btn-list' type="button">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="../img/icone/symbol-defs.svg#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        `}).join("")}

	 `}window.onscroll=()=>a();window.addEventListener("scroll",c(a,250)),window.addEventListener("resize",c(a,250));async function a(){const s=document.querySelector("body"),t=document.body.offsetHeight,i=window.innerHeight,n=window.scrollY,o=t-i/4;n+i>o?s.classList.add("body--no-transparency"):s.classList.remove("body--no-transparency")}function c(s,t){let i=null;return function(...o){i||(i=setTimeout(()=>{s(...o),clearTimeout(i),i=null},t))}}
//# sourceMappingURL=commonHelpers2.js.map
