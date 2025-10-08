const title = document.getElementById("title");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

let clickNumber = document.getElementById("click-number");

btn.addEventListener("click", function(){
    title.innerHTML = "aaaaa"
})

let click = 0; 
btn2.addEventListener("click", function(){
    click++; // est équivalent à click += 1
    clickNumber.innerHTML = click;
})

btn3.addEventListener("click", function(){
    click--; // est équivalent à click += 1
    clickNumber.innerHTML = click;
})
 
// AVEC LES INPUTS

const inputText = document.getElementById("input-text");
const input1 = document.getElementById("input1");
// permet au contenu de l'input à s'effacer à chaque rechargement de la page 
inputText.innerHTML = "";

input1.addEventListener("input", function(){
    let valueInput = this.value;
    inputText.innerHTML = valueInput;
})

// HIERARCHIE

// childNodes
const mom = document.getElementById("mom");
// récupérer tous les éléments/noeuds (même le texte)
console.log(mom.childNodes);
// Ici on récupère les éléments à l'intérieur de la div qui se trouvent dans mom.
console.log(mom.childNodes[5].childNodes);

// children
console.log(mom.children); 
// prends tous les enfants directs de nom (pas le texte).

// firstChild (prends le texte en compte)
console.log(mom.firstChild);

// FirstElementChild
console.log(mom.firstElementChild);

// les noeuds sont des éléments du DOM

// Supprimer le premier li de mom à partir des paramètres précédant
console.log(mom.children[2].firstElementChild.firstElementChild.remove());

// Création d'un élément
let img = document.createElement("img");

// On change le src (la source)
img.src = "https://images-ext-1.discordapp.net/external/QizzZsRuXtRvO3yeZoMy4qISAAumhFesLOv9ZpHOYN8/https/previews.123rf.com/images/captainimages/captainimages1403/captainimages140300222/26708972-close-up-of-one-piece-of-fried-potato-chips-isolated-on-white-background.jpg?format=webp&width=903&height=602";
img.alt = "belle chips!";
img.style.width = "200px";
img.style.height = "auto";

// Maintenant que l'on a construit notre image on peut "l'accrocher" à un autre élément en tant qu'enfant.

mom.appendChild(img);
