var nom=prompt("Entrez votre nom :");

var prenom=prompt("Entrez votre prénom :");

/* autre possibilité
if (confirm("Etês-vous un homme ?")==true) */
if (confirm("Etês-vous un homme ?")) 
{
    alert("Bonjour Monsieur " + nom + prenom + "\nBienvenue sur notre site web !");
}