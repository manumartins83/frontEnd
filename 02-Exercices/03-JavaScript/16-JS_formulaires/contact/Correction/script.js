function validerFormulaire() {
    let societe = document.getElementById("societe").value;
    let personne = document.getElementById("personne").value;
    let codepostal = document.getElementById("codepostal").value;
    let ville = document.getElementById("ville").value;
    let email = document.getElementById("email").value;
    let expressionReguliere = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?");

    if (societe.length < 1) {
        console.log("Veuillez entrer le nom de votre société.");
        return false;
    }
    if (personne.length < 1) {
        console.log("Veuillez entrer le nom de la personne à contacter.");
        return false;
    }
    if (isNaN(codepostal) || codepostal.length != 5) {
        console.log("Veuillez entrer un code postal valide de 5 chiffres.");
        return false;
    }
    if (ville.length < 1) {
        console.log("Veuillez entrer le nom de votre ville.");
        return false;
    }

    if (!expressionReguliere.test(email)) {
        console.log("Veuillez entrer une adresse e-mail valide.");
        return false;
    }
    return true;
}