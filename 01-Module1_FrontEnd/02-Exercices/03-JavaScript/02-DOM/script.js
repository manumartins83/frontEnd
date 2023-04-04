//-modification titre + paragraphe-


//-fonctions-
//centrage titre
function centrage_h1(_h1) {
    _h1.style.textAlign = 'center'; //alignement texte
}
//style texte paragraphe
function modif_paragraphe(_p) {
    _p.innerHTML =_p.innerText.replace("original","<i>corrigé</i>"); //modification + style texte
}


//-variables-
var h1 = document.querySelector('h1'); //sélection titre
var p = document.querySelector('p'); //sélection paragraphe


//-programme-
//appel fonction "centrage_h1"
p.onclick = function () { centrage_h1(h1) };
//appel fonction "modif_paragraphe"
h1.onclick = function () { modif_paragraphe(p) };
