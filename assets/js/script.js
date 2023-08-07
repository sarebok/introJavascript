const productPrice = document.querySelector("#product-price");
const inputProductQuantity = document.querySelector("#input-product-quantity");
const inputColor = document.querySelector("#input-color");
const buyBtn = document.querySelector("#buy-button");

buyBtn.addEventListener("click", calculate);

function calculate() {
  //calcular multiplicacion entre el numero inputado y el precio del pc
  const a = inputProductQuantity.value;
  const totalPrice = Number(productPrice.innerHTML) * Number(a);
  //asignar valor calculado a calculated-total-price
  const calculatedTotalPrice = document.querySelector(
    "#calculated-total-price"
  );
  calculatedTotalPrice.innerHTML = totalPrice;

  //asignar valor de cantidad inputada a calculated-quantity

  const calculatedQuantity = document.querySelector("#calculated-quantity");
  calculatedQuantity.innerHTML = a;
  const cardManip = document.querySelector("#card-js");
  cardManip.style.borderColor = inputColor.value;
  //incluir el color en texto
  const selectedColor = document.querySelector("#selected-color");
  selectedColor.innerHTML = inputColor.value;
  selectedColor.style.color = inputColor.value;
}
