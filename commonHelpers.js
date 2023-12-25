import{g as c,s as p,i as f,c as g}from"./assets/local-storage-0375a940.js";const r=document.querySelector(".js-cart-list"),b=document.querySelector(".js-delete-all-btn"),i=document.querySelector(".all-content-wrap"),h=document.querySelector(".js-number-of-products"),v=document.querySelector(".js-cart-amount"),L=document.querySelector(".order-form");C();r.addEventListener("click",S);o();function C(){const t=c();i.classList.add("is-visible-main-content"),y(t),L.addEventListener("submit",x)}function S(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const e=t.target.closest(".js-cart-item"),s=e.dataset.id,a=c().filter(({_id:l})=>s!==l);p(a),e.style.display="none",o(),j(),d()}function j(){c().length||(i.classList.replace("is-visible-main-content","is-hidden-main-content"),r.innerHTML="")}function y(t){if(!t.length){i.classList.add("is-hidden-main-content");return}const e=t.map(({_id:s,name:n,img:a,category:l,price:u,size:m})=>`<li class="cart-item js-cart-item" data-id = ${s}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${f}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${a}"
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
                  >&nbsp;&nbsp;${l}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${m}
                </p>
              </div>
              <p class="cart-item-price">${u}</p>
            </div>
          </div>
        </li>`).join("");return r.innerHTML=e}b.addEventListener("click",()=>{g(),r.innerHTML="",o(),i.classList.replace("is-visible-main-content","is-hidden-main-content")});function o(){const t=c();h.textContent=t.length}function d(){const e=c().reduce((s,{price:n,quantity:a})=>s+=n*a,0);v.textContent=e}d();function x(t){t.preventDefault();const e=t.currentTarget.elements.email.value;if(!e){alert("Please, write your email!");return}$(e),t.currentTarget.reset()}function $(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}
//# sourceMappingURL=commonHelpers.js.map
