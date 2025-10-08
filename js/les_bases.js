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