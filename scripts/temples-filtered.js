const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Nairobi Kenya",
    location: "Mountain View, Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay (suburb of Paris), France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seodaemun‑gu, Seoul, South Korea",
    dedicated: "1985, December, 14",
    area: 28057,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  }
];

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


// helper functions
const generateTempleCards = (temples) => {
  let templeCards = '';

  for(const temple of temples) {
    const templeCard = templeTemplate(temple);
    templeCards += templeCard;
  }

  return templeCards;
}

const templeTemplate = (temple) => {
  return `
          <figure>
            <div class='card-header'>
              <div class="row">
                  <span>location:</span>
                  <span class='italic'>${temple.location}</span>
              </div>
              <div class="row">
                  <span>dedicated:</span>
                  <span>${temple.dedicated}</span>
              </div>
              <div class="row">
                  <span>size:</span>
                  <span>${temple.area.toLocaleString()}<span class='italic'>sq ft</span></span>
              </div>
            </div>
            <img
                src=${temple.imageUrl}
                loading="lazy"
                alt=${temple.templeName}
            />
              <figcaption class='italic'>${temple.templeName}</figcaption>
          </figure>
        `;
}


// Show Temples
let templesSection = document.querySelector('.figures');
templesSection.innerHTML = generateTempleCards(temples);


// Show filtered temples.
const oldnavlink = document.querySelector('#old');
const newnavlink = document.querySelector('#new');
const largenavlink = document.querySelector('#large');
const smallnavlink = document.querySelector('#small');
const homenavlink = document.querySelector('#home');

// Show old Temples
oldnavlink.addEventListener('click', () => {
  const oldtemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900)
  templesSection.innerHTML = generateTempleCards(oldtemples)
});


// Show new Temples
newnavlink.addEventListener('click', () => {
  const newtemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000)
  templesSection.innerHTML = generateTempleCards(newtemples)
});

// Show large Temples
largenavlink.addEventListener('click', () => {
  const largetemples = temples.filter(temple => parseInt(temple.area) > 90000)
  templesSection.innerHTML = generateTempleCards(largetemples)
});

// Show small Temples
smallnavlink.addEventListener('click', () => {
  const smalltemples = temples.filter(temple => parseInt(temple.area) < 10000)
  templesSection.innerHTML = generateTempleCards(smalltemples)
});

// Show all Temples
homenavlink.addEventListener('click', () => {
  templesSection.innerHTML = generateTempleCards(temples)
});
