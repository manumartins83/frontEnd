var montantRepas = parseFloat(prompt("Entrez le prix du repas de l'employé(e) :")); //prix repas employé(e)
var salaire = parseFloat(prompt("Entrez le salaire de l'employé(e) :")); //salaire employé(e)
var situation = prompt("Quelle est la situation de l'employé(e) ?" + "\ntapez :" +
    "\n- c pour célibataire" + "\n- ce pour célibataire + enfant(s)" + "\n- m pour marié(e)" +
    "\n- me pour marié(e) + enfant(s)"); //situation employé(e) (c/m/ce/me)
var celibataire = "c"; //célibataire = c
var celibEnfant = "ce"; //célibataire + enfant(s) = ce
var marie = "m"; //marié(e) = m
var marEnfant = "me"; //marié(e) + enfant(s) = me
var nbEnfant; //nombre d'enfants employé(e)
var tauxRemiseMax = parseFloat('0.5'); //taux participation max 50%

//remise employé célibataire
if (confirm("ce" || "me")) {
    prompt("Combien a t'il(elle) d'enfant(s) ?");
} else {

}
