(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const m="/js-product/assets/symbol-defs-24cbf6d3.svg";function d(e){localStorage.setItem("productFilters",JSON.stringify(e))}function f(){const e=localStorage.getItem("productFilters");return e?JSON.parse(e):{keyword:null,category:null,page:1,limit:6}}function y(e,t){const n=f();n[e]=t,d(n)}function u(e){localStorage.setItem("shoppingCart",JSON.stringify(e))}function a(){const e=localStorage.getItem("shoppingCart");return e?JSON.parse(e):[]}function p(e){const t=a(),n=t.findIndex(o=>o._id===e._id);n>-1?t[n].quantity+=1:t.push({...e,quantity:1}),u(t)}function g(e){const t=a(),n=t.findIndex(o=>o._id===e);n>-1&&(t[n].quantity>1?t[n].quantity-=1:t.splice(n,1)),u(t)}function v(){u([])}function h(e,t,n,o){const s=a().find(c=>c._id===e),i=t.find(c=>c._id===e);s?g(e):i&&p(i),l(t,".cart-btn-list",o),l(t,".popular-cart-btn",o),l(t,".cart-btn-list-discount",o)}function l(e,t,n){const o=a();document.querySelectorAll(t).forEach(r=>{const s=r.dataset.productId;o.find(c=>c._id===s)?r.innerHTML=`
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${n}#icon-check"></use>
          </svg>
        `:r.innerHTML=`
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${n}#icon-heroicons-solid_shopping-cart-18x18"></use>
          </svg>
        `})}function C(e,t,n){document.querySelectorAll(t).forEach(o=>{o.addEventListener("click",r=>{const s=r.currentTarget.dataset.productId;h(s,e,t,n)})})}export{C as a,y as b,v as c,f as d,a as g,m as i,u as s,l as u};
//# sourceMappingURL=local-storage-5ab97df3.js.map
