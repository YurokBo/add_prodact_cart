
document.addEventListener('click', e => {
    const quantityControl = e.target.closest('.product__quantity-control');
    const addButton = e.target.closest('.product__add');

    if (quantityControl) {
        changeQuantity(quantityControl);
    }

    if (addButton) {
        addProducts(addButton);
    }

});

function changeQuantity(btn) {
    const isDec = btn.classList.contains('product__quantity-control_dec'),
        productQuantityControls = btn.closest('.product__quantity-controls'),
        value = productQuantityControls.querySelector('.product__quantity-value'),
        quantity = +value.textContent;

    value.textContent = isDec ? Math.max(1, quantity - 1) : quantity + 1;

}

function addProducts(btn) {

    const cartProducts = document.querySelector('.cart__products'),
        product = btn.closest('.product'),
        value = product.querySelector('.product__quantity-value'),
        productImage = product.querySelector('.product__image'),
        {id} = product.dataset,
        quantity = +value.textContent,
        existingCartProduct = document.querySelector(`.cart__product[data-id="${id}"]`);

    value.textContent = 1;
    if(existingCartProduct) {
        const cartProductCount = existingCartProduct.querySelector('.cart__product-count');

        cartProductCount.textContent =quantity+ +cartProductCount.textContent   ;

        return;
    }

    cartProducts.innerHTML += `
  							<div class="cart__product" data-id=${id}>
                	<img class="cart__product-image" src='${productImage.src}'>
                	<div class="cart__product-count">${quantity}</div>
                </div>
            `;
}



