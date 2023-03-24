//- dénombrer le nombre de personne selon leur tranche d'âge -


//- variables -
var ageX = parseInt(prompt("Saisir un âge :")); //saisie d'un âge
var moins20 = 0; //comptage (itération) du nombre de personne < 20 ans
var plus40 = 0; //comptage (itération) du nombre de personne > 40 ans et = 100 ans
var entre20_40 = 0; //comptage (itération) du nombre de personne entre 20 et 40 ans


//- programme -
//pour comptage (itération) des âges X allant de 0 à 100 alors
for (i = 0; i <= 100; i++) {
    //si âge personne(s) < 20ans alors
    if (i < 20) {
        moins20++; //comptage (itération) boucle
    }
    //si âge personne(s) > 40ans alors
    if (i > 40 || i == 100) {
        plus40++; //comptage (itération) boucle
    }
    //si âge personne(s) >= 20 et <= 40 ans alors
    if (i >= 20 && i <= 40) {
        entre20_40++; //comptage (itération) boucle
    }
}
//affichage du nombre de personne selon leur tranche d'âge
console.log("Le(s) personne(s) âgée(s) de moins de 20 ans est/sont de :\n" + moins20 + "\n" +
    "Le(s) personne(s) âgée(s) de plus de 40 ans jusqu'à 100 ans est/sont de :\n" + plus40 + "\n" +
    "Le(s) personne(s) âgée(s) de moins de 20 ans est/sont de :\n" + entre20_40); //affiche dev
alert("Le(s) personne(s) âgée(s) de moins de 20 ans est/sont de :\n" + moins20 + "\n" +
    "Le(s) personne(s) âgée(s) de plus de 40 ans jusqu'à 100 ans est/sont de :\n" + plus40 + "\n" +
    "Le(s) personne(s) âgée(s) de moins de 20 ans est/sont de :\n" + entre20_40); //affiche popup