import{g as i,s as y,i as g,c as u,u as h}from"./assets/symbol-defs-04bf95ba.js";document.querySelector(".js-cart-list");document.querySelector(".js-delete-all-btn");document.querySelector(".all-content-wrap");document.querySelector(".js-number-of-products");document.querySelector(".js-cart-amount");document.querySelector(".order-form");const b=document.querySelector(".image-container-modal-cart"),C=document.querySelector(".order-btn-submit"),S=document.querySelector(".close-svg"),m=document.querySelector(".checkout-modal"),r={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};k();l();w();r.cartProductList.addEventListener("click",v);function k(){const t=i();if(!t.length){r.emptyBasketContent.hidden=!1;return}q(t),r.cartMainContainer.hidden=!1,r.emptyBasketWrap.style.display="none",d(),r.orderForm.addEventListener("submit",L)}function l(){const t=i();r.numberOfProducts.textContent=t.length}function v(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const a=t.target.closest(".js-cart-item"),s=a.dataset.id,n=i().filter(({_id:e})=>s!==e);y(n),a.style.display="none",l(),j(),d()}function j(){i().length||(r.cartMainContainer.hidden=!0,r.emptyBasketContent.hidden=!1,r.emptyBasketWrap.style.display="block",r.cartProductList.innerHTML="")}function q(t){const a=t.map(({_id:s,name:o,img:n,category:e,price:c,size:f})=>`<li class="cart-item js-cart-item" data-id = ${s}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${g}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${n}"
                alt="${o}"
                width="100"
                height="100"
              />
              </div>
            </div>
            <div class="cart-item-descr">
              <h3 class="cart-item-title">${o}</h3>
              <div class="cart-text-wrap">
                <p class="cart-item-text">
                  <span class="cart-light-text">Category:</span
                  >&nbsp;&nbsp;${e}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${f}
                </p>
              </div>
              <p class="cart-item-price">${c}</p>
            </div>
          </div>
        </li>`).join("");return r.cartProductList.innerHTML=a}r.deleteAllBtn.addEventListener("click",p);function p(){r.cartProductList.innerHTML="",u(),d(),l(),r.cartMainContainer.hidden=!0,r.emptyBasketContent.hidden=!1,r.emptyBasketWrap.style.display="block"}function d(){const a=i().reduce((s,{price:o,quantity:n})=>s+=o*n,0);r.cartTotalPrice.textContent=a.toFixed(2)}async function L(t){t.preventDefault();const a=t.currentTarget.elements.email.value;if(!a){alert("Please, write your email!");return}P(a),t.currentTarget.reset();const o=i().map(({_id:e})=>({productId:e,amount:1})),n={email:a,products:o};try{const e=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(e.ok){const c=await e.json();alert(c.message),u(),p(),h()}else if(e.status===400){const c=await e.json();alert("Bad request: "+c.message)}else if(e.status===404)alert("Resource not found.");else if(e.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(e){alert("Error: "+e.message)}}function P(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}C.addEventListener("click",function(){m.classList.add("open")});S.addEventListener("click",function(){m.classList.remove("open")});function w(){const t=i();M(t)}function M(t){const a=t.map(({img:e,name:c})=>({img:e,name:c})),s=Math.floor(Math.random()*a.length),n=a[s].map(e=>`
  <img src="${e.img}" alt="${e.name}" width="140" height="140">
  `).join("");b.insertAdjacentHTML("beforeend",n)}
//# sourceMappingURL=commonHelpers.js.map
