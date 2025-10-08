// Exemple de variable

let jambon = "jambon"; // let est une variable modifiable
const pi = 3.1415926; // Constante non modifiable
var age = 25; // variable modifiable, à fort taux d'erreur NE SURTOUT PAS L'UTILISER

// Les règles de déclaration

let a = 12; 
console.log(a);

// ne pas remettre let devant une variable, car cela voudrais dire qu'on le redéclare 
// pour le modifier il suffit, de l'appeler par son nom et de mettre = ensuite sa nouvelle valeur.
// console.log permet d'afficher le contenu d'une variable

a = 4;
console.log(a);

const tau = 6.2318;
console.log(tau);
// tau = 7;
// console.log(tau);
// les constantes n'acceptent pas d'autres valeurs que celles déclarées.
// Les deux lignes ci-dessus feront buguer le script. 

var b = 40;
console.log(b);
var b = 50;
console.log(b);

// Les var peuvent être redéclarées causant de gros problèmes de lisibilité.

// Typage Dynamique 

let k = "Coucou tu veux ma bicyclette ?";
console.log(k);
k = 16.2;
console.log(k);

// Les types de données 

// Les nombres = Number

let q = 2; // nombre entier (int)
let p = 45.32; // nombre à virgule flottant
let r = -273.15; // nombre négatif
let s  = 1/3; // fraction;
let t = 16_000;

// les chaînes de caractère (string)

const corneille = "Ingrat,rends-moi mon Cid jusques au dernier mot";
const moliere = 'Votre sang n\'est pas tombé dans de mauvaises mains';

console.log(moliere);
let blague = `c'est une autruche qui rentre dans un bar...`;

// les booleans (TRUE/FALSE) (VRAI/FAUX)

const vrai = true; 
const jeSuisFaux = false;

// Les tableaux = array 

const eleves = ["Autruche", "La Joconde", 4, true];
console.log(eleves);
console.log(eleves[2]);
console.log(eleves[0]);

// Les undefined
console.log(eleves[4]); // undefined, on sort des limites du tableau.
// Les tableaux n'ont pas d'index négatif
// Les tableaux commencent toujours par l'index 0 
// et finissent toujours par l'index égale 
// à la taille du tableau - 1 (se souvenirs)

// Les undefinied 

let d; 
console.log(d);

// La variable a été déclarée mais elle n'a aucune valeur, alors 
// le js la déclare indéfinie (on ne connaît pas la valeur).
// Ce type de données est à éviter absolument !

// Ou par exemple, en sortant des limites d'un tableau, ou en ciblant
// un élément HTML mal écrit.

// Les nulls => null
// C'est une valeur temporaire que l'on met à une variable.

// undefined (erreur de notre part)

let x = null;
console.log(x);

// Les objets

const tasse = {
    color: "Rouge",
    materials: "Céramique",
    prices: 1,
    content_volume: 25
}

const eleve = {
    name: "Jean-Michel",
    age: 18, 
    class: "Terminal",
    notes: [13, 18, 19, 2, 16, 15.5]
}

console.log(eleve.name)

// Calcul de la moyenne de Jean-Michel, en codage naif. (non optimiser)
let moyenne = (eleve.notes[0] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5])/6;
console.log(moyenne);

// Les opérateurs

// Affectation
let aa = 7; // On donne la valeur de 7 à la variable aa

// L'addition
// On additione 12 + 4, donc la variable aa est égale à 16.
// La valeur 7 au dessus est écrasée (remplacée) par l'addition de 12+4(résultat sera 16).
aa = 12 + 4; 
console.log(aa); // donne 16

// L'affectation après addition
// Avec cette écriture, nous n'écrasons pas la valeur mais on ajoute 4 à l'ancienne valeur.
aa += 4;
console.log(aa); // donne 20

// La soustraction
let bb = 20 - 4; 
console.log(bb); // Donne 16

// L'affectation après la soustraction
// Avec cette écriture, nous n'écrasons pas la valeur mais on ajoute 4 à l'ancienne valeur.
bb -= 4;
console.log(bb); // Donne 12

// La multiplication
let cc = 5 * 8; 
console.log(cc); // Donne 40

// L'affectation après la multiplication
// Avec cette écriture, nous n'écrasons pas la valeur mais on ajoute 4 à l'ancienne valeur.
cc *= 2;
console.log(cc); // Donne 80

// La division
let dd = 20/4; 
console.log(dd); // Donne 5

// L'affectation après la division
// Avec cette écriture, nous n'écrasons pas la valeur mais on ajoute 4 à l'ancienne valeur.
dd /= 2;
console.log(dd); // Donne 2.5

// Les modulo
let ee = 13 % 5
console.log(ee);

// L'exponentiels
let ff = 3**2 
console.log(ff);

// Les conditions
let gg = 4;
let hh = 4;
let ii = 9;

if(gg == hh){ // == renvoi true/false
    // Si la condition est remplie, 
}else{
    // Si la condition n'est pas remplie,
}

// Egalité non stricte 
if (6 == "6"){
    console.log("ça marche");
}

// Egalité stricte (à utiliser tout le temps)
if (6 === "6"){ // Vérifie le type 
}else{
    console.log("ça ne marchera pas");
}

// L'égalité stricte vérifie le type de donnée,
// Ici, l'égalité est fausse car 6 est un number,
// et "6" est une chaîne de caractère. 

// On va vérifier si Jean-Michel est majeur

if(eleve.age >= 18){
    // Ici on va faire la concaténation
    // (coller plusieurs chaîne de caractère entre elles)
   // avec le nom de l'élève et un texte descriptif.
    console.log(eleve.name + " est bien majeur");
}else {
    // ici concatenation de litteral de gabarit
    console.log(`${eleve.name} n'est pas majeur`);
}