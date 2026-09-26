let prompt = require(`prompt-sync`)()
const candidats = [
    {
        cin: "AB123456",
        nom: "El Amrani",
        prenom: "Yassine",
        partiPolitique: "Parti Alpha",
        age: 35,
        electeurs: ["CD789012", "EF345678"]
    },
    {
        cin: "GH789012",
        nom: "Bennani",
        prenom: "Sara",
        partiPolitique: "Parti Beta",
        age: 42,
        electeurs: ["IJ901234"]
    },
    {
        cin: "KL345678",
        nom: "Alaoui",
        prenom: "Omar",
        partiPolitique: "Parti Gamma",
        age: 29,
        electeurs: ["T332083", "T223344"]
    },
    {
        cin: "MN901234",
        nom: "Fassi",
        prenom: "Salma",
        partiPolitique: "Parti Delta",
        age: 38,
        electeurs: ["OP567890", "QR123456", "ST789012"]
    },
    {
        cin: "UV567890",
        nom: "Tazi",
        prenom: "Hamza",
        partiPolitique: "Parti Alpha",
        age: 51,
        electeurs: ["WX345678"]
    }
]
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


    let ask = Number(prompt("choisiser une option: "))
    if (ask === 0) {
        console.log(" Au rovoir! ")
        break
    } else if (ask === 1) {
        console.clear()
        ajouter()
    } else if (ask === 2) {
        console.clear()
        plusieurs()
    } else if (ask === 3) {
        console.clear()
        afficher()
    } else if (ask === 4) {
        console.clear()
        vote()
    } else if (ask === 5) {
        console.clear()
        modifi()
    } else if (ask == 6) {
        sumprim()
    } else if (ask === 7) {
        serch()
    } else if (ask === 8) {
        console.clear()
        Stati()
    } else {
        console.log(" non trouver")
    }
}
function ajouter() {
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
    if ( >= 18) {
        for (let i = 0; i < candidats.length; i++) {
            if (ask2 === candidats[i].cin) {
                console.log("you cant creat new cant you have ol ready")
                s = true
                return
            }
        }
    } else {
        console.log("you not -18")
    } if (s === false) {
        let obje = {
            cin: ask2,
            nom: ask3,
            prenom: ask4,
            partiPolitique: ask5,
            age: ask6,
            electeurs: []
        }
        candidats.push(obje)
        console.log("evri think is good wlcome ")
    }

}
function plusieurs() {
    let ask8 = Number(prompt("how much candidats : "))
    if (ask8 > 0) {
        for (let i = 0; i < ask8; i++) {
            ajouter()
        }
    } else {
        console.log("you need mor 0")
    }

}
function afficher() {
    console.log(`1.afficher simple
2.Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants)
3.Filtrer et afficher uniquement les candidats d'un parti politique spécifique. `)
    let ra = Number(prompt("your choice : "))
    if (ra === 1) {
        for (let i = 0; i < candidats.length; i++) {
            console.log(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            _________________________`)
        }
    } else if (ra === 2) {

        for (let i = 0; i < candidats.length; i++) {
            for (let x = i + 1; x < candidats.length; x++) {
                if (candidats[i].electeurs.length < candidats[x].electeurs.length) {
                    let s = candidats[i]
                    candidats[i] = candidats[x]
                    candidats[x] = s

                }
            }
            console.log(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            |le nombre de candidats  : ${candidats[i].electeurs}
            |Total : ${candidats[i].electeurs.length}
            _________________________`)
        }

    }

    else if (ra === 3) {
        serch()
    } else {
        console.log("-----------that is not option------------- ")
    }
}

