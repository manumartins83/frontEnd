// -Variables globales-
const srcImg = "images/"; //emplacement des images BD existantes
const albumDefaultMini = srcImg + "noComicsMini.jpeg"; //emplacement des images par défaut des albums en petit
const albumDefault = srcImg + "noComics.jpeg"; //emplacement des images par défaut des albums en grand
const srcAlbumMini = "albumsMini/"; //emplacement des images des albums en petit
const srcAlbum = "albums/"; //emplacement des images des albums en grand
var keys = albums.keys(); //sélection numéros clefs du fichier "albums.js"



// -Programme "Liste des BD" (JQUERY)-
jQuery(document).ready(function ($) {

	// Affichage des BD
	var txtSerie = document.getElementById("serie");
	var txtNumero = document.getElementById("numero");
	var txtTitre = document.getElementById("titre");
	var txtAuteur = document.getElementById("auteur");
	var txtPrix = document.getElementById("prix");
	var imgAlbum = document.getElementById("album");
	var imgAlbumMini = document.getElementById("albumMini");
	

	imgAlbum.addEventListener("error", function () {
		prbImg(this)
	});

	imgAlbumMini.addEventListener("error", function () {
		prbImg(this)
	});

	var id = document.getElementById("id");
	id.addEventListener("change", function () {
		getAlbum(this)
	});


	


	/**
	 * Récupération de l'album par son id et appel de 
	 * la fonction d'affichage
	 * 
	 * @param {number} num 
	 */
	function getAlbum(num) {

		var album = albums.get(num.value);

		if (album === undefined) {
			txtSerie.value = "";
			txtNumero.value = "";
			txtTitre.value = "";
			txtAuteur.value = "";
			txtPrix.value = 0;

			afficheAlbums($("#albumMini"), $("#album"), albumDefaultMini, albumDefault);

		} else {

			var serie = series.get(album.idSerie);
			var auteur = auteurs.get(album.idAuteur);

			txtSerie.value = serie.nom;
			txtNumero.value = album.numero;
			txtTitre.value = album.titre;
			txtAuteur.value = auteur.nom;
			txtPrix.value = album.prix;

			var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

			// Utilisation d'une expression régulière pour supprimer 
			// les caractères non autorisés dans les noms de fichiers : '!?.":$
			nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

			afficheAlbums(
				$("#albumMini"),
				$("#album"),
				srcAlbumMini + nomFic + ".jpg",
				srcAlbum + nomFic + ".jpg"
			);
		}
	}

	/**
	 * Affichage des images, les effets sont chainés et traités
	 * en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
	 * pour éviter l'accumulation d'effets si défilement rapide des albums.
	 * 
	 * @param {object jQuery} $albumMini 
	 * @param {object jQuery} $album 
	 * @param {string} nomFic 
	 * @param {string} nomFicBig 
	 */
	function afficheAlbums($albumMini, $album, nomFicMini, nomFic) {
		$album.stop(true, true).clearQueue().fadeOut(100, function () {
			$album.attr('src', nomFic);
			$albumMini.stop(true, true).clearQueue().fadeOut(150, function () {
				$albumMini.attr('src', nomFicMini);
				$albumMini.slideDown(200, function () {
					$album.slideDown(200);
				});
			})
		});
	}

	/**
	 * Affichage de l'image par défaut si le chargement de l'image de l'album
	 * ne s'est pas bien passé
	 * 
	 * @param {object HTML} element 
	 */
	function prbImg(element) {
		// console.log(element);
		if (element.id === "albumMini")
			element.src = albumDefaultMini;
		else element.src = albumDefault;

	}

});



/*
// Lecture d'un album
console.log("Lecture d'un album");
var album = albums.get("4");
var serie = series.get(album.idSerie);
var auteur = auteurs.get(album.idAuteur);
console.log(album.titre+" "+serie.nom+" "+auteur.nom);
*/


/*
console.log("Liste des albums");
albums.forEach(album => {
	serie = series.get(album.idSerie);
	auteur = auteurs.get(album.idAuteur);
	console.log(album.titre+" N°"+album.numero+" Série:"+serie.nom+" Auteur:"+auteur.nom);
});
*/


/*
console.log("Liste des albums par série");
for(var [idSerie, serie] of series.entries()) {
	// Recherche des albums de la série
	for (var [idAlbum, album] of albums.entries()) {
		if (album.idSerie == idSerie) {
			console.log(serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur:"+auteurs.get(album.idAuteur).nom);
		}
	}
    
}
*/


