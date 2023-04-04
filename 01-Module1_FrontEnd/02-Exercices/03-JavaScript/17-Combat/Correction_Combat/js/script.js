class Utilities {
	/**
	 * défini si on affiche les textes sur la console
	 * @type {boolean}
	 */
	static affichageTexte = true;
	static match;
	static bt1;
	static bt2;
	static bt3;
	static id_interval;

	/**
	 * retourne un nombre choisit au hasard dans l'interval [min, max]
	 * @param min borne min de l'interval
	 * @param max borne max de l'interval
	 * @returns {number}
	 */
	static nombreAleatoire(min, max) {
		return Math.round((max - min) * Math.random() + min);
	}

	/**
	 * affiche un texte sur la console
	 * @param texte texte à afficher
	 * @param options [optionnel] paramètres de l'affichage
	 */
	static afficherTexte(texte, options) {
		if (Utilities.affichageTexte) {
			if (options !== undefined) {
				console.log(texte, options)
			} else {
				console.log(texte);
			}
		}
	}

	/**
	 * défini si on doit afficher les textes
	 * @param affichageTexte
	 */
	static setAffichageTexte(affichageTexte) {
		Utilities.affichageTexte = affichageTexte;
	}

	/**
	 * Crée et initialise le match
	 */
	static init() {
		Utilities.match = new Match();
		Utilities.match.init();
		Utilities.bt2.setAttribute('onclick', 'Utilities.launch()');
		Utilities.bt1.removeAttribute('onclick');
		Utilities.bt1.disabled = true;
		Utilities.bt2.disabled = false;
		Utilities.initAffichage();
	}

	/**
	 * lance le match
	 */
	static launch() {
		//Utilities.bt2.innerHTML = 'Prochain Tour';
		//Utilities.bt2.setAttribute('onclick', 'run()');
		Utilities.bt3.setAttribute('onclick', 'Utilities.reset()');
		Utilities.bt3.disabled = false;
		Utilities.setAffichageTexte(true);
		console.log(
			'%c DEBUT DU MATCH ',
			"color: black; background-color: gold; font-size: 50px; font-weight: bold;"
		);
		Utilities.bt2.removeAttribute('onclick');
		Utilities.bt2.disabled = true;
		Utilities.run();
	}

	/**
	 * lance un combat entre un CRS et un Gilet Jaune choisit au hasard
	 */
	static run() {
		if(Utilities.id_interval === undefined){
			//défini un interval de 2s entre deux executions automatique de cette méthode
			Utilities.id_interval = setInterval(Utilities.run,2000);
		}
		Utilities.match.run();
		Utilities.updateAffichage();
		if (Utilities.match.isMatchEnded()) {
			//supprime l'interval d'execution automatique de cette méthode
			clearInterval(Utilities.id_interval);
			//Utilities.bt2.removeAttribute('onclick');
			//Utilities.bt2.disabled = true;
			let sectionGJ = document.getElementById('gj');
			let sectionCRS = document.getElementById('crs');
			if(Utilities.match.isCRSWin()){
				sectionGJ.style.backgroundColor = 'rgba(255,64,64,60%)';
				sectionCRS.style.backgroundColor = 'rgba(64,255,64,60%)';
			}else{
				sectionCRS.style.backgroundColor = 'rgba(255,64,64,60%)';
				sectionGJ.style.backgroundColor = 'rgba(64,255,64,60%)';
			}
		}
	}

	/**
	 * réinitialise le match et supprime les objets DOM ajoutés dynamiquement
	 */
	static reset() {
		Utilities.match.reset();
		if(Utilities.id_interval !== undefined){
			//supprime l'interval d'execution automatique de la méthode run()
			clearInterval(Utilities.id_interval);
			Utilities.id_interval = undefined;
		}
		Utilities.clearAffichage();
		Utilities.match.init();
		Utilities.bt2.innerHTML = 'Lancer le Match';
		Utilities.bt2.setAttribute('onclick', 'Utilities.launch()');
		Utilities.bt2.disabled = false;
		if (Utilities.bt3.hasAttribute('onclick')) {
			Utilities.bt3.removeAttribute('onclick');
			Utilities.bt3.disabled = true;
		}
		let sectionGJ = document.getElementById('gj');
		let sectionCRS = document.getElementById('crs');
		if(sectionGJ.hasAttribute('style')){
			sectionGJ.removeAttribute('style');
		}
		if(sectionCRS.hasAttribute('style')){
			sectionCRS.removeAttribute('style');
		}
		Utilities.initAffichage();
	}

	/**
	 * récupère les objets DOM nécessaires au chargement de la page
	 */
	static start() {
		Utilities.bt1 = document.getElementById('create');
		Utilities.bt2 = document.getElementById('launch');
		Utilities.bt2.disabled = true;
		Utilities.bt3 = document.getElementById('reboot');
		Utilities.bt3.disabled = true;
		Utilities.bt1.setAttribute('onclick', 'Utilities.init()');
		document.body.removeAttribute('onload');
	}

	static stats() {
		//Stat pour équilibrage
		let tabStatsCRS = [];
		let tabStatsGJ = [];
		for (let i = 0; i < 50; i++) {
			let stat = new Stat(4000);
			stat.run();
			//stat.affStats();
			tabStatsCRS.push(stat.getStats().get('WinCRS') / 40);
			tabStatsGJ.push(stat.getStats().get('WinGJ') / 40);
		}
		let moyenneWinCRS = tabStatsCRS.reduce(
			(acc, curr) => {
				return acc + curr
			},
			0
		) / tabStatsCRS.length;
		let moyenneWinGJ = tabStatsGJ.reduce(
			(acc, curr) => {
				return acc + curr
			},
			0
		) / tabStatsGJ.length;
		let varianceWinCRS = tabStatsCRS.map((k) => {
			return (k - moyenneWinCRS) ** 2
		}).reduce((acc, curr) => acc + curr, 0) / tabStatsCRS.length;
		let standardDeviationWinCRS = Math.round(Math.sqrt(varianceWinCRS) * 1000) / 1000;
		let varianceWinGJ = tabStatsGJ.map((k) => {
			return (k - moyenneWinGJ) ** 2
		}).reduce((acc, curr) => acc + curr, 0) / tabStatsGJ.length;
		let standardDeviationWinGJ = Math.round(Math.sqrt(varianceWinGJ) * 1000) / 1000;
		moyenneWinCRS = Math.round(moyenneWinCRS * 1000) / 1000;
		moyenneWinGJ = Math.round(moyenneWinGJ * 1000) / 1000;
		let result = `Nombre de match : 4000\n`;
		result += `win CRS : ${moyenneWinCRS} % +/- ${standardDeviationWinCRS} %\n`;
		result += `win GJ : ${moyenneWinGJ} % +/- ${standardDeviationWinGJ} %`;
		alert(result);
	}

	/**
	 * initialise l'affichage des concurrents du match
	 */
	static initAffichage() {
		let listeGJ = GJ.getListeGJ();
		let listeCRS = CRS.getListeCRS();
		for (let i = 0; i < listeGJ.length; i++) {
			Utilities.createFiche(listeGJ[i]);
		}
		for (let i = 0; i < listeCRS.length; i++) {
			Utilities.createFiche(listeCRS[i]);
		}
		Utilities.createFicheAttaque();
	}

	/**
	 * crée et affiche les objets DOM nécessaires à l'affichage d'un concurrent du match
	 * @param perso
	 */
	static createFiche(perso) {
		let container;
		if (perso instanceof GJ) {
			container = document.getElementById('gj');
		} else {
			container = document.getElementById('crs');
		}
		let divContainer = document.createElement('div');
		let div1 = document.createElement('div');
		let div2 = document.createElement('div');
		divContainer.setAttribute('id', perso.getNomComplet());
		divContainer.setAttribute('class', 'container');
		div1.setAttribute('class', 'name');
		div2.setAttribute('class', 'detail');
		div1.innerHTML = perso.getNomComplet();
		divContainer.append(div1, div2);
		let ul = document.createElement('ul');
		let vie = document.createElement('li');
		vie.setAttribute('class', 'vie');
		let attaque = document.createElement('li');
		attaque.setAttribute('class', 'attaque');
		let defense = document.createElement('li');
		defense.setAttribute('class', 'defense');
		ul.append(vie, attaque, defense);
		div2.append(ul);
		vie.innerHTML = 'Vie : ' + perso.getVie();
		attaque.innerHTML = 'Attaque : ' + perso.getAttaque();
		defense.innerHTML = 'Défense : ' + perso.getDefense();
		container.append(divContainer);
	}

	/**
	 * crée et ajoute les objets DOM nécessaires à l'affichage des détails d'une attaque
	 */
	static createFicheAttaque(){
		let divContainer = document.createElement('div');
		let div1 = document.createElement('div');
		let div2 = document.createElement('div');
		divContainer.setAttribute('id', 'action');
		divContainer.setAttribute('class', 'container');
		div2.setAttribute('class', 'detail');
		div1.innerHTML = 'Nouvelle Attaque !!!';
		divContainer.append(div1, div2);
		let attaquantName = document.createElement('div');
		attaquantName.setAttribute('class', 'attaquant');
		let attaque = document.createElement('div');
		attaque.setAttribute('class', 'texte');
		attaque.innerHTML = 'attaque';
		let defenseurName = document.createElement('div');
		defenseurName.setAttribute('class', 'defenseur');
		div2.append(attaquantName,attaque,defenseurName);
		document.body.append(divContainer);
	}

	/**
	 * affiche les détails d'une attaque
	 */
	static afficheFicheAttaque(){
		let fiche = document.getElementById('action');
		fiche.style.display = 'block';
		//défini un timer de 1s pour masquer automatiquement les détails de l'attaque
		setTimeout(Utilities.masquerFicheAttaque,1000);
	}

	/**
	 * mets à jour les détails d'une attaque
	 * @param attaquant
	 * @param defenseur
	 * @param coupSpecial
	 */
	static updateFicheAttaque(attaquant, defenseur, coupSpecial){
		let divAttaquant = document.querySelector('#action .attaquant');
		let divDefenseur = document.querySelector('#action .defenseur');
		let texte = document.querySelector('#action .texte');
		if(coupSpecial === undefined) {
			divAttaquant.innerHTML = attaquant.getNomComplet();
			divDefenseur.innerHTML = defenseur.getNomComplet();
			texte.innerHTML = 'attaque';
		} else {
			divAttaquant.innerHTML = attaquant.getNomComplet() + ' attaque ' + defenseur.getNomComplet();
			divDefenseur.innerHTML = coupSpecial;
			texte.innerHTML = '&nbsp;';
		}
		Utilities.afficheFicheAttaque();
	}

	/**
	 * masque les détails de l'attaque
	 */
	static masquerFicheAttaque(){
		let fiche = document.getElementById('action');
		fiche.removeAttribute('style');
	}

	/**
	 * met à jour les informations des concurrents du match
	 */
	static updateAffichage() {
		let joueurs = Utilities.match.getPlayers();
		for (let i = 0; i < joueurs.length; i++) {
			let elem = document.getElementById(joueurs[i].getNomComplet());
			let elemName = elem.querySelector('.name');
			if (!joueurs[i].existe()) {
				elemName.setAttribute('class', 'name dead');
			}
			let elemVie = elem.querySelector('.vie');
			elemVie.innerHTML = 'Vie : ' + joueurs[i].getVie();
		}
	}

	/**
	 * supprime les objets DOM contenant les informations des concurrents du match
	 */
	static clearAffichage() {
		let listeElems = document.querySelectorAll('.container');
		for (let i = 0; i < listeElems.length; i++) {
			listeElems[i].remove();
		}
	}
}

