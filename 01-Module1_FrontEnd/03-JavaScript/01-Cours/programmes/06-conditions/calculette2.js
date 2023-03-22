function calcul(_nb, _nb2, _operateur) {
    var resultat;
    switch (_operateur) {
        case "+":
            resultat = _nb + _nb2;
            return "Le résultat est : " + resultat;
            break;
        case "-":
            resultat = _nb - _nb2;
            return "Le résultat est : " + resultat;
            break;
        case "*":
            resultat = _nb * _nb2;
            return "Le résultat est : " + resultat;
            break;
        case "/":
            if (_nb2 == 0) {
                return "Erreur";
            }
            else {
                resultat = _nb / _nb2;
                return "Le résultat est : " + resultat;
            }
            break;
        default:
            return "Erreur !!! " + "\nl'opérateur utilisé n'est pas du type +, -, *, /";
    }
}

var nb = parseInt(prompt("Entrez un premier nombre : "));
var nb2 = parseInt(prompt("Entrez un autre nombre : "));
var operateur = prompt("Entrez un opérateur (+, -, *, /) : ");
var message;

message = calcul(nb, nb2, operateur);
alert(message);

message = calcul(nb2, nb, operateur);
alert(message);