/*
console.log("Liste des albums par auteur");
for(var [idAuteur, auteur] of auteurs.entries()) {
	// Recherche des albums de l'auteur
	for (var [idAlbum, album] of albums.entries()) {
		if (album.idAuteur == idAuteur) {
			console.log(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Série:"+series.get(album.idSerie).nom);
		}
	}
    
}
*/





//chargement et affichage auto "recherche des BD" via fonction "showListBD"
window.addEventListener("load", showListBD());

//ajout album BD panier via fonction "ajoutPanier"
document.getElementById("btnAjoutBD").addEventListener("click", ajoutPanier());

//affiche fenêtre Modal via fonction "afficheModal"


//supprime fenêtre Modal via fonction "afficheModal"
// document.getElementById("id").addEventListener("mouseout", deleteModal());




// function getByValue(map, searchValue) {
// 	for (let [key, value] of map.entries()) {
// 		if (value === searchValue)
// 			return key;
// 	}
// }




//création listes BD , auteurs, series et titres à partir fichier data et album
function showListBD() {
	//liste albums BD existants
	// console.log("LISTES DES BD :");
	albums.forEach(album => {
		serie = series.get(album.idSerie); //série BD
		auteur = auteurs.get(album.idAuteur); //Auteur BD
		// console.log(album.titre + "\n Série : " + serie.nom + "\n Auteur : " + auteur.nom + "\n Prix : " + album.prix + "€");//affiche dev

		var key = keys.next().value; //sélection numéro clef suivant du fichier "albums.js"
		var elementListBd = document.getElementById('comicsBD'); //'variable locale' sélection "div" albums BD
		var bdCard = document.createElement('div'); //'variable locale' création card image BD
		bdCard.setAttribute('class', 'card'); //création attribu class "card et mb-4"

		//Images Card
		//si image BD inexistante ou non définie alors
		const nomPhotoBD = serie.nom + "-" + album.numero + "-" + album.titre; //nom fichiers photos albums BD
		var imgBD = srcAlbumMini + nomPhotoBD; //source fichiers photos mini albums BD

		


		//si photo album BD existante alors
		if (key != "") {
			src = imgBD + ".jpg"; //attribution image mini BD associée
		}
	


		//Ajout contenu textuel HTML dans Card
		bdCard.innerHTML =
			// '<img class="imgBD" id="img-' + album.id + '" onclick="infoBulleBD()" onmouseout="deleteInfoBulleBD()" src="' + src + '"/>' +
			'<img class="imgBD" id="img-' + key + '"src="' + src + '"/>' +
			'<ul>' +
			'<li><h3 class="card-body bdTitleAlbum">' + album.titre + '</h3></li>' +
			'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Série : " + "&nbsp;" + '</strong>' + serie.nom + '</h6></li>' +
			'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Auteur : " + "&nbsp;" + '</strong>' + auteur.nom + '</h6></li>' +
			'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Prix : " + "&nbsp;" + '</strong>' + album.prix + "€" + '</h6></li>' +
			'</ul>' +
			'<button id="btnAjoutBD" class="btn">Ajoutez au panier</button>';

		//Ajout contenu Card dans HTML
		elementListBd.appendChild(bdCard); //ajout contenu cartes ouvrages dans fichier HTML

		document.getElementById("img-" + key).addEventListener("click", afficheModal(key));
	});

}




//affiche modal BD
function afficheModal(_key) {
	_album = albums.get(_key);
	_serie = series.get(_album.idSerie); //série BD
	_auteur = auteurs.get(_album.idAuteur); //Auteur BD

console.log(_key);

	$("#myModal").modal("show");

}


var imgBds=document.getElementsByClassName("imgBD");

for (i=0;i<imgBds.length;i++){
	imgBds[i].addEventListener("error", function () {
		prbImg2(this)
	});
}
	/**
	 * Affichage de l'image par défaut si le chargement de l'image de l'album
	 * ne s'est pas bien passé
	 * 
	 * @param {object HTML} element 
	 */
	function prbImg2(element) {

		element.src = albumDefaultMini;


}







