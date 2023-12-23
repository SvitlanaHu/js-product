import{i as c}from"./assets/products-list-1f072c80.js";import{a as u}from"./assets/vendor-b592f4c5.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form");t.addEventListener("submit",async s=>{s.preventDefault();const o=t.querySelector(".footer-email-input"),e=o.value;if(!o.checkValidity()){alert("Please enter a valid email address.");return}const a={email:e};try{const r=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(r.ok){const l=await r.json();alert(l.message)}else if(r.status===409)alert("This email is already subscribed.");else throw new Error("Failed to subscribe.")}catch(r){alert("Error: "+r.message)}})});const p="https://food-boutique.b.goit.study/api/products/popular";function d(t){const s=document.querySelector(".popular-product-list");t.forEach(o=>{const e=document.createElement("li");e.classList.add("popular-product-item"),e.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${o.img}" alt="${o.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${o.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${o.category}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${o.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${o.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button">
          <svg class="list-cart-svg-list" width="12" height="12">
<use href="'${c}'#icon-heroicons-solid_shopping-cart-12x12 "></use>
         </svg></button>
        </a>
    `,s.appendChild(e)})}async function m(){try{return(await u.get(p)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}m().then(t=>{d(t)}).catch(t=>{console.error("Error:",t)});window.onscroll=()=>n();window.addEventListener("scroll",i(n,250)),window.addEventListener("resize",i(n,250));async function n(){const t=document.querySelector("body"),s=document.body.offsetHeight,o=window.innerHeight,e=window.scrollY,a=s-o/4;e+o>a?t.classList.add("body--no-transparency"):t.classList.remove("body--no-transparency")}function i(t,s){let o=null;return function(...a){o||(o=setTimeout(()=>{t(...a),clearTimeout(o),o=null},s))}}
//# sourceMappingURL=commonHelpers2.js.map
