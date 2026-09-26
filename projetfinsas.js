const prompt=require(`prompt-sync`)();
let candidats=[];

   function ajoutenevou(){
    let cin= prompt("entrez le cin :");

    for(let i = 0; i < candidats.length; i++){
        if(candidats[i].cin === cin){
            console.log("Ce CIN existe déjà !");
            return;
        }
    }

    let nom = prompt("entrez le nom :")
    let prénom = prompt("entrez le prénom :")
    let partipolitique = prompt("entrez la partipolitique :")
    let age = Number(prompt("entrez l'age :"))
    let nvcandidat = {
        cin : cin,
        nom : nom,
        prénom : prénom ,
        partipolitique : partipolitique , 
        age : age,
        electeurs : []
    };
    candidats.push(nvcandidat);
    console.log("candidat ajouté avec succés");
   }
while (true){
    console.log("====================");
    console.log("   MENU PEINCIPAL   ");
    console.log("====================");
    console.log(" 1 Ajouter un nouveau candidat");
    console.log(" 2 Ajouter plusieurs coadidats à la fois");
    console.log(" 3 Afficher la liste des candidats :");
    console.log(" 4  Voter pour un candidat");
    console.log(" 5  Modifier les informations d'un candidat : ");
    console.log(" 6  Supprimer un candidat :");
    console.log(" 7  Rechercher des candidats : ");
    console.log(" 8 Statistiques de l'élection : ");
    console.log(" 0 Quitte");

 

    let choix=parseInt(prompt("choisiser une option: "));
    if (choix === 0){
        console.log("  Au rovoir!  ")
        break
    }else if (choix === 1){
         ajoutenevou()

        
    }else if (choix ===2){
        let nombre= Number(prompt("combien de candidats vollez vous ajouter? :"));
        for (let i =0 ; i<nombre;  i++){
            console.log("--- Candidats", i + 1, "---");
            ajoutenevou();

        }

    }else if (choix ===3){
    function affichelistecandidats (){
        console.log("================= Affichage de la liste des candidats =================");
        console.log("1.affichage simple .");
           console.log(" 2. affichage par parti politique ");
            console.log("3.affichage par nobmre du votes");

            let choix=Number(prompt("commen veux tu afficher la listes des candidats??"));

            if(choix===1){
                console.log("====affichage simple===");

                for (let i = 0; i < candidats.length; i++) {
            console.log("-------------------------");
            console.log("CIN :", candidats[i].cin);
            console.log("Nom :", candidats[i].nom);
            console.log("Prénom :", candidats[i].prénom);
            console.log("Parti politique :", candidats[i].partipolitique);
            console.log("Age :", candidats[i].age);
                }

            }
            else if (choix===2){
                console.log("===affichage par politique===");
                let parti = prompt("Entrez le parti politique : ");
                let trouve = false;
                for (let i = 0; i < candidats.length; i++) {

            if (candidats[i].partipolitique === parti) {

                console.log("-------------------------");
                console.log("CIN :", candidats[i].cin);
                console.log("Nom :", candidats[i].nom);
                console.log("Prénom :", candidats[i].prénom);
                console.log("Parti politique :", candidats[i].partipolitique);
                console.log("Age :", candidats[i].age);

                trouve = true;
            }
            
        }
            if (trouve === false) {
            console.log("Aucun candidat trouvé pour ce parti.");
            }
        }

    




        }

    }
}
