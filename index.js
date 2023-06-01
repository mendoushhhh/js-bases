// raccourci console log t'écris log et ça te met console.log
console.log("coucou");
//  il conseil a chaque fois de mettre de le point virgule ; ya des outils pour ça
let maSuperVariable = "Hello";
// l'élément a droite passe sa valeur a l'élément a gauche et du coup oui genre c'est un espace de stockage genre une boite nommé maSuperVariable dans laquelle tu met

// ***** les variables **
// var = vieux javascript
var unTexte = "voici un texte";

//  const= constante
//  pour modifier  , const egale constante ça ne bouge pas et cette variable ne bouge pas ne change pas

const prenom = "justine";

// let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

console.log(unChiffre);
// en js que tu choissises les simples guillemets "" ou les doubles guillemets ya pas vrmt de différence

let chaine = "Je suis l'une des chaines de caractères";

// types de données

let string = "je suis uen chaine de caractère";
let number = 24;
let boolean = false;
let array = ["je", "suis", 47, true];
//  ce qu'il faut retenir c'est que tebleau il y a es crochets bien différencier tableaux et( objets)

let object = {
  //  en revanche l'objet c'est des accolades

  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};
let arbre;

//  plus tard dans mon projet je dirai , hgenre la j'ai rpéparé cette boite et j'y mettrai des choses un peu plus tard

arbre = "sapin";

// *** les opérateurs ***
// shift alt et flèche du bas pour répéter

console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
console.log(4 ** 5);
// 4 puissance 5

// ** opérateurs d'affectations **
let totale = 0;
totale = totale + 1;
totale++;
//  a cette ligne ci-dessus on lui a ajouté 1 aussi donc 1+1 ça fait 2 mtn si tu veux rajouter de + que 1on fait  voir ci dssous

totale += 5;
totale -= 4;
totale *= 2;
console.log(totale);

// ** structure de contrôle **

let x = 2;
let y = 2;

// if (x > y) {
//     alert("YES x plus gros que y");

// } else  if (y > x {
//     alert("Y plus grand !");
// } else  {
//     alert("Ils sont egaux");
// }

// On teste si la variable est "true"
if (x) {
    console.log("x existe!
    ")
    // pour tester si la variable existe on test si la variable est true
}


// === test l'égalité en type et contenue
if( x === y) {
    console.log("ils sont egaux");
    

} else  { 
    console.log("pas egaux !"); 
}




// les fonctions **
// la fonction c'et un algortihme dechoses a faire , genre première tu vas faire ça ensuite tu fais ça etc etc on automatise les choses 
function faireQuelqueChose () {

    console.log("je fais un truc");
    console.log(5+6);
    alert("Calcule")

}


