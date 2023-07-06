// var keys = albums.entries(); //sélection des clefs dans fichier "albums.js"
// console.log(keys);


// var tableTitle=[];
var tableTitle = new Array();
// tableTitle = new Map();

albums.forEach(album => {
    let titles = album.titre;
    // console.log(titles);


    for (let i = 0; i < titles.length; i++) {

        let title = titles[i];

        // tableTitle.push(title[i]);
        // tableTitle.set(title[i]);
        // tableTitle.set(title);

        tableTitle.push(title);


    }




    // console.log(tableTitle.join(''));
    console.log(tableTitle);




    // title.sort((a, b) => a.album.titre - b.album.titre);
});
