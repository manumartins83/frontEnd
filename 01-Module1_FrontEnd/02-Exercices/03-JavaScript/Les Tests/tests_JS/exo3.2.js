var nb = prompt("entrez un nombre");
var nb2 = prompt("entrez un 2ème nombre");


if ((nb > 0 && nb2 > 0) || (nb < 0 && nb2 < 0)) {
    console.log("le produit est positif");
} else {
    console.log("le produit est négatif");
}