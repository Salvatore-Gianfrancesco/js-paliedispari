// ONLY JAVASCRIPT
/*
const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");

let choice;
do {
    choice = prompt("Scegli pari o dispari. ('pari' - 'dispari')");

    if ((choice != "pari") && (choice != "dispari")) alert("Devi scrivere 'pari' oppure 'dispari'");
} while ((choice != "pari") && (choice != "dispari"));
// console.log(choice);

let userNumber;
do {
    userNumber = Number(prompt("Inserisci un numero compreso tra 1 e 5"));

    if ((userNumber < 1) || (userNumber > 5) || isNaN(userNumber)) alert("Devi inserire un numero compreso tra 1 e 5");
} while ((userNumber < 1) || (userNumber > 5) || isNaN(userNumber));
// console.log(userNumber);

const num = generateRandom();
// console.log(num, "in main");

const sum = num + userNumber;
// console.log(sum);

console.log(`Il numero estratto da computer è ${num}`);
console.log(`La somma tra i due numeri è ${sum}`);
h2El.innerHTML = `Il numero estratto da computer è ${num}. La somma tra i due numeri è ${sum}`

const result = isEvenOdd(sum);
if (result === choice) {
    console.log("Hai vinto!!");
    h1El.innerHTML = "Hai vinto!!";
} else {
    console.log("Hai perso!!");
    h1El.innerHTML = "Hai perso!!";
}
*/

const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");
const checkChoiceEl = document.querySelector(".check_choice");
const checkNumberEl = document.querySelector(".check_number");
const h2El = document.querySelector("h2");

buttonEl.addEventListener("click", function () {
    const checkedChoice = document.querySelector('.check_choice:checked').value;
    const checkedNumber = Number(document.querySelector('.check_number:checked').value);
    // console.log(checkedChoice, checkedNumber);

    const num = generateRandom();
    // console.log(num, "in main");

    const sum = num + checkedNumber;
    // console.log(sum);

    document.querySelector(".computer_number > div").innerHTML = num;
    document.querySelector(".sum_number > div").innerHTML = sum;

    const result = isEvenOdd(sum);
    if (result === checkedChoice) {
        console.log("Hai vinto!!");
        h2El.innerHTML = "Hai vinto!!";
    } else {
        console.log("Hai perso!!");
        h2El.innerHTML = "Hai perso!!";
    }
});

function generateRandom() {
    const num = Math.floor(Math.random() * 5 + 1);
    // console.log(num, "in function");
    return num;
}

function isEvenOdd(num) {
    if (num % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}