/**
* Classe représentant un Personnage
*/
class Personnage {
	/**
	 * nom du personnage
	 * @type {string}
	 */
	#nom = '';
	/**
	 * nombre de points de vie
	 * @type {number}
	 */
	#vie = 0;
	/**
	 * nombre de points d'attaque'
	 * @type {number}
	 */
	#attaque = 0;
	/**
	 * nombre de points de défense
	 * @type {number}
	 */
	#defense = 0;
	/**
	 * le personnage existe-t-il ?
	 * @type {boolean}
	 */
	#existe = false;
	/**
	 * type de personnage
	 * @type {string}
	 */
	#type = '';

	constructor(nom, type = '') {
		if (nom !== undefined && nom !== null) {
			this.setNom(nom);
			this.setExiste(true);
			this.setVie(Personnage.nombreAleatoire());
			this.setAttaque(Personnage.nombreAleatoire());
			this.setDefense(Personnage.nombreAleatoire());
			this.setType(type);
			Utilities.afficherTexte(
				`%c Nouveau personnage ${this.getNomComplet()} créé ! `,
				'background-color:green; font-size: 20px; font-weight: bold'
			);
		} else {
			Utilities.afficherTexte(
				'%c Vous devez définir un nom pour le personnage ',
				'background-color:red; font-size: 20px; font-weight: bold'
			);
		}
	}

