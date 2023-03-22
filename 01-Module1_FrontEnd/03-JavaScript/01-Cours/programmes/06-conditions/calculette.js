var nb = parseInt(prompt("Entrez un premier nombre : "));
var nb2 = parseInt(prompt("Entrez un autre nombre : "));
var operateur = prompt("Entrez un opérateur (+, -, *, /) : ");
var resultat;

switch (operateur) {
    case "+":
        resultat = nb + nb2;
        console.log(resultat);
        alert("Le résultat est : " + resultat);
        break;
    case "-":
        resultat = nb - nb2;
        console.log(resultat);
        alert("Le résultat est : " + resultat);
        break;
    case "*":
        resultat = nb * nb2;
        console.log("Le résultat est : " + resultat);
        alert(resultat);
        break;
    case "/":
        if (nb2 == 0) {
            alert("Erreur");
        }
        else {
            resultat = nb / nb2;
            console.log("Le résultat est : " + resultat);
            alert(resultat);
        }
        break;
    default:
        alert("Erreur !!! " + "\nl'opérateur utilisé n'est pas du type +, -, *, /");
}