const productPrice = document.querySelector("#product-price");
console.log(productPrice);
const inputProductQuantity = document.querySelector("#input-product-quantity");
console.log(inputProductQuantity);
const inputColor = document.querySelector("#input-color");
console.log(inputColor);
const buyBtn = document.querySelector("#buy-button");
console.log(buyBtn);

buyBtn.addEventListener("click", calculate);

function calculate() {
  const a = inputProductQuantity.value;
  const totalPrice = Number(productPrice.innerHTML) * Number(a);
  const calculatedTotalPrice = document.querySelector(
    "#calculated-total-price"
  );
  calculatedTotalPrice.innerHTML = totalPrice;
}
