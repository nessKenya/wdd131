const menu = document.querySelector("#menu");
let active = "hamburger";
menu.addEventListener("click", () => {
  if (active === "hamburger") {
    document.querySelector("#hamburger-icon").classList.add("d-none");
    document.querySelector("#times-icon").classList.remove("d-none");
    document.querySelector("#times-icon").classList.add("d-block");
    active = "times";

    // toggle menu
    document.querySelector("#menu-items").classList.add("d-flex");
    document.querySelector("#menu-items").classList.remove("d-none");
  } else {
    document.querySelector("#times-icon").classList.add("d-none");
    document.querySelector("#hamburger-icon").classList.remove("d-none");
    document.querySelector("#hamburger-icon").classList.add("d-block");
    active = "hamburger";

    // toggle menu
    document.querySelector("#menu-items").classList.add("d-none");
    document.querySelector("#menu-items").classList.remove("d-flex");
  }
});
