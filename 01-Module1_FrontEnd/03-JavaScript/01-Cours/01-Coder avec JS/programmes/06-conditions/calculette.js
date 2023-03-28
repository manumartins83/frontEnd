//- Effectuer une opération du type "calculette" -


//- variables -
var nb = parseInt(prompt("Entrez un premier nombre : ")); //saisie premier entier
var nb2 = parseInt(prompt("Entrez un autre nombre : ")); //saisie deuxième entier
var operateur = prompt("Entrez un opérateur (+, -, *, /) : "); //saisie opérateur calcul
var resultat; //calcul opération


//- programme -
//selon saisie opérateur
switch (operateur) {
    //si saisie opérateur "+" alors
    case "+":
        resultat = nb + nb2; //calcul résultat addition (somme)
        console.log("Le résultat est : " + resultat); //affiche dev
        alert("Le résultat est : " + resultat); //affiche popup
        break; //sorti exécution
    //si saisie opérateur "-" alors
    case "-":
        resultat = nb - nb2; //calcul résultat soustraction (différence)
        console.log("Le résultat est : " + resultat); //affiche dev
        alert("Le résultat est : " + resultat); //affiche popup
        break; //sorti exécution
    //si saisie opérateur "*" alors
    case "*":
        resultat = nb * nb2; //calcul résultat multiplication (produit)
        console.log("Le résultat est : " + resultat); //affiche dev
        alert("Le résultat est : " + resultat); //affiche popup
        break; //sorti exécution
    //si saisie opérateur "/" alors
    case "/":
        //si division premier nombre non divible par 0 alors
        if (nb2 == 0) {
            console.log("Non divisible par 0"); //affiche dev non opérable
            alert("Non divible par 0"); //affiche popup non opérable
        }
        //sinon effectuer division
        else {
            resultat = nb / nb2; //calcul résultat division (quotient)
            console.log("Le résultat est : " + resultat); //affiche dev
            alert("Le résultat est : " + resultat); //affiche popup
        }
        break; //sorti exécution
    //si saisie opérateur erronée alors
    default:
        alert("Erreur !!! " + "\nL'opérateur utilisé n'est pas du type +, -, *, /"); //affiche popup erreur
}