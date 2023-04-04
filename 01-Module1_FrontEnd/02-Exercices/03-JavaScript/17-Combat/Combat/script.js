class Personnage {
  #nom;
  #vie;
  #attaque;
  #defense;
  #existe;
  constructor(_nom) {
    // this.nom = _nom;
    this.setnom(_nom);
    // this.vie = Personnage.nombreAleatoire();
    this.setvie(Personnage.nombreAleatoire());
    // this.attaque = Personnage.nombreAleatoire();
    this.setattaque(Personnage.nombreAleatoire());
    // this.defense = Personnage.nombreAleatoire();
    this.setdefense(Personnage.nombreAleatoire());

    if (this.getnom() != "") {
      this.setexiste(true);
      console.log("Nouveau personnage " + this.getnom() + " crée !");
    } else {
      this.setexiste(false);
      console.log("Erreur!!!");
    }
  }

  setnom(_nom) {
    this.#nom = _nom;
  }
  getnom() {
    return this.#nom;
  }

  setvie(_vie) {
    this.#vie = _vie;
    if (this.getvie() < 0) {
      this.setvie(0);
      this.setexiste(false);
      console.log(
        "\x1b[41m%s",
        "Le personnage " + this.getnom() + " est dead "
      );
    }
  }
  getvie() {
    return this.#vie;
  }

  setattaque(_attaque) {
    this.#attaque = _attaque;
  }
  getattaque() {
    return this.#attaque;
  }

  setdefense(_defense) {
    this.#defense = _defense;
  }
  getdefense() {
    return this.#defense;
  }

  setexiste(_existe) {
    this.#existe = _existe;
  }
  getexiste() {
    return this.#existe;
  }

  info() {
    console.log(
      "Le personnage " +
        this.getnom() +
        " a " +
        this.getvie() +
        " points de vie" +
        ", " +
        this.getattaque() +
        " points d'attaque et " +
        this.getdefense() +
        " points de défense"
    );
  }

  attaquer(defenseur) {
    console.log(
      "Nouvelle attaque de " +
        this.getnom() +
        " contre " +
        defenseur.getnom() +
        " !!"
    );
    if (this.getattaque() > defenseur.getdefense()) {
      defenseur.setvie(defenseur.getvie() - 10);
    }
    if (this.getattaque() == defenseur.getdefense()) {
      defenseur.setvie(defenseur.getvie() - 5);
    }
    if (this.getattaque() < defenseur.getdefense()) {
      this.setvie(this.getvie() - 5);
    }
    this.info();
    defenseur.info();
  }
  //obtention nombre aléatoire entre 20 et 100
  static nombreAleatoire() {
    return Math.round((100 - 20) * Math.random() + 20);
  }
}

class Match {
  #nbjoueur;
  tableauPlayers = new Array(); //création tableau saisie
  randomAtq;
  randomDef;
  randomAncienAtq = -1;

  constructor(_nbjoueur) {
    this.#nbjoueur = _nbjoueur;
  }

  VerifieNomPersonnage(_nom) {
    var nomExiste = false;

    if (this.tableauPlayers.length > 0) {
      for (let i=0; i < this.tableauPlayers.length ; i++) {
       
        if (this.tableauPlayers[i].getnom() == _nom) {
          nomExiste = true;
        }
      }
    }
    return nomExiste;
  }

  initial() {
    // -variables-
    let nbjoueurcree = 0;
    var nomSaisie = "";
    var player;
    while (nbjoueurcree < this.#nbjoueur) {
      nomSaisie = prompt("Saisissez un nom:");
      if (nomSaisie != "" && this.VerifieNomPersonnage(nomSaisie) == false) {
        player = new Personnage(nomSaisie);
        player.info();
        this.tableauPlayers.push(player);
        nbjoueurcree += 1;
       
      } else {
        console.log("Le nom est incorrect (soit vide, soit déjà pris)");
      }
    }
  }

  run() {
    /****************fonction partie 11 correction************** */
    function joueurAleatoire(length) {
      return Math.floor(Math.random() * length);
    }

    //tant qu'il reste plus d'un joueur
    while (this.tableauPlayers.length > 1) {
      //definit l'attaquant de façon aléatoire
      this.randomAtq = joueurAleatoire(this.tableauPlayers.length);
      //definit le defenseur
      this.randomDef = joueurAleatoire(this.tableauPlayers.length);
      //verifie si l'attaquant est different de l'ancien attaquant
      if (this.randomAtq != this.randomAncienAtq) {
        //verifie si l'attaquand est different du defenseur
        if (this.randomAtq != this.randomDef) {
          //attaque
          this.tableauPlayers[this.randomAtq].attaquer(
            this.tableauPlayers[this.randomDef]
          );
          try {
            //si l'attaquant est mort on le supprime du tableau
            if (this.tableauPlayers[this.randomAtq].getexiste() == false) {
              this.tableauPlayers.splice(this.randomAtq, 1);
            }
            //si le defenseur est mort on le supprime du tableau
            if (this.tableauPlayers[this.randomDef].getexiste() == false) {
              this.tableauPlayers.splice(this.randomDef, 1);
            }
            //on intercepte l'erreur si la donnée du tableau n'existe plus
          } catch (error) {}
          //l'attaquant devient l'ancien attaquant
          this.randomAncienAtq = this.randomAtq;
        }
      }
    }
    console.log(
      "\x1b[42m%s",
      "Le  vainqueur est : " + this.tableauPlayers[0].getnom().toString()
    );
  }
}
let m = new Match(4);
m.initial();
m.run();

// //premier personnage
// var perso1 = new Personnage("Moussa"); //création personnage
// console.log(perso1); //vérification création personnage
// perso1.info(); //informations personnage

// //deuxième personnage
// var perso2 = new Personnage("Kévin"); //création personnage
// console.log(perso2); //vérification création personnage
// perso2.info(); //informations personnage

// //attaque
// perso2.attaquer(perso1);//attaque personnage 2 contre 1

//-programme-
//Pour itération(i) allant de 0 à "nbrJoueur" alors
// for (let i = 0; i < nbrJoueur-1; i++) {
//   var player = new Personnage(prompt("Saisir un nom")); //saisie + création personnage
//   player.info(); //informations personnage
//   tableauPlayers.push(player); //incrémentation nom personnage
//   console.log(tableauPlayers[i]); //vérification création personnage
// }
