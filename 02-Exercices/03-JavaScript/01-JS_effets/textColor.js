//-changement couleur partie texte selon passage, clic, double clic souris-


//-fonctions-
//passage souris
function passageSouris() {
    textColor.style.color = 'red'; //couleur rouge
}
//clic souris
function clic() {
    textColor.style.color = 'lime'; //couleur citron vert
}
//double clic souris
function doubleClic() {
    textColor.style.color = 'navy'; //bleu marine
}
//aucune action souris
function initial() {
    textColor.style.color = ''; //inherit
}


//-variables-
var textColor = document.getElementById('colorText'); //élément <span>


//-programme-
//appel fonction "passage souris"
    textColor.onmouseover = function () { passageSouris() };
//appel fonction "clic souris"
    textColor.onclick = function () { clic() };
//appel fonction "double clic souris"
    textColor.ondblclick = function () { doubleClic() };
//appel fonction "aucune action souris"
    textColor.onmouseout = function () { initial() };