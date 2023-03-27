// var prenom;
// var prenoms = "";
// var nbprenoms = 0;

// while (prenom != "") {
//   prenom = prompt("saisir prénom n°" + (nbprenoms + 1));

//   if (prenom != "") {
//     prenoms += prenom + "\n";
//     nbprenoms++;
//   }
// }

// console.log(prenoms);
// console.log("nb prenoms : " + nbprenoms);

// var nb1, nb2;
// var somme = 0;

// nb1 = prompt("saisir nb1:");
// nb2 = prompt("saisir nb2:");

// for (var i = nb1; i <= nb2; i++) {
//   somme += parseInt(i);
// }

// console.log(somme);

// var mot = prompt("Saisir un mot:");

// var count = 0;

// // for (i = 0; i < mot.length; i++) {
// for (var i in mot) {
//   console.log(mot[i]);

//   if (
//     mot[i] == "a" ||
//     mot[i] == "e" ||
//     mot[i] == "i" ||
//     mot[i] == "o" ||
//     mot[i] == "u" ||
//     mot[i] == "y"
//   ) {
//     count++;
//   }
// }
// console.log("nombre de voyelles dans le mot " + mot + ": " + count);

// var tabEntiers = [];
// var saisie;
// var somme = 0;
// var moyenne;
// var mini;
// var maxi;

// while (saisie != 0) {
//   saisie = parseInt(prompt("Saisir un entier"));
//   if (saisie != 0) {
//     if (mini == undefined) {
//       mini = saisie;
//     }
//     if (maxi == undefined) {
//       maxi = saisie;
//     }
//     try {
//       if (mini > saisie) {
//         mini = saisie;
//       }
//     } catch (error) {
//       mini = saisie;
//     }

//     if (maxi < saisie) {
//       maxi = saisie;
//     }
//     somme += saisie;
//     tabEntiers.push(saisie);
//   }
// }

// console.log("Somme : " + somme);
// moyenne = somme / tabEntiers.length;
// console.log("Moyenne : " + moyenne);
// console.log("Mini : " + mini);
// console.log("Maxi : " + maxi);
// console.log(tabEntiers);

var tableau = [];
var saisie = "";
var tailletableau = parseInt(prompt("Saisir la taille du tableau"));

for (i = 0; i < tailletableau; i++) {
  saisie = prompt("Veuillez saisir une valeur : ");
  tableau.push(saisie);
}

console.log(tableau);
