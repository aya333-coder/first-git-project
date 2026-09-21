const prompt = require('prompt-sync')();
const nb=parseInt(prompt("entrez le nombres des elément que vous voulez:"));
const tableau =[];
for (let i=0 ;i<nb ;i++){
    let nombre=parseInt(prompt("entrez un element."));
    tableau.push(nombre)
}
let facteur=parseInt(prompt("entrez facteur de multiplication:"));
for(let i=0;i<tableau.length;i++){
    tableau[i]=tableau[i]*facteur
}
console.log(tableau);

