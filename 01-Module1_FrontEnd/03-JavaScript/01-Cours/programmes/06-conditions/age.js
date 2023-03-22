var annee = prompt("Entrez votre année de naissance :\n(au format XXXX)");

var age = (2023 - annee);

if (annee > 0 && (annee - 18) > 0) {
    alert("Vous avez " + age + " et êtes majeur");
}
else {
    alert("Vous avez " + age + " et êtes mineur");
}