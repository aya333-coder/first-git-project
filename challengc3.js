const prompt = require('prompt-sync')();
let x=parseFloat(prompt("la premier valeur:"));
let y=parseFloat(prompt("la déuxéme valeur:"));
let somme=x+y
if (x===y){
    let somme=somme*3
}
console.log("le resultat est:" + somme);
