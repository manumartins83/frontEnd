var bouton = document.getElementsByClassName('button')[0];

bouton.addEventListener("click", function () {
    fetch("pizzas.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            createData(data);
        })
});

function createData(_data) {
    var preview = document.getElementsByClassName('preview')[0];
    preview.innerHTML = "";

    var pizzeriaNom = document.createElement('div');
    pizzeriaNom.setAttribute('id', 'nomPizzeria');
    pizzeriaNom.innerHTML = _data.Nom;
    preview.appendChild(pizzeriaNom);

    var pizzeriaSlogan = document.createElement('div');
    pizzeriaSlogan.setAttribute('id', 'sloganPizzeria');
    pizzeriaSlogan.innerHTML = _data.Slogan;
    preview.appendChild(pizzeriaSlogan);

    var pizzeriaListe = document.createElement('div');
    pizzeriaListe.setAttribute('id', 'listePizzeria');
    pizzeriaListe.setAttribute('class', 'contenuListePizzeria');

    var listePizzas = _data.Pizzas;
    for (var x = 0; x < listePizzas.length; x++) {
        var pizzaListeElement = document.createElement('div');
        pizzaListeElement.setAttribute('class', 'card');
        pizzaListeElement.innerHTML =
            '<h1 class="pizzaNom">' + listePizzas[x].Nom + '</h1>' +
            '<h2 class="pizzaPrix">' + listePizzas[x].Prix + '</h2>' +
            '<img src=' + listePizzas[x].Image + '>' +
            '<ul>';

        var listeIngredients = listePizzas[x].Ingredients;
        for (var y = 0; y < listeIngredients.length; y++) {
            console.log(listeIngredients[y]);
            pizzaListeElement.innerHTML +=
                '<li class="ingredients">' + listeIngredients[y] + '</li>';
        }
        pizzaListeElement.innerHTML += '</ul>';

        pizzeriaListe.appendChild(pizzaListeElement);
    }
    preview.appendChild(pizzeriaListe);
}