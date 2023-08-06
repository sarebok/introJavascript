const productPrice = document.querySelector("#product-price");
const inputProductQuantity = document.querySelector("#input-product-quantity");
const inputColor = document.querySelector("#input-color");
const buyBtn = document.querySelector("#buy-button");

buyBtn.addEventListener("click", calculate);

function calculate() {
  const a = inputProductQuantity.value;
  const totalPrice = Number(productPrice.innerHTML) * Number(a);
  const calculatedTotalPrice = document.querySelector(
    "#calculated-total-price"
  );
  calculatedTotalPrice.innerHTML = totalPrice;
}
