var nom = prompt("entrez un nom");
var nom2 = prompt("entrez un 2ème nom");
var nom3 = prompt("entrez un 3ème nom");


if ((nom<nom2)  && (nom2<nom3)) {
    console.log("les noms sont rangés dans l'ordre alpha");
} else {
    console.log("les noms ne sont pas rangés dans l'ordre alpha");
}