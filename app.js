console.log("App is running");
// D'abord cibler l'élément bouton
let addButton = document.querySelector('.add_task');
let listContainer = document.getElementById('task-list');
// Ecouter l'événement click
addButton.addEventListener('click', function(event) {
    event.preventDefault();
    const newTaskElement = document.createElement('li');
    newTaskElement.classList.add('task');
    newTaskElement.innerHTML = `<input type="checkbox" name="task" id="task">
    <button class="btn-tache">
      <label for="task">Nouvelle tâche</label>
    </button>`;
    listContainer.appendChild(newTaskElement);
})
// Prévenir le comportement par défaut du formulaire
