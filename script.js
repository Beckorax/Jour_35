
// Feature 1
// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console
var myFooter = document.getElementsByTagName('footer')[0];
// ou bien celle là: var myFooter = document.querySelector('footer');

function onFoorterClick() {
    console.log('clique');
}

myFooter.addEventListener("click", onFoorterClick);

// lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x"
//avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
var myFooter = document.querySelector('footer');
var x=1;
function onFoorterClick() {
    console.log('clic numéro '+ x);
    x++
}

// Feature 2 "Hamburger Menu"
// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader
//perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus,
// la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

var menuHamb = document.querySelector('button');
var navbarHeader = document.getElementById('navbarHeader');
menuHamb.addEventListener("click", toggleOn);

function toggleOn() {
    navbarHeader.classList.toggle("collapse");
};

// Feature 3
// si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre
// en rouge de façon irréversible (sauf si on recharge la page).
var myEditButton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; // dans la collections HTML, je prend le premier
myEditButton.addEventListener('click', putRedText);

function putRedText() {
    var cardChange = document.querySelector('p.card-text');
    cardChange.style.color = 'red';
}

// Feature 4
// si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert.
// Si on re-clique dessus, il redevient comme avant !
//Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte.

var myEditButton2 = document.querySelectorAll('div.btn-group')[1].children[1]; // dans la collections HTML, je prend le deuxième
myEditButton2.addEventListener('click', putGreenText1);

var statusButton = false;  // va permettre de checker la bascule vert ou pas
function putGreenText1() {
    var cardChange2 = document.querySelectorAll('p.card-text');  // je cherche l'élément à traiter
    if (statusButton) {             // si statusButton est true, le texte est vert faut mettre en normal
        statusButton = false;
        cardChange2[1].style.color = '';
    } else {                        // si statusButton est false, le texte est normale faut mettre en vert
        statusButton = true;
        cardChange2[1].style.color = 'green';
    }
}

// Feature 5
// si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et
// la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS.
// Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait
// tout revenir à la normale).

var cdnBootstrap = document.getElementsByTagName('link')[0]; //je récupère la balise link
var doubleClicNavbar = document.querySelector('header'); // la zone header cliquable
var headTag = document.querySelector('head');  //le parent à ajouter un child
var statusHeader = false;

var changeCDN = function () {
  if (statusHeader == false) {
    cdnBootstrap.parentNode.removeChild(cdnBootstrap);
    statusHeader = true;
  } else if (statusHeader == true) {
    headTag.appendChild(cdnBootstrap);
    statusHeader= false;
  }
};

doubleClicNavbar.addEventListener('dblclick', changeCDN);
