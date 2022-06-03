// On click of each individual <li>, append that <li> and it's text content to #personal-todo-list
// create an event listener on each li.hover-test
// on click, append it to #personal-todo-list 
const todosContainer = document.getElementById('preset-tasks');
const personalTodos = document.getElementById('personal-todo-list');
const todoPostForm = document.getElementById(`todo-form`);
const resetButton = document.getElementById('reset-button');
const startButton = document.getElementById('start-button');
const url = 'http://localhost:3000/todos'



todoPostForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    // const todoInput = document.getElementById(`custom-todo`)
    // let taskInput = {
    //     task: e.target.input.value
    // }
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            task: e.target.input.value
        })
    })
        .then(response => response.json())
        .then(data => {
            const li = document.createElement('li');
            li.classList.add("hover-test");
            li.textContent = e.target.input.value;
            todosContainer.append(li);
            addToTasks(li);
        })
})

fetch(url)
    .then(res => res.json())
    .then((todos) => {
        todos.forEach((todo) => {
            const li = document.createElement('li');
            li.classList.add("hover-test");
            todosContainer.append(li);
            li.textContent = todo.task;
            addToTasks(li);
        })
    })

function addToTasks(li) {
    li.addEventListener('click', () => {
        const removeButton = document.createElement('button');
        removeButton.textContent = '❌';
        const prependButton = document.createElement('button');
        prependButton.textContent = '⬆️'
        const liPersonal = document.createElement('li');
        liPersonal.classList.add('personal-list-li');
        liPersonal.textContent = li.textContent;
        liPersonal.append(removeButton);
        liPersonal.append(prependButton);
        personalTodos.append(liPersonal);

        removeButton.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        })

        prependButton.addEventListener('click', (e) => {
            personalTodos.prepend(liPersonal);
        })
    
    })
}

//Timer that counts upwards

startButton.addEventListener('click', () => {
    let counterOneID;
    let counterTenID;
    let counterMinuteOneID;
    let counterMinuteTenID;
    
    counterOneID = setInterval(counterOne, 1000);
    counterTenID = setInterval(counterTen, 10000);
    counterMinuteOneID = setInterval(counterMinuteOne, 60000);
    counterMinuteTenID = setInterval(counterMinuteTen, 600000);
    startButton.style.opacity = '0%';
    resetButton.style.opacity = '100%';


    resetButton.addEventListener('click', () => {
        clearInterval(counterOneID);
        clearInterval(counterTenID);
        clearInterval(counterMinuteOneID);
        clearInterval(counterMinuteTenID);
        startButton.style.opacity = '100%';
        resetButton.style.opacity = '0%';
    })
})

function counterOne() {
    const counter = document.querySelector("#one-second");
    let currentNum = counter.textContent;

    let number = parseInt(currentNum, 10);
    number++;

    if (number === 10) {
        number = 0;
    }

    counter.textContent = number;

    resetButton.addEventListener('click', () => {
        counter.textContent = 0;
    })
}

function counterTen() {
    const counter = document.querySelector("#ten-second");
    let currentNum = counter.textContent;

    let number = parseInt(currentNum, 10);
    number++;

    if (number === 6) {
        number = 0;
    }

    counter.textContent = number;

    resetButton.addEventListener('click', () => {
        counter.textContent = 0;
    })
}

function counterMinuteOne() {
    const counter = document.querySelector("#one-minute");
    let currentNum = counter.textContent;

    let number = parseInt(currentNum, 10);
    number++;

    if (number === 10) {
        number = 0;
    }

    counter.textContent = number;

    resetButton.addEventListener('click', () => {
        counter.textContent = 0;
    })
}

function counterMinuteTen() {
    const counter = document.querySelector("#ten-minute");
    let currentNum = counter.textContent;

    let number = parseInt(currentNum, 10);
    number++;

    if (number === 6) {
        number = 0;
    }

    counter.textContent = number;

    resetButton.addEventListener('click', () => {
        counter.textContent = 0;
    })

}
