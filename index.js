var unTexte = "voici un texte";

let unChiffre = 24;
unChiffre = 25;

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine =
  "chaine précédente : " + chaine + ".voila c'était le contenu";

let string = "je suis uen chaine de caractère";

let number = 24;

let boolean = false;

let object = {
  Prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 - 5);
// console.log(4 ** 5);

let totale = 0;
totale = totale + 1;
totale++;

console.log(totale);

let x = 2;
let y = 4;

// if (x < y || x > 1) {
//     console.log("ui");
// }

if (x < y && x > 1) {
  alert("prout");
}

function faireQuelqueChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("Calcule terminé !");
}

faireQuelqueChose();


const addition = (a, b) => {
    console.log(a + b);
};
addition (4, 3)
