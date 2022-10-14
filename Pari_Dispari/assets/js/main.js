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

const result = isEvenOdd(sum);
if (result === choice) {
    console.log("Hai vinto!!");
} else {
    console.log("Hai perso!!");
}

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