	/**
	 * Affiche les informations du personnage
	 */
	info() {
		Utilities.afficherTexte(
			`%c ${this.getNomComplet()} => ${this.getVie()} points de vie | attaque: ${this.getAttaque()} | defense: ${this.getDefense()} `,
			'background-color:lightgray; font-size: 20px; font-weight: bold'
		);
	}

	/**
	 * gestion de l'attaque classique du personnage
	 * @param defenseur
	 */
	attaquer(defenseur) {
		Utilities.updateFicheAttaque(this,defenseur);
		Utilities.afficherTexte(
			`%c Attaque normale `,
			"color: black; background-color: lightcyan; font-size: 20px; font-weight: bold"
		);
		if (this.getAttaque() > defenseur.getDefense()) {
			defenseur.setVie(defenseur.getVie() - 10);
		} else if (this.getAttaque() === defenseur.getDefense()) {
			defenseur.setVie(defenseur.getVie() - 5);
		} else {
			this.setVie(this.getVie() - 5);
		}
	}

	/**
	 * Génère un nombre entre 20 et 100
	 * @returns {number}
	 */
	static nombreAleatoire() {
		return Utilities.nombreAleatoire(20, 100);
	}

	/**
	 * retourne le nom du personnage
	 * @returns {string}
	 */
	getNom() {
		return this.#nom;
	}

