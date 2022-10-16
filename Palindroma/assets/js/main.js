const labelEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const h1EL = document.querySelector("h1");

// ONLY JAVASCRIPT
/*
const word = prompt("Inserisci una parola");
// console.log(word);

const wordTemp = word.toUpperCase();
// console.log(wordTemp);

const wordReversed = reverseWord(wordTemp);
// console.log(wordReversed);

if (wordTemp === wordReversed) {
    console.log("La parola inserita è un palindromo");
    h1EL.innerHTML = "La parola inserita è un palindromo";
} else {
    console.log("La parola inserita NON è un palindromo");
    h1EL.innerHTML = "La parola inserita NON è un palindromo";
}
*/

buttonEl.addEventListener("click", function () {
    const word = labelEl.value;
    // console.log(word);

    const wordTemp = word.toUpperCase();
    // console.log(wordTemp);

    const wordReversed = reverseWord(wordTemp);
    // console.log(wordReversed);

    if (wordTemp === wordReversed) {
        // console.log("La parola inserita è un palindromo");
        h1EL.innerHTML = "La parola inserita è un palindromo";
    } else {
        // console.log("La parola inserita NON è un palindromo");
        h1EL.innerHTML = "La parola inserita NON è un palindromo";
    }
})

function reverseWord(word) {
    word = word.split("");
    // console.log(Array.isArray(word));
    word = word.reverse();
    word = word.join("");
    // console.log(Array.isArray(word));

    return word;
}