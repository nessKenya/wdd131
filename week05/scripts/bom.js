const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Get list or initialize empty array if not present
let chaptersArray = getChapterList() || [];

// Render existing items on page load
chaptersArray.forEach(chapter => displayList(chapter));

// Handle add button click
button.addEventListener('click', () => {
  const chapter = input.value.trim();
  if (chapter !== '') {
    displayList(chapter);
    chaptersArray.push(chapter);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

// Display a chapter in the list
function displayList(item) {
  const li = document.createElement('li');
  li.textContent = item;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  // Remove chapter on delete click
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
  });

  li.appendChild(deleteButton);
  list.appendChild(li);
}

// Store chaptersArray to localStorage
function setChapterList() {
  localStorage.setItem('bomChapters', JSON.stringify(chaptersArray));
}

// Retrieve chaptersArray from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('bomChapters'));
}

// Remove chapter from array and localStorage
function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