	/**
	 * retourne le nom complet du personnage (i.e. ajoute le type du personnage devant son nom)
	 * @returns {string}
	 */
	getNomComplet() {
		let nomComplet = '';
		if (this.getType() !== '') {
			nomComplet += this.getType() + " ";
		}
		nomComplet += this.getNom();
		return nomComplet;
	}

	/**
	 * retourne les points de vie du personnage
	 * @returns {number}
	 */
	getVie() {
		return this.#vie;
	}

	/**
	 * retourne le nombre de points d'attaque du personnage
	 * @returns {number}
	 */
	getAttaque() {
		return this.#attaque;
	}

	/**
	 * retourne true si le personnage existe
	 * @returns {boolean}
	 */
	existe() {
		return this.#existe;
	}

	/**
	 * retourne le nombre de points de défense du personnage
	 * @returns {number}
	 */
	getDefense() {
		return this.#defense;
	}

	/**
	 * retourne le type du personnage
	 * @returns {string}
	 */
	getType() {
		return this.#type;
	}

	/**
	 * défini le nom du personnage
	 * @param nom
	 */
	setNom(nom) {
		this.#nom = nom;
	}

	/**
	 * défini le nombre de points de vie du personnage
	 * @param vie
	 */
	setVie(vie) {
		if (vie > 100) {
			vie = 100;
		}
		this.#vie = vie;
		if (this.getVie() <= 0) {
			this.#vie = 0;
			this.setExiste(false);
			Utilities.afficherTexte(
				`%c Le personnage ${this.getNomComplet()} est mort `,
				'background-color:rgb(255,64,64); font-size: 20px; font-weight: bold'
			);
		}
	}

	/**
	 * défini le nombre de points d'attaque du personnage
	 * @param attaque
	 */
	setAttaque(attaque) {
		if (attaque > 100) {
			attaque = 100;
		} else if (attaque < 20) {
			attaque = 20;
		}
		this.#attaque = attaque;
	}

	/**
	 * défini l'existence du personnage
	 * @param existe
	 */
	setExiste(existe) {
		this.#existe = existe;
	}

	/**
	 * défini le nombre de points de défense du personnage
	 * @param defense
	 */
	setDefense(defense) {
		if (defense > 100) {
			defense = 100;
		} else if (defense < 20) {
			defense = 20;
		}
		this.#defense = defense;
	}

	/**
	 * défini le type du personnage
	 * @param type
	 */
	setType(type) {
		this.#type = type;
	}
}

/**
 * Classe représentant un CRS
 */
class CRS extends Personnage {
	/**
	 * Liste des CRS
	 * @type {[]}
	 */
	static #listeCRS = [];

	constructor(nom) {
		super(nom, 'CRS');
		if (this.existe()) {
			this.setVie(this.getVie() - 4);
			this.setDefense(this.getDefense() + 3);
			CRS.#addCRS(this);
		}
	}

	/**
	 * gestion de l'attaque d'un CRS
	 * 1 chance sur 10 de lancer l'attaque 'Canon à eau'
	 * 3 chances sur 10 de lancer l'attaque 'Fumigène'
	 * 6 chances sur 10 de lancer une attaque normale
	 * @param gj
	 */
	attaquer(gj) {
		let chance = Utilities.nombreAleatoire(1, 10);
		if (chance > 6 && chance <= 9) {
			this.fumigene(gj);
		} else if (chance === 10) {
			this.canonAEau(gj);
		} else {
			super.attaquer(gj);
		}
	}

