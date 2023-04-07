// -variables-
var booksList = new Array(); //'variable globale' tableau liste ouvrages
var authorsList = new Array(); //'variable globale' tableau liste auteurs
var categoriesList = new Array(); //'variable globale' tableau liste cathégories
//'variable globale' format date publication ouvrage
var formatDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};


// -programme-
//chargement et affichage auto API JSON via fonction "jsonOnLoad"
window.addEventListener("load", jsonOnLoad());

//Affichage ouvrage par auteur via fonction "chargeByAuthor"
document.getElementById('authorsList').addEventListener("change", function () { chargeByAuthor() });

//Affichage ouvrage par cathégorie via fonction "chargeByCategorie"
document.getElementById('categoriesList').addEventListener("change", function () { chargeByCategorie() });

// -fonctions-
//appel chargement fichier JSON
function jsonOnLoad() {
    fetch("books.json")
        .then((response) => {
            return response.json(); //retour données fichier JSON
        })
        .then((booksData) => {
            console.log(booksData); //affichage dev données fichier JSON
            createList(booksData); //appel fonction "createList" 
        });
}

//création listes ouvrages, auteurs et cathégories à partir des données fichier JSON
function createList(_data) {
    //pour liste ouvrages existants allant de 0 à xx alors
    for (var x = 0; x < _data.length; x++) {
        var book = _data[x]; //'variable locale' ouvrage de la liste
        booksList.push(book); //incrémente liste ouvrages dans tableau

        //pour liste auteurs existants allant de 0 à yy alors
        for (var y = 0; y < book.authors.length; y++) {
            var author = book.authors[y]; //'variable locale' auteur de la liste
            //si auteur pas présent dans liste alors
            if (authorsList.indexOf(author) == -1) {
                authorsList.push(author); //incrémente liste auteurs dans tableau
            }
        }

        //pour liste cathégories existantes allant de 0 à zz alors
        for (var z = 0; z < book.categories.length; z++) {
            var categorie = book.categories[z]; //'variable locale' cathégorie de la liste
            //si cathégorie pas présent dans liste alors
            if (categoriesList.indexOf(categorie) == -1) {
                categoriesList.push(categorie); //incrémente liste cathégories dans tableau
            }
        }
    }

    //tri alphabétiquement listes
    booksList.sort(); //ouvrages
    authorsList.sort(); //auteurs
    categoriesList.sort(); //cathégories

    //pour liste déroulante auteurs existants allant de 0 à ii alors
    for (var i = 0; i < authorsList.length; i++) {
        var listAuthors = document.createElement('option'); //'variable locale' création liste choix auteurs
        listAuthors.value = authorsList[i]; //valeur liste choix = liste auteurs
        listAuthors.innerText = authorsList[i]; //contenu textuel liste = liste auteurs
        document.getElementById('authorsList').appendChild(listAuthors); //ajout contenu liste auteurs dans fichier HTML
    }

    //pour liste déroulante cathégories existantes allant de 0 à jj alors
    for (var j = 0; j < categoriesList.length; j++) {
        var listCategories = document.createElement('option'); //'variable locale' création liste choix cathégories
        listCategories.value = categoriesList[j]; //valeur liste choix = liste cathégories
        listCategories.innerText = categoriesList[j]; //contenu textuel liste = liste cathégories
        document.getElementById('categoriesList').appendChild(listCategories); //ajout contenu liste cathégories dans fichier HTML
    }

    //affichage cartes ouvrages
    showBooks(booksList); //appel fonction "showBooks" 
}

