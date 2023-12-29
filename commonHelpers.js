import{g as d,s as b,i as y,c as g,u as f}from"./assets/scrollup-8a4568bf.js";document.getElementById("close-my-modal-btn").addEventListener("click",v);function v(){document.getElementById("my-modal").classList.remove("open"),body.classList.remove("modal-open")}window.addEventListener("keydown",t=>{t.key==="Escape"&&(document.getElementById("my-modal").classList.remove("open"),body.classList.remove("modal-open"))});document.querySelector("#my-modal .modal__box").addEventListener("click",t=>{t._isClickWithInModal=!0});document.getElementById("my-modal").addEventListener("click",t=>{t._isClickWithInModal||(t.currentTarget.classList.remove("open"),body.classList.remove("modal-open"))});document.querySelector(".order-form");const p=document.querySelector(".img-cart-modal");document.querySelector(".order-btn-submit");document.querySelector(".close-svg");document.querySelector(".checkout-modal");const L=document.body,e={cartProductList:document.querySelector(".js-cart-list"),deleteAllBtn:document.querySelector(".js-delete-all-btn"),emptyBasketContent:document.querySelector(".empty-basket-content"),emptyBasketWrap:document.querySelector(".empty-basket-wrap"),cartMainContainer:document.querySelector(".main-content-with-delete-all"),numberOfProducts:document.querySelector(".js-number-of-products"),cartTotalPrice:document.querySelector(".js-cart-amount"),orderForm:document.querySelector(".order-form")};k();l();P();e.cartProductList.addEventListener("click",C);function k(){const t=d();if(!t.length){e.emptyBasketContent.hidden=!1;return}B(t),e.cartMainContainer.hidden=!1,e.emptyBasketWrap.style.display="none",u(),e.orderForm.addEventListener("submit",I)}function l(){const t=d();e.numberOfProducts.textContent=t.length}function C(t){if(!t.target.classList.contains("js-delete-product-btn"))return;const a=t.target.closest(".js-cart-item"),r=a.dataset.id,s=d().filter(({_id:n})=>r!==n);b(s),a.style.display="none",l(),S(),u()}function S(){d().length||(e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block",e.cartProductList.innerHTML="")}function B(t){const a=t.map(({_id:r,name:o,img:s,category:n,price:m,size:c})=>{const i=n.split("_").join(" ");return`<li class="cart-item js-cart-item" data-id = ${r}>
       <span class="delete-product-btn js-delete-product-btn">
              <svg width="12" height="12" class='js-delete-product-btn'>
                <use class='js-delete-product-btn' href="${y}#close-button"></use></svg
            ></span>
          <div class="cart-item-info-wrap">
            <div class="cart-img-wrap-bgc">
              <div class="cart-img-thumb">
              <img
                src="${s}"
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
                  >&nbsp;&nbsp;${i}
                </p>
                <p class="cart-item-text">
                  <span class="cart-light-text">Size:</span>&nbsp;&nbsp;${c}
                </p>
              </div>
              <p class="cart-item-price">$${m}</p>
            </div>
          </div>
        </li>`}).join("");return e.cartProductList.innerHTML=a}e.deleteAllBtn.addEventListener("click",h);function h(){e.cartProductList.innerHTML="",g(),u(),l(),e.cartMainContainer.hidden=!0,e.emptyBasketContent.hidden=!1,e.emptyBasketWrap.style.display="block"}function u(){const a=d().reduce((r,{price:o,quantity:s})=>r+=o*s,0);e.cartTotalPrice.textContent=a.toFixed(2),f()}async function I(t){t.preventDefault();const a=t.currentTarget.elements.email.value;if(!a){alert("Please, write your email!");return}t.currentTarget.reset();const o=d().map(({_id:n})=>({productId:n,amount:1})),s={email:a,products:o};try{let n=function(){document.getElementById("my-modal").classList.add("open"),L.classList.add("modal-open")};document.getElementById("open-modal-btn").addEventListener("click",n);const c=await fetch("https://food-boutique.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(c.ok)n(),g(),h(),f();else if(c.status===400){const i=await c.json();alert("Bad request: "+i.message)}else if(c.status===404)alert("Resource not found.");else if(c.status===500)alert("Server error. Please try again later.");else throw new Error("Failed to subscribe.")}catch(n){alert("Error: "+n.message)}}function P(){const t=d();w(t)}function w(t){const a=t.map(({img:r,name:o})=>({img:r,name:o}));if(a.length===1){const r=a[0],o=`<img src="${r.img}" alt="${r.name}" width="140" height="140">`;p.insertAdjacentHTML("beforeend",o)}else{const r=`<svg class="success-svg" width="140" height="140"><use href="${y}#icon-order-placed-purchased-icon"></use></svg>`;p.insertAdjacentHTML("beforeend",r)}}
//# sourceMappingURL=commonHelpers.js.map
