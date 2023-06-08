// on apprend le queryselector

// document.querySelector('body')
// // dans ton document je rappelle qu'one st dans le dom et que l'objet le plus haut  c'est document je te demande d'aller chercher la balise qui s'appelle body cela sert enfait a pointer  enfait ce qu'on fait la ça sert a pointer , viser l'élement

// document.querySelector('#btn-1')

// // le queryselector c'est une fonction qui va cibler une class ou id sur le dom  tput ce qui est en css et html on peut tout faire en js *
// // donc dans le document on part du dom va me chercher la balise h4 la il sait qu'il va devoir injecter du style et la on met n'importe quel attribut css

// document.querySelector("h4").style.background = "yellow";
// // dans le document cad le fichier html de base on va selectionner la balise h4 et dans cette balise h4 on va lui integrer dus tyle css (.style) et du coup on ajoute mtn le style background = "yellow"

// ************** faire un clique mtn ***********************************

const baliseHtml = document.querySelector("h4");

console.log(baliseHtml);

// ce que je vfais la je veux cibler toute la div complyète
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

console.log(btn1, btn2);
// ici ce qu'il a fait c'est que dans le premeir btn il a pas mis getelemend by id du coup il a du ajouter le # et dans l'autre il a mis le get element by id et du coup il avait pas besoin de mettre le #

console.log(questionContainer);

// il conseil de tjrs faire un console log lorsqu'on déclare une variable tjrs tjrs pour s'assurer que la variable en question est bien visé  !

questionContainer.style.borderRadius = "150px";

// on apprend la focntion addEvenlistener, en gros je t'ajoute un évenement l'evenèment peut être scroll, submit , mouse , schroll , input, mais on la on va taffer avec click donc on emt click  donc dès qu'il y a l'éve,nement qui se déclenche  la en l'occurence c'est un click alors je veux que tu me fase le code suivant qui est entre {}  ca veut drie qu' achaque fois qu'on va   cloiquer sur questioncontainer hé bien on va
// déclencher un consol log
// MediaElementAudioSourceNodeant plutot que de faire console log on peut ausi agir directement sur le style de la balise du coup on fait

questionContainer.addEventListener("click", () => {
  // questionContainer.style.background = "red";
  // voir la minute 41 il dit qu'on oeut fzire autrement en injectant une classe  et faire toutes les modifications en css voir question-click

  questionContainer.classList.remove("question-click");

  // pourquoi, avant le question click on a pas mis le . bah tout simplement pcq en haut js savat pas si c'étais du css ou pas donc il fallait préciser avec le . tandis que ici mtn il sait az l'avance grace au classList que c'est pas un séléecteur css vu qu'il sait qu'on parle d'une claasse déja
});

// on lui donne la nature de l'evenement dans le deuxième paramètre genre le "click" et ensuite on lui dit quoi faire
btn1.addEventListener("click", () => {
  // response.style.visibility = "visible";
  // response.style.background = "green"
  // mtn au lieu d tout le tremps écrire cela pour ajouter et modifier une class on fait genre on créer une classe sur css et après on la lie ici du coup on fait  :
  response.classList.add("show-response");
});

// **********************************************************************************************************
// // mouse event<s

// enfait c'est un petit cercle qui va nous suivre partout
// son nom c'est mousemo ve
// mousemove = mouvement de la souris

const mousemove = document.querySelector(".mousemove");
console.log(mousemove);
// window enfait c'est le truc même au dessus du document dans la génalogie c'est le truc le plus haut enfazit c'est la fenêtre en questionvoir 1h05:00
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  console.log(e);
  //   ça c'est que sur l'axe des x mtn si tu veux faire sur l'axe des y alors regarde
});
// a cbaque fois qu'il y a un mouvemnet de la souris bah le (e)
//  ça récupère tous les données de l'évenment
//  le e.target le target dis ce que tu survole enfait

// quand la souris est en abs j'aimerais que tu fasses la chose suivante
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});
//  on rajoute un style quand on lcique avec la souris
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

// mtn on fait quand la souris survole une zone , quand elle arrive au dessus de toi donc si jamais la souris arrive on a qu'a lui changer son style quand on entre au dessus de la zone

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

// quand la souris sort de questioncontainer je veux que tu me fasse un consol log
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

// quand tu es sruvoler on la va te mettre des styles comme ça et comme ça
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// ---------------------------------------------------------------------------------
// key Press Event
// keypress pour faire le keypress on va ajouter une div dans html keypress box etc etc
// on pointe les élements
//  a chaque fois qu'on fais const c'est pour pointer
const KeypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
// pas besoin de mettre le hshtag # pcq on a mis getelementbyidpcq on sait c une id
//  en génrale quand on appuie sur une touche et on veut déclencher l'élement quand une touche est appuyé on fait document  , document c'est come si c'étis vrmt le html tu vois celui qui englobait tout
// l'addevenlsitner peut nous recup des données on aurait pu appeller cela (e) ou 'canard
//  ou autre ce que tu veux
document.addEventListener("keypress", (e) => {
  console.log(e.key);
});
//  pas bien compris l'enroule en haut

// intégrer un audio

const ring = () => {
  const audio = new Audio();
  audio.src = "./z.mp3";
  audio.play();
};

//  on reconnait un objet pcq la ya new + Audio en mlajuscule donc terrible ya une logique de code a faire tout le temps
// en générale 1) déclaration de variable
// 2) déclaration de fonctions
// 3) on déclare la logique
//  j'éai eu du mal a comprendre le ring

// ----------------------------------------------------------------------------------------------------

// au départ on se fait une nav ul li sur index  on va dire a la nav bare que quand elle a scrollé un certain nombre de pixels alors sors moi la navbar pcq la enfait la navbar on la cacher a :'aide du top : -50px;

const nav = document.querySelector("nav");

// mtn qu'on a déclarer la variable va falloir mettre un evenment sur la la nav en mode scroll

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  //  on utilise une condition pour faire révéler la navigation
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ---------------------------- form events 

// les evene ments mtn sur le formulaire  , on va sur html eet on créer un formulaire
//  on va faire en sorte que ce quie st tapé en temps réelle dans l'input est affiché également ici,  

const inputName =document.querySelector('input[type="text"]');
  

inputName.addEventListener('input', (e) => {
    console.log(e)
})
//  se récupérer tout les data , paramètres de l'évenement
// j'ai pas très bien compris


// --------------------------------------------------------------

// il montre tout les évenments qui ont une utilité mais yen a d'autre qu'on utilisera jamais
// ce load event a un avantage c'est qu'il se déclenche une fois que toute la page a été chargé , çac'est pas mal pcq si vous avez des logiques qui pompes de l'énergie 

window.addEventListener("load", () =>){
    console.log("document chargé !")
}
//  