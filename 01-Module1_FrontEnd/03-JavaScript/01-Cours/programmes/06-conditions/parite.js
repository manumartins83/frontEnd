//- définir si nombre pair ou impair -


//- variable -
var nb = prompt("Entrez un nombre :"); //saisie nombre popup


//- programme -
//si reste division euclidienne = 0 alors nombre pair
if (nb % 2 == 0) {
    console.log("Le nombre est pair"); //affiche dev
    alert("Le nombre est pair"); //affiche popup
}
//sinon nombre impair
else {
    console.log("Le nombre est impair"); //affiche dev
    alert("Le nombre est impair"); //affiche popup
}