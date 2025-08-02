const count = localStorage.getItem('pageLoadCount') || 0;
document.querySelector('#no-of-reviews').textContent = count;
