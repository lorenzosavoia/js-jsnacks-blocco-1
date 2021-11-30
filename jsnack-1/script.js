// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.
const risultato = document.querySelector(".risultato");

let arrayNumber = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
    
    let number = parseInt(prompt("inserisci un numero"));
    // console.log(number);
    arrayNumber.push(number);
    sum += arrayNumber[i];
}
// console.log(arrayNumber);
// console.log(sum);
risultato.innerHTML = `il risultato è di ${sum}`;

