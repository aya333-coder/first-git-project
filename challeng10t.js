const prompt = require('prompt-sync')();
const nb=parseInt(prompt("entrez le nombres des elément que vous voulez:"));
const tableau =[];
for (let i = 0; i < nb; i++) {
    tableau[i] = Number(prompt("Donner un nombre :"));
}

let x = Number(prompt("Nombre à chercher :"));
let trouve = false;

for (let i = 0; i < nb; i++) {
    if (tableau[i] == x) {
        trouve = true;
        break;
    }
}

if (trouve)
    console.log("Element trouvé");
else
    console.log("Element non trouvé");

