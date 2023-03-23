//- variables -
//nombres
var nb1, nb2; //saisi 2 nombres
//résultat somme
var somme = 0; //somme entier(s) nb1 à nb2


//- programme -
//saisie des nombres nb1 et nb2
nb1 = prompt("Saississez un premier nombre :"); //saisie
nb2 = prompt("Saississez un deuxième nombre :"); //saisie
//pour comptage (itération) allant de nb1 à nb2
for (var i = nb1; i <= nb2; i++) {
    somme += parseInt(i); //association et calcul somme nb1 à nb2
}
//affichage de la somme des nombre de nb1 à nb2
console.log("La somme des nombres saisis de n1 à n2 est de :\n" + somme); //affiche dev
alert("La somme des nombres saisis de n1 à n2 est de :\n" + somme); //affiche