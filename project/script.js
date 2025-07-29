// Display the last modified date of the document
const lastUpdated = document.lastModified;
document.getElementById('last-updated').textContent = new Date(lastUpdated).toLocaleString();
