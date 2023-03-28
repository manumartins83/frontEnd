//- afficher le mini et maxi du/des entier(s) saisi(s) -


//- variables -
var N; //entier(s) (N) à saisir
var i = 0;  //comptage (itération) du/des entier(s) saisi(s)
var mini, maxi; //valeur(s) mini et maxi du/des entier(s) (N) saisi(s)
var tableau = new Array(); //création tableau saisie


//- programme -
//tant que saisie d'un entier (N) différent de vide alors
while (N != "") {
    N = prompt("Saississez un nombre :" +
        "\n(Laissez la case vide puis confirmez pour arrêter la saisie)"); //saisie d'un entier différent de vide
    //si entier (N) différent de vide alors
    if (N != "") {
        tableau.push(parseInt(N)); //incrémentation du/des entier(s) (N) saisi(s) dans tableau
        mini = Math.min(...tableau); //récupère la valeur mini
        maxi = Math.max(...tableau); //récupère la valeur maxi
        i++; //comptage (itération) boucle
    }
}
//affichage du mini et maxi du/des entier(s) (N) saisi(s)
console.log("Le minimum du/des entier(s) saisi(s) est :\n" + mini +
    "\nLe maximum du/des entier(s) saisi(s) est :\n" + maxi); //affiche dev
alert("Le minimum du/des entier(s) saisi(s) est :\n" + mini +
    "\nLe maximum du/des entier(s) saisi(s) est :\n" + maxi); //affiche popup