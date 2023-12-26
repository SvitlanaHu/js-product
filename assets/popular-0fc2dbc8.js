import{a as m}from"./vendor-b592f4c5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function f(t){localStorage.setItem("productFilters",JSON.stringify(t))}function g(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function k(t,e){const o=g();o[t]=e,f(o)}function d(t){localStorage.setItem("shoppingCart",JSON.stringify(t))}function i(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}function y(t){const e=i(),o=e.findIndex(r=>r._id===t._id);o>-1?e[o].quantity+=1:e.push({...t,quantity:1}),d(e)}function h(t){const e=i(),o=e.findIndex(r=>r._id===t);o>-1&&(e[o].quantity>1?e[o].quantity-=1:e.splice(o,1)),d(e)}function q(){d([])}function p(){const e=i().reduce((r,n)=>r+n.quantity,0),o=document.querySelector(".numbers-of-products");o&&(o.textContent=e)}function b(t,e,o,r){const s=i().find(c=>c._id===t),a=e.find(c=>c._id===t);s?h(t):a&&y(a),l(e,".cart-btn-list",r),l(e,".popular-cart-btn",r),l(e,".cart-btn-list-discount",r),p()}function I(t,e,o,r){const s=e.find(c=>c._id===t)?"icon-check":"icon-heroicons-solid_shopping-cart-18x18",a=r===".popular-cart-btn"?"12":"18";return`
    <svg class="list-cart-svg-list ${r===".popular-cart-btn"?"olive":""}" width="${a}" height="${a}">
      <use href="${o}#${s}"></use>
    </svg>
  `}function l(t,e,o){const r=i();document.querySelectorAll(e).forEach(s=>{const a=s.dataset.productId;s.innerHTML=I(a,r,o,e)})}function v(t,e,o){document.querySelectorAll(e).forEach(r=>{r.addEventListener("click",n=>{const s=n.currentTarget.dataset.productId;b(s,t,e,o)})})}p();const u="/js-product/assets/symbol-defs-920d1140.svg";document.getElementById("open-modal-btn").addEventListener("click",C);document.getElementById("close-my-modal-btn").addEventListener("click",E);function C(){document.getElementById("my-modal").classList.add("open")}function E(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});const L="https://food-boutique.b.goit.study/api/products/popular";function S(t){const e=document.querySelector(".popular-product-list");t.forEach(o=>{const r=document.createElement("li");r.classList.add("popular-product-item");const n=o.category.split("_").join(" ");r.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${o.img}" alt="${o.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${o.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${n}</span></li>
            <li class="subname-popular-product">Size: <span class="id-subname">${o.size}</span></li>
            <li class="subname-popular-product">Popularity: <span class="id-subname">${o.popularity}</span></li>
          </ul>
          <button class='popular-cart-btn' type="button" data-product-id="${o._id}">          
                                <svg class="list-cart-svg-list" width="18" height="18" >
                                    <use href="${u}#icon-heroicons-solid_shopping-cart-18x18">
                                    </use>
                                </svg>
                            </button>
        </a>
    `,e.appendChild(r)}),l(t,".popular-cart-btn",u),v(t,".popular-cart-btn",u)}async function _(){try{return(await m.get(L)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}_().then(t=>{S(t)}).catch(t=>{console.error("Error:",t)});export{l as a,v as b,q as c,g as d,k as e,i as g,u as i,d as s,p as u};
//# sourceMappingURL=popular-0fc2dbc8.js.map
