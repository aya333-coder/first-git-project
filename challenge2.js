const prompt = require('prompt-sync')();
let tempCelsuis = parseFloat(prompt("entrer votre température en Celesuis :"));
let k= tempCelsuis +273.15
console.log(`${tempCelsuis}°C correspond à ${k}K`);


