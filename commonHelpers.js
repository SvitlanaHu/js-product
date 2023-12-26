import{g as c,s as y,i as f,c as u,u as g}from"./assets/popular-0879b870.js";import"./assets/vendor-b592f4c5.js";document.getElementById("open-modal-btn").addEventListener("click",h);document.getElementById("close-my-modal-btn").addEventListener("click",b);function h(){document.getElementById("my-modal").classList.add("open")}function b(){document.getElementById("my-modal").classList.remove("open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&document.getElementById("my-modal").classList.remove("open")});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||t.currentTarget.classList.remove("open")});document.querySelector(".js-cart-list");document.querySelector(".js-delete-all-btn");document.querySelector(".all-content-wrap");document.querySelector(".js-number-of-products");document.querySelector(".js-cart-amount");document.querySelector(".order-form");const k=document.querySelector(".image-container-modal-cart");document.querySelector(".order-btn-submit");const v=document.querySelector(".close-svg"),C=document.querySelector(".checkout-modal"),e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};L();l();P();e.cartProductList.addEventListener("click",S);function L(){const t=c();if(!t.length){e.emptyBasketContent.hidden=!1;return}E(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",i(),e.orderForm.addEventListener("submit",I)}function l(){const t=c();e.numberOfProducts.textContent=t.length}function S(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const a=t.target.closest(".js-cart-item"),s=a.dataset.id,o=c().filter(({_id:r})=>s!==r);y(o),a.style.display="none",l(),q(),i()}function q(){c().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function E(t){const a=t.map(({_id:s,name:n,img:o,category:r,price:d,size:p})=>`<li class="cart-item js-cart-item" data-id = ${s}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${f}#close-button"></use></svg
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
                  >&nbsp;&nbsp;${r}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${p}
                </p>
              </div>
              <p class="cart-item-price">${d}</p>
            </div>
          </div>
        </li>`).join("");return e.cartProductList.innerHTML=a}e.deleteAllBtn.addEventListener("click",m);function m(){e.cartProductList.innerHTML="",u(),i(),l(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function i(){const a=c().reduce((s,{price:n,quantity:o})=>s+=n*o,0);e.cartTotalPrice.textContent=a.toFixed(2)}async function I(t){t.preventDefault();const a=t.currentTarget.elements.email.value;if(!a){alert("Please, write your email!");return}j(a),t.currentTarget.reset();const n=c().map(({_id:r})=>({productId:r,amount:1})),o={email:a,products:n};try{const r=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(r.ok){const d=await r.json();u(),m(),g()}else if(r.status===400){const d=await r.json();alert("Bad request: "+d.message)}else if(r.status===404)alert("Resource not found.");else if(r.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(r){alert("Error: "+r.message)}}function j(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}v.addEventListener("click",function(){C.classList.remove("open")});function P(){const t=c();w(t)}function w(t){const a=t.map(({img:r,name:d})=>({img:r,name:d})),s=Math.floor(Math.random()*a.length),n=a[s],o=`<img src="${n.img}" alt="${n.name}" width="140" height="140">`;k.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
