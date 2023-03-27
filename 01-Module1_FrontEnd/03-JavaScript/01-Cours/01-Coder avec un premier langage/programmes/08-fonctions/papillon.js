//- Effectuer le produit de 2 nombres et afficher image "papillon" page HTML -


//- fonctions - 
//calcul produit de 2 nombres
function produit(_x, _y,) {
    var resultat = _x * _y; //calcul résultat multiplication (produit)
    return resultat; //retour du résultat opération
}
//affiche image
function afficheImg(_image) {
    document.write('<img src="papillon.jpg">'); //écriture image
}


//- variables -
var x = parseInt(prompt("Entrez un premier nombre : ")); //saisie premier entier
var y = parseInt(prompt("Entrez un autre nombre : ")); //saisie deuxième entier
var message; //retour calcul


//- programme -
//calcul produit
message = produit(x, y); //retour (fonction) produit des 2 entiers 
console.log(message); //affiche dev
document.write("Le produit de " + x + " x " + y + " est égal à " + message + '<br>'); //écriture HTML
//affichage image "papillon"
afficheImg(); //retour (fonction) image