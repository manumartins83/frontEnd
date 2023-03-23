//- variables -
//nombre
var N; //saisi nombre N
//comptage (itération)
var i = 0; //nombre entier(s) saisi(s)
//résultat somme
var somme = 0; //somme entier(s) N<0


//- programme -
//tant que saisie d'un nombre N différent de vide
while (N != 0) {
    N = prompt("Saississez un nombre :"); //saisie
    //si N différent de vide et < 0
    if (N != 0 && N < 0) {
        somme += parseInt(N); //association et calcul somme entier(s) N<0
        i++; //comptage itération
    }
}
//affichage de la somme du/des nombre(s) N<0
console.log("La somme du/des nombre(s) saisi(s) inférieur(s) à N est de :\n" + somme); //affiche dev
alert("La somme du/des nombre(s) saisi(s) inférieur(s) à N est de :\n" + somme); //affiche