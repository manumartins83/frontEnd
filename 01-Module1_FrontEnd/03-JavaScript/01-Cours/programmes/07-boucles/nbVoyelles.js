//- calculer le nombre de voyelles dans un mot -


//- variables -
var mot = prompt("Saisir un mot :"); //saisie du mot
var count = 0; //comptage (itération) du/des voyelles dans mot saisi


//- programme -
//pour comptage (itération) des lettres allant du début à la fin du mot alors
// for (i = 0; i < mot.length; i++) { //autre possibilité
for (var i in mot) {
    console.log(mot[i]); //affiche dev (lettres dans mot)
    //si chaque lettre du mot saisi compte une voyelle alors
    if (
        mot[i] == "a" ||
        mot[i] == "e" ||
        mot[i] == "i" ||
        mot[i] == "o" ||
        mot[i] == "u" ||
        mot[i] == "y"
    ) {
        count++; //comptage (itération) boucle
    }
}
//affichage du nombre de voyelles dans mot
console.log("Le nombre de voyelle(s) dans le mot " + "(" + mot + ")" + " est de :\n" + count); //affiche dev
alert("Le nombre de voyelles dans le mot " + "(" + mot + ")" + " est de :\n" + count); //affiche popup
