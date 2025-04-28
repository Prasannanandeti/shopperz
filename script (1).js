const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
function goToPayments(image, name, price) {
  const product = { image, name, price };
  localStorage.setItem('selectedProduct', JSON.stringify(product));
  window.location.href = 'payments.html';
}