	/**
	 * gestion des dégâts de l'attaque 'Fumigène'
	 * @param gj
	 */
	fumigene(gj) {
		Utilities.updateFicheAttaque(this,gj,'Fumigène');
		Utilities.afficherTexte(
			`%c Lance Fumigène !!! `,
			"color: black; background-color: #ff66ff; font-size: 20px; font-weight: bold"
		);
		gj.setVie(gj.getVie() - 5);
	}

	/**
	 * gestion des dégâts de l'attaque 'Canon à eau'
	 * @param gj
	 */
	canonAEau(gj) {
		Utilities.updateFicheAttaque(this,gj,'Canon à eau');
		Utilities.afficherTexte(
			`%c Canon à eau !!! `,
			"color: black; background-color: #ff66ff; font-size: 20px; font-weight: bold"
		);
		gj.setVie(gj.getVie() - 10);
	}

	setVie(vie) {
		super.setVie(vie);
		if (!this.existe() && this.getNom() !== '') {
			//supprime le CRS de la liste des CRS en cas de mort de celui-ci
			CRS.#suppCRS(this);
		}
	}

	/**
	 * retourne la liste des CRS
	 * @returns {[]}
	 */
	static getListeCRS() {
		return CRS.#listeCRS;
	}

	/**
	 * retourne le nombre de CRS existant
	 * @returns {number}
	 */
	static getNombreCRS() {
		return CRS.getListeCRS().length;
	}

	/**
	 * ajoute un CRS à la liste
	 * @param perso
	 */
	static #addCRS(perso) {
		CRS.getListeCRS().push(perso);
	}

	/**
	 * supprime un CRS de la liste
	 * @param perso
	 */
	static #suppCRS(perso) {
		let i = CRS.getListeCRS().indexOf(perso);
		CRS.getListeCRS().splice(i, 1);
	}

	/**
	 * efface la liste des CRS
	 */
	static resetListeCRS() {
		CRS.#listeCRS = [];
	}
}

/**
 * Classe représentant un Gilet Jaune
 */
class GJ extends Personnage {
	/**
	 * Liste des gilets jaunes
	 * @type {[]}
	 */
	static #listeGJ = [];

	constructor(nom) {
		super(nom, 'Gilet Jaune');
		if (this.existe()) {
			this.setVie(this.getVie() + 6);
			this.setAttaque(this.getAttaque() - 3);
			this.setDefense(this.getDefense() - 3);
			GJ.#addGJ(this);
		}
	}

	/**
	 * gestion de l'attaque d'un gilet jaune
	 * 1 chance sur 10 d'effectuer un mouvement de foule
	 * 3 chances sur 10 de lancer des cailloux
	 * 6 chances sur 10 de faire une attaque normale
	 * @param crs
	 */
	attaquer(crs) {
		let chance = Utilities.nombreAleatoire(1, 10);
		if (chance > 6 && chance <= 9) {
			this.caillassage(crs);
		} else if (chance === 10) {
			this.mouvementDeFoule(crs);
		} else {
			super.attaquer(crs);
		}
	}

	/**
	 * Lance des cailloux sur le crs
	 * @param crs
	 */
	caillassage(crs) {
		Utilities.updateFicheAttaque(this,crs,'Caillassage !!!');
		Utilities.afficherTexte(
			`%c Caillassage !!! `,
			"color: black; background-color: #ff66ff; font-size: 20px; font-weight: bold"
		);
		crs.setVie(crs.getVie() - 5);
	}

	/**
	 * gestion des dégâts du mouvement de foule
	 * @param crs
	 */
	mouvementDeFoule(crs) {
		Utilities.updateFicheAttaque(this,crs,'Mouvement de foule !!!');
		Utilities.afficherTexte(
			`%c Mouvement de foule !!! `,
			"color: black; background-color: #ff66ff; font-size: 20px; font-weight: bold"
		);
		crs.setVie(crs.getVie() - 15);
	}

	setVie(vie) {
		super.setVie(vie);
		if (!this.existe() && this.getNom() !== '') {
			//supprime le Gilet Jaune de la liste des Gilets Jaunes en cas de mort de celui-ci
			GJ.#suppGJ(this);
		}
	}

	/**
	 * retourne la liste des gilets jaunes
	 * @returns {[]}
	 */
	static getListeGJ() {
		return GJ.#listeGJ;
	}

