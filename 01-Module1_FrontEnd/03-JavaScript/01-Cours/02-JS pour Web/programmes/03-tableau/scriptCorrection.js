var tableau = ["element 1", "element 2", "element 3", "element 4"];

//on créé notre élement ul qui va contenir les li qui seront renseignées par les élements de notre tableau
var ul = document.createElement("ul");

// on boucle sur notre tableau
for (i = 0; i < tableau.length; i++) {
  //on créé un élement li
  var li = document.createElement("li");
  //on y ajoute la classe red
  li.className = "red";
  //on y met le contenu de l'element du tableau sur lequel on se trouve dans la boucle
  li.innerText = tableau[i];

  //Si le contenu de l'eélement d tableau sur lequel on se trouve dans la boucle est element 3
  if (tableau[i] == "element 3") {
    //on créé un nouvel élement de type ul mais on le stocke dans la variable ul2 (ul est deja pris)
    var ul2 = document.createElement("ul");
    // on veut trois élements donc on fait une boucle qui part de 1 et ira jusqu'à 3
    for (j = 1; j <= 3; j++) {
      // on créé un nouvel élement de type li que l'on stocke dans une variable li2 (li etant déjà pris)
      var li2 = document.createElement("li");
      //on lui affecte la class blue
      li2.className = "blue";
      // on lui met son contenu
      li2.innerText = "Coucou " + j;
      //li2 devient un enfant de ul2
      ul2.appendChild(li2);
    }
    //ul2 devient un enfant de li (mais seulement si son contenu est element 3)
    li.appendChild(ul2);
  }
  //li devient un enfant de ul
  ul.appendChild(li);
}

//C'est fini

document.getElementsByTagName("body")[0].appendChild(ul);
