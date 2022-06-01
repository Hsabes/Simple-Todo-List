//Timer that counts upwards
let counterOneID = setInterval(counterOne, 1000);
let counterTenID = setInterval(counterTen, 10000);
let counterMinuteOneID = setInterval(counterMinuteOne, 60000);
let counterMinuteTenID = setInterval(counterMinuteTen, 600000);

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

