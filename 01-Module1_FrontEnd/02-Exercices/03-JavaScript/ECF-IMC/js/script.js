//Fonction retrait valeur input "prenom" par défaut
function reinitialiseValuePrenom() {
    inputPrenom.value = ""; //vide contenu
    inputPrenom.style.fontStyle = "normal"; //style police
    inputPrenom.style.color = "black"; //couleur police
}


//Fonction retrait valeur input "poids" par défaut
function reinitialiseValuePoids() {
    inputPoids.value = ""; //vide contenu
    inputPoids.style.fontStyle = "normal"; //style police
    inputPoids.style.color = "black"; //couleur police
}


//Fonction retrait valeur input "taille" par défaut
function reinitialiseValueTaille() {
    inputTaille.value = ""; //vide contenu
    inputTaille.style.fontStyle = "normal"; //style police
    inputTaille.style.color = "black"; //couleur police
}


//Fontion calcul IMC
function calculImc(_valuePoids, _valueTaille) {
    // console.log(parseInt(_valuePoids.value)); //affiche dev
    // console.log(parseFloat(_valueTaille.value)); //affiche dev

    //Variable locale
    let resultat = parseFloat(_valuePoids.value / (_valueTaille.value / 100 * _valueTaille.value / 100)); //calcul

    //Retour résultat au dixième près
    return resultat.toPrecision(3);
}


//Fonction info IMC suivant résultat
function resultInfoImc(_resultatImc) {

    //Si valeur poids et taille différent de vide et de 0 alors
    switch (inputPoids.value != ("" || 0) && inputTaille.value != ("" || 0)) {

        //Si résultat IMC < 18.4 kg/m² alors
        case (_resultatImc < 18.4):
            document.body.style.backgroundColor = "blue"; //changement couleur fond
            return "maigre"; //retour résultat
            break; //fin sélection

        //Si résultat IMC >= 18.5 kg/m² et <= 24.9 kg/m² alors
        case (_resultatImc >= 18.5 && _resultatImc <= 24.9):
            document.body.style.backgroundColor = "green"; //changement couleur fond
            return "normale"; //retour résultat
            break; //fin sélection

        //Si résultat IMC >= 25 kg/m² et <= 29.9 kg/m² alors
        case (_resultatImc >= 25 && _resultatImc <= 29.9):
            document.body.style.backgroundColor = "orange"; //changement couleur fond
            return "en surpoids"; //retour résultat
            break; //fin sélection

        //Si résultat IMC >= 30 kg/m² et <= 34.9 kg/m² alors
        case (_resultatImc >= 30 && _resultatImc <= 34.9):
            document.body.style.backgroundColor = "red"; //changement couleur fond
            return "en obésité modérée"; //retour résultat
            break; //fin sélection

        //Si résultat IMC >= 35 kg/m² et <= 39.9 kg/m² alors
        case (_resultatImc >= 35 && _resultatImc <= 39.9):
            document.body.style.backgroundColor = "red"; //changement couleur fond
            return "en obésité sévère"; //retour résultat
            break; //fin sélection

        //Si résultat IMC >= 40 kg/m² alors
        case (_resultatImc >= 40):
            document.body.style.backgroundColor = "red"; //changement couleur fond
            return "en obésité morbide"; //retour résultat
            break; //fin sélection

        //Si sélection erronée alors "défault"
        default:
            break; //fin sélection
    }
}


//Fonction affiche informations IMC
function afficheInfosImc() {

    //Si les champs input sont renseignés alors
    if (inputPrenom.value != "" && inputPoids.value != "" && inputTaille.value != "") {

        //Si expression régulière "prénom" non OK alors
        if (!filtreExpressRegulPrenom.test(inputPrenom.value)) {
            alert('Veuillez renseigner un prénom valide.'); //affiche popup "erreur"
        }

        //Sinon si expression régulière "poids" non OK alors
        else if (!filtreExpressRegulPoids.test(inputPoids.value)) {
            alert('Veuillez renseigner un poids valide.\n\nEntrez un nombre entier au format "xx".'); //affiche popup "erreur"
        }

        //Sinon si expression régulière "taille" non OK alors
        else if (!filtreExpressRegulTaille.test(inputTaille.value)) {
            alert('Veuillez renseigner une taille valide.\n\nEntrez une valeur (en cm) au format "xxx".'); //affiche popup "erreur"
        }

        //Sinon
        else {
            //Variables locales
            let listInfosImc = document.getElementById('infos'); //sélection balise div "infos"
            let infosCardImc = document.createElement('div'); //création balise "div" liste "infos"
            let resultatImc = calculImc(inputPoids, inputTaille); //calcul IMC via fonction "calculImc"
            let infoCalculImc = resultInfoImc(resultatImc); //retourne info IMC via fonction "resultInfoImc"

            //Création attribu class "card" pour liste "infos"
            infosCardImc.setAttribute('class', 'card styleCard');

            //Vide contenu textuel HTML dans balise div "infos"
            listInfosImc.innerHTML = "";

            //Ecriture contenu textuel HTML dans balise "div" class "card" liste "infos"
            infosCardImc.innerHTML =
                '<h3 class="card-body styleTitleInfo">' + "Bonjour" + "&nbsp;" + '<strong>' + inputPrenom.value + '</strong></h3>' +
                '<ul>' +
                '<li><h3 class="card-body styleListeInfoImc">' + "votre poids est de :" + "&nbsp;" + '<strong><span class="styleResultInfoImc">' + inputPoids.value + " kg" + '</span></strong></h3></li>' +
                '<li><h3 class="card-body styleListeInfoImc">' + "votre taille est de :" + "&nbsp;" + '<strong><span class="styleResultInfoImc">' + inputTaille.value / 100 + " m" + '</span></strong></h3></li>' +
                '<li><h3 class="card-body styleListeInfoImc">' + "votre IMC est de :" + "&nbsp;" + '<strong><span class="styleResultInfoImc">' + resultatImc + " kg/m²" + '</span></strong></h3></li>' +
                '<li><h3 class="card-body styleListeInfoImc">' + "Vous êtes" + "&nbsp;" + '<strong><span class="styleInfoResultImc">' + infoCalculImc + '</span></strong></h3></li>' +
                '</ul>';

            //Ajout contenu textuel HTML dans balise "div" class "card" liste "infos"
            listInfosImc.appendChild(infosCardImc);

            //Si valeur poids et taille différent de vide et de 0 alors
            switch (inputPoids.value != ("" || 0) && inputTaille.value != ("" || 0)) {

                //Si résultat IMC = "maigre" alors
                case (infoCalculImc == "maigre"):
                    document.getElementsByClassName('styleInfoResultImc')[0].style.color = "blue"; //couleur police
                    break; //fin sélection

                //Si résultat IMC = "normale" alors
                case (infoCalculImc == "normale"):
                    document.getElementsByClassName('styleInfoResultImc')[0].style.color = "green"; //couleur police
                    break; //fin sélection

                //Si résultat IMC = "en surpoids" alors
                case (infoCalculImc == "en surpoids"):
                    document.getElementsByClassName('styleInfoResultImc')[0].style.color = "orange"; //couleur police
                    break; //fin sélection

                //Si résultat IMC = "en obésité modérée" ou "en obésité sévère" ou "en obésité morbide" alors
                case (infoCalculImc == "en obésité modérée" || infoCalculImc == "en obésité sévère" || infoCalculImc == "en obésité morbide"):
                    document.getElementsByClassName('styleInfoResultImc')[0].style.color = "red"; //couleur police
                    break; //fin sélection

                //Si sélection erronée alors "défault"
                default:
                    break; //fin sélection
            }
        }
    }

    //Sinon
    else {
        alert('Veuillez renseigner les champs "prénom, poids et taille".'); //affiche popup "erreur"
    }
}


