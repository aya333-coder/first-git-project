const prompt = require('prompt-sync')();
let distkm = parseFloat(prompt("entrer la distance en km"));
let Yards = distkm * 1093.61
console.log(`${distkm}Km correspond à ${Yards}Yards`);