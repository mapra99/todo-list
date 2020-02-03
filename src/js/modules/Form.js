const Todo = (() => {
  const button = document.createElement('button');
  button.addEventListener('click', openForm);
  const container = document.createElement('form');
  container.id = 'newTodo';
  container.style.display = 'none';
  const title = document.createElement('input');
  title.name = 'title';
  title.value = '';
  title.type = 'text';

  const titlelabel = document.createElement('label');
  titlelabel.for = 'title';

  container.appendChild(titlelabel);
  container.appendChild(title);

  const body = document.querySelector('body');

  body.appendChild(button);
  body.appendChild(container);
})();
