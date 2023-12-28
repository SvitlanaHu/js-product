import{g as c,s as g,i as h,c as p,u as y}from"./assets/scrollup-8df1fced.js";document.getElementById("close-my-modal-btn").addEventListener("click",b);function b(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});document.querySelector(".order-form");document.querySelector(".image-container-modal-cart");document.querySelector(".order-btn-submit");const k=document.querySelector(".close-svg"),v=document.querySelector(".checkout-modal"),e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};C();l();q();e.cartProductList.addEventListener("click",L);function C(){const t=c();if(!t.length){e.emptyBasketContent.hidden=!1;return}E(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",u(),e.orderForm.addEventListener("submit",B)}function l(){const t=c();e.numberOfProducts.textContent=t.length}function L(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const r=t.target.closest(".js-cart-item"),d=r.dataset.id,s=c().filter(({_id:a})=>d!==a);g(s),r.style.display="none",l(),S(),u()}function S(){c().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function E(t){const r=t.map(({_id:d,name:n,img:s,category:a,price:m,size:o})=>{const i=a.split("_").join(" ");return`<li class="cart-item js-cart-item" data-id = ${d}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${h}#close-button"></use></svg
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
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${o}
                </p>
              </div>
              <p class="cart-item-price">$${m}</p>
            </div>
          </div>
        </li>`}).join("");return e.cartProductList.innerHTML=r}e.deleteAllBtn.addEventListener("click",f);function f(){e.cartProductList.innerHTML="",p(),u(),l(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function u(){const r=c().reduce((d,{price:n,quantity:s})=>d+=n*s,0);e.cartTotalPrice.textContent=r.toFixed(2),y()}async function B(t){t.preventDefault();const r=t.currentTarget.elements.email.value;if(!r){alert("Please, write your email!");return}P(r),t.currentTarget.reset();const n=c().map(({_id:a})=>({productId:a,amount:1})),s={email:r,products:n};try{let a=function(){document.getElementById("my-modal").classList.add("open")};document.getElementById("open-modal-btn").addEventListener("click",a);const o=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(o.ok)a(),p(),f(),y();else if(o.status===400){const i=await o.json();alert("Bad request: "+i.message)}else if(o.status===404)alert("Resource not found.");else if(o.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(a){alert("Error: "+a.message)}}function P(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}k.addEventListener("click",function(){v.classList.remove("open")});function q(){c()}
//# sourceMappingURL=commonHelpers.js.map
