document.addEventListener('DOMContentLoaded', function () {
    const newItemForm = document.querySelector('#game-form');
    newItemForm.addEventListener('submit', newItemFormSubmit);
})

const newItemFormSubmit = function (event) {
    event.preventDefault();

const gameListItem = createGameListItem(event.target);
const gameList = document.querySelector('#game-list');
gameList.appendChild(gameListItem);


}

const createGameListItem = function (form) {
    const gameListItem = document.createElement('li');
    gameList.classList.add('game-list-item');

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    gameListItem.appendChild(title);
  
    const genre = document.createElement('h3');
    title.textContent = form.genre.value;
    gameListItem.appendChild(genre);

    const platform = document.createElement('p');
    title.textContent = form.platform.value;
    gameListItem.appendChild(platform);
    
 return gameListItem;

}


