//- variables -
//prénom
var prenom; //saisi prénom
//comptage (itération)
var i = 0; //nombre prénom(s) saisi(s)
//résultat
var prenoms = ""; //prénom(s) saisi(s)


//- programme -
//tant que saisie du/des prénom(s) différent de vide
while (prenom != "") {
    prenom = prompt("Saississez le prénom N°" + (i + 1) + " :"); //saisie
    //si prénom différent de vide
    if (prenom != "") {
        prenoms += "\n" + prenom; //association prénom(s) saisi(s)
        i++; //comptage itération
    }
}
//affichage du/des prénom(s)
console.log("Le(s) prénom(s) saisi(s) est/sont :" + prenoms + "\n"
    + "\nLe nombre de prénom(s) saisi(s) est/sont de :\n" + i + " prénom(s)"); //affiche dev
alert("Le(s) prénom(s) saisi(s) est/sont :" + prenoms + "\n"
    + "\nLe nombre de prénom(s) saisi(s) est/sont de :\n" + i + " prénom(s)"); //affiche