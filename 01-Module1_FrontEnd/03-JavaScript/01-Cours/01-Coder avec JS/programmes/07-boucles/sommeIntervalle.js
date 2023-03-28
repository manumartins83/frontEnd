//- somme des entiers de n1 à n2 -


//- variables -
var nb1, nb2; //nombres (nb1) et (nb2) à saisir
var somme = 0; //somme du/des entier(s) de (nb1) à (nb2)


//- programme -
nb1 = prompt("Saississez un premier nombre :"); //saisie du nombre (nb1)
nb2 = prompt("Saississez un deuxième nombre :"); //saisie du nombre (nb2)
//pour comptage (itération) du/des entier(s) allant des nombres (nb1) à (nb2) alors
for (var i = nb1; i <= nb2; i++) {
    somme += parseInt(i); //association et calcul somme du/des entier(s) de (nb1) à (nb2)
}
//affichage de la somme du/des entier(s) de (nb1) à (nb2) saisis
console.log("La somme des nombres saisis de n1 à n2 est de :\n" + somme); //affiche dev
alert("La somme des nombres saisis de n1 à n2 est de :\n" + somme); //affiche popup