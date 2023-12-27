import{a as m}from"./vendor-b592f4c5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();function g(t){localStorage.setItem("productFilters",JSON.stringify(t))}function h(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function w(t,e){const o=h();o[t]=e,g(o)}function p(t){localStorage.setItem("shoppingCart",JSON.stringify(t))}function l(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}function y(t){const e=l(),o=e.findIndex(r=>r._id===t._id);o>-1?e[o].quantity+=1:e.push({...t,quantity:1}),p(e)}function b(t){const e=l(),o=e.findIndex(r=>r._id===t);o>-1&&(e[o].quantity>1?e[o].quantity-=1:e.splice(o,1)),p(e)}function F(){p([])}function f(){const e=l().reduce((r,s)=>r+s.quantity,0),o=document.querySelector(".numbers-of-products");o&&(o.textContent=e)}function v(t,e,o,r){const n=l().find(c=>c._id===t),a=e.find(c=>c._id===t);n?b(t):a&&y(a),u(e,".cart-btn-list",r),u(e,".popular-cart-btn",r),u(e,".cart-btn-list-discount",r),f()}function C(t,e,o,r){const n=e.find(c=>c._id===t)?"icon-check":"icon-heroicons-solid_shopping-cart-18x18",a=r===".popular-cart-btn"?"12":"18";return`
    <svg class="list-cart-svg-list ${r===".popular-cart-btn"?"olive":""}" width="${a}" height="${a}">
      <use href="${o}#${n}"></use>
    </svg>
  `}function u(t,e,o){const r=l();document.querySelectorAll(e).forEach(n=>{const a=n.dataset.productId;n.innerHTML=C(a,r,o,e)})}function L(t,e,o){document.querySelectorAll(e).forEach(r=>{r.addEventListener("click",s=>{const n=s.currentTarget.dataset.productId;v(n,t,e,o)})})}f();const d="/js-product/assets/symbol-defs-16ca2b95.svg",I="https://food-boutique.b.goit.study/api/products/popular";function S(t){const e=document.querySelector(".popular-product-list");t.forEach(o=>{const r=document.createElement("li");r.classList.add("popular-product-item");const s=o.category.split("_").join(" ");r.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${o.img}" alt="${o.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${o.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${s}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${o.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${o.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button" data-product-id="${o._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${d}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
        </a>
    `,e.appendChild(r)}),u(t,".popular-cart-btn",d),L(t,".popular-cart-btn",d)}async function q(){try{return(await m.get(I)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}q().then(t=>{S(t)}).catch(t=>{console.error("Error:",t)});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-sub-form"),e=document.querySelector(".success-modal"),o=document.querySelector(".failure-modal"),r=document.querySelectorAll(".close-svg");t.addEventListener("submit",async s=>{s.preventDefault();const n=t.querySelector(".footer-email-input"),a=n.value;if(!n.checkValidity()){alert("Please enter a valid email address.");return}const c={email:a};try{const i=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(i.ok){const E=await i.json();e.classList.add("open")}else if(i.status===409)o.classList.add("open");else throw new Error("Failed to subscribe.")}catch(i){alert("Error: "+i.message)}}),r.forEach(s=>{s.addEventListener("click",function(){o.classList.contains("open")?o.classList.remove("open"):e.classList.contains("open")&&e.classList.remove("open")})})});export{u as a,L as b,F as c,h as d,w as e,l as g,d as i,p as s,f as u};
//# sourceMappingURL=footer-567f1da1.js.map
