const burgerButton = document.getElementById("burger-button");
const sidebarMenu = document.getElementById("sidebar-menu");

burgerButton.addEventListener("click", () => {
  sidebarMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!sidebarMenu.contains(e.target) && !burgerButton.contains(e.target)) {
    sidebarMenu.classList.remove("open");
  }
});
