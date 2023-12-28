import{g as c,s as g,i as h,c as p,u as y}from"./assets/scrollup-1a71efa6.js";document.getElementById("close-my-modal-btn").addEventListener("click",b);function b(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});document.querySelector(".order-form");document.querySelector(".image-container-modal-cart");document.querySelector(".order-btn-submit");const k=document.querySelector(".close-svg"),v=document.querySelector(".checkout-modal"),e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};C();i();q();e.cartProductList.addEventListener("click",L);function C(){const t=c();if(!t.length){e.emptyBasketContent.hidden=!1;return}E(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",u(),e.orderForm.addEventListener("submit",B)}function i(){const t=c();e.numberOfProducts.textContent=t.length}function L(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const r=t.target.closest(".js-cart-item"),l=r.dataset.id,s=c().filter(({_id:n})=>l!==n);g(s),r.style.display="none",i(),S(),u()}function S(){c().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function E(t){const r=t.map(({_id:l,name:a,img:s,category:n,price:m,size:o})=>{const d=n.split("_").join(" ");return`<li class="cart-item js-cart-item" data-id = ${l}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${h}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${s}"
                alt="${a}"
                width="100"
                height="100"
              />
              </div>
            </div>
            <div class="cart-item-descr">
              <h3 class="cart-item-title">${a}</h3>
              <div class="cart-text-wrap">
                <p class="cart-item-text">
                  <span class="cart-light-text">Category:</span
                  >&nbsp;&nbsp;${d}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${o}
                </p>
              </div>
              <p class="cart-item-price">$${m}</p>
            </div>
          </div>
        </li>`}).join("");return e.cartProductList.innerHTML=r}e.deleteAllBtn.addEventListener("click",f);function f(){e.cartProductList.innerHTML="",p(),u(),i(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function u(){const r=c().reduce((l,{price:a,quantity:s})=>l+=a*s,0);e.cartTotalPrice.textContent=r.toFixed(2),y()}async function B(t){t.preventDefault();const r=t.currentTarget.elements.email.value;if(!r){alert("Please, write your email!");return}P(r),t.currentTarget.reset();const a=c().map(({_id:n})=>({productId:n,amount:1})),s={email:r,products:a};try{let n=function(){document.getElementById("my-modal").classList.add("open")};document.getElementById("open-modal-btn").addEventListener("click",n);const o=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(o.ok)n(),p(),f(),y();else if(o.status===400){const d=await o.json();alert("Bad request: "+d.message)}else if(o.status===404)alert("Resource not found.");else if(o.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}}function P(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}k.addEventListener("click",function(){v.classList.remove("open")});function q(){c()}
//# sourceMappingURL=commonHelpers.js.map
