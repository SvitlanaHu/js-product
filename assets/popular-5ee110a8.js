import{a as f}from"./vendor-b592f4c5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function g(t){localStorage.setItem("productFilters",JSON.stringify(t))}function m(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function q(t,e){const o=m();o[t]=e,g(o)}function p(t){localStorage.setItem("shoppingCart",JSON.stringify(t))}function i(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}function h(t){const e=i(),o=e.findIndex(n=>n._id===t._id);o>-1?e[o].quantity+=1:e.push({...t,quantity:1}),p(e)}function y(t){const e=i(),o=e.findIndex(n=>n._id===t);o>-1&&(e[o].quantity>1?e[o].quantity-=1:e.splice(o,1)),p(e)}function x(){p([])}function d(){const e=i().reduce((n,r)=>n+r.quantity,0),o=document.querySelector(".numbers-of-products");o&&(o.textContent=e)}function b(t,e,o,n){const s=i().find(c=>c._id===t),a=e.find(c=>c._id===t);s?y(t):a&&h(a),l(e,".cart-btn-list",n),l(e,".popular-cart-btn",n),l(e,".cart-btn-list-discount",n),d()}function C(t,e,o,n){const s=e.find(c=>c._id===t)?"icon-check":"icon-heroicons-solid_shopping-cart-18x18",a=n===".popular-cart-btn"?"12":"18";return`
    <svg class="list-cart-svg-list ${n===".popular-cart-btn"?"olive":""}" width="${a}" height="${a}">
      <use href="${o}#${s}"></use>
    </svg>
  `}function l(t,e,o){const n=i();document.querySelectorAll(e).forEach(s=>{const a=s.dataset.productId;s.innerHTML=C(a,n,o,e)})}function I(t,e,o){document.querySelectorAll(e).forEach(n=>{n.addEventListener("click",r=>{const s=r.currentTarget.dataset.productId;b(s,t,e,o)})})}d();const u="/js-product/assets/symbol-defs-16ca2b95.svg",v="https://food-boutique.b.goit.study/api/products/popular";function S(t){const e=document.querySelector(".popular-product-list");t.forEach(o=>{const n=document.createElement("li");n.classList.add("popular-product-item");const r=o.category.split("_").join(" ");n.innerHTML=`
      <a class="popular-modal">
                 <div class="popular-img">
            <img class="popular-photo-item" src="${o.img}" alt="${o.name}" width="56" height="56" loading="lazy">
          </div>  
          <ul class="about-popular">
            <li class="name-popular-product">${o.name}</li>
            <li class="subname-popular-product">Category: <span class="id-subname">${r}</span></li>
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
    `,e.appendChild(n)}),l(t,".popular-cart-btn",u),I(t,".popular-cart-btn",u)}async function L(){try{return(await f.get(v)).data}catch(t){throw console.error("Error fetching popular products:",t),t}}L().then(t=>{S(t)}).catch(t=>{console.error("Error:",t)});export{l as a,I as b,x as c,m as d,q as e,i as g,u as i,p as s,d as u};
//# sourceMappingURL=popular-5ee110a8.js.map
