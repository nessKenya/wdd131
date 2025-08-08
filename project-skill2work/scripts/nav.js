const menu = document.querySelector("#menu");
const navigation = document.querySelector('#navigation');

menu.addEventListener("click", () => {
  document.querySelector('#hamburger-icon').classList.toggle('d-none');
  document.querySelector('#times-icon').classList.toggle('d-none');
  navigation.classList.toggle('d-none');
});
