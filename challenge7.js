const prompt = require('prompt-sync')();
let nombre1 = parseFloat(prompt("entrez le nombre 1:"));
let nombre2 = parseFloat(prompt("entrez le nombre 2:"));
let nombre3 =parseFloat(prompt("entrez le nombre 3:"));
 let moyenne_pondérée = (nombre1*2+ nombre2*3+ nombre3*5) / (2+3+5);
 console.log("la moyenne pendrérée est :", moyenne_pondérée) ;
 

 

