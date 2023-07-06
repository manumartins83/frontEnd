// -variables-
// var peoplesList = new Array(); //'variable globale' tableau liste personnages
// var moviesList = new Array(); //'variable globale' tableau liste films
// var planetsList = new Array(); //'variable globale' tableau liste planètes
var pageLoaded; //'variable globale' chargement page HTML
const swUrl = 'https://swapi.dev/api/'; //'variable globale' url API JSON


// -programme-
//chargement et affichage API JSON via fonction "jsonOnLoad"
window.addEventListener("load", function () {
    console.log(this.location.pathname.replace('/', '').replace('.html', '')); //affiche dev nom page HTML
    pageLoaded = this.location.pathname.replace('/', '').replace('.html', '')


    //pour plus tard: ici on vérifiera si il y'a des parametres dans notre url
    //si sélection 
    switch (pageLoaded) {
        // si page "people" alors
        case "people":
            //si pas de paramètre on affichera ça
            getStarWars(swUrl, "people", false); //chargement personnages via fonction "getStarWars"

            //sinon on fera un truc de ce genre
            //         getStarWars(swUrl + "/people/" +  parametre, "people", true); //chargement personnages via fonction "getStarWars"
            break;
        // si page "movie" alors
        case "movie":
            getStarWars(swUrl, "films", false); //chargement films via fonction "getStarWars"
            break;
        // si page "planet" alors
        case "planet":
            getStarWars(swUrl, "planets", false); //chargement planètes via fonction "getStarWars"
            break;
        //sinon fin sélection
        default:
            break;
    }
});

//chargement et affichage API JSON via fonction "resultListPeople"
// document.getElementById('peoplesList').addEventListener("click", resultListPeople());


// -fonctions-
//appel chargement fichier JSON en asynchrone
async function getStarWars(_url, _type, _urldonne) {
    //si type de donnée url non existante alors
    try {
        //si type de donnée url non existante alors
        if (_type != "" && _urldonne == false) {
            _url += _type; //url = url API + type donnée associé
        }
        await fetch(_url)
            .then(async (response) => {
                return await response.json();//retour données fichier JSON en asynchrone
            })
            .then((data) => {
                let result; //'variable locale' résultat personnage
                //si type de donnée url précisé alors
                if (_urldonne) {
                    //l'url est donné donc on affiche qu'un élément... il n'y a pas de results dans le retour du json
                    result = data; //résultat = donnée pour 1 personnage 
                }
                //sinon si type de donnée url non précisé alors
                else {
                    result = data.results; //résultat = données pour tous les personnages
                }
                console.log(result); //affiche dev "résultats" données fichier JSON
                listInfos(result, _type); //appel fonction "listInfos" 
                resultListPeople(result, _origine);//appel fonction "resultListPeople" 
            });
        //sinon type et donnée url existante alors
    } catch (error) {
        console.log("Error", error); //affiche dev "Erreur"
    }
}

//création liste personnages, planètes, films Star Wars à partir des données fichier JSON
function listInfos(_data, _type) {
    //pour informations de la liste allant de 0 à xx alors
    for (var x = 0; x < _data.length; x++) {
        //si sélection
        switch (_type) {
            // si type donnée API "people" alors
            case "people":
                var elementPeople = document.createElement('div'); //'variable locale' création <div>
                elementPeople.setAttribute('class', 'card'); //création "class"
                elementPeople.innerHTML = '<p>' + _data[x].name + '</p>'; //écriture élément
                document.getElementById("peoplesList").appendChild(elementPeople); //affichage élément


                // var elementListPeople = document.createElement('div'); //'variable locale' création <div>
                // elementListPeople.setAttribute('class', 'card'); //création "class"
                // elementListPeople.innerHTML = '<p>' + _data[x].results + '</p>'; //écriture élément
                // document.getElementById("peoplesListResult").appendChild(elementListPeople); //affichage élément

                break;
            //si type donnée API "Planets" alors
            case "planets":
                var elementPlanet = document.createElement('div'); //'variable locale' création <div>
                elementPlanet.setAttribute('class', 'card'); //création "class"
                elementPlanet.innerHTML = '<p>' + _data[x].name + '</p>'; //écriture élément
                document.getElementById("planetsList").appendChild(elementPlanet); //affichage élément
                break;
            //si type donnée API "films" alors
            case "films":
                var elementMovie = document.createElement('div'); //'variable locale' création <div>
                elementMovie.setAttribute('class', 'card'); //création "class"
                elementMovie.innerHTML = '<p>' + _data[x].title + '</p>'; //écriture élément
                document.getElementById("moviesList").appendChild(elementMovie); //affichage élément
                break;
            //sinon fin sélection
            default:
                break;
        }
    }
}

//création liste résultats personnages à partir des données fichier JSON
// function resultListPeople(_data) {




// }