	/**
	 * retourne le nombre de gilets jaunes existant
	 * @returns {number}
	 */
	static getNombreGJ() {
		return GJ.getListeGJ().length;
	}

	/**
	 * ajoute un gilet jaune à la liste
	 * @param perso
	 */
	static #addGJ(perso) {
		GJ.getListeGJ().push(perso);
	}

	/**
	 * supprime un gilet jaune de la liste
	 * @param perso
	 */
	static #suppGJ(perso) {
		let i = GJ.getListeGJ().indexOf(perso);
		GJ.getListeGJ().splice(i, 1);
	}

	/**
	 * efface la liste des gilets jaunes
	 */
	static resetListeGJ() {
		GJ.#listeGJ = [];
	}
}

/**
 * Classe représentant un combat d'arène entre des CRS et des Gilets Jaunes
 */
class Match {
	/**
	 * tableau des joueurs
	 * @type {[]}
	 */
	#players = [];
	/**
	 * nombre de manches
	 * @type {number}
	 */
	#nbrManche = 0;
	/**
	 * type du prochain joueur créé
	 * @type {string}
	 */
	#nextType = 'crs';
	/**
	 * les CRS ont-ils gagnés ?
	 * @type {boolean}
	 */
	#crsWin = false;
	/**
	 * le match est-il terminé ?
	 * @type {boolean}
	 */
	#ended = false;
	/**
	 * taille des équipes
	 */
	#tailleEquipes;

	constructor(tailleEquipes = null) {
		if (tailleEquipes === null) {
			this.#tailleEquipes = parseInt(prompt("Entrez la taille des équipes"));
		} else {
			this.#tailleEquipes = tailleEquipes;
		}
	}

	/**
	 * initialise le match
	 */
	init() {
		/*do {
			for (let i = 0; i < 2; i++) {
				let nom;
				let nomDispo;
				do {
					nom = prompt("Entrez le nom du personnage");
					if(nom !== null && nom !== '') {
						nomDispo = this.#verifieNomPersonnage(nom);
						if (!nomDispo) {
							alert(`le nom ${nom} est deja pris\nveuillez en choisir un autre`);
						}
					} else {
						nomDispo = false;
						Utilities.afficherTexte(
							'%c Vous devez définir un nom pour le personnage ',
							'background-color:red; font-size: 20px; font-weight: bold'
						);
					}
				} while (!nomDispo);
				let perso;
				switch (this.getNextType()) {
					case "crs":
						perso = new CRS(nom);
						this.#setNextType('gj');
						break;
					case "gj":
						perso = new GJ(nom);
						this.#setNextType('crs');
				}
				this.#addPlayer(perso);
			}
		} while (confirm("Ajouter d'autres personnage ?"));*/
		for (let i = 0; i < this.#tailleEquipes * 2; i++) {
			let perso;
			switch (this.getNextType()) {
				case "crs":
					perso = new CRS(CRS.getNombreCRS() + 1);
					this.#setNextType('gj');
					break;
				case "gj":
					perso = new GJ(GJ.getNombreGJ() + 1);
					this.#setNextType('crs');
			}
			this.#addPlayer(perso);
		}
		Utilities.afficherTexte('\n');
	}

	/**
	 * reset le match ainsi que les listes des CRS et des Gilets Jaunes
 	 */
	reset() {
		this.#players = [];
		this.#setCRSWin(false);
		this.#setNextType('crs');
		this.setNbrManche(0);
		this.#ended = false;
		CRS.resetListeCRS();
		GJ.resetListeGJ();
	}

