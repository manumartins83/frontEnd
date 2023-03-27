//- dénombrer le nombre de personne selon leur tranche d'âge -


//- variables -
var ageX; //âge X à saisir
var i = 0;  //comptage (itération) du nombre âge saisi(s)
var moins20 = 0; //comptage (itération) du nombre de personne < 20 ans
var plus40 = 0; //comptage (itération) du nombre de personne > 40 et = 100 ans
var entre20_40 = 0; //comptage (itération) du nombre de personne entre 20 et 40 ans
var tableau = new Array(); //création tableau saisie


//- programme -
//tant que saisie d'un âge X différent de vide alors
while (ageX != "") {
    ageX = prompt("Saisir un âge :" +
        "\n(Laissez la case vide puis confirmez pour arrêter la saisie)"); //saisie d'un âge différent de vide
    //si âge X différent de vide et <= 100 alors
    if (ageX != "" && ageX <= 100) {
        tableau.push(parseInt(ageX)); //incrémentation du/des âge(s) X saisi(s) dans tableau
        //si âge personne(s) < 20ans alors
        if (ageX < 20) {
            ageX[i] = tableau; //récupère le nombre correspondant à l'âge
            moins20++; //comptage (itération) boucle
        }
        //si âge personne(s) > 40ans alors
        if (ageX > 40 || ageX == 100) {
            ageX[i] = tableau; //récupère le nombre correspondant à l'âge
            plus40++; //comptage (itération) boucle
        }
        //si âge personne(s) >= 20 et <= 40 ans alors
        if (ageX >= 20 && ageX <= 40) {
            ageX[i] = tableau; //récupère le nombre correspondant à l'âge
            entre20_40++; //comptage (itération) boucle
        }
        i++; //comptage (itération) boucle
    }
}
//affichage du nombre de personne selon leur tranche d'âge
console.log("Le(s) personne(s) âgée(s) de moins de 20 ans est/sont de :\n" + moins20 + "\n" +
    "Le(s) personne(s) âgée(s) de plus de 40 ans jusqu'à 100 ans est/sont de :\n" + plus40 + "\n" +
    "Le(s) personne(s) âgée(s) de 20 à 40 ans est/sont de :\n" + entre20_40); //affiche dev
alert("Le(s) personne(s) âgée(s) de moins de 20 ans est/sont de :\n" + moins20 + "\n" +
    "Le(s) personne(s) âgée(s) de plus de 40 ans jusqu'à 100 ans est/sont de :\n" + plus40 + "\n" +
    "Le(s) personne(s) âgée(s) de 20 à 40 ans est/sont de :\n" + entre20_40); //affiche popup