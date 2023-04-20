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


//Chargement et affichage auto albums BD via fonction "showListBd"
window.addEventListener("load", function () { showListBd() });

//Sélection + affichage liste auteurs album BD via fonction "showListBdAuthor"
btnRadioAuthor.addEventListener("click", function () { showListBdAuthor() });

//Sélection + affichage liste titres album BD via fonction "showListBdTitle"
btnRadioTitle.checked = true; //sélection bouton radio titre par défaut
btnRadioTitle.addEventListener("click", function () { showListBdTitle() });

//Sélection + affichage liste séries album BD via fonction "showListBdSerie"
btnRadioSerie.addEventListener("click", function () { showListBdSerie() });





//Ajout album BD dans panier achat via fonction "ajoutPanier"
// document.getElementById('btnAjoutBD-').addEventListener("click", function () { ajoutPanier() });






// function getByValue(map, searchValue) {
// 	for (let [key, value] of map.entries()) {
// 		if (value === searchValue)
// 			return key;
// 	}
// }







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
		if (key != "") {
			src = nomImgBd + ".jpg"; //attribution petite image BD associée
		}


		//Ecriture contenu textuel HTML dans balise "div" class "card"
		bdCard.innerHTML =
			'<img class="imgBd" id="img-' + key + '"src="' + src + '"/>' +
			'<ul>' +
			'<li><h3 class="card-body bdTitleInfo"><strong>' + album.titre + '</strong></h3></li>' +
			'<li><h6 class="card-body bdTitleInfo"><strong>' + "Série : " + "&nbsp;" + '</strong>' + serie.nom + '</h6></li>' +
			'<li><h6 class="card-body bdTitleInfo"><strong>' + "N° album : " + "&nbsp;" + '</strong>' + album.numero + '</h6></li>' +
			'<li><h6 class="card-body bdTitleInfo"><strong>' + "Auteur : " + "&nbsp;" + '</strong>' + auteur.nom + '</h6></li>' +
			'<li><h6 class="card-body bdTitleInfo"><strong>' + "Prix : " + "&nbsp;" + '</strong>' + album.prix + "€" + '</h6></li>' +
			'</ul>' +
			'<button id="btnAjoutBD-' + key + '" class="btnAjoutPanier">Ajoutez au panier</button>';

		//Ajout contenu textuel HTML dans balise "div" class "card"
		elementListBd.appendChild(bdCard);


		//pour images BD albums non existant alors 
		for (i = 0; i < imgsBd.length; i++) {
			//si erreur images alors appel fonction "prbImg"
			imgsBd[i].addEventListener("error", prbImg());
		}

		//Chargement + affichage auto liste auteurs album BD via fonction "showAlbumsAutor"
		selectListSearch.addEventListener("load", showAlbumsAutor(key, auteur));







		//affiche fenêtre Modal via fonction "afficheModal"
		//supprime fenêtre Modal via fonction "afficheModal"
		// document.getElementById("id").addEventListener("mouseout", deleteModal());
		// document.getElementById('img-' + key).addEventListener("click", afficheModal(key));




	});
}




// //affiche modal BD
// function afficheModal(_key) {
// 	_album = albums.get(_key); //sélection numéro clef du fichier "albums.js"
// 	_serie = series.get(_album.idSerie); //sélection série BD du fichier "series.js"
// 	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD du fichier "auteurs.js"

// 	// console.log(_key);

// document.getElementById('myModal').modal("show");

// }










//Affichage petites images BD par défaut (albums inexistants)
function prbImg() {
	src = albumDefaultMini;
}


//Affichage liste auteurs album BD à partir fichier data "albums, auteurs"
function showListBdAuthor() {
	// console.log('btn auteur activé');
	btnRadioTitle.checked = false;
	btnRadioSerie.checked = false;


	selectListSearch = true;

	// selectListSearch.addEventListener("load", function () { showAlbumsAutor(_key) });
}

function showAlbumsAutor(_key, _auteur) {
	//Sélection fichier data "albums et auteurs"
	_album = albums.get(_key); //sélection album par rapport numéro clef dans fichier "albums.js"
	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
	// console.log(_key);
	// console.log(_auteur.nom);

	//Variable locale
	var optionSelect = document.createElement('option'); //création balise "option" pour select list

	//Création attribu value "Auteur-" pour select list
	optionSelect.setAttribute('value', 'Auteur-' + _album.idAuteur);

	//Ecriture contenu textuel HTML dans balise "option" value "Auteur-"
	optionSelect.innerHTML = _auteur.nom;

	//Ajout contenu textuel HTML dans balise "option" value "Auteur-"
	selectListSearch.appendChild(optionSelect);
}


//Affichage liste séries album BD à partir fichier data "albums, series"
function showListBdSerie() {
	// console.log('btn série activé');
	btnRadioTitle.checked = false;
	btnRadioAuthor.checked = false;



}


//Affichage liste titres album BD à partir fichier data "albums"
function showListBdTitle() {
	// console.log('btn titre activé');
	btnRadioAuthor.checked = false;
	btnRadioSerie.checked = false;



}














//ajout album BD panier
function ajoutPanier() {
	console.log("ca marche");

	// albums.forEach(album => {
	// 	serie = series.get(album.idSerie); //série BD
	// 	auteur = auteurs.get(album.idAuteur); //Auteur BD

	// 	var elementListAchatBd = document.getElementById('listPaniercomicsBD'); //'variable locale' sélection "div" albums BD
	// 	var bdAchatCard = document.createElement('div'); //'variable locale' création card image BD
	// 	bdAchatCard.setAttribute('class', 'card'); //création attribu class "card et mb-4"

	// 	//Images Card
	// 	//si image BD inexistante ou non définie alors
	// 	const nomPhotoBD = serie.nom + "-" + album.numero + "-" + album.titre; // nom fichiers photos albums BD
	// 	var imgBD = srcAlbumMini + nomPhotoBD; // source fichiers photos albums BD

	// 	//si album pas de photo alors
	// 	if (album == undefined || album == null) {
	// 		src = albumDefaultMini; //attribution image par défaut
	// 	}
	// 	//sinon
	// 	else {
	// 		src = imgBD + ".jpg"; //attribution image BD associée
	// 	}

	// 	//Ajout contenu textuel HTML dans Card
	// 	bdAchatCard.innerHTML =
	// 		'<img class="imgBD" src="' + src + '"/>' +
	// 		'<ul>' +
	// 		'<li><h3 class="card-body bdTitleInfo">' + album.titre + '</h3></li>' +
	// 		'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Quantité : " + "&nbsp;" + '</strong>' + "quantité calcul" + '</h6></li>' +
	// 		'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Prix : " + "&nbsp;" + '</strong>' + album.prix + "€" + '</h6></li>' +
	// 		'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Total : " + "&nbsp;" + '</strong>' + "tarif calcul" + "€" + '</h6></li>' +
	// 		'</ul>';

	// 	//Ajout contenu Card dans HTML
	// 	elementListAchatBd.appendChild(bdAchatCard); //ajout contenu cartes ouvrages dans fichier HTML
	// });


}





















