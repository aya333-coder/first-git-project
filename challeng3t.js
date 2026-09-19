const prompt = require('prompt-sync')();
let n = Number(prompt("entrer le nombre:"));
let tableau=[]
    for (let i=0; i<n; i++) {
    let element = Number(prompt("Entrez l'élément " + (i + 1) + " :"));
    tableau.push(element);
}

let somme = 0;

for (let i = 0; i < tableau.length; i++) {
    somme = somme + tableau[i];
}

console.log("La somme totale est : " + somme);

