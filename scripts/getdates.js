const year = document.getElementById("currentyear");
year.innerHTML = new Date().getFullYear();

const lastmodified = document.getElementById("lastmodified");
lastmodified.innerHTML = `Last Modification: ${document.lastModified}`;
