
// Ceci affiche des inforamtions dans la console 
console.log("Starting JavaScript");

// Variable de type number
let age = 20;

console.log(age);

let taille = 120;
let addition = 30;
let resultat;

resultat = taille + addition;
console.log("Ma Boite resultat = " + resultat)

let taille2 = 300;
let soustraction = 10;

resultat = taille2 - soustraction;
console.log("Ma Boite resultat = " + resultat)

// Variable de type string

let user = "maxime";
let message = "Bienvenue TyroFrerot je pensse à toi M. ";

/*

bonjourMaxime
bonjour_maxime
BonjourMaxime

*/

let Message_De_Bienvenue_Personnaliser;

Message_De_Bienvenue_Personnaliser = message + user;

console.log(Message_De_Bienvenue_Personnaliser);
console.log(Message_De_Bienvenue_Personnaliser.toUpperCase());
console.log(Message_De_Bienvenue_Personnaliser.toLowerCase());


// Variable de type Boolean

let isDisable = true;

console.log(isDisable);
console.log(typeof isDisable);


// --------------------------------------------------

console.log("---------------------------------");

let testLet = "salut";
console.log(testLet); 
testLet = "bonjour";
console.log(testLet);

const testConst = 10;
console.log(testConst);



// ------------------ACT1------------------------

let note1 = 15;
let note2 = 18;
let note3 = 12;

const nombreDeNote = 3;

let moyenne = (note1 + note2 + note3)/nombreDeNote;
console.log(moyenne)


console.log("--------------------------------------")
// -----------------ACT2-----------------------------

let prixArticle1 = 25.50;
let prixArticle2 = 30.75;
let prixArticle3 = 15.20;

const réduction = 0.10;

let coutsTotalInitial = prixArticle1 + prixArticle2 + prixArticle3;

let montantReduction = coutsTotalInitial * réduction;

let coutsTotalFinal = coutsTotalInitial - montantReduction;

console.log("Le cout total est de : " + coutsTotalFinal);

// ---------------------------------------------
console.log("--------------------------------------")


let panierdeFruits = [
    "orange",       //0
    "banane",       //1
    "pomme",        //2
    "poire"         //3
];


console.log(panierdeFruits);

console.log(
    panierdeFruits[3]
    );

panierdeFruits.push("fraise");

console.log(panierdeFruits[2]);

// ---------------------------------------------
console.log("------------------ACT TABLEAU----------------");

let listeCourses = [];

listeCourses.push("pain");
listeCourses.push("lait");
listeCourses.push("fruit");

console.log(listeCourses);

listeCourses.push("fromage");

console.log(listeCourses);

// alert("Liste course mise à jour");

console.log("-----------------OBJECT---------------------");


let myUser = {
    "id": 1,
    "email": "maxime.tournier@tyrolium.fr",
    "passwd": "maxime2003",
    "createdAt": "22/02/2024",
    "active": true
};

console.log(myUser);
console.log(myUser.passwd);

myUser.passwd = "jesuisunbonmdp@";

console.log(myUser.passwd);

myUser.ip = "10.10.10.10";
console.log(myUser);


console.log("-----------------ACT OBJECT---------------------");


let informationPersonnel = {};

informationPersonnel.age = "50";
informationPersonnel.prenom = "maxime";
informationPersonnel.nom = "tournier";

console.log(informationPersonnel);

informationPersonnel.age = "20";
informationPersonnel.ville = "Décines-Charpieu";

console.log(informationPersonnel);

// alert("Mise à jour effectuez");

console.log("-----------------IF---------------------");

let monPseudo = "TheMaximeSan";
let pseudoFichier = "TheMaximeSan";


if (monPseudo == pseudoFichier) {

// CODE
console.log("tu as les persmissions de le modifier");

}


// ----

let myUser2 = {
    "id": 1,
    "email": "maxime.tournier@tyrolium.fr",
    "passwd": "maxime2003",
    "createdAt": "22/02/2024",
    "active": false
};

if(myUser2.active == true){

    console.log(myUser2);

}

// ---

let noteMaxium = "20";
let apprenant = "28";

if(noteMaxium >= apprenant){

    console.log("note valide");
    console.log("Appprenant a eu : " + apprenant + " / " + noteMaxium);

} else {

    console.log("NOTE INVALIDE LA TRICHE C MAL");

}

// -----------

if (1 == 2){
    console.log("c'est egal");
} else {
    console.log("c'est pas egal");
}

// --- 

let tarifEnfant = 5
let tarifAdulte = 10

let temp = tarifEnfant * 2;

if (temp == tarifAdulte){
    console.log("le tarif enfant est bien 2 fois mois chère que le tarif adulte")
}


let temp2 = tarifAdulte / 2;

if(temp2 == tarifEnfant){
    console.log("c'est bon aussi");
}

// ---

let tailleMinimum = 150;
let poidMinium = 60;

let persone = {
    "prenom": "bob",
    "taille": 140,
    "poids": 70,
    "age": 43
}

if(tailleMinimum <= persone.taille && poidMinium <= persone.poids){

    console.log("RENTRE DANS LE MANEGE");

} else {

    console.log("AUREVVOIR");

}

// ---

let personne2 = {
    "prenom": "bob",
    "taille": 140,
    "poids": 70,
    "age": 17,
    "withParent": true
}

if(personne2.age >= 18 || personne2.withParent == true){

    console.log("bienvneue dans mon resto");


} else {
    console.log("refuser a l'entre");
}

// ------------ ACT CONDITIONS

let ages = 28;

if (ages >= 18){
    console.log("Tu es admis programme");
    // alert("admis")
} else {
    console.log("Tu n'est pas admis");
    // alert("NON admis")
}

// ----- ACT CONDITIONS 2

let categorieInscription = "VIP";
const placeDisponible = 10;

if(categorieInscription == "VIP" && placeDisponible > 0){
    console.log("tu est rentré")
} else {

    if(categorieInscription == "VIP"){
        console.log("désolé mr ya plus place");
    } else {
        console.log("ducoup ya pas de place");
    }
    
}








