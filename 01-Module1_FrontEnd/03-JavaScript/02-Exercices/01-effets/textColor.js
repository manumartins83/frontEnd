//-changement couleur partie texte selon passage, clic, double clic souris-


//-variables-
var textColor = document.getElementsByTagName('span'); //élément <span>
//-fonctions-
//passage souris
function passageSouris() {

    for (var i; i < textColor.length; i++) {
        textColor[i].style.color = 'red'; //couleur rouge
    }


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





//-programme-
//appel fonction "passage souris"
for (var i; i < textColor.length; i++) {
    textColor[i].onmouseover = function () { passageSouris() };
}
//appel fonction "clic souris"
textColor.onclick = function () { clic() };
//appel fonction "double clic souris"
textColor.ondblclick = function () { doubleClic() };
//appel fonction "aucune action souris"
textColor.onmouseout = function () { initial() };