	/**
	 * Vérifie si le nom est disponible
	 * @param nom
	 * @returns {boolean}
	 */
	#verifieNomPersonnage(nom) {
		let nomDispo = true;
		let joueurs = this.getPlayers();
		for (let i = 0; i < joueurs.length; i++) {
			if (joueurs[i].getNom() === nom) {
				nomDispo = false;
				break;
			}
		}
		return nomDispo;
	}

	/**
	 * lance le combat au tour par tour
	 */
	oldrun() {
		let joueurs = this.getPlayers();
		let attaqueFaite = new Array(joueurs.length).fill(false);
		if (joueurs.length % 2 === 0) {
			this.setNbrManche(this.getNbrManche() + 1);
			Utilities.afficherTexte('\n');
			Utilities.afficherTexte(
				`%c Début de la manche n°${this.getNbrManche()} `,
				'background-color: #ffc66d; font-size: 20px; font-weight: bold'
			);
			Utilities.afficherTexte('\n');
			for (let i = 0; i < joueurs.length; i++) {
				let indexAttaquant;
				do {
					indexAttaquant = Math.floor(Math.random() * joueurs.length);
				} while (attaqueFaite[indexAttaquant]);
				if (joueurs[indexAttaquant].existe()) {
					let cibles;
					if (joueurs[indexAttaquant] instanceof CRS) {
						cibles = GJ.getListeGJ().slice(0, GJ.getNombreGJ());
					} else {
						cibles = CRS.getListeCRS().slice(0, CRS.getNombreCRS());
					}
					let defenseFaite = new Array(cibles.length).fill(false);
					for (let j = 0; j < cibles.length; j++) {
						let indexCible;
						do {
							indexCible = Math.floor(Math.random() * cibles.length);
						} while (defenseFaite[indexCible]);
						if (joueurs[indexAttaquant].existe() && cibles[indexCible].existe()) {
							Utilities.afficherTexte(
								`%c Attaque de ${joueurs[indexAttaquant].getNomComplet()} sur ${cibles[indexCible].getNomComplet()} !! `,
								'background-color:cyan; font-size: 20px; font-weight: bold'
							);
							joueurs[indexAttaquant].info();
							cibles[indexCible].info();
							joueurs[indexAttaquant].attaquer(cibles[indexCible]);
							if (joueurs[indexAttaquant].existe()) {
								joueurs[indexAttaquant].info();
							}
							if (cibles[indexCible].existe()) {
								cibles[indexCible].info();
							}
							Utilities.afficherTexte('\n');
						}
						defenseFaite[indexCible] = true;
					}
				}
				attaqueFaite[indexAttaquant] = true;
			}
			Utilities.afficherTexte(
				`%c Fin de la manche n°${this.getNbrManche()} `,
				'background-color: #ffc66d; font-size: 20px; font-weight: bold'
			);
			Utilities.afficherTexte('\n');
			if (CRS.getNombreCRS() > 0 && GJ.getNombreGJ() > 0) {
				//this.run();
			} else {
				Utilities.afficherTexte('\n');
				Utilities.afficherTexte(
					'%c FIN DU MATCH ',
					"color: black; background-color: gold; font-size: 50px; font-weight: bold;"
				);
				Utilities.afficherTexte('\n');
				this.win();
			}
		}
	}

	/**
	 * lance un combat entre un CRS et un Gilet Jaune choisit au hasard
	 */
	run(){
		let joueurs = this.getPlayers();
		if (joueurs.length % 2 === 0) {
			Utilities.afficherTexte('\n');
			let indexAttaquant;
			do{
				//sélectionne un attaquant au hasard jusqu'à en trouver un en vie
				indexAttaquant = Math.floor(Math.random() * joueurs.length);
			}while (!joueurs[indexAttaquant].existe());
			let cibles;
			//récupère la liste des cibles potentielles de l'attaquant
			if (joueurs[indexAttaquant] instanceof CRS) {
				cibles = GJ.getListeGJ().slice(0, GJ.getNombreGJ());
			} else {
				cibles = CRS.getListeCRS().slice(0, CRS.getNombreCRS());
			}
			let indexCible;
			do{
				//sélectionne une cible dans la liste des cibles
				indexCible = Math.floor(Math.random() * cibles.length);
			}while (!cibles[indexCible].existe());
			Utilities.afficherTexte(
				`%c Attaque de ${joueurs[indexAttaquant].getNomComplet()} sur ${cibles[indexCible].getNomComplet()} !! `,
				'background-color:cyan; font-size: 20px; font-weight: bold'
			);
			//affiche les infos des joueurs sélectionnés avant l'attaque
			joueurs[indexAttaquant].info();
			cibles[indexCible].info();
			joueurs[indexAttaquant].attaquer(cibles[indexCible]);
			if (joueurs[indexAttaquant].existe()) {
				//affiche les infos de l'attaquant s'il est toujours en vie
				joueurs[indexAttaquant].info();
			}
			if (cibles[indexCible].existe()) {
				//affiche les infos du défenseur s'il est toujours en vie
				cibles[indexCible].info();
			}
			Utilities.afficherTexte('\n');
			if (CRS.getNombreCRS() > 0 && GJ.getNombreGJ() > 0) {
				//répète le combat tant qu'il reste au moins un joueur en vie dans chaque équipe
				//this.run();
			} else {
				Utilities.afficherTexte('\n');
				Utilities.afficherTexte(
					'%c FIN DU MATCH ',
					"color: black; background-color: gold; font-size: 50px; font-weight: bold;"
				);
				Utilities.afficherTexte('\n');
				this.win();
			}
		}
	}

	/**
	 * affiche les détails de l'équipe ayant remporté le match
	 */
	win() {
		this.#ended = true;
		let winners;
		if (CRS.getNombreCRS() > 0) {
			winners = CRS.getListeCRS();
			this.#setCRSWin(true);
			Utilities.afficherTexte(
				`%c l'équipe des CRS a gagné le match `,
				'background-color:forestgreen; font-size: 30px; font-weight: bold'
			);
		} else {
			winners = GJ.getListeGJ();
			Utilities.afficherTexte(
				`%c l'équipe des Gilets Jaunes a gagné le match `,
				'background-color:forestgreen; font-size: 30px; font-weight: bold'
			);
		}
		for (let i = 0; i < winners.length; i++) {
			this.#affWinner(winners[i]);
		}
	}

	/**
	 * affiche les informations de l'un des vainqueurs
	 * @param winner
	 */
	#affWinner(winner) {
		winner.info();
	}

	/**
	 * retourne true si les CRS ont gagné le match
	 * @returns {boolean}
	 */
	isCRSWin() {
		return this.#crsWin;
	}

	/**
	 * retourne la liste des joueurs inscrits
	 * @returns {[]}
	 */
	getPlayers() {
		return this.#players;
	}

	/**
	 * retourne le nombre de manches effectuées
	 * @returns {number}
	 */
	getNbrManche() {
		return this.#nbrManche;
	}

	/**
	 * retourne le type du prochain joueur à être inscrit
	 * @returns {string}
	 */
	getNextType() {
		return this.#nextType;
	}

	/**
	 * retourne true si le match est terminé
	 * @returns {boolean}
	 */
	isMatchEnded() {
		return this.#ended;
	}

	/**
	 * défini le nombre de manches effectuées
	 * @param nombreManche
	 */
	setNbrManche(nombreManche) {
		this.#nbrManche = nombreManche;
	}

	/**
	 * défini le type du prochain joueur à être inscrit
	 * @param type
	 */
	#setNextType(type) {
		this.#nextType = type;
	}

	/**
	 * défini si les CRS ont gagné le match
	 * @param win
	 */
	#setCRSWin(win) {
		this.#crsWin = win;
	}

	/**
	 * ajoute un joueur à la liste des inscrits
	 * @param perso
	 */
	#addPlayer(perso) {
		this.#players.push(perso);
	}
}

