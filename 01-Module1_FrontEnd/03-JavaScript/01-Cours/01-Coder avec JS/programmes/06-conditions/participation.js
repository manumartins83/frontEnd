//- définir la participation d'une remise employeur sur un repas -


//- fonctions - 
//arrondi du/des nombre(s) au centième près
function arrondi(_x) {
    return _x.toPrecision(2); //retour de l'arrondi
}


//- variables -
//repas
var repas = parseFloat(prompt("Entrez le prix du repas de l'employé(e) :")); //saisie prix repas employé(e)
//salaire
var salaire = parseFloat(prompt("Entrez le salaire de l'employé(e) :")); //saisie salaire employé(e)
var tauxRemiseSalaire = parseFloat('0.1'); //taux remise salaire 10%
//situation
var situation = prompt("Quelle est la situation de l'employé(e) ?" + "\ntapez :" +
    "\n- (c) pour célibataire" + "\n- (m) pour marié(e)"); //saisie situation employé(e) (célibataire/marié(e))
var tauxRemiseCelib = parseFloat('0.2'); //taux remise célibataire 20%
var tauxRemiseMarie = parseFloat('0.25'); //taux remise marié(e) 25%
var nbEnfant; //nombre d'enfant(s)
var tauxRemiseEnfant = parseFloat('0.1'); //taux remise par enfant employé(e) 10%S
//plafond
var tauxRemiseMax = parseFloat('0.5'); //taux remise participation max 50%
//resultat
var remiseEmploye; //remise employé(e)


//- programme -
//selon saisie situation employé(e)
switch (situation) {
    //si saisie situation employé(e) célibataire "c" alors
    case "c":
        //si salaire < 1200€ alors
        if (salaire < 1200) {
            nbEnfant = parseInt(prompt("Combien a t'il (elle) d'enfant(s) ?")); //saisie nombre enfant(s)
            //si pas d'enfant alors
            if (nbEnfant == 0) {
                remiseEmploye = repas * (tauxRemiseSalaire + tauxRemiseCelib); //calcul résultat remise
                console.log(arrondi(remiseEmploye)); //affiche dev
                alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
            } else {
                //sinon si enfant(s) <= 2 (plafond 50% non atteint) alors
                if (nbEnfant > 0 && nbEnfant <= 2) {
                    remiseEmploye = repas * (tauxRemiseSalaire + tauxRemiseCelib + (tauxRemiseEnfant * nbEnfant)); //calcul résultat remise
                    console.log(arrondi(remiseEmploye)); //affiche dev
                    alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
                    //sinon si enfants > 2 (plafond 50% atteint) alors
                } else {
                    remiseEmploye = repas * tauxRemiseMax; //calcul résultat remise
                    console.log(arrondi(remiseEmploye)); //affiche dev
                    alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
                }
            }
            //sinon si salaire >= 1200€ alors
        } else {
            nbEnfant = parseInt(prompt("Combien a t'il (elle) d'enfant(s) ?")); //saisie nombre enfant(s)
            //si pas d'enfant alors
            if (nbEnfant == 0) {
                remiseEmploye = repas * tauxRemiseCelib; //calcul résultat remise
                console.log(arrondi(remiseEmploye)); //affiche dev
                alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
            } else {
                //sinon si enfant(s) <= 3 (plafond 50% non atteint) alors
                if (nbEnfant > 0 && nbEnfant <= 3) {
                    remiseEmploye = repas * (tauxRemiseCelib + (tauxRemiseEnfant * nbEnfant)); //calcul résultat remise
                    console.log(arrondi(remiseEmploye)); //affiche dev
                    alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
                    //sinon si enfants > 3 (plafond 50% atteint) alors
                } else {
                    remiseEmploye = repas * tauxRemiseMax; //calcul résultat remise
                    console.log(arrondi(remiseEmploye)); //affiche dev
                    alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
                }
            }
        }
        break; //sorti exécution
    //si saisie situation employé(e) marié(e) "m" alors
    case "m":
        //si salaire < 1200€ alors
        if (salaire < 1200) {
            nbEnfant = parseInt(prompt("Combien a t'il (elle) d'enfant(s) ?")); //saisie nombre enfant(s)
            //si pas d'enfant alors
            if (nbEnfant == 0) {
                remiseEmploye = repas * (tauxRemiseSalaire + tauxRemiseMarie); //calcul résultat remise
                console.log(arrondi(remiseEmploye)); //affiche dev
                alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
            } else {
                //sinon si enfant(s) < 2 (plafond 50% non atteint) alors
                if (nbEnfant > 0 && nbEnfant < 2) {
                    remiseEmploye = repas * (tauxRemiseSalaire + tauxRemiseMarie + (tauxRemiseEnfant * nbEnfant)); //calcul résultat remise
                    console.log(arrondi(remiseEmploye)); //affiche dev
                    alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
                    //sinon si enfants >= 2 (plafond 50% atteint) alors
                } else {
                    remiseEmploye = repas * tauxRemiseMax; //calcul résultat remise
                    console.log(arrondi(remiseEmploye)); //affiche dev
                    alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
                }
            }
            //sinon si salaire >= 1200€ alors
        } else {
            nbEnfant = parseInt(prompt("Combien a t'il (elle) d'enfant(s) ?")); //saisie nombre enfant(s)
            //si pas d'enfant alors
            if (nbEnfant == 0) {
                remiseEmploye = repas * tauxRemiseMarie; //calcul résultat remise
                console.log(arrondi(remiseEmploye)); //affiche dev
                alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
            } else {
                //sinon si enfant(s) < 3 (plafond 50% non atteint) alors
                if (nbEnfant > 0 && nbEnfant < 3) {
                    remiseEmploye = repas * (tauxRemiseMarie + (tauxRemiseEnfant * nbEnfant)); //calcul résultat remise
                    console.log(arrondi(remiseEmploye)); //affiche dev
                    alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
                    //sinon si enfants >= 3 (plafond 50% atteint) alors
                } else {
                    remiseEmploye = repas * tauxRemiseMax; //calcul résultat remise
                    console.log(arrondi(remiseEmploye)); //affiche dev
                    alert("La remise de l'employé(e) est de : " + arrondi(remiseEmploye) + "€"); //affiche popup
                }
            }
        }
        break; //sorti exécution
    //si saisie situation erronée alors
    default:
        alert("Erreur !!! " + "\nla saisie entrée n'est pas du type (c/m)"); //affiche popup erreur
}