const prompt = require('prompt-sync')();
let vitessekm = parseFloat(prompt("enter la vitesse en km_h:"));
let m_s = vitessekm * 1093.61
console.log (`${vitessekm}km_h correspond à ${m_s}m_s`);
