//Variables globales
const srcImg = "images/"; //source emplacement images BD par défaut (albums inexistants)
const albumDefaultMini = srcImg + "noComicsMini.jpeg"; //emplacement petites images BD par défaut (albums inexistants)
const albumDefault = srcImg + "noComics.jpeg"; //emplacement grandes images BD par défaut (albums inexistants)
const srcAlbumMini = "albumsMini/"; //emplacement petites images BD (albums existants)
var keys = albums.keys(); //sélection des clefs dans fichier "albums.js"
var btnRadioAuthor = document.getElementById('author'); //sélection bouton radio auteur album BD
var btnRadioTitle = document.getElementById('title'); //sélection bouton radio titre album BD
var btnRadioSerie = document.getElementById('serie'); //sélection bouton radio série album BD
var selectListSearch = document.getElementById('searchBd'); //sélection liste recherche album BD
var quantitePanier = document.getElementById('quantite'); //sélection input quantité panier achat


//Chargement et affichage auto albums BD via fonction "showListBd"
window.addEventListener("load", function () { showListBd() });

//Sélection + affichage liste auteurs album BD via fonction "showListBdAuthor"
btnRadioAuthor.addEventListener("click", function () { showListBdAuthor() });

//Sélection + affichage liste titres album BD via fonction "showListBdTitle"
btnRadioTitle.checked = true; //sélection bouton radio "titre" par défaut
btnRadioTitle.addEventListener("click", function () { showListBdTitle() });

//Sélection + affichage liste séries album BD via fonction "showListBdSerie"
btnRadioSerie.addEventListener("click", function () { showListBdSerie() });


