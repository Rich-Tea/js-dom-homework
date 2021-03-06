document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#game-form');
    newItemForm.addEventListener('submit', newItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', deleteAll);
})

const newItemFormSubmit = function (event) {
    event.preventDefault();

const gameListItem = createGameListItem(event.target);
const gameList = document.querySelector('#game-list');
gameList.appendChild(gameListItem);
event.target.reset();
}

const createGameListItem = function (form) {
    const gameListItem = document.createElement('li');
    gameListItem.classList.add('game-form-item');
    
    const title = document.createElement('li');
    title.textContent = form.title.value;
    gameListItem.appendChild(title);

    const genre = document.createElement('li');
    genre.textContent = form.genre.value;
    gameListItem.appendChild(genre);

    const platform = document.createElement('li');
    platform.textContent = form.platform.value;
    gameListItem.appendChild(platform);




    return gameListItem;

}

const deleteAll = function (event) {
    const gameList = document.querySelector('#game-list');
    gameList.innerHTML = '';
  }
  

