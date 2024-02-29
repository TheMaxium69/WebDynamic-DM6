console.log("Start JS");

let statusUser = "VIP";
let nbPlaceUser = 101;
let nbPlaceMaxiumu = 100;

if(statusUser == "VIP" && nbPlaceUser <= nbPlaceMaxiumu){
    // Deux conditions fausse
    console.log("tu peut entré");
} else if(statusUser == "VIP") {
    // La quel des deux conditions a été fausse (la première)
    console.log("probleme de place");
} else {
    // La quel des deux conditions a été fausse (la deuxieme)
    console.log("problème status");
}


console.log("---------------------------------------");


function maTyroFunction() {
    // CE QUON VEUT
    console.log("salut");
}

maTyroFunction();

function aditions($arg, $arg2){
    let temp = $arg + $arg2
    console.log(temp);
}

let chiffre = 2;
let chiffre2 = 3;
aditions(chiffre, chiffre2);

aditions(1, 3);


function soustraction($arg, $arg2){
    let resultat = $arg - $arg2
    return resultat;
}

let resultatdelaFunction = soustraction(2, 3);
console.log(resultatdelaFunction);

let utilisateur1 = "VIP";
let utilisateur2 = "Etudiant";
let utilisateur3 = "Cuisinier";

function verifEnter($statusUser2){

    if($statusUser2 == "VIP" || $statusUser2 == "Cuisinier"){
        return "entre";
    } else {
        return "non";
    }

}

let resultat1 = verifEnter(utilisateur1);
console.log(resultat1);

let resultat2 = verifEnter(utilisateur2);
console.log(resultat2);

let resultat3 = verifEnter(utilisateur3);
console.log(resultat3);


console.log("---------------------------------------");

const prix_unitaire = 5;
let quantite = 3;
const reduction = 10;

function calculer_cout_total(prix_unitaire_arg, quantite_arg, reduction_arg){
    
    let cout_total = prix_unitaire_arg * quantite_arg;

    if(reduction_arg > 0 && reduction_arg <= 100){

        // Calculé la reduction
        let reduction_applicable = cout_total * (reduction_arg / 100);
        cout_total = cout_total - reduction_applicable;

    }

    return cout_total;

}

let cout_final = calculer_cout_total(prix_unitaire, quantite, reduction);
console.log("Voilà le prix que tu doit payé : ", cout_final);

// alert("Voici le cout total : " + cout_final);



console.log("---------------------------------------");


for(let i = 1;i <= 6;i++){
    //Code
    console.log("[for] Je suis dans une boucle et je suis stagaire numéro : ", i);

}


let j = 0;
while(j < 6){

    //Code
    console.log("[while] Je suis dans une boucle et je suis stagaire numéro : ", j);
    j++;

}

console.log("----------------------------");

function calcule_somme_for(seuil){

    let somme = 0;
    for(let i = 1; i <= seuil; i++) {

        console.log("je boucle");
        // somme += i;
        somme = somme + i;
    }
    console.log("Je suis le resultat de toute les boucles additionné entre elle : ", somme)


}

calcule_somme_for(3);


function calcule_somme_while(seuil){

    let somme = 0;
    let j = 0;
    while(j <= seuil){

        somme = somme + j;
        j++;

    }

    console.log("Je suis le resultat ...... : ", somme);


}

calcule_somme_while(3);

console.log("----------------------------");

let user = {
    "username": "Maxime",
    "email": "maxime.tournier@tyrolium.fr",
    "isConnected" : true
};

// PARAGRAPHE

let myParagraphe = document.getElementById('paragraphe2');

myParagraphe.innerHTML = "je suis javascript";

console.log(myParagraphe.innerHTML);

let isLog = 0;
// ON CLICK
function testConnexion(){
    let myTitle = document.getElementById('title');

    if(user.isConnected == true && isLog == 0){
        myTitle.innerHTML = myTitle.innerHTML + user.username
        isLog = 1;
    }
    console.log("la connexion quoicoubeh est mise àpagnan jour");
}




let objectServer = {};

fetch('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=2')
    .then(function (response) {

        return response.text();

    })

    .then(function (data){
        console.log(JSON.parse(data));
        objectServer = JSON.parse(data);
        console.log(objectServer.name);

    })

    .then(function (error){
        console.log(error)
    });

console.log(objectServer.name);



let myTitle = document.getElementById('title');

myTitle.innerHTML = objectServer.name