// création affichage cartes ouvrages
function showBooks(_booksList) {
    document.getElementById('booksList').innerHTML = ""; //vide contenu textuel HTML

    //pour toutes cartes ouvrages allant de 0 à xx alors
    for (var x = 0; x < _booksList.length; x++) {
        var bookCard = document.createElement('div'); //'variable locale' création carte image ouvrage
        bookCard.setAttribute('class', 'card mb-4'); //création attribu class "card et mb-4"

        //Images Card
        //si image ouvrage inexistante ou non définie alors
        if (_booksList[x].thumbnailUrl == undefined || _booksList[x].thumbnailUrl == null) {
            _booksList[x].thumbnailUrl = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png"; //attribution image par défaut
        }

        //Titres Card
        var titre; //'variable locale' titre ouvrage
        //si titre ouvrage trop long alors
        if (_booksList[x].title.length > 20) {
            titre = _booksList[x].title.substring(0, 20) + "(...)"; //réduction titre + affiche "(...)"
        }
        //sinon si titre ouvrage court alors
        else {
            titre = _booksList[x].title; //laisse titre par défaut
        }

        //Descriptions Card
        var description; //'variable locale' description ouvrage
        var descriptionShort; //'variable locale' description courte ouvrage
        //si description ouvrage courte inexistante ou non définie alors
        if (_booksList[x].shortDescription == undefined || _booksList[x].shortDescription == null) {
            description = ""; //laisse contenu vide
            descriptionShort = ""; //laisse contenu vide
        }
        //sinon si description ouvrage courte existante alors
        else {
            //si description trop longue alors
            if (_booksList[x].shortDescription.length > 20) {
                descriptionShort = _booksList[x].shortDescription.substring(0, 20) + "(...)"; //réduction description + affiche "(...)"
                description = _booksList[x].shortDescription; //laisse description courte par défaut
            }
            //si description courte alors
            else {
                description = _booksList[x].shortDescription; //laisse description courte par défaut
                descriptionShort = _booksList[x].shortDescription; //réduction description + affiche "(...)"
            }
        }

        //Dates publication Card
        var datePublished; //'variable locale' date publication ouvrage
        //si date existante alors
        try {
            datePublished = new Date(_booksList[x].publishedDate.dt_txt).toLocaleDateString("fr-FR", formatDate); //change format date
        }
        //sinon si date inexistante alors
        catch (error) {
            datePublished = "Pas de date de publication"; //précise textuellement que pas de date
        }

        //Ajout contenu textuel Card dans HTML
        bookCard.innerHTML =
            '<img src="' + _booksList[x].thumbnailUrl + '"/>' +
            '<h1 class="bookTitle"><span class="infoBulle" title="' + _booksList[x].title + '">' + titre + '</span></h1>' +
            '<h4>' + datePublished + '</h4>'; //ajout contenu HTML
        //si description vide alors
        if (description != "") {
            bookCard.innerHTML +=
                '<h4><span class="infoBulle" title="' + description + '">' + descriptionShort + '</span></h4>'; //ajout contenu HTML
        }

        //Ajout contenu Card dans HTML
        document.getElementById('booksList').appendChild(bookCard); //ajout contenu cartes ouvrages dans fichier HTML
    
        //Retrait affichage indicateur chargement (loading) CSS
        document.getElementById("loading").style.display = "none";
    }
}

//Affichage ouvrage par auteur
function chargeByAuthor() {
    var elementCategorie = document.getElementById('categoriesList'); //'variable locale' sélection liste cathégories
    var elementAuthor = document.getElementById('authorsList'); //'variable locale' sélection liste auteurs
    var choiceAuthors = elementAuthor.options[elementAuthor.selectedIndex].innerText; //'variable locale' sélection contenu liste
    var booksListByAuthors = new Array(); //'variable locale' tableau liste ouvrages par auteurs

    //sélectionne contenu vide
    elementCategorie.options[elementCategorie.selectedIndex].innerText = "";

    //si contenu liste auteurs vide alors
    if (choiceAuthors == "") {
        showBooks(booksList); //sélectionne ouvrages via fonction "showBooks"
    }
    //sinon si contenu liste auteurs pas vide alors
    else {
        //pour ouvrages allant de 0 à yy alors
        for (var y = 0; y < booksList.length; y++) {
            var bookByAuthor = booksList[y]; //'variable locale' tableau liste ouvrages par auteur
            //si présence ouvrages auteur alors
            if (bookByAuthor.authors.indexOf(choiceAuthors) != -1) {
                booksListByAuthors.push(bookByAuthor); //incrémente ouvrages par auteur dans tableau
            }
        }
    }

    //tri alphabétiquement ouvrages de la liste
    booksListByAuthors.sort();

    //sélectionne ouvrages triés via fonction "showBooks"
    showBooks(booksListByAuthors);
}

//Affichage ouvrage par cathégorie
function chargeByCategorie() {
    var elementAuthor = document.getElementById('authorsList'); //'variable locale' sélection liste auteurs
    var elementCategorie = document.getElementById('categoriesList'); //'variable locale' sélection liste cathégories
    var choiceCategories = elementCategorie.options[elementCategorie.selectedIndex].innerText; //'variable locale' sélection contenu liste
    var booksListByCategories = new Array(); //'variable locale' tableau liste ouvrages par cathégories

    //sélectionne contenu vide
    elementAuthor.options[elementAuthor.selectedIndex].innerText = "";

    //si contenu liste cathégories vide alors
    if (choiceCategories == "") {
        showBooks(booksList); //sélectionne ouvrages via fonction "showBooks"
    }
    //sinon si contenu liste cathégories pas vide alors
    else {
        //pour ouvrages allant de 0 à zz alors
        for (var z = 0; z < booksList.length; z++) {
            var bookByCategorie = booksList[z]; //'variable locale' tableau liste ouvrages par cathégorie
            //si présence ouvrages cathégorie alors
            if (bookByCategorie.categories.indexOf(choiceCategories) != -1) {
                booksListByCategories.push(bookByCategorie);  //incrémente ouvrages par cathégorie dans tableau
            }
        }
    }

    //tri alphabétiquement ouvrages de la liste
    booksListByCategories.sort();

    //sélectionne ouvrages triés via fonction "showBooks"
    showBooks(booksListByCategories);
}