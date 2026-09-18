const prompt = require('prompt-sync')();
let temperature= parseFloat(prompt("entrez ma température du gaz en celsuis:"));
if (temperature<0){
    console.log("l'eau est solide");
}
else if (0>=temperature<100){
    console.log("l'eau est loquid");
}
else{
    console.log("l'eau est gaz");
}