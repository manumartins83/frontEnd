//- afficher la somme du/des nombre(s) entier(s) < N -


//- variables -
var N; //nombre(s) (N) à saisir
var i = 0; //comptage (itération) du/des nombre(s) (N) saisi(s)
var somme = 0; //somme du/des nombre(s) (N) saisi(s)


//- programme -
//tant que saisie d'un nombre (N) différent de vide alors
while (N != "") {
    N = prompt("Saississez un nombre :" +
        "\n(Laissez la case vide puis confirmez pour arrêter la saisie)"); //saisie d'un nombre différent de vide
    //si nombre (N) différent de vide et < 0 alors
    if (N != "" && N < 0) {
        somme += parseInt(N); //association et calcul somme du/des nombre(s) (N)<0 saisi(s)
        i++; //comptage (itération) boucle
    }
}
//affichage de la somme du/des nombre(s) (N)<0 saisi(s)
console.log("La somme du/des nombre(s) saisi(s) inférieur(s) à N est de :\n" + somme); //affiche dev
alert("La somme du/des nombre(s) saisi(s) inférieur(s) à N est de :\n" + somme); //affiche popup