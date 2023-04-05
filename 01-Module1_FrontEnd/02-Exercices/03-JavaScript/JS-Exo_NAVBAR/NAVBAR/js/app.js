// Récupérer le sélecteur .nav-toggle ainsi que .links 

// Ecouter l'évènement 'click' sur .nav-toogle

  // si .links a pour class .show-links
    // la supprimer
  // sinon
    // l'ajouter

  // Vous pouvez arriver au même résultat avec classList.toggle

  var nav = document.getElementsByClassName('nav-toggle');

  var links = document.getElementsByClassName('links');

  nav[0].addEventListener('click', function(e) {
    for(i=0;i<links.length;i++){
      links[i].classList.toggle('show-links')
    }

  });