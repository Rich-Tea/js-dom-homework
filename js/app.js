document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#game-form');
    newItemForm.addEventListener('submit', newItemFormSubmit);
})

const newItemFormSubmit = function (e) {
    event.preventDefault();

const gameListItem = createGameListItem(e.target);
const gameList = document.querySelector('#game-list');
gameList.appendChild(gameListItem);

e.target.reset();
}