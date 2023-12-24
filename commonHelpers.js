import{g as c,s as m,c as g}from"./assets/local-storage-d9943806.js";const l=document.querySelector(".js-cart-list"),b=document.querySelector(".js-delete-all-btn"),a=document.querySelector(".all-content-wrap"),h=document.querySelector(".js-number-of-products"),v=document.querySelector(".js-cart-amount");f();o();function f(){const t=c();a.classList.add("is-visible-main-content"),j(t),l.addEventListener("click",C)}function C(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const e=t.target.closest(".js-cart-item"),s=e.dataset.id,r=c().filter(({_id:i})=>s!==i);m(r),e.style.display="none",o(),L(),d()}function L(){c().length||a.classList.replace("is-visible-main-content","is-hidden-main-content")}function j(t){if(!t.length){a.classList.add("is-hidden-main-content");return}const e=t.map(({_id:s,name:n,img:r,category:i,price:u,size:p})=>`<li class="cart-item js-cart-item" data-id = ${s}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="img/icone/symbol-defs.svg#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${r}"
                alt="${n}"
                width="100"
                height="100"
              />
              </div>
            </div>
            <div class="cart-item-descr">
              <h3 class="cart-item-title">${n}</h3>
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
        </li>`).join("");return l.innerHTML=e}b.addEventListener("click",()=>{g(),o(),a.classList.replace("is-visible-main-content","is-hidden-main-content")});function o(){const t=c();h.textContent=t.length}function d(){const e=c().reduce((s,{price:n})=>s+=n,0);v.textContent=e}d();
//# sourceMappingURL=commonHelpers.js.map