function vote() {
    let clcin = prompt("What's your CIN : ")
    let f = false
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].electeurs.includes(clcin)) {
            console.log("you deja voter ")
            return
        }
    }
    let cinCandidat = prompt("CIN du candidat : ")
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            f = true
            candidats[i].electeurs.push(clcin)
            console.log("ok evri think good")
            return
        }
    }
    if (f === false) {
        console.log("we dont find thats candidats")
    }

}
function modifi() {
    let saak = prompt("what the cin : ")
    let d = false
    for (let i = 0; i < candidats.length; i++) {
        if (saak === candidats[i].cin) {
            d = true
            console.log(`1: Modifier le parti politique d'un candidat
2: Modifier l'âge d'un candidat. `)
            let saak2 = Number(prompt("your choix : "))
            if (saak2 === 1) {
                let l = true
                let sakk = prompt("the new politique : ")
                for (let j = 0; j < candidats.length; j++) {
                    if (candidats[j].partiPolitique === sakk) {
                        l = false
                        console.log("that partiPolitique ol redy used")
                    }
                }
                if (l === true) {
                    candidats[i].partiPolitique = sakk
                    console.log(`ok MR : ${candidats[i].nom} evri thinck is good `)
                }
            } else if (saak2 === 2) {
                let saak3 = Number(prompt("your new age : "))
                if (saak3 > 0) {
                    candidats[i].age = saak3
                } else {
                    console.log("you cant be -18")
                }
            } else {
                console.log("-----------that is not option------------- ")
            }
        }
    }
    if (d === false) {
        console.log("we dont find thats user")
    }
}
function sumprim() {
    let sak = prompt("the cin : ")
    for (let i = 0; i < candidats.length; i++) {
        if (sak === candidats[i].cin) {
            let akse = prompt("are you chour yes/no : ")
            if (akse === "yes") {
                let soso = candidats[i]
                let varu = candidats.indexOf(soso)
                candidats.splice(varu, 1)
            } else if (aske === " no") {
                console.log("ok bienvenu")
            } else {
                console.log("that is not option just yes/no")
            }
        }
    }
}

function serch() {
    let ask20 = prompt("naim : ")
    let ask21 = prompt("prenom : ")
    let r = false
    for (let i = 0; i < candidats.length; i++) {
        if (ask20 === candidats[i].nom && ask21 === candidats[i].prenom) {
            r = true
            console.log(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            |elsectrous : ${candidats[i].electeurs}`)
        }
    }
    if (r === false) {
        console.log("we dont find that user")
    }
}
function Stati() {
    console.log(`1: Afficher le nombre total de candidats. 
2 :Afficher le nombre total de votes exprimés dans toute l'élection
3: Afficher le Top 3 des candidats ayant le plus de votes. 
4: Afficher le nombre de candidats par parti politique`)
    let bb = 0
    let choi = Number(prompt("your choice : "))
    if (choi === 1) {
        let k = 0
        for (let i = 0; i < candidats.length; i++) {
            k++
        }
        console.log(`le total de candidats.: ${k}`)
    } else if (choi === 2) {
        for (let i = 0; i < candidats.length; i++) {
            for (let s = 0; s < candidats[i].electeurs.length; s++) {
                bb++
                console.log(candidats[i].electeurs)
            }
        }
        console.log(`total electeurs ${bb}`)
    } else if (choi === 3) {
        for (let i = 0; i < 3; i++) {
            for (let x = i + 1; x < candidats.length; x++) {
                if (candidats[i].electeurs.length < candidats[x].electeurs.length) {
                    let s = candidats[i]
                    candidats[i] = candidats[x]
                    candidats[x] = s

                }
            }
            console.log(`cin : ${candidats[i].cin}
            |nom : ${candidats[i].nom}
            |prenom : ${candidats[i].prenom}
            |partiPolitique : ${candidats[i].partiPolitique}
            |age : ${candidats[i].age}
            |le nombre de candidats  : ${candidats[i].electeurs}
            |Total : ${candidats[i].electeurs.length}
            _________________________`)
        }
    } else if (choi === 4) {
        for (let i = 0; i < candidats.length; i++) {
            console.log(`naim : ${candidats[i].nom}
prenom : ${candidats[i].prenom}
le nombre de candidats  : ${candidats[i].electeurs} 
Total : ${candidats[i].electeurs.length}
 _____________________________________________________________________________________`)
        }
    }
    else {
        console.log("thats is not option ")
    }
}