//Variables globale
var inputPrenom = document.getElementById('prenom'); //sélection input "prenom"
var inputPoids = document.getElementById('poids'); //sélection input "poids"
var inputTaille = document.getElementById('taille'); //sélection input "taille"
var btnCalcul = document.getElementById('calcul'); //sélection bouton "calcul"
var filtreExpressRegulPrenom = new RegExp(/^[A-Za-z]+$/); //filtrage expression régulière input "prénom" 
var filtreExpressRegulPoids = new RegExp(/^[0-9]+$/); //filtrage expression régulière input "poids" 
var filtreExpressRegulTaille = new RegExp(/^[0-9]+$/); //filtrage expression régulière input "taille" 


//Programmes
//Rechargement automatique page
setTimeout(function () { location.reload(); }, 300000);

//affiche d'alerte
window.alert("Attention !!!\n\nDans 5 minutes la page se réinitialisera automatiquement.");

//Affiche informations IMC via fonction "afficheInfosImc"
btnCalcul.addEventListener("click", function () { afficheInfosImc() });

//Affiche informations IMC via fonction "afficheInfosImc" sur presse bouton clavier "Entrer"
inputTaille.addEventListener("keypress", function (event) {
    //Si presse bouton clavier "Entrer" par défaut alors
    if (event.key === "Enter") {
        //evènement par défaut = evènement "btnCalcul"
        event.preventDefault();
        btnCalcul.click();
    }
});

//Retrait valeur par défaut input "prenom" via fonction "reinitialiseValuePrenom"
inputPrenom.addEventListener("click", function () { reinitialiseValuePrenom() });

//Retrait valeur par défaut input "poids" via fonction "reinitialiseValuePoids"
inputPoids.addEventListener("click", function () { reinitialiseValuePoids() });

//Retrait valeur par défaut input "poids" via fonction "reinitialiseValuePoids" sur presse bouton clavier "Tab"
inputPrenom.addEventListener("keydown", function (event) {
    //Si presse bouton clavier "Tab" par défaut alors
    if (event.key === "Tab") {
        //evènement par défaut = evènement "inputPrenom"
        event.preventDefault();
        inputPoids.click();
        inputPoids.select();
    }
});

//Retrait valeur par défaut input "taille" via fonction "reinitialiseValueTaille"
inputTaille.addEventListener("click", function () { reinitialiseValueTaille() });

//Retrait valeur par défaut input "taille" via fonction "reinitialiseValueTaille" sur presse bouton clavier "Tab"
inputPoids.addEventListener("keydown", function (event) {
    //Si presse bouton clavier "Tab" par défaut alors
    if (event.key === "Tab") {
        //evènement par défaut = evènement "inputPoids"
        event.preventDefault();
        inputTaille.click();
        inputTaille.select();
    }
});

//Affiche valeur "exemple" par défaut dans inputs
inputPrenom.value = "Ex : Josianne"; //valeur par défaut
inputPoids.value = "Ex : 65"; //valeur par défaut
inputTaille.value = "Ex : 163"; //valeur par défaut

//Mise en forme style par défaut dans inputs
inputPrenom.style.fontStyle = "italic"; //style police
inputPrenom.style.color = "grey"; //couleur police
inputPoids.style.fontStyle = "italic"; //style police
inputPoids.style.color = "grey"; //couleur police
inputTaille.style.fontStyle = "italic"; //style police
inputTaille.style.color = "grey"; //couleur police