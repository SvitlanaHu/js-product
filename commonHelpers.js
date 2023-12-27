import{g as o,s as g,i as h,c as u,u as m}from"./assets/footer-0a43ab9b.js";import"./assets/vendor-b592f4c5.js";document.getElementById("open-modal-btn").addEventListener("click",b);document.getElementById("close-my-modal-btn").addEventListener("click",k);function b(){document.getElementById("my-modal").classList.add("open")}function k(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});document.querySelector(".order-form");document.querySelector(".image-container-modal-cart");document.querySelector(".order-btn-submit");const v=document.querySelector(".close-svg"),C=document.querySelector(".checkout-modal"),e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};L();d();w();e.cartProductList.addEventListener("click",S);function L(){const t=o();if(!t.length){e.emptyBasketContent.hidden=!1;return}P(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",l(),e.orderForm.addEventListener("submit",B)}function d(){const t=o();e.numberOfProducts.textContent=t.length}function S(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const a=t.target.closest(".js-cart-item"),c=a.dataset.id,s=o().filter(({_id:r})=>c!==r);g(s),a.style.display="none",d(),E(),l()}function E(){o().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function P(t){const a=t.map(({_id:c,name:n,img:s,category:r,price:i,size:y})=>{const f=r.split("_").join(" ");return`<li class="cart-item js-cart-item" data-id = ${c}>
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
                  >&nbsp;&nbsp;${f}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${y}
                </p>
              </div>
              <p class="cart-item-price">$${i}</p>
            </div>
          </div>
        </li>`}).join("");return e.cartProductList.innerHTML=a}e.deleteAllBtn.addEventListener("click",p);function p(){e.cartProductList.innerHTML="",u(),l(),d(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function l(){const a=o().reduce((c,{price:n,quantity:s})=>c+=n*s,0);e.cartTotalPrice.textContent=a.toFixed(2),m()}async function B(t){t.preventDefault();const a=t.currentTarget.elements.email.value;if(!a){alert("Please, write your email!");return}q(a),t.currentTarget.reset();const n=o().map(({_id:r})=>({productId:r,amount:1})),s={email:a,products:n};try{const r=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(r.ok)u(),p(),m();else if(r.status===400){const i=await r.json();alert("Bad request: "+i.message)}else if(r.status===404)alert("Resource not found.");else if(r.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(r){alert("Error: "+r.message)}}function q(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}v.addEventListener("click",function(){C.classList.remove("open")});function w(){o()}
//# sourceMappingURL=commonHelpers.js.map
