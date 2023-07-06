// -Variables globales-
const srcImg = "images/"; //emplacement des images BD existantes
const albumDefaultMini = srcImg + "noComicsMini.jpeg"; //emplacement des images par défaut des albums en petit
const albumDefault = srcImg + "noComics.jpeg"; //emplacement des images par défaut des albums en grand
const srcAlbumMini = "albumsMini/"; //emplacement des images des albums en petit
const srcAlbum = "albums/"; //emplacement grandes images BD (albums existants)
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










	



//  /**
//    * Récupération de l'album par son id et appel de
//    * la fonction d'affichage
//    *
//    * @param {number} num
//    */
//  function getAlbum(num) {
//     var album = albums.get(num.value);

//     // on initialise un nouveau tableau (qui ne contient que les clés des albums... la longueur sera la meme que la longueur de la map albums)
//     var albumsKeys = albums.keys();

//     if (album === undefined) {
//       txtSerie.value = "";
//       txtNumero.value = "";
//       txtTitre.value = "";
//       txtAuteur.value = "";
//       txtPrix.value = 0;

//       afficheAlbums(
//         $("#albumMini"),
//         $("#album"),
//         albumDefaultMini,
//         albumDefault
//       );
//     } else {
//       var albumKey;

//       //on refait une boucle sur la map des albums
//       albums.forEach((album2) => {
//         // sur le tableau des clés, la fonction next().value va donner la clé suivante
//         // ainsi vu qu'on est dans une boucle sur les albums, à cahque passage
//         // la valeur va changer
//         albumKey = albumsKeys.next().value;

//         //on compare l'album de la boucle avec l'album que l'on veut afficher
//         if (album.titre == album2.titre) {
//           console.log(" Clé de l'album " + albumKey);
//           console.log(
//             "La valeur de num passé en paramètre de la fonction est " + num
//           );

//           // on peut ainsi adapter la chose pour mettre un id dans notre balise
//           // que ce soit le bouton ajouter au panier (par exemple id="btn-" + albumKey )
//           // ou notre card pr l'affichage de la modal à qui on va passer un paramètre à savoir l'abumKey
//         }
//       });

//       var serie = series.get(album.idSerie);
//       var auteur = auteurs.get(album.idAuteur);

//       txtSerie.value = serie.nom;
//       txtNumero.value = album.numero;
//       txtTitre.value = album.titre;
//       txtAuteur.value = auteur.nom;
//       txtPrix.value = album.prix;









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









// '<img class="imgsBD" id="img-' + album.id + '" onclick="infoBulleBD()" onmouseout="deleteInfoBulleBD()" src="' + src + '"/>' +

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