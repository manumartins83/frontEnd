// Récupérer le sélecteur .about, tous les sélecteurs .tab-btn et .content
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

// Ecouter l'évènement 'click' sur .about
about.addEventListener("click", function (e) {
// Récupérer la valeur de l'id de l'élément courant avec 'e.target.dataset.id'
// voir https://codepen.io/dizakids/pen/WNNVLEz
  const id = e.target.dataset.id;
 
  // si id
  if (id) {
    // supprimer .active sur les autres boutons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // le btn courant devient .active
    e.target.classList.add("active");
    // supprimer .active sur les autres contenus
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // récupérer le contenu courant grâce à l'id
    const element = document.getElementById(id);
    // ajouter .active au contenu courant
    element.classList.add("active");
  }
});