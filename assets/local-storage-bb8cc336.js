(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const y="/js-product/assets/symbol-defs-9e372123.svg";function d(e){localStorage.setItem("productFilters",JSON.stringify(e))}function f(){const e=localStorage.getItem("productFilters");return e?JSON.parse(e):{keyword:null,category:null,page:1,limit:6}}function C(e,t){const r=f();r[e]=t,d(r)}function l(e){localStorage.setItem("shoppingCart",JSON.stringify(e))}function a(){const e=localStorage.getItem("shoppingCart");return e?JSON.parse(e):[]}function p(e){const t=a(),r=t.findIndex(s=>s._id===e._id);r>-1?t[r].quantity+=1:t.push({...e,quantity:1}),l(t)}function g(e){const t=a(),r=t.findIndex(s=>s._id===e);r>-1&&(t[r].quantity>1?t[r].quantity-=1:t.splice(r,1)),l(t)}function I(){l([])}function m(){const t=a().reduce((s,n)=>s+n.quantity,0),r=document.querySelector(".numbers-of-products");r&&(r.textContent=t)}function h(e,t,r,s){const o=a().find(i=>i._id===e),c=t.find(i=>i._id===e);o?g(e):c&&p(c),u(t,".cart-btn-list",s),u(t,".popular-cart-btn",s),u(t,".cart-btn-list-discount",s),m()}function u(e,t,r){const s=a();document.querySelectorAll(t).forEach(n=>{const o=n.dataset.productId;s.find(i=>i._id===o)?n.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${r}#icon-check"></use>
        </svg>
      `:n.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${r}#icon-heroicons-solid_shopping-cart-18x18"></use>
        </svg>
      `})}function v(e,t,r){document.querySelectorAll(t).forEach(s=>{s.addEventListener("click",n=>{const o=n.currentTarget.dataset.productId;h(o,e,t,r)})})}export{v as a,C as b,I as c,f as d,a as g,y as i,l as s,u};
//# sourceMappingURL=local-storage-bb8cc336.js.map
