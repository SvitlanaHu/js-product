import{g as n,s as m,i as b,c as g}from"./assets/local-storage-e7aac494.js";const l=document.querySelector(".js-cart-list"),h=document.querySelector(".js-delete-all-btn"),a=document.querySelector(".all-content-wrap"),f=document.querySelector(".js-number-of-products"),v=document.querySelector(".js-cart-amount");document.querySelector(".order-form");C();o();function C(){const t=n();a.classList.add("is-visible-main-content"),S(t),l.addEventListener("click",L)}function L(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const e=t.target.closest(".js-cart-item"),s=e.dataset.id,r=n().filter(({_id:i})=>s!==i);m(r),e.style.display="none",o(),j(),d()}function j(){n().length||a.classList.replace("is-visible-main-content","is-hidden-main-content")}function S(t){if(!t.length){a.classList.add("is-hidden-main-content");return}const e=t.map(({_id:s,name:c,img:r,category:i,price:u,size:p})=>`<li class="cart-item js-cart-item" data-id = ${s}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${b}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${r}"
                alt="${c}"
                width="100"
                height="100"
              />
              </div>
            </div>
            <div class="cart-item-descr">
              <h3 class="cart-item-title">${c}</h3>
              <div class="cart-text-wrap">
                <p class="cart-item-text">
                  <span class="cart-light-text">Category:</span
                  >&nbsp;&nbsp;${i}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${p}
                </p>
              </div>
              <p class="cart-item-price">${u}</p>
            </div>
          </div>
        </li>`).join("");return l.innerHTML=e}h.addEventListener("click",()=>{g(),o(),a.classList.replace("is-visible-main-content","is-hidden-main-content")});function o(){const t=n();f.textContent=t.length}function d(){const e=n().reduce((s,{price:c})=>s+=c,0);v.textContent=e}d();
//# sourceMappingURL=commonHelpers.js.map
