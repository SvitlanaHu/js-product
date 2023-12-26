import{g as s,s as f,i as g,c as u,u as b}from"./assets/popular-8e4c3c1a.js";import"./assets/vendor-b592f4c5.js";document.getElementById("open-modal-btn").addEventListener("click",h);document.getElementById("close-my-modal-btn").addEventListener("click",k);function h(){document.getElementById("my-modal").classList.add("open")}function k(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});document.querySelector(".js-cart-list");document.querySelector(".js-delete-all-btn");document.querySelector(".all-content-wrap");document.querySelector(".js-number-of-products");document.querySelector(".js-cart-amount");document.querySelector(".order-form");document.querySelector(".image-container-modal-cart");document.querySelector(".order-btn-submit");const v=document.querySelector(".close-svg"),C=document.querySelector(".checkout-modal"),e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};S();d();w();e.cartProductList.addEventListener("click",L);function S(){const t=s();if(!t.length){e.emptyBasketContent.hidden=!1;return}E(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",i(),e.orderForm.addEventListener("submit",j)}function d(){const t=s();e.numberOfProducts.textContent=t.length}function L(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const a=t.target.closest(".js-cart-item"),c=a.dataset.id,o=s().filter(({_id:r})=>c!==r);f(o),a.style.display="none",d(),q(),i()}function q(){s().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function E(t){const a=t.map(({_id:c,name:n,img:o,category:r,price:l,size:p})=>{const y=r.split("_").join(" ");return`<li class="cart-item js-cart-item" data-id = ${c}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${g}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${o}"
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
                  >&nbsp;&nbsp;${y}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${p}
                </p>
              </div>
              <p class="cart-item-price">$${l}</p>
            </div>
          </div>
        </li>`}).join("");return e.cartProductList.innerHTML=a}e.deleteAllBtn.addEventListener("click",m);function m(){e.cartProductList.innerHTML="",u(),i(),d(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function i(){const a=s().reduce((c,{price:n,quantity:o})=>c+=n*o,0);e.cartTotalPrice.textContent=a.toFixed(2)}async function j(t){t.preventDefault();const a=t.currentTarget.elements.email.value;if(!a){alert("Please, write your email!");return}P(a),t.currentTarget.reset();const n=s().map(({_id:r})=>({productId:r,amount:1})),o={email:a,products:n};try{const r=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(r.ok){const l=await r.json();u(),m(),b()}else if(r.status===400){const l=await r.json();alert("Bad request: "+l.message)}else if(r.status===404)alert("Resource not found.");else if(r.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(r){alert("Error: "+r.message)}}function P(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}v.addEventListener("click",function(){C.classList.remove("open")});function w(){s()}
//# sourceMappingURL=commonHelpers.js.map
