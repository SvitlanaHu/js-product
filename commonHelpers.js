import{g as o,s as f,i as y,c as u,u as h}from"./assets/symbol-defs-f7ff4350.js";const e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};g();l();e.cartProductList.addEventListener("click",b);function g(){const t=o();if(!t.length){e.emptyBasketContent.hidden=!1;return}k(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",d(),e.orderForm.addEventListener("submit",P)}function l(){const t=o();e.numberOfProducts.textContent=t.length}function b(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const a=t.target.closest(".js-cart-item"),c=a.dataset.id,n=o().filter(({_id:r})=>c!==r);f(n),a.style.display="none",l(),C(),d()}function C(){o().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function k(t){const a=t.map(({_id:c,name:s,img:n,category:r,price:i,size:m})=>`<li class="cart-item js-cart-item" data-id = ${c}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${y}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${n}"
                alt="${s}"
                width="100"
                height="100"
              />
              </div>
            </div>
            <div class="cart-item-descr">
              <h3 class="cart-item-title">${s}</h3>
              <div class="cart-text-wrap">
                <p class="cart-item-text">
                  <span class="cart-light-text">Category:</span
                  >&nbsp;&nbsp;${r}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${m}
                </p>
              </div>
              <p class="cart-item-price">${i}</p>
            </div>
          </div>
        </li>`).join("");return e.cartProductList.innerHTML=a}e.deleteAllBtn.addEventListener("click",p);function p(){e.cartProductList.innerHTML="",u(),d(),l(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function d(){const a=o().reduce((c,{price:s,quantity:n})=>c+=s*n,0);e.cartTotalPrice.textContent=a.toFixed(2)}async function P(t){t.preventDefault();const a=t.currentTarget.elements.email.value;if(!a){alert("Please, write your email!");return}v(a),t.currentTarget.reset();const s=o().map(({_id:r})=>({productId:r,amount:1})),n={email:a,products:s};try{const r=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(r.ok){const i=await r.json();alert(i.message),u(),p(),h()}else if(r.status===400){const i=await r.json();alert("Bad request: "+i.message)}else if(r.status===404)alert("Resource not found.");else if(r.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(r){alert("Error: "+r.message)}}function v(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}
//# sourceMappingURL=commonHelpers.js.map
