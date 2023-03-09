<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="On cherche à simuler 1000 lancers d'une pièce et à obtenir le nombre de &quot;face&quot; et de &quot;pile&quot; obtenu.&#xa;Il suffit de recliquer sur &quot;lancer algorithme&quot; dans la fenêtre de test pour effectuer une nouvelle simulation." courant="nbpile PREND_LA_VALEUR 0" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="nbface EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbface" />
        <item algoitem="nbpile EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbpile" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
        <item algoitem="lancer EST_DU_TYPE NOMBRE" code="1#NOMBRE#lancer" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="nbface PREND_LA_VALEUR 0" code="5#nbface#0#pasliste" />
        <item algoitem="nbpile PREND_LA_VALEUR 0" code="5#nbpile#0#pasliste" />
        <item algoitem="POUR i ALLANT_DE 1 A 1000" code="12#i#1#1000" >
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="lancer PREND_LA_VALEUR floor(random()*2+1)" code="5#lancer#floor(random()*2+1)#pasliste" />
            <item algoitem="SI (lancer==1) ALORS" code="6#lancer==1" >
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="nbface PREND_LA_VALEUR nbface+1" code="5#nbface#nbface+1#pasliste" />
                <item algoitem="FIN_SI" code="8#finsi" />
                <item algoitem="SINON" code="9#sinon" >
                    <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                    <item algoitem="nbpile PREND_LA_VALEUR nbpile+1" code="5#nbpile#nbpile+1#pasliste" />
                    <item algoitem="FIN_SINON" code="11#finsinon" />
                </item>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="AFFICHER &quot;On a obtenu &quot;" code="4#On a obtenu #0" />
        <item algoitem="AFFICHER nbface" code="3#nbface#0#pasliste" />
        <item algoitem="AFFICHER &quot; fois face et &quot;" code="4# fois face et #0" />
        <item algoitem="AFFICHER nbpile" code="3#nbpile#0#pasliste" />
        <item algoitem="AFFICHER &quot; fois pile.&quot;" code="4# fois pile.#0" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
