import{g as c,s as p,i as m,c as f}from"./assets/local-storage-5ab97df3.js";const e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};y();l();e.cartProductList.addEventListener("click",h);function y(){const t=c();if(!t.length){e.emptyBasketContent.hidden=!1;return}g(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",o(),e.orderForm.addEventListener("submit",k)}function l(){const t=c();e.numberOfProducts.textContent=t.length}function h(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const r=t.target.closest(".js-cart-item"),a=r.dataset.id,s=c().filter(({_id:i})=>a!==i);p(s),r.style.display="none",l(),b(),o()}function b(){c().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function g(t){const r=t.map(({_id:a,name:n,img:s,category:i,price:d,size:u})=>`<li class="cart-item js-cart-item" data-id = ${a}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${m}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${s}"
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
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${u}
                </p>
              </div>
              <p class="cart-item-price">${d}</p>
            </div>
          </div>
        </li>`).join("");return e.cartProductList.innerHTML=r}e.deleteAllBtn.addEventListener("click",()=>{e.cartProductList.innerHTML="",f(),o(),l(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"});function o(){const r=c().reduce((a,{price:n,quantity:s})=>a+=n*s,0);e.cartTotalPrice.textContent=r.toFixed(2)}function k(t){t.preventDefault();const r=t.currentTarget.elements.email.value;if(!r){alert("Please, write your email!");return}C(r),t.currentTarget.reset()}function C(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}
//# sourceMappingURL=commonHelpers.js.map
