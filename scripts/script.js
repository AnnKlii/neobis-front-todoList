const button = document.querySelector('#btn');
const input = document.querySelector('#input');
const taskList = document.querySelector('.task-list');

button.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (input.value == '') { alert("Пожалуйста, введите текст") }
    else {
        createElements(input.value)
    }
    cleanInput()
})

function createElements() {
    const task = document.createElement('div');
    task.innerHTML = `
    <li class="item">
    <label>
    <input type="checkbox"><span class="circle ${businessOrPersonal()}" ></span>
    </label>
    <p class="task-item">${input.value}</p>
    <button class="button-edit">Edit</button>
    <button class="button-delete">Delete</button>
    </li>
    `
    taskList.appendChild(task)

    taskDelete()
    // taskEdit()
    taskDone()
}
function cleanInput() {
    input.value = '';
    const radioCheck = document.querySelectorAll('[type="radio"]');
    for (const i of radioCheck) {
        i.checked = false;
    }
}

function businessOrPersonal() {
    if (document.querySelector('[type=radio]').checked) {
        return 'business'
    } else { return 'personal' }
}

function taskDelete() {
    const btnDelete = document.querySelectorAll('.button-delete');
    const item = document.querySelectorAll('.item');
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener('click', evt => {
            item[i].remove()
        })
    }
}

function taskDone() {
    const radioBtn = document.querySelectorAll('.item input[type="checkbox"]');
    const taskAll = document.querySelectorAll('.task-item');

    for (let i = 0; i < radioBtn.length; i++) {
        radioBtn[i].addEventListener('click', () => {
            if (radioBtn[i].checked) {
                taskAll[i].classList.add('task-done')
            } else { taskAll[i].classList.remove('task-done') }
        }
        )
    }
}