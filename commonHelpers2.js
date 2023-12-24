import{i as l}from"./assets/products-list-eefdb7dd.js";import{a as d}from"./assets/vendor-b592f4c5.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async i=>{i.preventDefault();const s=t.querySelector(".footer-email-input"),o=s.value;if(!s.checkValidity()){alert("Please enter a valid email address.");return}const e={email:o};try{const n=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(n.ok){const a=await n.json();alert(a.message)}else if(n.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("discount-products");document.getElementById("pagination");async function i(o){try{const n=(await d.get("https://food-boutique.b.goit.study/api/products/discount?page=${page}&limit=${itemsPerPage}`")).data;console.log(n),t.innerHTML="",n.slice(0,2).forEach(u=>{const p=s(u);t.innerHTML+=p})}catch(e){console.error("Error fetching discount products:",e)}}i();function s(o){return`
        <li class="card-container-list-discount">
        <div class="photo-card-list-discount">
                <a class="product-modal-list-discount" href="МОДАЛЬНЕ ВІКНО">
                    <div class="img-container-list-discount">
                        <img class="product-image-list-discount" src="${o.img}" alt="${o.name} photo" width=114 height=114 loading="lazy" />
                    </div>
                    <div class="product-info-list">
                        <div class="price-and-btn-list-discount">
                            <h2 class="product-name-list-discount">${o.name}</h2>
                            <h2 class="price-discount">$${o.price}</h2>
                            <button class='cart-btn-list-discount' type="button">          
                                <svg class='list-cart-svg-list' width="18" height="18" >
                                    <use href="${l}#icon-heroicons-solid_shopping-cart-18x18"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    
        `}});const m="https://food-boutique.b.goit.study/api/products/popular";function h(t){const i=document.querySelector(".popular-product-list");t.forEach(s=>{const o=document.createElement("li");o.classList.add("popular-product-item");const e=s.category.split("_").join(" ");o.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${s.img}" alt="${s.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${s.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${e}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${s.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${s.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="${l}#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,i.appendChild(o)})}async function g(){try{return(await d.get(m)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}g().then(t=>{h(t)}).catch(t=>{console.error("Error:",t)});window.onscroll=()=>r();window.addEventListener("scroll",c(r,250)),window.addEventListener("resize",c(r,250));async function r(){const t=document.querySelector("body"),i=document.body.offsetHeight,s=window.innerHeight,o=window.scrollY,e=i-s/4;o+s>e?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function c(t,i){let s=null;return function(...e){s||(s=setTimeout(()=>{t(...e),clearTimeout(s),s=null},i))}}
//# sourceMappingURL=commonHelpers2.js.map