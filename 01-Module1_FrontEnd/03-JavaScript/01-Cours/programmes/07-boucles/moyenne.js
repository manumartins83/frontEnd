//- variables -
//nombre
var N; //saisi nombre N
//comptage (itération)
var i = 1; //nombre entier(s) saisi(s)
//résultat somme
var somme = 0; //somme entier(s) N
//résultat moyenne
var moyenne = 0; //moyenne entier(s) N


//- programme -
//tant que saisie d'un nombre N différent de 0
while (N != 0) {
    N = prompt("Saississez un nombre :" + "\n(Entrez 0 puis confirmez pour arrêter la saisie)"); //saisie
    //si N différent de 0
    if (N != 0) {
        somme += parseInt(N); //association et calcul somme nombre(s) N saisi(s)
        moyenne = parseInt(somme / i); //calcul moyenne nombre(s) N saisi(s)
        i++; //comptage itération
    }
}
//affichage de la somme et moyenne du/des nombre(s) N
console.log("La somme du/des nombre(s) saisi(s) est de :\n" + somme +
    "\nLa moyenne du/des nombre(s) saisi(s) est de :\n" + moyenne); //affiche dev
alert("La somme du/des nombre(s) saisi(s) est de :\n" + somme +
    "\nLa moyenne du/des nombre(s) saisi(s) est de :\n" + moyenne); //affiche