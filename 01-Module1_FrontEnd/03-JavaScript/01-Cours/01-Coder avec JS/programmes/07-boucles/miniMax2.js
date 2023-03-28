//- calculer la somme et la moyenne du/des entier(s) saisi(s) -


//- variables -
var N; //entier(s) (N) à saisir
var i = 0;  //comptage (itération) du/des entier(s) saisi(s)
var tableau = new Array(); //création tableau saisie
var somme = 0; //somme du/des entier(s) (N) saisi(s)
var moyenne = 0; //calcul moyenne du/des entier(s) (N) saisi(s)
var mini, maxi; //valeur(s) mini et maxi du/des entier(s) (N) saisi(s)


//- programme -
//tant que saisie d'un entier (N) différent de 0 alors
while (N != 0) {
    N = prompt("Saississez un nombre :" +
        "\n(Entrez 0 puis confirmez pour arrêter la saisie)"); //saisie d'un entier différent de 0
    //si entier (N) différent de 0 alors
    if (N != 0) {
        tableau.push(parseInt(N)); //incrémentation du/des entier(s) (N) saisi(s) dans tableau
        somme += parseInt(N); //association et calcul somme du/des entier(s) (N) saisi(s)
        moyenne = parseFloat(somme / tableau.length); //calcul moyenne du/des entier(s) (N) saisi(s)
        //valeur mini > entier (N)
        if (mini > N) {
            mini = parseInt(N); //valeur mini = entier (N) mini
        }
        //si valeur mini = indéfini alors
        if (mini == undefined) {
            mini = parseInt(N); //valeur mini = entier (N) mini
        }
        //valeur maxi < entier (N)
        if (maxi < N) {
            maxi = parseInt(N); //valeur maxi = entier (N) maxi
        }
        //si valeur maxi = indéfini alors
        if (maxi == undefined) {
            maxi = parseInt(N); //valeur maxi = entier (N) maxi
        }
        i++; //comptage (itération) boucle
    }
}
//affichage de la somme et moyenne du/des entier(s) (N) saisi(s)
console.log(tableau); //affiche dev (saisie tableau)
console.log("La somme du/des nombre(s) saisi(s) est de :\n" + somme +
    "\nLa moyenne du/des nombre(s) saisi(s) est de :\n" + moyenne); //affiche dev
console.log("Le minimum du/des entier(s) saisi(s) est :\n" + mini +
    "\nLe maximum du/des entier(s) saisi(s) est :\n" + maxi); //affiche dev
alert("La somme du/des nombre(s) saisi(s) est de :\n" + somme +
    "\nLa moyenne du/des nombre(s) saisi(s) est de :\n" + moyenne); //affiche popup
alert("Le minimum du/des entier(s) saisi(s) est :\n" + mini +
    "\nLe maximum du/des entier(s) saisi(s) est :\n" + maxi); //affiche popup