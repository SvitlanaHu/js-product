import{g as c,s as f,i as g,c as u,u as h}from"./assets/symbol-defs-04bf95ba.js";document.querySelector(".js-cart-list");document.querySelector(".js-delete-all-btn");document.querySelector(".all-content-wrap");document.querySelector(".js-number-of-products");document.querySelector(".js-cart-amount");document.querySelector(".order-form");const b=document.querySelector(".image-container-modal-cart");document.querySelector(".order-btn-submit");const S=document.querySelector(".close-svg"),m=document.querySelector(".checkout-modal"),e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};C();l();j();e.cartProductList.addEventListener("click",k);function C(){const t=c();if(!t.length){e.emptyBasketContent.hidden=!1;return}v(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",d(),e.orderForm.addEventListener("submit",L)}function l(){const t=c();e.numberOfProducts.textContent=t.length}function k(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const a=t.target.closest(".js-cart-item"),o=a.dataset.id,s=c().filter(({_id:r})=>o!==r);f(s),a.style.display="none",l(),q(),d()}function q(){c().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function v(t){const a=t.map(({_id:o,name:n,img:s,category:r,price:i,size:y})=>`<li class="cart-item js-cart-item" data-id = ${o}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${g}#close-button"></use></svg
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
                  >&nbsp;&nbsp;${r}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${y}
                </p>
              </div>
              <p class="cart-item-price">${i}</p>
            </div>
          </div>
        </li>`).join("");return e.cartProductList.innerHTML=a}e.deleteAllBtn.addEventListener("click",p);function p(){e.cartProductList.innerHTML="",u(),d(),l(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function d(){const a=c().reduce((o,{price:n,quantity:s})=>o+=n*s,0);e.cartTotalPrice.textContent=a.toFixed(2)}async function L(t){t.preventDefault();const a=t.currentTarget.elements.email.value;if(!a){alert("Please, write your email!");return}P(a),t.currentTarget.reset();const n=c().map(({_id:r})=>({productId:r,amount:1})),s={email:a,products:n};try{const r=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(r.ok)m.classList.add("open"),u(),p(),h();else if(r.status===400){const i=await r.json();alert("Bad request: "+i.message)}else if(r.status===404)alert("Resource not found.");else if(r.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(r){alert("Error: "+r.message)}}function P(t){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email!");return}}S.addEventListener("click",function(){m.classList.remove("open")});function j(){const t=c();w(t)}function w(t){const a=t.map(({img:r,name:i})=>({img:r,name:i})),o=Math.floor(Math.random()*a.length),n=a[o],s=`<img src="${n.img}" alt="${n.name}" width="140" height="140">`;b.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=commonHelpers.js.map
