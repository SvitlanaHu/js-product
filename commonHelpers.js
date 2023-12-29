import{g as d,s as v,i as g,c as f,u as h}from"./assets/scrollup-0f0b83de.js";document.getElementById("close-my-modal-btn").addEventListener("click",L);const l=document.body;function L(){document.getElementById("my-modal").classList.remove("open"),l.classList.remove("modal-open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&(document.getElementById("my-modal").classList.remove("open"),l.classList.remove("modal-open"))});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||(t.currentTarget.classList.remove("open"),l.classList.remove("modal-open"))});document.querySelector(".order-form");const y=document.querySelector(".img-cart-modal");document.querySelector(".order-btn-submit");document.querySelector(".close-svg");document.querySelector(".checkout-modal");const k=document.body,e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};C();u();w();e.cartProductList.addEventListener("click",S);function C(){const t=d();if(!t.length){e.emptyBasketContent.hidden=!1;return}I(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",m(),e.orderForm.addEventListener("submit",P)}function u(){const t=d();e.numberOfProducts.textContent=t.length}function S(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const a=t.target.closest(".js-cart-item"),r=a.dataset.id,s=d().filter(({_id:o})=>r!==o);v(s),a.style.display="none",u(),B(),m()}function B(){d().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function I(t){const a=t.map(({_id:r,name:n,img:s,category:o,price:p,size:c})=>{const i=o.split("_").join(" ");return`<li class="cart-item js-cart-item" data-id = ${r}>
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
                  >&nbsp;&nbsp;${i}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${c}
                </p>
              </div>
              <p class="cart-item-price">$${p}</p>
            </div>
          </div>
        </li>`}).join("");return e.cartProductList.innerHTML=a}e.deleteAllBtn.addEventListener("click",b);function b(){e.cartProductList.innerHTML="",f(),m(),u(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function m(){const a=d().reduce((r,{price:n,quantity:s})=>r+=n*s,0);e.cartTotalPrice.textContent=a.toFixed(2),h()}async function P(t){t.preventDefault();const a=t.currentTarget.elements.email.value;if(!a){alert("Please, write your email!");return}t.currentTarget.reset();const n=d().map(({_id:o})=>({productId:o,amount:1})),s={email:a,products:n};try{let o=function(){document.getElementById("my-modal").classList.add("open"),k.classList.add("modal-open")};document.getElementById("open-modal-btn").addEventListener("click",o);const c=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(c.ok)o(),f(),b(),h();else if(c.status===400){const i=await c.json();alert("Bad request: "+i.message)}else if(c.status===404)alert("Resource not found.");else if(c.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(o){alert("Error: "+o.message)}}function w(){const t=d();E(t)}function E(t){const a=t.map(({img:r,name:n})=>({img:r,name:n}));if(a.length===1){const r=a[0],n=`<img src="${r.img}" alt="${r.name}" width="140" height="140">`;y.insertAdjacentHTML("beforeend",n)}else{const r=`<svg class="success-svg" width="140" height="140"><use href="${g}#icon-order-placed-purchased-icon"></use></svg>`;y.insertAdjacentHTML("beforeend",r)}}
//# sourceMappingURL=commonHelpers.js.map