// //affiche info bulle BD
// function infoBulleBD() {
// 	var elementImgBD = document.querySelector('.imgBD'); //'variable locale' sélection "id" image albums BD
// 	elementImgBD.classList.add('infoBulle'); //création class supplémentaire "infoBulle"
// 	elementImgBD.setAttribute('title', "Titre : " + album.titre + "\nSérie : " + serie.nom + "\nAuteur : " + auteur.nom + "\nPrix : " + album.prix); //création attribu title 
// }

// //supprime info bulle BD
// function deleteInfoBulleBD() {
// 	var elementImgBD = document.querySelector('.imgBD'); //'variable locale' sélection "id" image albums BD
// 	elementImgBD.classList.remove('infoBulle'); //suppression class "infoBulle"
// 	elementImgBD.removeAttribute('title'); //suppression attribu title 
// }









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
	// 		'<li><h3 class="card-body bdTitleAlbum">' + album.titre + '</h3></li>' +
	// 		'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Quantité : " + "&nbsp;" + '</strong>' + "quantité calcul" + '</h6></li>' +
	// 		'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Prix : " + "&nbsp;" + '</strong>' + album.prix + "€" + '</h6></li>' +
	// 		'<li><h6 class="card-body bdTitleInfo">' + '<strong>' + "Total : " + "&nbsp;" + '</strong>' + "tarif calcul" + "€" + '</h6></li>' +
	// 		'</ul>';

	// 	//Ajout contenu Card dans HTML
	// 	elementListAchatBd.appendChild(bdAchatCard); //ajout contenu cartes ouvrages dans fichier HTML
	// });


}























// création affichage cartes ouvrages
function showBD(_bdList) {
	document.getElementById('comicsBD').innerHTML = ""; //vide contenu textuel HTML

	//pour chaque cards BD allant de 0 à xx alors
	for (var x = 0; x < _bdList.length; x++) {
		var bdCard = document.createElement('div'); //'variable locale' création card image BD
		bdCard.setAttribute('class', 'card mb-4'); //création attribu class "card et mb-4"

		//Images Card
		//si image BD inexistante ou non définie alors
		let album = albums.get(); //'variable locale' album BD
		if (album === undefined) {
			_bdList[x].album = albumDefaultMini; //attribution image par défaut
		}
		//sinon
		else {
			_bdList[x].album = srcAlbumMini; //attribution image BD associée
		}

		//Titres Card
		var titleBD; //'variable locale' titre BD
		//si titre BD trop long alors
		if (_bdList[x].titre.length > 20) {
			titleBD = _bdList[x].titre.substring(0, 20) + "(...)"; //réduction titre + affiche "(...)"
		}
		//sinon si titre BD court alors
		else {
			titleBD = _bdList[x].titre; //laisse titre par défaut
		}


		// //Descriptions Card
		// var description; //'variable locale' description ouvrage
		// var descriptionShort; //'variable locale' description courte ouvrage
		// //si description ouvrage courte inexistante ou non définie alors
		// if (_bdList[x].shortDescription == undefined || _bdList[x].shortDescription == null) {
		// 	description = ""; //laisse contenu vide
		// 	descriptionShort = ""; //laisse contenu vide
		// }
		// //sinon si description ouvrage courte existante alors
		// else {
		// 	//si description trop longue alors
		// 	if (_bdList[x].shortDescription.length > 20) {
		// 		descriptionShort = _bdList[x].shortDescription.substring(0, 20) + "(...)"; //réduction description + affiche "(...)"
		// 		description = _bdList[x].shortDescription; //laisse description courte par défaut
		// 	}
		// 	//si description courte alors
		// 	else {
		// 		description = _bdList[x].shortDescription; //laisse description courte par défaut
		// 		descriptionShort = _bdList[x].shortDescription; //réduction description + affiche "(...)"
		// 	}
		// }



		//Ajout contenu textuel Card dans HTML
		bdCard.innerHTML =
			'<img src="' + _bdList[x].thumbnailUrl + '"/>' +
			'<h1 class="bookTitle"><span class="infoBulle" title="' + _bdList[x].titre + '">' + titre + '</span></h1>' +
			'<h4>' + datePublished + '</h4>'; //ajout contenu HTML
		//si description vide alors
		if (description != "") {
			bdCard.innerHTML +=
				'<h4><span class="infoBulle" title="' + description + '">' + descriptionShort + '</span></h4>'; //ajout contenu HTML
		}

		//Ajout contenu Card dans HTML
		document.getElementById('comicsBD').appendChild(bdCard); //ajout contenu cartes ouvrages dans fichier HTML


	}
}