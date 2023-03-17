
  const form = document.getElementById('comment-form');
  const commentList = document.getElementById('comment-list');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    // Créer un nouvel élément de commentaire
    const comment = document.createElement('li');
    const name = document.createElement('h3');
    const text = document.createElement('p');

    // Ajouter le nom et le commentaire à l'élément de commentaire
    name.textContent = nameInput.value;
    text.textContent = commentInput.value;
    comment.appendChild(name);
    comment.appendChild(text);

    // Ajouter l'élément de commentaire à la liste de commentaires
    commentList.appendChild(comment);

    // Réinitialiser les champs de saisie
    nameInput.value = '';
    commentInput.value = '';
  });