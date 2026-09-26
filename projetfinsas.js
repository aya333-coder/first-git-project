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
}

 

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
function AffichagelisteCandidats(){
    const choix=prompt(`
        1-tries les condidats
        2-filtrer et afficher uniq les candidats d un parti specifique
        3-afficher tous les candidats
    `);
    if (choix==="1"){
 for(let i=0;i<candidats.length-1;i++){
        for(let j=i+1;j<candidats.length;j++){
            if(candidats[i].electeurs.length<candidats[j].electeurs.length){
                swap=candidats[i]
                candidats[i]=candidats[j]
                candidats[j]=swap
            }


        }
        

        }
                console.table(candidats)
        
    }
      else if(choix==="2"){
        const partipl=prompt('entrer un partie politique  ');
        for (i=0;i<candidats.length;i++){
            if(candidats[i].partiPolitique===partipl){ 
                console.log(`
                    CIN : ${candidats[i].cin}
                    Nom et Prenom : ${candidats[i].nom } ${candidats[i].prenom}
                    Age : ${candidats[i].age}
                    Partie Politique : ${candidats[i].partiPolitique}
                    Nombre de vote : ${candidats[i].electeurs}`);
            }

    
           else if (candidats[i].partiPolitique!==partipl){
                     console.log('Aucun parti ');
            break;

            }
else if(choix==="3"){
            console.table(candidats[i])
        } 
        }
    }
 }

    else if (choix=4){
            function votecandidat (){
                let cinelecteur = prompt("entrr votre cin : ");
                for (let i=0 ; i<candidats.length; i++){
                    for (let j=0; j<candidats.length;j++){
                        if(candidats[i].electeurs[j] == cinelecteur)
                            console.log("vous avez déja voté .");



                    }
                }let cinCandidat = prompt("CIN du candidat : ")
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            f = true
            candidats[i].electeurs.push(clcin)
            console.log("ok evri think good")
            return;
        }
    }
            }
            const prompt=require(`prompt-sync`)();
let candidats=[];

   function ajoutenevou(){
    let cin= prompt("entrez le cin :");
   }
    for(let i = 0; i < candidats.length; i++){
        if(candidats[i].cin === cin){
            console.log("Ce CIN existe déjà !");
            return;
        }
    }


        