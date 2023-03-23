//- définir âge utilisateur selon année de naissance -


//- variables -
var annee = prompt("Entrez votre année de naissance :\n(au format XXXX)"); //saisie année de naissance popup
var age = (2023 - annee); //calcul âge utilisateur


//- programme -
//si année naissance >= 18 ans alors majeur
if (annee > 0 && (annee - 18) > 0) {
    console.log("Vous avez " + age + " et êtes majeur"); //affiche dev
    alert("Vous avez " + age + " et êtes majeur"); //affiche popup
}
//sinon mineur
else {
    console.log("Vous avez " + age + " et êtes mineur"); //affiche dev
    alert("Vous avez " + age + " et êtes mineur"); //affiche popup
}