/**
 * Classe de statistiques
 */
class Stat {
	/**
	 * nombre de victoires des CRS
	 * @type {number}
	 */
	winCRS = 0;
	/**
	 * nombre de victoires des Gilets Jaunes
	 * @type {number}
	 */
	winGJ = 0;
	/**
	 * nombre de matchs simulés
	 * @type {number}
	 */
	nbrMatch = 100;

	constructor(nbrMatch) {
		if (nbrMatch !== undefined && nbrMatch !== null) {
			this.nbrMatch = nbrMatch;
		}
	}

	/**
	 * lance le calcul des statistiques
	 */
	run() {
		Utilities.setAffichageTexte(false);
		let match = new Match(40);
		for (let i = 1; i <= this.nbrMatch; i++) {
			match.init();
			match.run();
			if (match.isCRSWin()) {
				this.winCRS++;
			} else {
				this.winGJ++;
			}
			match.reset();
		}
		Utilities.setAffichageTexte(true);
	}

	/**
	 * affiche le résultat des stats
	 */
	affStats() {
		let tauxWinCRS = Math.round(this.winCRS / this.nbrMatch * 10000) / 100;
		let tauxWinGJ = Math.round(this.winGJ / this.nbrMatch * 10000) / 100;
		let result = `Nombre de match : ${this.nbrMatch}\n`;
		result += `% win CRS : ${tauxWinCRS}\n`;
		result += `% win GJ : ${tauxWinGJ}`;
		alert(result);
	}

	/**
	 * récupère le résultat des stats
	 * @returns {Map<string, number>}
	 */
	getStats() {
		return new Map(
			[
				['NombreMatch', this.nbrMatch],
				['WinCRS', this.winCRS],
				['WinGJ', this.winGJ]
			]
		);
	}
}

document.body.setAttribute('onload', 'Utilities.start()');