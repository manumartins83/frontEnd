//- variables -
//nombre
var N; //saisi nombre N
//comptage (itération)
var i = 0; //nombre entier(s) saisi(s)
//résultat
var resultat = null; //entier(s) N saisis


//- programme -
//tant que saisie d'un nombre N différent de vide
while (N != 0) {
    N = prompt("Saississez un nombre :"); //saisie
    //si N différent de vide et < 0
    if (N != 0 && N < 0) {
        resultat += "\n" + parseInt(N); //association entier(s) N<0 saisi(s)
        i++; //comptage itération
    }
}
//affichage du/des nombre(s) N<0
console.log("Le(s) nombre(s) saisi(s) inférieur(s) à N est/sont :" + resultat + "\n"); //affiche dev
alert("Le(s) nombre(s) saisi(s) inférieur(s) à N est/sont :" + resultat + "\n"); //affiche