const n = Number(prompt("Entrez le nombre d'éléments du tableau :"));
const tableau = [];

for (let i = 0; i < n; i++) {
    const element = Number(prompt(`Entrez l'élément ${i + 1} :`));
    tableau.push(element);
}

console.log("Les éléments du tableau sont :");

for (const element of tableau) {
    console.log(element);
}
