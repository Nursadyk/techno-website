const barsBtn = document.getElementById("bars-btn");
const navbar = document.getElementById("navbar");
let isOpen = false;
barsBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  navbar.style.display = isOpen ? "block" : "none";
});
