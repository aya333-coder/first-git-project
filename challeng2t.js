const prompt = require('prompt-sync')();
const nombre=parseInt(prompt("entrez le nombres des elément que vous voulez:"));
const tableau =[];
for (let i=0; i<nombre ; i++);{

    let valeur= prompt("le nombres des elément:");
    tableau.push(valeur);
}
console.log("voila votre tableau:");
console.log(tableau);
