const button = document.querySelector('#btn');
const input = document.querySelector('#input');
const taskList = document.querySelector('.task-list');


button.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (input.value == '') { alert("Пожалуйста, введите текст") }

    createElements(input.value)
})

function createElements(event) {
    const item = document.createElement('li')
    const par = document.createElement('p')
    item.className = "item"
    par.className = "task-item"
    par.textContent = input.value

    const btnEdit = document.createElement('button')
    btnEdit.className = "button-edit"
    btnEdit.innerHTML = "Edit"

    const btnDelete = document.createElement('button')
    btnDelete.className = "button-delete"
    btnDelete.innerHTML = "Delete"

    btnDelete.addEventListener('click', evt => {
        taskList.removeChild(item)
    })

    taskList.appendChild(item)
    item.appendChild(par)
    item.appendChild(btnEdit)
    item.appendChild(btnDelete)

    input.value = ''
}