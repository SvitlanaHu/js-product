import{g as i,s as h,i as b,c as y,u as g}from"./assets/scrollup-2d1b3183.js";document.getElementById("close-my-modal-btn").addEventListener("click",k);function k(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});document.querySelector(".order-form");const p=document.querySelector(".img-cart-modal");document.querySelector(".order-btn-submit");const v=document.querySelector(".close-svg"),L=document.querySelector(".checkout-modal"),e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};C();l();P();e.cartProductList.addEventListener("click",S);function C(){const t=i();if(!t.length){e.emptyBasketContent.hidden=!1;return}B(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",u(),e.orderForm.addEventListener("submit",I)}function l(){const t=i();e.numberOfProducts.textContent=t.length}function S(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const r=t.target.closest(".js-cart-item"),a=r.dataset.id,o=i().filter(({_id:s})=>a!==s);h(o),r.style.display="none",l(),E(),u()}function E(){i().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function B(t){const r=t.map(({_id:a,name:n,img:o,category:s,price:m,size:c})=>{const d=s.split("_").join(" ");return`<li class="cart-item js-cart-item" data-id = ${a}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${b}#close-button"></use></svg
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
                  >&nbsp;&nbsp;${d}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${c}
                </p>
              </div>
              <p class="cart-item-price">$${m}</p>
            </div>
          </div>
        </li>`}).join("");return e.cartProductList.innerHTML=r}e.deleteAllBtn.addEventListener("click",f);function f(){e.cartProductList.innerHTML="",y(),u(),l(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function u(){const r=i().reduce((a,{price:n,quantity:o})=>a+=n*o,0);e.cartTotalPrice.textContent=r.toFixed(2),g()}async function I(t){t.preventDefault();const r=t.currentTarget.elements.email.value;if(!r){alert("Please, write your email!");return}M(r),t.currentTarget.reset();const n=i().map(({_id:s})=>({productId:s,amount:1})),o={email:r,products:n};try{let s=function(){document.getElementById("my-modal").classList.add("open")};document.getElementById("open-modal-btn").addEventListener("click",s);const c=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(c.ok)s(),y(),f(),g();else if(c.status===400){const d=await c.json();alert("Bad request: "+d.message)}else if(c.status===404)alert("Resource not found.");else if(c.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(s){alert("Error: "+s.message)}}function M(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}v.addEventListener("click",function(){L.classList.remove("open")});function P(){const t=i();w(t)}function w(t){const r=t.map(({img:a,name:n})=>({img:a,name:n}));if(r.length===1){const a=r[0],n=`<img src="${a.img}" alt="${a.name}" width="140" height="140">`;p.insertAdjacentHTML("beforeend",n)}else{const a='<svg class="success-svg" width="140" height="140"><use href="./img/icone/symbol-defs.svg#icon-order-placed-purchased-icon"></use></svg>';p.insertAdjacentHTML("beforeend",a)}}
//# sourceMappingURL=commonHelpers.js.map
