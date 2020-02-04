const DOM = (() => {
  const openForm = () => {
    const container = document.querySelector('#newTodo');
    container.style.display = 'block';
    const button = document.querySelector('.todoButton');
    button.style.display = 'none';
  };

  const closeForm = () => {
    const container = document.querySelector('#newTodo');
    container.style.display = 'none';
  };
  const Todo = () => {
    const button = document.createElement('button');
    button.classList.add('todoButton', 'bg-primary', 'form-control', 'text-center');
    button.innerText = 'Add Todo';
    button.addEventListener('click', openForm);
    const container = document.createElement('form');
    container.id = 'newTodo';
    container.style.display = 'none';
    const title = document.createElement('input');
    title.classList.add('form-control');
    title.name = 'title';
    title.value = '';
    title.type = 'text';

    const titlelabel = document.createElement('label');
    titlelabel.for = 'title';
    titlelabel.innerText = 'Name';

    const description = document.createElement('textarea');
    description.classList.add('form-control');
    description.name = 'description';
    description.value = '';

    const descriptionlabel = document.createElement('label');
    descriptionlabel.for = 'description';
    descriptionlabel.innerText = 'Description';

    const dueDate = document.createElement('input');
    dueDate.classList.add('form-control', 'bg-primary');
    dueDate.name = 'date';
    dueDate.value = '';
    dueDate.type = 'date';

    const datelabel = document.createElement('label');
    datelabel.for = 'date';
    datelabel.innerText = 'Date';

    const priority = document.createElement('select');
    priority.classList.add('form-control');
    priority.name = 'priority';
    priority.value = '';

    const option1 = document.createElement('option');
    option1.value = 'High';
    option1.innerText = 'High';

    const option2 = document.createElement('option');
    option2.value = 'Medium';
    option2.innerText = 'Medium';

    const option3 = document.createElement('option');
    option3.value = 'Low';
    option3.innerText = 'Low';

    priority.append(option1, option2, option3);

    const prioritylabel = document.createElement('label');
    prioritylabel.for = 'priority';
    prioritylabel.innerText = 'Priority';

    const submit = document.createElement('button');
    submit.innerText = 'Submit';
    submit.classList.add('form-control', 'bg-tetiary');

    const cancel = document.createElement('button');
    cancel.classList.add('form-control', 'bg-danger');
    cancel.innerText = 'Cancel';
    cancel.addEventListener('click', closeForm);

    const todo = document.getElementById('todos');

    container.append(titlelabel,
      title,
      descriptionlabel,
      description, datelabel,
      dueDate,
      prioritylabel,
      priority,
      submit,
      cancel);

    todo.appendChild(button);
    todo.appendChild(container);
  };
  Todo();
})();

export default DOM;