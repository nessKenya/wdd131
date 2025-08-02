const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const generatedoptions = products.map(product => `<option value=${product.id}}>${product.name}</option>`).join("");

document.querySelector('#product-name').insertAdjacentHTML('beforeend', generatedoptions);

document.querySelector("#review-form").addEventListener('submit', () => {
  let count = parseInt(localStorage.getItem('pageLoadCount')) || 0;
  count += 1;
  localStorage.setItem('pageLoadCount', count);
});
