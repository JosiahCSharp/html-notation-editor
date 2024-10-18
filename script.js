const notationInput = document.getElementById('notation-input');
const addNotationBtn = document.getElementById('add-notation-btn');
const notationList = document.querySelector('.notation-list');

let notations = []; // Store notations as an array of strings

addNotationBtn.addEventListener('click', () => {
  const notationText = notationInput.value.trim();
  if (notationText) {
    notations.push(notationText);
    displayNotations();
    notationInput.value = '';
  }
});

function displayNotations() {
  notationList.innerHTML = '';
  notations.forEach(notation => {
    const listItem = document.createElement('li');
    listItem.classList.add('notation-item');
    listItem.textContent = notation;
    notationList.appendChild(listItem);
  });
}
