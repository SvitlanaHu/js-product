import{g as d,s as b,i as y,c as g,u as f}from"./assets/scrollup-dffa643a.js";document.getElementById("close-my-modal-btn").addEventListener("click",k);function k(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});document.querySelector(".order-form");const p=document.querySelector(".img-cart-modal");document.querySelector(".order-btn-submit");document.querySelector(".close-svg");document.querySelector(".checkout-modal");const e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};v();l();I();e.cartProductList.addEventListener("click",C);function v(){const t=d();if(!t.length){e.emptyBasketContent.hidden=!1;return}S(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",u(),e.orderForm.addEventListener("submit",B)}function l(){const t=d();e.numberOfProducts.textContent=t.length}function C(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const n=t.target.closest(".js-cart-item"),r=n.dataset.id,o=d().filter(({_id:s})=>r!==s);b(o),n.style.display="none",l(),L(),u()}function L(){d().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function S(t){const n=t.map(({_id:r,name:a,img:o,category:s,price:m,size:c})=>{const i=s.split("_").join(" ");return`<li class="cart-item js-cart-item" data-id = ${r}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${y}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${o}"
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
                  >&nbsp;&nbsp;${i}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${c}
                </p>
              </div>
              <p class="cart-item-price">$${m}</p>
            </div>
          </div>
        </li>`}).join("");return e.cartProductList.innerHTML=n}e.deleteAllBtn.addEventListener("click",h);function h(){e.cartProductList.innerHTML="",g(),u(),l(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function u(){const n=d().reduce((r,{price:a,quantity:o})=>r+=a*o,0);e.cartTotalPrice.textContent=n.toFixed(2),f()}async function B(t){t.preventDefault();const n=t.currentTarget.elements.email.value;if(!n){alert("Please, write your email!");return}t.currentTarget.reset();const a=d().map(({_id:s})=>({productId:s,amount:1})),o={email:n,products:a};try{let s=function(){document.getElementById("my-modal").classList.add("open")};document.getElementById("open-modal-btn").addEventListener("click",s);const c=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(c.ok)s(),g(),h(),f();else if(c.status===400){const i=await c.json();alert("Bad request: "+i.message)}else if(c.status===404)alert("Resource not found.");else if(c.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(s){alert("Error: "+s.message)}}function I(){const t=d();P(t)}function P(t){const n=t.map(({img:r,name:a})=>({img:r,name:a}));if(n.length===1){const r=n[0],a=`<img src="${r.img}" alt="${r.name}" width="140" height="140">`;p.insertAdjacentHTML("beforeend",a)}else{const r=`<svg class="success-svg" width="140" height="140"><use href="${y}#icon-order-placed-purchased-icon"></use></svg>`;p.insertAdjacentHTML("beforeend",r)}}
//# sourceMappingURL=commonHelpers.js.map
