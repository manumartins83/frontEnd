//-modifier les enfants d'un paragraphe-


//-fonctions-
//modification enfant
function change_enfants() {
    p=document.getElementById("paragraphe"); //sélectionne paragraphe
    alert(p.childNodes.length); //affiche popup (nb enfants paragraphe)
    p.firstChild.nodeValue="On change le texte plein d'enfants "; //modifie texte 1er enfant paragraphe
    p.lastChild.width="100"; //modifie largeur image dernier enfant paragraphe
    p.lastChild.height="55"; //modifie hauteur image dernier enfant paragraphe
    p.childNodes[1].innerHTML="<font color='blue'>en bleu</font>"; //modifie code HTML 2ème enfant paragraphe
    p.childNodes[3].style.display="block"; //modifie affichage 4ème enfant paragraphe
}