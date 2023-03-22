var prixUnitaire = parseFloat(prompt("Entrez le prix du produit :")); //prix unitaire produit
var quantiteProduit = parseFloat(prompt("Entrez la quantitée de produit désirée :")); //prix unitaire produit
var prixProduit = prixUnitaire * quantiteProduit; //prix total produit(s) sans frais port et remise(s)
var fraisPort = 6; //frais de port 6€
var remiseFraisPort2 = parseFloat('0.98'); //remise frais port 2%
var tauxRemiseFraisPort2 = parseFloat('0.02'); //taux remise frais port 2%
var calculFraisPort = prixProduit * tauxRemiseFraisPort2; //calcul frais port 
var remisePrix5 = parseFloat('0.95'); //remise 5%
var remisePrix10 = parseFloat('0.9'); //remise 10%
var tauxRemise10 = parseFloat('0.1'); //taux remise 10%
var prixTotal; //prix total produit(s) avec frais port et/ou remise(s)

//prix total produit(s) sans remises
if (prixProduit < 100) {
    prixTotal = prixProduit + fraisPort;
    alert("Le prix total est de : " + prixTotal + "€" + "\nsoit : " + "\n- prix produit(s) = " +
        prixProduit + "€" + "\n- prix frais de port = " + fraisPort + "€");
} else {
    //prix total produit(s) avec remise 5% + frais port 6€
    if (prixProduit >= 100 && prixProduit <= 200) {
        prixTotal = prixProduit * remisePrix5 + fraisPort;
        alert("Le prix total est de : " + prixTotal + "€" + "\nsoit : " + "\n- prix produit(s) = " +
            prixProduit + "€" + "\n- prix frais de port = " + fraisPort + "€" + "\n- prix remise = " +
            (prixProduit - prixProduit * remisePrix5).toString() + "€");
    } else {
        //prix total produit(s) avec remise 10% + frais port 6€
        if (prixProduit > 200 && calculFraisPort < 6) {
            prixTotal = prixProduit * remisePrix10 + fraisPort;
            alert("Le prix total est de : " + prixTotal + "€" + "\nsoit : " + "\n- prix produit(s) = " +
                prixProduit + "€" + "\n- prix frais de port = " + fraisPort + "€" + "\n- prix remise = " +
                (prixProduit - prixProduit * remisePrix10).toString() + "€");
        } else {
            //prix total produit(s) avec remise 10% + remise frais port 2%
            if (prixProduit > 200 && prixProduit < 500 && calculFraisPort > 6) {
                prixTotal = prixProduit * (tauxRemise10 + tauxRemiseFraisPort2);
                alert("Le prix total est de : " + prixTotal + "€" + "\nsoit : " + "\n- prix produit(s) = " +
                    prixProduit + "€" + "\n- prix frais de port = " +
                    (prixProduit - prixProduit * remiseFraisPort2).toString() + "\n- prix remise = " +
                    (prixProduit - prixProduit * remisePrix10).toString() + "€");
                //prix total produit(s) sans frais de port + remise 10%
            } else {
                prixTotal = prixProduit * remisePrix10;
                alert("Le prix total est de : " + prixTotal + "€" + "\nsoit : " + "\n- prix produit(s) = " +
                    prixProduit + "€" + "\n- prix frais de port = 0€" + "\n- prix remise = " +
                    (prixProduit - prixProduit * remisePrix10).toString() + "€");
            }
        }
    }
}