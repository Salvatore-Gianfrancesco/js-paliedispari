const h1EL = document.querySelector("h1");

const word = prompt("Inserisci una parola");
// console.log(word);

const wordReversed = reverseWord(word);
// console.log(wordReversed);

if (word === wordReversed) {
    console.log("La parola inserita è un palindromo");
    h1EL.innerHTML = "La parola inserita è un palindromo";
} else {
    console.log("La parola inserita NON è un palindromo");
    h1EL.innerHTML = "La parola inserita NON è un palindromo";
}

function reverseWord(word) {
    word = word.split("");
    // console.log(Array.isArray(word));
    word = word.reverse();
    word = word.join("");
    // console.log(Array.isArray(word));

    return word;
}