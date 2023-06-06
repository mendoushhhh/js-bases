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

console.log(baliseHtml)




// ce que je vfais la je veux cibler toute la div complyète 
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById('btn-2'); 
const response = document.querySelector("p");

 

console.log(btn1, btn2);
// ici ce qu'il a fait c'est que dans le premeir btn il a pas mis getelemend by id du coup il a du ajouter le # et dans l'autre il a mis le get element by id et du coup il avait pas besoin de mettre le #

console.log(questionContainer)

// il conseil de tjrs faire un console log lorsqu'on déclare une variable tjrs tjrs pour s'assurer que la variable en question est bien visé  !


questionContainer.style.borderRadius = "150px"


// on apprend la focntion addEvenlistener, en gros je t'ajoute un évenement l'evenèment peut être scroll, submit , mouse , schroll , input, mais on la on va taffer avec click donc on emt click  donc dès qu'il y a l'éve,nement qui se déclenche  la en l'occurence c'est un click alors je veux que tu me fase le code suivant qui est entre {}  ca veut drie qu' achaque fois qu'on va   cloiquer sur questioncontainer hé bien on va 
// déclencher un consol log   
// MediaElementAudioSourceNodeant plutot que de faire console log on peut ausi agir directement sur le style de la balise du coup on fait 

questionContainer.addEventListener('click', () => {
    // questionContainer.style.background = "red";
    // voir la minute 41 il dit qu'on oeut fzire autrement en injectant une classe  et faire toutes les modifications en css voir question-click

questionContainer.classList.remove('question-click')

// pourquoi, avant le question click on a pas mis le . bah tout simplement pcq en haut js savat pas si c'étais du css ou pas donc il fallait préciser avec le . tandis que ici mtn il sait az l'avance grace au classList que c'est pas un séléecteur css vu qu'il sait qu'on parle d'une claasse déja 


    
})


// on lui donne la nature de l'evenement dans le deuxième paramètre genre le "click" et ensuite on lui dit quoi faire
btn1.addEventListener("click", () => {
    // response.style.visibility = "visible";
    // response.style.background = "green"
    // mtn au lieu d tout le tremps écrire cela pour ajouter et modifier une class on fait genre on créer une classe sur css et après on la lie ici du coup on fait  :
    response.classList.add('show-response')
})


// **********************************************************************************************************
// // mouse event<s 

// enfait c'est un petit cercle qui va nous suivre partout
// son nom c'est mousemo ve

const mousemove = document.querySelector(".mousemove")
console.log(mousemove)