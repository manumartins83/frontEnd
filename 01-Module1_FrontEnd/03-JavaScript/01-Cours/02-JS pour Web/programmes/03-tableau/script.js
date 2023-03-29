//-création liste "element" + "coucou"-


//-variables-
var ul = document.createElement('ul'); //création 1er élement <ul>
var ul2 = document.createElement('ul'); //création 2ème élement <ul>
var tableLi = ['element 1', 'element 2', 'element 3', 'element 4']; //création 1er tableau saisie <li>
var tableLi2 = ['coucou 1', 'coucou 2', 'coucou 3']; //création 2ème tableau saisie <li>


//-programme-
//pour comptage (itération "i") de "tableLi" allant de 0 à fin "tableLi" alors
for (var i = 0; i < tableLi.length; i++) {
    var li = document.createElement('li'); //création 1er élements <li>
    li.className = 'red'; //attribution class "red" 1er éléments <li>
    li.innerHTML = tableLi[i]; //écriture valeur "tableLi" dans 1er élements <li>
    //si "tableLi" = "element 3" alors
    if (tableLi[i] == 'element 3') {
        //pour comptage (itération "j") de "tableLi2" allant de 0 à fin "tableLi2" alors
        for (var j = 0; j < tableLi2.length; j++) {
            var li2 = document.createElement('li'); //création 2ème élements <li>
            li2.className = 'blue'; //attribution class "blue" 2ème éléments <li> 
            li2.innerHTML = tableLi2[j]; //écriture valeur "tableLi2" dans 2ème élements <li>
            ul2.appendChild(li2); //insertion 2ème éléments <li> dans 2ème élément <ul>   
        }
        li.appendChild(ul2); //insertion 2ème élément <ul> dans 1er élément <li> "element 3"
    }
    ul.appendChild(li); //insertion 1er éléments <li> dans 1er élément <ul>
}


//-affichage-
document.getElementsByTagName('body')[0].appendChild(ul); //affiche HTML