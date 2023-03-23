//- variables -
//nombre
var N; //saisi nombre N
//comptage (itération)
var i = 0; //nombre entier(s) saisi(s)
//résultat
var resultat = ""; //nombre(s) saisi(s)

var mini;


//- programme -
//tant que saisie d'un nombre N différent de vide
while (N != "") {
    N = prompt("Saississez un nombre :"); //saisie
    //si N différent de vide
    if (N != "") {
        resultat += parseInt(N); //association nombre(s) saisi(s)
     
        i++; //comptage itération
    }
}

mini=math.min(resultat);

//affichage du nombre mini et maxi du/des nombre(s) saisi(s) N
console.log("Le nombre minimun des saisis est :\n" + getMin(mini));
//  +
//     "\nLe nombre maximun des saisis est :\n" + (resultat)); //affiche dev
alert("Le nombre minimun des saisis est :\n" + (mini));
//  +
//     "\nLe nombre maximun des saisis est :\n" + (resultat)); //affiche