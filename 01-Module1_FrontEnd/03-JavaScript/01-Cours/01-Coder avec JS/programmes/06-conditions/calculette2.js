//- Effectuer une opération du type "calculette"_v2 -


//- fonctions - 
//calcul de 2 nombres
function calcul(_nb, _nb2, _operateur) {
    var resultat; //calcul opération
    //selon saisie opérateur
    switch (_operateur) {
        //si saisie opérateur "+" alors
        case "+":
            resultat = _nb + _nb2; //calcul résultat addition (somme)
            return "Le résultat est : " + resultat; //retour du résultat opération
            break;//sorti exécution
        //si saisie opérateur "-" alors
        case "-":
            resultat = _nb - _nb2; //calcul résultat soustraction (différence)
            return "Le résultat est : " + resultat; //retour du résultat opération
            break;//sorti exécution
        //si saisie opérateur "*" alors
        case "*":
            resultat = _nb * _nb2; //calcul résultat multiplication (produit)
            return "Le résultat est : " + resultat; //retour du résultat opération
            break;//sorti exécution
        //si saisie opérateur "/" alors
        case "/":
            //si division premier nombre non divible par 0 alors
            if (_nb2 == 0) {
                return "Non divible par 0"; //retour non opérable
            }
            //sinon effectuer division
            else {
                resultat = _nb / _nb2; //calcul résultat division (quotient)
                return "Le résultat est : " + resultat; //retour du résultat opération
            }
            break;//sorti exécution
        //si saisie opérateur erronée alors
        default:
            return "Erreur !!! " + "\nL'opérateur utilisé n'est pas du type +, -, *, /"; //affiche popup erreur
    }
}


//- variables -
var nb = parseInt(prompt("Entrez un premier nombre : ")); //saisie premier entier
var nb2 = parseInt(prompt("Entrez un autre nombre : ")); //saisie deuxième entier
var operateur = prompt("Entrez un opérateur (+, -, *, /) : "); //saisie opérateur calcul
var message; //retour calcul


//- programme -
//calcul normal
message = calcul(nb, nb2, operateur); //retour (fonction) calcul entier 1 et 2
console.log(message); //affiche dev
alert(message); //affiche popup
//calcul inverse
message = calcul(nb2, nb, operateur); //retour (fonction) calcul entier 2 et 1
console.log(message); //affiche dev
alert(message); //affiche popup