//Création liste albums BD à partir fichier data "albums, series, auteurs"
function showListBd() {
	//Récupération liste albums BD
	albums.forEach(album => {
		//Sélection fichier data "séries et auteurs"
		serie = series.get(album.idSerie); //sélection série BD dans fichier "series.js"
		auteur = auteurs.get(album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
		// console.log(album.titre + "\n Série : " + serie.nom + "\n N° album : " + album.numero + "\n Auteur : " + auteur.nom + "\n Prix : " + album.prix + "€"); //affiche dev

		//Variables locales
		var key = keys.next().value; //sélection numéro clef dans fichier "albums.js"
		var elementListBd = document.getElementById('comicsBD'); //sélection id balise "div" HTML "Recherche BD"
		var bdCard = document.createElement('div'); //création balise "div" pour card album BD
		const nomPhotoBd = serie.nom + "-" + album.numero + "-" + album.titre; //récupération nom fichier photo album BD
		var nomImgBd = srcAlbumMini + nomPhotoBd; //sélection nom fichier petites images BD (albums existants)
		var imgsBd = document.getElementsByClassName('imgBd'); //sélection class balise "img" 

		//Création attribu class "card" pour album BD
		bdCard.setAttribute('class', 'card');

		//Insertion images dans balise "div" class "card"
		//si clef album existant alors
		if (key != false) {
			src = nomImgBd + ".jpg"; //attribution petite image BD associée
		}
		//pour images BD albums non existant alors 
		for (i = 0; i < imgsBd.length; i++) {
			//si erreur images alors appel fonction "prbImg"
			imgsBd[i].addEventListener("error", function () { prbImg(this) });
		}

		//Ecriture contenu textuel HTML dans balise "div" class "card"
		bdCard.innerHTML =
			'<img class="imgBd btn" id="img-' + key + '"src="' + src + '"/>' +
			'<ul>' +
			'<li><h3 class="card-body bdTitleInfo"><strong>' + album.titre + '</strong></h3></li>' +
			'<li><h6 class="card-body bdTitleInfo"><strong>' + "Série : " + "&nbsp;" + '</strong>' + serie.nom + '</h6></li>' +
			'<li><h6 class="card-body bdTitleInfo"><strong>' + "N° album : " + "&nbsp;" + '</strong>' + album.numero + '</h6></li>' +
			'<li><h6 class="card-body bdTitleInfo"><strong>' + "Auteur : " + "&nbsp;" + '</strong>' + auteur.nom + '</h6></li>' +
			'<li><h6 class="card-body bdTitleInfo"><strong>' + "Prix : " + "&nbsp;" + '</strong>' + album.prix + "€" + '</h6></li>' +
			'</ul>' +
			'<button id="btnAjoutBD-' + key + '" class="btnAjoutPanier btn">Ajoutez au panier</button>';

		//Ajout contenu textuel HTML dans balise "div" class "card"
		elementListBd.appendChild(bdCard);

		//Chargement + affichage auto liste auteurs, titres, séries album BD via fonction "showAlbumsBd"
		selectListSearch.addEventListener("click", function () { showAlbumsBd(key, auteur, serie) });

		//Ajout album BD dans panier achat via fonction "ajoutPanier"
		document.getElementById('btnAjoutBD-' + key).addEventListener("click", function () { ajoutPanier(key, auteur, serie) });

		//affiche fenêtre Modal via fonction "afficheModal"
		document.getElementById('img-' + key).addEventListener("click", function () { afficheModal(key, auteur, serie) });
	});
}


//affiche Modal BD
function afficheModal(_key, _auteur, _serie) {
	_album = albums.get(_key); //sélection album par rapport numéro clef dans fichier "albums.js"
	_serie = series.get(_album.idSerie); //sélection serie BD dans fichier "series.js"
	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
	// console.log(_key);
	// console.log(_auteur.nom);
	// console.log(_serie.nom);

	//Ecriture contenu textuel HTML dans balise "h4" Modal
	document.getElementById('titleModal').innerHTML = '<strong>' + _album.titre + '</strong>';

	//Ecriture contenu textuel HTML dans balise "p" Modal
	document.getElementById('infosModal').innerHTML =
		'<strong>' + "Série : " + "&nbsp;" + '</strong>' + _serie.nom + '<br>' +
		'<strong>' + "N° album : " + "&nbsp;" + '</strong>' + _album.numero + '<br>' +
		'<strong>' + "Auteur : " + "&nbsp;" + '</strong>' + _auteur.nom + '<br>' +
		'<strong>' + "Prix : " + "&nbsp;" + '</strong>' + _album.prix + "€";

	//affiche Modal
	$('#myModal').modal("show");
}


// Affichage petites images BD par défaut (albums inexistants)
function prbImg(_imgDefault) {
	_imgDefault.src = albumDefaultMini;
}


//Affichage liste titres album BD à partir fichier data "albums"
function showListBdTitle() {
	// console.log('btn titre activé');
	btnRadioAuthor.checked = false; //désélection bouton radio "auteur"
	btnRadioSerie.checked = false; //désélection bouton radio "série"

	//Vide et ajoute contenu textuel HTML dans select
	selectListSearch.innerHTML = "";
	selectListSearch.innerHTML = '<option value="selection">Sélectionnez</option>';

	//Chargement + affichage auto liste auteurs, titres, séries album BD via fonction "showAlbumsBd"
	selectListSearch.addEventListener("load", function () { showAlbumsBd(_key, auteur, _serie) });
}


//Affichage liste auteurs album BD à partir fichier data "albums, auteurs"
function showListBdAuthor() {
	// console.log('btn auteur activé');
	btnRadioTitle.checked = false; //désélection bouton radio "titre"
	btnRadioSerie.checked = false; //désélection bouton radio "série"

	//Vide et ajoute contenu textuel HTML dans select
	selectListSearch.innerHTML = "";
	selectListSearch.innerHTML = '<option value="selection">Sélectionnez</option>';

	//Chargement + affichage auto liste auteurs, titres, séries album BD via fonction "showAlbumsBd"
	selectListSearch.addEventListener("load", function () { showAlbumsBd(_key, _auteur, _serie) });
}


//Affichage liste séries album BD à partir fichier data "albums, series"
function showListBdSerie() {
	// console.log('btn série activé');
	btnRadioTitle.checked = false; //désélection bouton radio "titre"
	btnRadioAuthor.checked = false; //désélection bouton radio "auteur"

	//Vide et ajoute contenu textuel HTML dans select
	selectListSearch.innerHTML = "";
	selectListSearch.innerHTML = '<option value="selection">Sélectionnez</option>';

	//Chargement + affichage auto liste auteurs album BD via fonction "showAlbumsAutor"
	selectListSearch.addEventListener("load", function () { showAlbumsBd(_key, _auteur, _serie) });
}


//Création liste auteurs, titres, séries album BD à partir fichier data "albums, auteurs, series"
function showAlbumsBd(_key, _auteur, _serie) {
	//Sélection fichier data "albums, auteurs, series"
	_album = albums.get(_key); //sélection album par rapport numéro clef dans fichier "albums.js"
	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
	_serie = series.get(_album.idSerie); //sélection serie BD dans fichier "series.js"

	//si sélection balise "select" alors
	switch (selectListSearch != false) {
		//si sélection bouton radio "série" alors
		case btnRadioSerie.checked == true:
			// console.log(_serie.nom);

			//Variable locale
			var optionSelect = document.createElement('option'); //création balise "option" pour select list

			//Création attribu value "serie-" pour select list
			optionSelect.setAttribute('value', 'serie-' + _album.idSerie);

			//Ecriture contenu textuel HTML dans balise "option" value "serie-"
			optionSelect.innerHTML = _serie.nom;

			//Ajout contenu textuel HTML dans balise "option" value "serie-"
			selectListSearch.appendChild(optionSelect);

			break; //fin sélection

		//si sélection bouton radio "titre" alors
		case btnRadioTitle.checked == true:
			// console.log(_key);

			//Variable locale
			var optionSelect = document.createElement('option'); //création balise "option" pour select list

			//Création attribu value "titre-" pour select list
			optionSelect.setAttribute('value', 'titre-' + _key);

			//Ecriture contenu textuel HTML dans balise "option" value "titre-"
			optionSelect.innerHTML = _album.titre;

			//Ajout contenu textuel HTML dans balise "option" value "titre-"
			selectListSearch.appendChild(optionSelect);

			break; //fin sélection

		//si sélection bouton radio "auteur" alors
		case btnRadioAuthor.checked == true:
			// console.log(_auteur.nom);

			//Variable locale
			var optionSelect = document.createElement('option'); //création balise "option" pour select list

			//Création attribu value "Auteur-" pour select list
			optionSelect.setAttribute('value', 'auteur-' + _album.idAuteur);

			//Ecriture contenu textuel HTML dans balise "option" value "Auteur-"
			optionSelect.innerHTML = _auteur.nom;

			//Ajout contenu textuel HTML dans balise "option" value "Auteur-"
			selectListSearch.appendChild(optionSelect);

			break; //fin sélection

		//si pas de sélection alors "défault"
		default:
			break; //fin sélection
	}
}


//ajout album BD panier
function ajoutPanier(_key, _auteur, _serie) {
	//Sélection fichier data "albums, auteurs, series"
	_album = albums.get(_key); //sélection album par rapport numéro clef dans fichier "albums.js"
	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
	_serie = series.get(_album.idSerie); //sélection serie BD dans fichier "series.js"
	// console.log(_key);
	// console.log(_auteur.nom);
	// console.log(_serie.nom);

	//Variables locales
	var elementListComicsBd = document.getElementById('listPaniercomicsBD'); //sélection id balise "div" HTML "Liste et panier achats"
	var bdCardPanier = document.createElement('div'); //création balise "div" pour card album BD
	const nomPhotoBd = _serie.nom + "-" + _album.numero + "-" + _album.titre; //récupération nom fichier photo album BD
	var nomImgBd = srcAlbumMini + nomPhotoBd; //sélection nom fichier petites images BD (albums existants)
	var imgsBd = document.getElementsByClassName('imgBd'); //sélection class balise "img" 

	//Création attribu class "card" pour album BD
	bdCardPanier.setAttribute('class', 'card');

	//Insertion images dans balise "div" class "card"
	//si clef album existant alors
	if (_key != false) {
		src = nomImgBd + ".jpg"; //attribution petite image BD associée
	}
	//pour images BD albums non existant alors 
	for (i = 0; i < imgsBd.length; i++) {
		//si erreur images alors appel fonction "prbImg"
		imgsBd[i].addEventListener("error", function () { prbImg(this) });
	}

	//Ecriture contenu textuel HTML dans balise "div" class "card"
	bdCardPanier.innerHTML =
		'<img class="imgBd btn" id="img-' + _key + '"src="' + src + '"/>' +
		'<ul>' +
		'<li><h3 class="card-body bdTitleInfo"><strong>' + _album.titre + '</strong></h3></li>' +
		'<li><h6 class="card-body bdTitleInfo"><strong>' + "Prix : " + "&nbsp;" + '</strong>' + _album.prix + "€" + '</h6></li>' +
		'</ul>' +
		'<button id="btnAjoutBd-' + _key + '" class="btnPlusPanier btn">+</button>' +
		'<input type="text" id="quantiteBd-" readonly value="0">' +
		'<button id="btnMoinsBd-' + _key + '" class="btnMoinsPanier btn">-</button>';

	//Ajout contenu textuel HTML dans balise "div" class "card"
	elementListComicsBd.appendChild(bdCardPanier);
}