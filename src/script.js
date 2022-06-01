// On click of each individual <li>, append that <li> and it's text content to #personal-todo-list
// create an event listener on each li.hover-test
// on click, append it to #personal-todo-list 





//Timer that counts upwards
let counterOneID = setInterval(counterOne, 1000);
let counterTenID = setInterval(counterTen, 10000);
let counterMinuteOneID = setInterval(counterMinuteOne, 60000);
let counterMinuteTenID = setInterval(counterMinuteTen, 600000);

const url = 'http://localhost:3000/todos'

fetch(url)
    .then(res => res.json())
    .then((todos) => {
        const todosContainer = document.getElementById('preset-tasks');
        const personalTodos = document.getElementById('personal-todo-list');
        todos.forEach((todo) => {
            const li = document.createElement('li');
            li.classList.add("hover-test");
            todosContainer.append(li);
            li.textContent = todo.task;

            li.addEventListener('click', () => {
                removeButton = document.createElement('button');
                removeButton.textContent = '❌';
                liPersonal = document.createElement('li');
                liPersonal.classList.add('personal-list-li');
                liPersonal.textContent = todo.task;
                liPersonal.append(removeButton);
                personalTodos.append(liPersonal);

                removeButton.addEventListener('click', (e) => {
                    e.target.parentNode.remove();
                })
            })
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
}

