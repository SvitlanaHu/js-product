import{c as e,i}from"./assets/products-list-2cb6a3de.js";import"./assets/vendor-b592f4c5.js";const a="/js-product/assets/basket_1x-791cbee1.png",n="/js-product/assets/basket_2x-6131b909.png",s=document.querySelector(".cart"),r=()=>{const t=JSON.parse(localStorage.getItem("shoppingCart"))||[];if(t.length>0)s.innerHTML="",s.insertAdjacentHTML("afterbegin",e(t)),e();else{s.innerHTML="";const c=document.querySelector(".cart");c.innerHTML+=`<div class="container">
    <div class="empty-basket">
      <div class="basket_container">
        <ul class="basket_list">
        <span class="cart-page-shop-icon"
          <li class="basket_item">
            <svg class="" width="18" height="18">
            <use
            href="${i}#icon-heroicons-solid_shopping-cart-18x18"
          ></use>            </svg>
          </span>
          </li>
          <li class="basket_item">
            <p class="basket_text">Cart&nbsp;<span class="basket_span">(0)</span></p>
          </li>
        </ul>
      </div>
      <img
        class="basket_img"
        srcset="${a}, ${n}"
        src="${a}"
        alt="yellow shopping basket"
        width="132"
        height="114"
      />
      <div class="basket_container_text">
        <h3 class="basket_title">
          Your basket is <span class="basket_title_span">empty...</span>
        </h3>
        <p class="basket-text">
          Go to the main page to select your favorite products and add them to the
          cart.
        </p>
      </div>
    </div>
  </div>`}};r();
//# sourceMappingURL=commonHelpers.js.map
