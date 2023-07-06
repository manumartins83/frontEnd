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
var titreListPanierAchat = document.getElementById('panierList'); //sélection titre liste panier achat BD
let a = 0; //initialisation quantité départ input panier achat




var optionSelectSearch = document.getElementById('selection'); //sélection balise "option" liste recherche album BD









//Chargement et affichage auto albums BD via fonction "showListBd"
window.addEventListener("load", function () { showAlbumsListBd() });

//Sélection + affichage liste auteurs album BD via fonction "showListBdAuthor"
btnRadioAuthor.addEventListener("click", function () { showListBdAuthor() });

//Sélection + affichage liste titres album BD via fonction "showListBdTitle"
btnRadioTitle.checked = true; //sélection bouton radio "titre" par défaut
btnRadioTitle.addEventListener("click", function () { showListBdTitle() });

//Sélection + affichage liste séries album BD via fonction "showListBdSerie"
btnRadioSerie.addEventListener("click", function () { showListBdSerie() });


//Création liste albums BD à partir fichier data "albums, series, auteurs"
function showAlbumsListBd() {
	//Retrait affichage titre liste panier achat 
	titreListPanierAchat.style.display = "none";

	//Récupération liste albums BD
	albums.forEach(album => {
		//Sélection fichier data "séries et auteurs"
		serie = series.get(album.idSerie); //sélection série BD dans fichier "series.js"
		auteur = auteurs.get(album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
		// console.log(album.titre + "\n Série : " + serie.nom + "\n N° album : " + album.numero + "\n Auteur : " + auteur.nom + "\n Prix : " + album.prix + "€"); //affiche dev

		//Variables locales
		var key = keys.next().value; //sélection numéro clef dans fichier "albums.js"
		// console.log(key); //affiche dev
		var elementListBd = document.getElementById('comicsBD'); //sélection id balise "div" HTML "Recherche BD"
		var bdCard = document.createElement('div'); //création balise "div" pour card album BD
		const nomPhotoBd = serie.nom + "-" + album.numero + "-" + album.titre; //récupération nom fichier photo album BD
		// Utilisation d'une expression régulière pour supprimer 
		// les caractères non autorisés dans les noms de fichiers : '!?.":$
		// nomPhotoBd = nomPhotoBd.replace(/'|!|\?|\.|"|:|\$/g, "");
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
			'<button id="btnAjoutPanierBd-' + key + '" class="btnAjoutPanier btn">Ajoutez au panier</button>';

		//Ajout contenu textuel HTML dans balise "div" class "card"
		elementListBd.appendChild(bdCard);



		//Affichage ouvrage par auteur via fonction "chargeByAuthor"
		// document.getElementById('titre-' + key).addEventListener("change",function () {showAlbumsListBd()});




		// 		selectListSearch.addEventListener("change", function () { 
		// 	if (selectListSearch.options[selectListSearch.selectedIndex].innerText != "Sélectionnez") {

		// 		// console.log("pas super");


		// 		//Affichage ouvrage par auteur via fonction "chargeByAuthor"
		// 		document.getElementById('titre-' + key).addEventListener("change",function () {showAlbumsListBd()});


		// 			//Affichage ouvrage par auteur via fonction "chargeByAuthor"
		// 		// document.value('auteur-' + _album.idAuteur).addEventListener("change", function () { showAlbumsListBd() });



		// 		//Affichage ouvrage par auteur via fonction "chargeByAuthor"
		// 		// document.value('serie-' + _album.idSerie).addEventListener("load", function () { showAlbumsListBd() });
		// 	} else {

		// 		console.log("super");

		// 		//Ajout contenu textuel HTML dans balise "div" class "card"
		// 		elementListBd.appendChild(bdCard);
		// 	}
		// });






		//Chargement + affichage auto liste auteurs, titres, séries album BD via fonction "showAlbumsBd"
		selectListSearch.addEventListener("click", function () { showListBd(key, auteur, serie) });

		//affiche fenêtre Modal via fonction "afficheModal"
		document.getElementById('img-' + key).addEventListener("click", function () { afficheModal(key, auteur, serie) });







		//si                   alors
		if (document.getElementById('btnAjoutPanierBd-' + key) != false) {

			//si   alors
			if (document.getElementById('btnPlusBd-' + key) != false) {

				//Ajout album BD dans panier achat via fonction "ajoutPanier"
				document.getElementById('btnAjoutPanierBd-' + key).addEventListener("click", function () { ajoutPanier(key, auteur, serie) });

				//Affiche augmentation quantité panier via click bouton "ajout panier"
				document.getElementById('btnAjoutPanierBd-' + key).addEventListener("click", () => {

					// Variable locale
					var quantiteBd = document.getElementById('quantiteBd-' + key); //sélection input quantité BD card associée

					a++; //incrémentation quantité input panier achat de +1

					//si quantité <10 alors mise en forme chiffrage au format "xx" sinon "x"
					a = (a < 10) ? "0" + a : a;
					// console.log(a); //affiche dev

					//Ajout contenu textuel quantité dans input quantite panier
					quantitePanier.value = a;

					//Ajout contenu textuel quantité dans input BD
					quantiteBd.value = a;
				});
			}
			//sinon
			else {
				//Ajout album BD dans panier achat via fonction "ajoutPanier"
				document.getElementById('btnAjoutPanierBd-' + key).addEventListener("click", function () { ajoutPanier(key, auteur, serie) });

				//Affiche augmentation quantité panier via click bouton "ajout panier"
				document.getElementById('btnAjoutPanierBd-' + key).addEventListener("click", () => {

					// Variable locale
					var quantiteBd = document.getElementById('quantiteBd-' + key); //sélection input quantité BD card associée

					a++; //incrémentation quantité input panier achat de +1

					//si quantité <10 alors mise en forme chiffrage au format "xx" sinon "x"
					a = (a < 10) ? "0" + a : a;
					// console.log(a); //affiche dev

					//Ajout contenu textuel quantité dans input panier
					quantitePanier.value = a;

					//Ajout contenu textuel quantité dans input BD
					quantiteBd.value = a;
				});
			}
		}














		// //Affiche augmentation quantité BD via click bouton "+"
		// document.getElementById('btnMoinsBd-' + key).addEventListener("click", () => {
		// 	a--; //décrémentation quantité input BD de -1

		// 	a = (a < 10) ? "0" + a : a; //si quantité BD <10 alors mise en forme chiffrage au format "xx" sinon "x"
		// 	// console.log(a); //affiche dev

		// 	//Retrait contenu textuel quantité dans input "quantiteBd"
		// 	quantiteBd.value = a;
		// });


	});
}






//affiche Modal BD
function afficheModal(_key, _auteur, _serie) {
	_album = albums.get(_key); //sélection album par rapport numéro clef dans fichier "albums.js"
	_serie = series.get(_album.idSerie); //sélection serie BD dans fichier "series.js"
	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
	// console.log(_key); //affiche dev
	// console.log(_auteur.nom); //affiche dev
	// console.log(_serie.nom); //affiche dev

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
	// console.log('btn titre activé'); //affiche dev
	btnRadioAuthor.checked = false; //désélection bouton radio "auteur"
	btnRadioSerie.checked = false; //désélection bouton radio "série"

	//Vide et ajoute contenu textuel HTML dans select
	selectListSearch.innerHTML = "";
	selectListSearch.innerHTML = '<option id="selection" value="selection">Sélectionnez</option>';

	//Chargement + affichage auto liste auteurs, titres, séries album BD via fonction "showAlbumsBd"
	// selectListSearch.addEventListener("load", function () { showListBd(_key, auteur, _serie) });
}


//Affichage liste auteurs album BD à partir fichier data "albums, auteurs"
function showListBdAuthor() {
	// console.log('btn auteur activé'); //affiche dev
	btnRadioTitle.checked = false; //désélection bouton radio "titre"
	btnRadioSerie.checked = false; //désélection bouton radio "série"

	//Vide et ajoute contenu textuel HTML dans select
	selectListSearch.innerHTML = "";
	selectListSearch.innerHTML = '<option id="selection" value="selection">Sélectionnez</option>';

	//Chargement + affichage auto liste auteurs, titres, séries album BD via fonction "showAlbumsBd"
	// selectListSearch.addEventListener("load", function () { showAListBd(_key, _auteur, _serie) });
}


//Affichage liste séries album BD à partir fichier data "albums, series"
function showListBdSerie() {
	// console.log('btn série activé'); //affcihe dev
	btnRadioTitle.checked = false; //désélection bouton radio "titre"
	btnRadioAuthor.checked = false; //désélection bouton radio "auteur"

	//Vide et ajoute contenu textuel HTML dans select
	selectListSearch.innerHTML = "";
	selectListSearch.innerHTML = '<option id="selection" value="selection">Sélectionnez</option>';

	//Chargement + affichage auto liste auteurs album BD via fonction "showAlbumsAutor"
	// selectListSearch.addEventListener("load", function () { showListBd(_key, _auteur, _serie) });
}


//Création liste auteurs, titres, séries album BD à partir fichier data "albums, auteurs, series"
function showListBd(_key, _auteur, _serie) {
	//Sélection fichier data "albums, auteurs, series"
	_album = albums.get(_key); //sélection album par rapport numéro clef dans fichier "albums.js"
	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
	_serie = series.get(_album.idSerie); //sélection serie BD dans fichier "series.js"

	//si sélection balise "select" alors
	switch (selectListSearch != false) {
		//si sélection bouton radio "série" alors
		case btnRadioSerie.checked == true:
			// console.log(_serie.nom); //affiche dev

			//Variable locale
			var optionSelect = document.createElement('option'); //création balise "option" pour select list

			//Création attribu id + value "serie-" pour select list
			optionSelect.setAttribute('value', 'serie-' + _album.idSerie);
			optionSelect.setAttribute('id', 'serie-' + _album.idSerie);

			//Ecriture contenu textuel HTML dans balise "option" value "serie-"
			optionSelect.innerHTML = _serie.nom;

			//Ajout contenu textuel HTML dans balise "option" value "serie-"
			selectListSearch.appendChild(optionSelect);

			break; //fin sélection

		//si sélection bouton radio "titre" alors
		case btnRadioTitle.checked == true:
			// console.log(_key); //affiche dev

			//Variable locale
			var optionSelect = document.createElement('option'); //création balise "option" pour select list

			//Création attribu id + value "titre-" pour select list
			optionSelect.setAttribute('value', 'titre-' + _key);
			optionSelect.setAttribute('id', 'titre-' + _key);

			//Ecriture contenu textuel HTML dans balise "option" value "titre-"
			optionSelect.innerHTML = _album.titre;

			//Ajout contenu textuel HTML dans balise "option" value "titre-"
			selectListSearch.appendChild(optionSelect);

			break; //fin sélection

		//si sélection bouton radio "auteur" alors
		case btnRadioAuthor.checked == true:
			// console.log(_auteur.nom); //affiche dev

			//Variable locale
			var optionSelect = document.createElement('option'); //création balise "option" pour select list

			//Création attribu id + value "Auteur-" pour select list
			optionSelect.setAttribute('value', 'auteur-' + _album.idAuteur);
			optionSelect.setAttribute('id', 'auteur-' + _album.idAuteur);

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
	//Retrait affichage titre liste panier achat 
	titreListPanierAchat.style.display = "flex";

	//Sélection fichier data "albums, auteurs, series"
	_album = albums.get(_key); //sélection album par rapport numéro clef dans fichier "albums.js"
	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
	_serie = series.get(_album.idSerie); //sélection serie BD dans fichier "series.js"

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
		'<button id="btnMoinsBd-' + _key + '" class="btnMoinsPanier btn">-</button>' +
		'<input type="text" id="quantiteBd-' + _key + '" readonly value="0">' +
		'<button id="btnPlusBd-' + _key + '" class="btnPlusPanier btn">+</button>';

	//Ajout contenu textuel HTML dans balise "div" class "card"
	elementListComicsBd.appendChild(bdCardPanier);

	//affiche fenêtre Modal via fonction "afficheModal"
	document.getElementById('img-' + _key).addEventListener("click", function () { afficheModal(_key, _auteur, _serie) });
}











// //Affichage ouvrage par auteur
// function chargeByAuthor(_key,_auteur,_serie) {
// 	//Sélection fichier data "albums, auteurs, series"
// 	_album = albums.get(_key); //sélection album par rapport numéro clef dans fichier "albums.js"
// 	_auteur = auteurs.get(_album.idAuteur); //sélection auteur BD dans fichier "auteurs.js"
// 	_serie = series.get(_album.idSerie); //sélection serie BD dans fichier "series.js"

// 	// var elementCategorie = document.getElementById('categoriesList'); //'variable locale' sélection liste cathégories
// 	// var elementAuthor = document.getElementById('authorsList'); //'variable locale' sélection liste auteurs
// 	var choiceAuthors = selectListSearch.options[selectListSearch.selectedIndex].innerText; //'variable locale' sélection contenu liste
// 	var booksListByAuthors = new Array(); //'variable locale' tableau liste ouvrages par auteurs

// 	//sélectionne contenu vide
// 	// elementCategorie.options[elementCategorie.selectedIndex].innerText = "";

// 	//si contenu liste auteurs vide alors
// 	if (choiceAuthors == "") {
// 		showAlbumsListBd(_album.idAuteur); //sélectionne ouvrages via fonction "showBooks"
// 	}
// 	//sinon si contenu liste auteurs pas vide alors
// 	else {
// 		//pour ouvrages allant de 0 à yy alors
// 		for (var y = 0; y < _album.idAuteur.length; y++) {
// 			var bookByAuthor = _album.idAuteur[y]; //'variable locale' tableau liste ouvrages par auteur
// 			console.log(bookByAuthor);
// 			//si présence ouvrages auteur alors
// 			if (bookByAuthor_auteur.nom.indexOf(choiceAuthors) != -1) {
// 				booksListByAuthors.push(bookByAuthor); //incrémente ouvrages par auteur dans tableau
// 			}
// 		}
// 	}

// 	//tri alphabétiquement ouvrages de la liste
// 	booksListByAuthors.sort();

// 	//sélectionne ouvrages triés via fonction "showBooks"
// 	showAlbumsListBd(booksListByAuthors);
// }