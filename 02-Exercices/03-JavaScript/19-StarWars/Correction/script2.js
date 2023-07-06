//plus de variable globale!!! C'est vraiment le top ça!!!

//Notez la notion de Région (voir ci dessous): via des commentaires, cela permet de "ranger" son code
// pour une meilleure lisibilité et ça fait quand même plus classe

//#region DOM  (ce serait bien de mettre ça dans une classe)
function AjouteBtnPeople(people) {
  let listItem = document.createElement("button");
  listItem.id = people.name;
  listItem.innerHTML = people.name;
  listItem.onclick = function () {
    createDetailPersoFromPeople(people.url);
  };

  var starWarsList = document.querySelector("ul");
  starWarsList.appendChild(listItem);
}

function ChargeFilmsFromPeople(FilmsResult) {
  var detail = document.getElementById("Detail");

  let ParagrapheFilm = document.createElement("p");

  let NameFilmsItem = document.createElement("a");
  var linkText = document.createTextNode(FilmsResult.title);
  NameFilmsItem.appendChild(linkText);
  NameFilmsItem.title = FilmsResult.title;
  //NameFilmsItem.innerHTML=result.title;

  //l'id dans l'API n'est pas l'episode id
  // pour le récupérer on va devoir l'extraire de l'URL
  //ex: dans "https://swapi.dev/api/films/1/"
  // on veut récupérer 1 alors que l'épisode_id est 4
  //on sait que l'id commence après le caractère 27 de l'url

  //console.log("L'indice est de " + result.url.slice(28,result.url.length - 1 ))
  var indice = FilmsResult.url.slice(28, FilmsResult.url.length - 1);
  NameFilmsItem.href = "films.html?id=" + indice;
  ParagrapheFilm.appendChild(NameFilmsItem);
  detail.appendChild(ParagrapheFilm);
}

function ChargeDetailPeopleFromPeople(PeopleResult) {
  console.log("on rentre ici pour " + PeopleResult.name);
  var detail = document.getElementById("Detail");
  while (detail.hasChildNodes()) {
    detail.removeChild(detail.firstChild);
  }
  let NameItem = document.createElement("div");
  NameItem.id = PeopleResult.name;
  NameItem.innerHTML = PeopleResult.name;
  detail.appendChild(NameItem);

  if (PeopleResult.films.length > 0) {
    let LabelListeFilms = document.createElement("div");
    LabelListeFilms.innerHTML = "Liste des films avec " + PeopleResult.name;
    detail.appendChild(LabelListeFilms);
    for (i = 0; i < PeopleResult.films.length; i++) {
      console.log(PeopleResult.films[i]);
      fetchAPI(PeopleResult.films[i], "films", true, "people");
    }
  }
}

// à coder
function ChargeDetailFilmsFromFilms(FilmResult) { }

//#endregion

//#region API (ce serait bien de mettre ça dans une classe)
function createDetailPersoFromPeople(url) {
  fetchAPI(url, "people", true, "people");
}

function loadPeopleForm() {
  fetchAPI("https://swapi.dev/api/", "people", false, "people");
}

function loadMoviesForm() {
  try {
    //là on est dans le cas où des paramètres on été passés : si il y'en a pas on chargera tous les films
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    console.log(temp[1]);
    l = decodeURI(temp[1]); //decodeURI va calculer une nouvelle chaîne de caractères et remplace les séquences d'échappement hexadécimales par les caractères qu'elles représentent.

    console.log(" On va charger le film avec l'id d'épisode " + l);
    fetchAPI("https://swapi.dev/api/films/" + l, "films", true, "films");
  } catch (error) {
    console.error("Il n'y a pas de paramètres");
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
}

async function fetchAPI(url, type, urldonne, origine) {
  try {
    if (type != "" && urldonne == false) {
      url += type;
    }
    await fetch(url)
      .then(async function (response) {
        return await response.json();
      })
      .then(function (json) {
        let result;
        if (urldonne) {
          //l'url est donné donc on affiche qu'un élément... il n'y a pas de results dans le retour du json
          result = json;
        } else {
          result = json.results;
        }

        // console.log(result);
        // console.log(type);
        // console.log(origine);
        switch (type) {
          case "films":
            console.log(result);
            if (urldonne) {
              switch (origine) {
                case "people":
                  ChargeFilmsFromPeople(result);
                  break;
                case "films":
                  console.log(
                    "on est ici et on va charger les infos du fetch dans le dom"
                  );
                  break;

                default:
                  break;
              }
            }

            break;

          case "people":
            if (urldonne) {
              switch (origine) {
                case "people":
                  ChargeDetailPeopleFromPeople(result);
                  break;
                default:
                  break;
              }
            } else {
              for (r of result) {
                console.log(r);
                AjouteBtnPeople(r);
              }
            }

            break;
          //...................
          default:
            break;
        }
      });
  } catch (error) {
    console.log("Error", error);
  }
}

//#endregion

function ShowInfosFilms(film) {
  console.log(film.title);
}
function affiche(Records) {
  for (r of Records) {
    console.log(r.name);
  }
}
