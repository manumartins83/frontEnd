//- afficher et compter les prénoms saisis par l'utilisateur - 


//- variables -
var prenom; // prénom(s) à saisir
var i = 0; //comptage (itération) du/des prénom(s) saisi(s)
var prenoms = ""; //association du/des prénom(s) saisi(s)


//- programme -
//tant que saisie du/des prénom(s) différent de vide alors
while (prenom != "") {
    prenom = prompt("Saississez le prénom N°" + (i + 1) + " :" +
        "\n(Laissez la case vide puis confirmez pour arrêter la saisie)"); //saisie d'un prénom différent de vide
    //si prénom différent de vide alors
    if (prenom != "") {
        prenoms += "\n" + prenom; //association et calcul du/des prénom(s) saisi(s)
        i++; //comptage (itération) boucle
    }
}
//affichage + comptage du nombre du/des prénom(s) saisi(s)
console.log("Le(s) prénom(s) saisi(s) est/sont :" + prenoms + "\n"
    + "\nLe nombre de prénom(s) saisi(s) est/sont de :\n" + i + " prénom(s)"); //affiche dev
alert("Le(s) prénom(s) saisi(s) est/sont :" + prenoms + "\n"
    + "\nLe nombre de prénom(s) saisi(s) est/sont de :\n" + i + " prénom(s)"); //affiche popup